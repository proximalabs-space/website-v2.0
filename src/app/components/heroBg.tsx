"use client";

import { useEffect, useRef } from "react";

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Requesting a lower power preference can sometimes help the browser optimize
    const gl = canvas.getContext("webgl", { powerPreference: "low-power" });
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // OPTIMIZED Fragment Shader
    const fsSource = `
      precision mediump float; // Lowered from highp to mediump for performance
      uniform vec2 u_resolution;
      uniform float u_time;

      // Fast pseudo-random generator
      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      // Simplified procedural noise function
      float complexNoise(vec2 p, float time) {
          p *= 1.25; 
          float val = 0.0;
          float amp = 0.5;
          float freq = 1.0;
          
          // OPTIMIZATION: Reduced loop from 4 down to 2.
          // This cuts the math operations in half.
          for (int i = 0; i < 2; i++) {
              float timeShift = time * 0.05 * (float(i) + 1.0);
              p += vec2(
                  sin(p.y * 1.5 + timeShift * 0.5) * 0.15,
                  cos(p.x * 2.0 - timeShift * 0.8) * 0.12
              );
              val += (sin(p.x * 2.2 * freq + p.y * 1.8 * freq + timeShift) + sin(p.y * 2.5 * freq - p.x * 1.3 * freq + timeShift)) * 0.5 * amp;
              amp *= 0.6;
              freq *= 1.8;
          }
          return val;
      }

      vec3 getFluidColor(float val) {
          val = (val + 1.2) * 0.5;
          val = clamp(val, 0.0, 1.0);

          vec3 cVoid = vec3(0.001, 0.002, 0.01);
          vec3 cDeepBlue = vec3(0.03, 0.12, 0.45);
          vec3 cElectricBlue = vec3(0.12, 0.43, 0.95);
          vec3 cHighlightBlue = vec3(0.7, 0.85, 1.0);
          vec3 cWhite = vec3(1.0, 1.0, 1.0);

          vec3 color = cVoid;
          
          if (val < 0.25) {
              color = mix(cVoid, cDeepBlue, smoothstep(0.0, 0.25, val));
          } else if (val < 0.55) {
              color = mix(cDeepBlue, cElectricBlue, smoothstep(0.25, 0.55, val));
          } else if (val < 0.85) {
              color = mix(cElectricBlue, cHighlightBlue, smoothstep(0.55, 0.85, val));
          } else {
              color = mix(cHighlightBlue, cWhite, smoothstep(0.85, 1.0, val));
          }

          // OPTIMIZATION: Removed expensive pow() function for highlights
          float highlightStrength = max(0.0, val - 0.75) * 2.0;
          color += cWhite * (highlightStrength * highlightStrength) * 0.7;

          return color;
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        uv.x *= u_resolution.x / u_resolution.y;

        float fluidPattern = complexNoise(uv, u_time);
        vec3 finalColor = getFluidColor(fluidPattern);

        // Subtler, cheaper grain
        float grainVal = (random(gl_FragCoord.xy / u_resolution.xy) - 0.5) * 0.02;
        finalColor += vec3(grainVal);

        // Cheaper vignette
        vec2 centerDist = gl_FragCoord.xy / u_resolution.xy - 0.5;
        float vignette = 1.0 - dot(centerDist, centerDist) * 0.8;
        finalColor *= vignette;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1,  1, -1, -1,  1,
      -1,  1,  1, -1,  1,  1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const timeLocation = gl.getUniformLocation(program, "u_time");

    const resize = () => {
      if (!canvas) return;
      
      // OPTIMIZATION: Hardcap the device pixel ratio to 0.75 max. 
      // This forces the canvas to render at a lower resolution and stretch to fit, saving massive GPU load.
      const dpr = Math.min(window.devicePixelRatio || 1, 0.75); 
      const width = canvas.parentElement?.clientWidth || window.innerWidth;
      const height = canvas.parentElement?.clientHeight || window.innerHeight;
      
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("resize", resize);
    resize();

    let animationId: number;
    const render = (time: number) => {
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, time * 0.001); 

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="block w-full h-full opacity-85 mix-blend-screen" />
    </div>
  );
}