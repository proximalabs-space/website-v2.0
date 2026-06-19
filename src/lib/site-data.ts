export type ServiceCard = {
  title: string;
  href: string;
  summary: string;
  bullets: string[];
};

export type TrainingCard = {
  title: string;
  href: string;
  summary: string;
  duration: string;
  curriculum: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string;
  readTime: string;
};

export type CaseStudy = {
  title: string;
  industry: string;
  outcome: string;
  summary: string;
};

export type PageContent = {
  title: string;
  description: string;
  badge: string;
  intro: string;
  highlights: string[];
  process: {
    step: string;
    title: string;
    summary: string;
  }[];
  stack: {
    title: string;
    items: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  cta: {
    title: string;
    description: string;
    actionLabel: string;
    actionHref: string;
  };
  kind: "service" | "training" | "about" | "case-studies" | "blog" | "careers" | "contact";
  training?: {
    curriculum: string[];
    benefits: string[];
    certifications: string[];
    placement: string[];
  };
};

export const company = {
  name: "Proxima Labs",
  shortName: "Proxima",
  tagline: "Enterprise software and talent solutions for growth-minded organizations.",
  description:
    "A premium software development, AI engineering, SaaS delivery, and skill development company built to serve enterprise outcomes.",
  email: "hello@proximalabs.com",
  phone: "+91 98765 43210",
  location: "Bengaluru, India",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/software-development-services" },
  { label: "Training", href: "/industrial-training-programs" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact-us" },
];

export const heroStats = [
  { value: "180+", label: "enterprise engagements delivered" },
  { value: "94%", label: "client retention across recurring programs" },
  { value: "22K+", label: "learners trained in technical and industrial programs" },
  { value: "4.9/5", label: "average delivery satisfaction score" },
];

export const achievements = [
  "Strategic partner for digital modernization, talent upskilling, and workforce readiness",
  "Multi-disciplinary delivery teams spanning product, cloud, data, and education programs",
  "Built for high-trust enterprise buying cycles with measurable commercial outcomes",
];

export const clients = ["Capgemini", "Accenture", "Deloitte", "TCS", "Infosys", "Siemens", "Wipro", "HCL"];

export const services: ServiceCard[] = [
  {
    title: "Software Development Services",
    href: "/software-development-services",
    summary:
      "Custom software engineering for enterprise platforms, internal systems, and customer-facing digital products.",
    bullets: ["Product discovery", "Platform engineering", "API and integration design"],
  },
  {
    title: "AI Development Services",
    href: "/ai-development-services",
    summary:
      "Practical AI systems, copilots, workflow automation, and data-backed decision intelligence.",
    bullets: ["GenAI copilots", "Predictive analytics", "AI governance and evaluation"],
  },
  {
    title: "Mobile App Development",
    href: "/mobile-app-development",
    summary:
      "Native and cross-platform mobile applications crafted for adoption, performance, and secure operations.",
    bullets: ["iOS and Android", "React Native delivery", "App security hardening"],
  },
  {
    title: "SaaS Development",
    href: "/saas-development",
    summary:
      "Scalable SaaS architecture, multi-tenant product delivery, subscriptions, and launch support.",
    bullets: ["Multi-tenancy", "Usage billing", "Launch and growth engineering"],
  },
];

export const trainingPrograms: TrainingCard[] = [
  {
    title: "Industrial Training Programs",
    href: "/industrial-training-programs",
    summary: "Hands-on training aligned with enterprise engineering and production environments.",
    duration: "4-16 weeks",
    curriculum: ["Software basics", "Cloud foundations", "Testing and quality"],
  },
  {
    title: "Skill Development Programs",
    href: "/skill-development-programs",
    summary: "Role-based upskilling designed to improve employability and team performance.",
    duration: "2-12 weeks",
    curriculum: ["Communication", "Digital fluency", "Job-ready portfolios"],
  },
  {
    title: "Internship Programs",
    href: "/internship-programs",
    summary: "Structured internships with mentorship, live projects, and placement support.",
    duration: "6-24 weeks",
    curriculum: ["Live projects", "Mentor reviews", "Interview preparation"],
  },
];

export const testimonials = [
  {
    quote:
      "Proxima Labs brought enterprise discipline to our digital program and delivered faster than our internal roadmap.",
    name: "Anita Rao",
    role: "VP Digital Transformation",
    company: "Global Manufacturing Group",
  },
  {
    quote:
      "Their training programs produced job-ready teams with the right blend of engineering rigor and practical skills.",
    name: "Rahul Menon",
    role: "Head of Talent Enablement",
    company: "Technology Services Firm",
  },
];

export const successStories = [
  {
    title: "Enterprise workflow modernization",
    impact: "42% reduction in manual processing time",
    summary: "Rebuilt a fragmented internal workflow stack into a secure, role-based platform.",
  },
  {
    title: "AI-assisted support operations",
    impact: "31% higher first-response resolution",
    summary: "Introduced an AI copilot layer to improve agent productivity and response quality.",
  },
  {
    title: "Placement-focused training rollout",
    impact: "68% interview-to-offer conversion",
    summary: "Combined curriculum design, live mentoring, and hiring support for a training cohort.",
  },
];

export const latestPosts: BlogPost[] = [
  {
    slug: "modern-enterprise-architecture-blueprint",
    title: "A Modern Enterprise Architecture Blueprint for 2026",
    summary: "How to design systems that stay resilient, scalable, and audit-ready during rapid growth.",
    category: "Enterprise Architecture",
    date: "2026-05-12",
    readTime: "8 min read",
  },
  {
    slug: "ai-copilot-rollout-playbook",
    title: "The AI Copilot Rollout Playbook for Business Teams",
    summary: "A practical framework for deploying AI features that improve adoption instead of adding noise.",
    category: "Artificial Intelligence",
    date: "2026-04-28",
    readTime: "6 min read",
  },
  {
    slug: "training-to-employment-funnel",
    title: "Designing a Training-to-Employment Funnel That Works",
    summary: "What separates generic training from programs that consistently create career outcomes.",
    category: "Skill Development",
    date: "2026-04-09",
    readTime: "7 min read",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "Regulated finance platform delivery",
    industry: "Financial Services",
    outcome: "Reduced release risk and modernized compliance workflows",
    summary: "End-to-end software delivery with security reviews, automation, and documentation practices.",
  },
  {
    title: "Industrial training academy",
    industry: "Manufacturing",
    outcome: "Raised job readiness for technicians and engineers",
    summary: "Curriculum, assessments, and placement support tailored to plant-floor realities.",
  },
  {
    title: "SaaS launch for internal operations",
    industry: "Professional Services",
    outcome: "Scaled from pilot to enterprise-wide adoption",
    summary: "Built a multi-tenant SaaS layer to standardize ops across business units.",
  },
];

export const careers = [
  {
    title: "Senior Full Stack Engineer",
    location: "Bengaluru / Remote",
    type: "Full-time",
    summary: "Own high-traffic products and collaborate across design, data, and delivery teams.",
  },
  {
    title: "AI Solutions Architect",
    location: "Hybrid",
    type: "Full-time",
    summary: "Shape enterprise AI use cases, guardrails, and implementation strategy.",
  },
  {
    title: "Training Program Manager",
    location: "Bengaluru",
    type: "Full-time",
    summary: "Run skill development cohorts, placement support, and partner coordination.",
  },
];

export const pageContent: Record<string, PageContent> = {
  about: {
    title: "About Us",
    description: "Learn how Proxima Labs combines enterprise delivery rigor with skill development impact.",
    badge: "Company Overview",
    intro:
      "We help organizations modernize technology, accelerate product delivery, and build employable talent pipelines with a measurable operating model.",
    highlights: [
      "Enterprise consulting mindset with execution-first delivery",
      "Blue-chip visual language and outcomes-focused engagement design",
      "Software, AI, mobile, SaaS, and training under one delivery umbrella",
    ],
    process: [
      { step: "01", title: "Assess", summary: "We map business goals, constraints, and user journeys." },
      { step: "02", title: "Design", summary: "We define architecture, curriculum, and operating models." },
      { step: "03", title: "Deliver", summary: "We launch iteratively with governance and quality control." },
    ],
    stack: [
      { title: "Delivery standards", items: ["Agile", "Quality gates", "Security reviews", "Documentation"] },
      { title: "Capabilities", items: ["Cloud", "Data", "AI", "Mobile", "Training operations"] },
    ],
    faqs: [
      { question: "What industries do you serve?", answer: "We support technology, manufacturing, professional services, and education-led growth programs." },
      { question: "Do you work with both enterprises and training cohorts?", answer: "Yes. Our model is designed to serve enterprise software delivery and talent development equally well." },
    ],
    cta: {
      title: "Work with a partner built for scale and credibility.",
      description: "Tell us about your transformation or training goals and we will propose a practical path forward.",
      actionLabel: "Talk to us",
      actionHref: "/contact-us",
    },
    kind: "about",
  },
  software: {
    title: "Software Development Services",
    description: "Custom engineering for enterprise platforms, integrations, modernization, and product delivery.",
    badge: "Core Service",
    intro:
      "We build resilient software systems that support internal operations, customer experiences, and long-term scale.",
    highlights: ["Discovery-led delivery", "Secure by design", "Cloud-ready architecture"],
    process: [
      { step: "01", title: "Discovery", summary: "Define goals, architecture priorities, and delivery milestones." },
      { step: "02", title: "Build", summary: "Ship reliable, tested features with regular stakeholder reviews." },
      { step: "03", title: "Scale", summary: "Optimize performance, observability, and maintenance handoff." },
    ],
    stack: [
      { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
      { title: "Backend", items: ["Node.js", "APIs", "Integration layers", "Automation"] },
      { title: "Delivery", items: ["CI/CD", "Testing", "Monitoring", "Documentation"] },
    ],
    faqs: [
      { question: "Do you handle modernization projects?", answer: "Yes. We frequently replace legacy interfaces with maintainable, scalable systems." },
      { question: "Can you work as an extension of our team?", answer: "Yes. We can operate as a product squad, a specialist pod, or a managed delivery team." },
    ],
    cta: {
      title: "Start with a delivery partner that understands enterprise expectations.",
      description: "We can scope greenfield builds, modernization work, or long-term engineering support.",
      actionLabel: "Request a consultation",
      actionHref: "/contact-us",
    },
    kind: "service",
  },
  ai: {
    title: "AI Development Services",
    description:
      "AI copilots, automation, decision intelligence, and evaluation-ready implementation for real business use cases.",
    badge: "Emerging Capability",
    intro:
      "Our AI services focus on business value first, pairing practical use cases with responsible delivery controls.",
    highlights: ["Use-case prioritization", "Human-in-the-loop design", "Governed rollout"],
    process: [
      { step: "01", title: "Identify", summary: "Choose high-value processes where AI can save time or improve quality." },
      { step: "02", title: "Prototype", summary: "Validate prompts, workflows, and data constraints quickly." },
      { step: "03", title: "Operationalize", summary: "Integrate monitoring, feedback loops, and policy guardrails." },
    ],
    stack: [
      { title: "AI layer", items: ["Copilots", "RAG workflows", "Prompt orchestration", "Evaluation"] },
      { title: "Data layer", items: ["Analytics", "Search", "Feature stores", "Governance"] },
    ],
    faqs: [
      { question: "Do you only build generative AI solutions?", answer: "No. We also build predictive analytics and workflow automation systems." },
      { question: "How do you manage AI risk?", answer: "By defining approved use cases, evaluation metrics, and human oversight from the start." },
    ],
    cta: {
      title: "Turn AI into an operating advantage.",
      description: "We help teams adopt AI in ways that improve productivity without compromising control.",
      actionLabel: "Discuss AI opportunities",
      actionHref: "/contact-us",
    },
    kind: "service",
  },
  mobile: {
    title: "Mobile App Development",
    description: "Design and develop secure mobile applications that customers and field teams actually use.",
    badge: "Digital Product",
    intro:
      "From consumer apps to enterprise field tools, we deliver polished mobile experiences with production discipline.",
    highlights: ["Native quality", "Cross-platform speed", "Offline-ready experiences"],
    process: [
      { step: "01", title: "Experience design", summary: "Map user needs, workflows, and platform behaviors." },
      { step: "02", title: "Development", summary: "Build for performance, accessibility, and maintainability." },
      { step: "03", title: "Launch", summary: "Ship with analytics, crash monitoring, and store readiness." },
    ],
    stack: [
      { title: "Client", items: ["React Native", "iOS", "Android", "Design systems"] },
      { title: "Ops", items: ["Telemetry", "Push notifications", "Release automation", "Support"] },
    ],
    faqs: [
      { question: "Can you support B2B mobile apps?", answer: "Yes. We build apps for customers, employees, and partner ecosystems." },
      { question: "Do you support app store launch?", answer: "Yes. We manage pre-release quality checks and go-to-market readiness." },
    ],
    cta: {
      title: "Bring your mobile roadmap to production quality.",
      description: "We can support new builds, redesigns, and performance improvements.",
      actionLabel: "Plan a mobile build",
      actionHref: "/contact-us",
    },
    kind: "service",
  },
  saas: {
    title: "SaaS Development",
    description: "Multi-tenant SaaS platforms with scalable architecture, subscriptions, and launch support.",
    badge: "Platform Service",
    intro:
      "We help founders and enterprise teams create SaaS products that are secure, extensible, and ready to monetize.",
    highlights: ["Multi-tenant design", "Monetization-ready architecture", "Launch support"],
    process: [
      { step: "01", title: "Product strategy", summary: "Define customer segments, pricing, and platform boundaries." },
      { step: "02", title: "Build the core", summary: "Ship authentication, billing, roles, and feature foundations." },
      { step: "03", title: "Grow", summary: "Refine onboarding, analytics, and product-market-fit loops." },
    ],
    stack: [
      { title: "Product", items: ["Dashboards", "Billing", "Role systems", "Observability"] },
      { title: "Architecture", items: ["Multi-tenancy", "APIs", "Data isolation", "Automation"] },
    ],
    faqs: [
      { question: "Can you help with MVPs?", answer: "Yes. We build MVPs designed to validate market demand without overbuilding." },
      { question: "Do you support enterprise SaaS?", answer: "Yes. We also support internal SaaS platforms and regulated deployments." },
    ],
    cta: {
      title: "Launch your SaaS platform with a stable foundation.",
      description: "We can guide product strategy, architecture, and launch execution.",
      actionLabel: "Discuss SaaS delivery",
      actionHref: "/contact-us",
    },
    kind: "service",
  },
  industrial: {
    title: "Industrial Training Programs",
    description: "Hands-on training for engineers, technicians, and enterprise teams preparing for production realities.",
    badge: "Training",
    intro:
      "Our industrial programs align curriculum with job roles, operational safety, and the day-to-day demands of production environments.",
    highlights: ["Project-based learning", "Industry-oriented assessments", "Placement assistance"],
    process: [
      { step: "01", title: "Assess skills", summary: "Understand learner goals and current proficiency." },
      { step: "02", title: "Train", summary: "Deliver role-focused sessions, labs, and practical assignments." },
      { step: "03", title: "Deploy", summary: "Support certification, interviews, and employer readiness." },
    ],
    stack: [
      { title: "Curriculum", items: ["Systems basics", "Testing", "Cloud literacy", "Industrial safety"] },
      { title: "Outcomes", items: ["Certification", "Projects", "Employer readiness", "Placement support"] },
    ],
    faqs: [
      { question: "Who should enroll?", answer: "Students, graduates, apprentices, and teams needing production-ready technical skills." },
      { question: "Is placement support included?", answer: "Yes. We include interview preparation and employer coordination where applicable." },
    ],
    cta: {
      title: "Build a training pipeline that produces employable talent.",
      description: "We design training programs that connect curriculum to real hiring needs.",
      actionLabel: "Explore training",
      actionHref: "/contact-us",
    },
    kind: "training",
    training: {
      curriculum: ["Foundation modules", "Role-specific labs", "Capstone projects", "Mock interviews"],
      benefits: ["Practical learning", "Industry mentorship", "Placement guidance"],
      certifications: ["Completion certificate", "Skill badges", "Assessment scores"],
      placement: ["Resume reviews", "Interview prep", "Employer referrals"],
    },
  },
  skill: {
    title: "Skill Development Programs",
    description: "Employability-focused programs that improve communication, digital fluency, and job readiness.",
    badge: "Training",
    intro:
      "These programs help learners and teams gain practical skills that translate into measurable career outcomes.",
    highlights: ["Job-ready learning paths", "Soft skills and digital skills", "Assessment-driven progress"],
    process: [
      { step: "01", title: "Diagnose", summary: "Identify skill gaps and role expectations." },
      { step: "02", title: "Practice", summary: "Use guided exercises, labs, and feedback loops." },
      { step: "03", title: "Validate", summary: "Measure readiness through assessments and coaching." },
    ],
    stack: [{ title: "Learning themes", items: ["Communication", "Digital tools", "Problem solving", "Interview skills"] }],
    faqs: [
      { question: "Are the programs beginner friendly?", answer: "Yes. We design tracks for students, freshers, and upskilling professionals." },
      { question: "Do you customize for organizations?", answer: "Yes. We can tailor cohorts for company-specific capability needs." },
    ],
    cta: {
      title: "Improve workforce readiness with a focused learning path.",
      description: "We can build skill development cohorts for institutions and employers.",
      actionLabel: "Discuss a cohort",
      actionHref: "/contact-us",
    },
    kind: "training",
    training: {
      curriculum: ["Communication", "Digital productivity", "Career coaching", "Capstone assessment"],
      benefits: ["Faster employability", "Better confidence", "Structured progression"],
      certifications: ["Program completion", "Assessment report", "Career readiness score"],
      placement: ["Mock interviews", "Hiring workshops", "Employer network access"],
    },
  },
  internship: {
    title: "Internship Programs",
    description: "Structured internships with live projects, mentorship, and placement-oriented outcomes.",
    badge: "Training",
    intro:
      "Internships are designed to give learners real project exposure, coaching, and a credible portfolio.",
    highlights: ["Live project experience", "Mentor feedback", "Career portfolio development"],
    process: [
      { step: "01", title: "Onboard", summary: "Introduce expectations, tools, and project context." },
      { step: "02", title: "Execute", summary: "Work on real features with regular mentor checkpoints." },
      { step: "03", title: "Showcase", summary: "Present outcomes, feedback, and next-step recommendations." },
    ],
    stack: [{ title: "Internship benefits", items: ["Live builds", "Mentorship", "References", "Interview preparation"] }],
    faqs: [
      { question: "How long are the internships?", answer: "We offer short and extended formats based on the role and program objective." },
      { question: "Do interns receive feedback?", answer: "Yes. We include regular mentor reviews and performance checkpoints." },
    ],
    cta: {
      title: "Give learners an internship that improves employability.",
      description: "We can design internships for software, AI, and operations-focused roles.",
      actionLabel: "Plan an internship",
      actionHref: "/contact-us",
    },
    kind: "training",
    training: {
      curriculum: ["Project orientation", "Live work", "Mentor reviews", "Final presentation"],
      benefits: ["Portfolio content", "Practical skills", "Career confidence"],
      certifications: ["Internship certificate", "Project completion report", "Mentor recommendation"],
      placement: ["Placement prep", "Hiring feedback", "Interview support"],
    },
  },
  caseStudies: {
    title: "Case Studies",
    description: "Selected delivery stories showing how Proxima Labs creates commercial and learning outcomes.",
    badge: "Proof of Work",
    intro:
      "These examples show how we combine engineering, delivery governance, and talent enablement in practical engagements.",
    highlights: ["Measured outcomes", "Cross-industry delivery", "Reusable frameworks"],
    process: [
      { step: "01", title: "Context", summary: "Understand the business and operating conditions." },
      { step: "02", title: "Action", summary: "Design and ship a practical solution with tracking." },
      { step: "03", title: "Results", summary: "Measure performance, adoption, and business impact." },
    ],
    stack: [{ title: "Featured results", items: ["Finance modernization", "Industrial upskilling", "SaaS launch support"] }],
    faqs: [
      { question: "Can you share more detail on specific projects?", answer: "Yes. We can provide relevant references and deeper case detail during discovery." },
      { question: "Are these solutions reusable?", answer: "Yes. We design architectures and training programs to be repeatable and scalable." },
    ],
    cta: {
      title: "See what a delivery partner with enterprise discipline can do.",
      description: "We can discuss references relevant to your industry and use case.",
      actionLabel: "Request references",
      actionHref: "/contact-us",
    },
    kind: "case-studies",
  },
  blog: {
    title: "Blog",
    description: "Insights on enterprise engineering, AI delivery, and skill development strategy.",
    badge: "Insights",
    intro:
      "Read practical perspectives from our team on how to build software, launch AI, and design talent programs that matter.",
    highlights: ["Enterprise architecture", "AI implementation", "Training strategy"],
    process: [
      { step: "01", title: "Read", summary: "Explore thought leadership and delivery patterns." },
      { step: "02", title: "Apply", summary: "Use the ideas to improve your roadmap or training model." },
      { step: "03", title: "Connect", summary: "Talk to us about bringing the ideas into practice." },
    ],
    stack: [{ title: "Recent themes", items: ["Modernization", "AI copilots", "Learning programs", "Career outcomes"] }],
    faqs: [
      { question: "Do you publish implementation advice?", answer: "Yes. Our blog focuses on actionable methods, not generic commentary." },
      { question: "Can we repurpose the ideas internally?", answer: "Absolutely. The content is designed to support strategy and execution." },
    ],
    cta: {
      title: "Turn insight into delivery.",
      description: "If a topic resonates, we can help you implement it in your organization.",
      actionLabel: "Start a conversation",
      actionHref: "/contact-us",
    },
    kind: "blog",
  },
  careers: {
    title: "Careers",
    description:
      "Join a team building enterprise software, AI solutions, and employability programs with real impact.",
    badge: "Join Us",
    intro:
      "We hire people who care about craft, outcome ownership, and the ability to work across business and technology problems.",
    highlights: ["Growth-minded culture", "Meaningful projects", "Learning support"],
    process: [
      { step: "01", title: "Apply", summary: "Share your background and the role that fits you best." },
      { step: "02", title: "Interview", summary: "Meet the team and discuss impact, craft, and collaboration." },
      { step: "03", title: "Join", summary: "Onboard into a high-trust, high-standards environment." },
    ],
    stack: [{ title: "What we value", items: ["Ownership", "Clarity", "Learning", "Quality"] }],
    faqs: [
      { question: "Do you offer internships and full-time roles?", answer: "Yes. We hire across experience levels depending on business needs." },
      { question: "What should applicants expect?", answer: "A structured process focused on role fit, communication, and problem solving." },
    ],
    cta: {
      title: "Build your career in an enterprise-minded team.",
      description: "If you want to solve real problems and grow quickly, we would like to hear from you.",
      actionLabel: "Contact hiring",
      actionHref: "/contact-us",
    },
    kind: "careers",
  },
  contact: {
    title: "Contact Us",
    description: "Start a conversation about software delivery, AI, training, or talent development.",
    badge: "Get in Touch",
    intro:
      "Tell us what you are building or where you need support, and we will respond with a clear next step.",
    highlights: ["Fast response", "Discovery call", "Relevant subject experts"],
    process: [
      { step: "01", title: "Send details", summary: "Share your goals, timeline, and primary challenge." },
      { step: "02", title: "Discovery", summary: "We will align on fit, scope, and success criteria." },
      { step: "03", title: "Proposal", summary: "Receive a practical roadmap or engagement outline." },
    ],
    stack: [{ title: "Reach us", items: [company.email, company.phone, company.location] }],
    faqs: [
      { question: "How quickly do you respond?", answer: "We aim to respond to qualified enquiries within one business day." },
      { question: "What should I include?", answer: "Your business context, timeline, and the type of support you need is enough to start." },
    ],
    cta: {
      title: "Let’s scope the right engagement.",
      description: "Use the contact details below and we will guide you to the most relevant next step.",
      actionLabel: "Email us",
      actionHref: `mailto:${company.email}`,
    },
    kind: "contact",
  },
};
