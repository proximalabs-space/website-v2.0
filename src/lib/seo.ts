import type { Metadata } from "next";

import { company } from "@/lib/site-data";

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: company.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function sanitizeJsonLd(jsonLd: unknown) {
  return JSON.stringify(jsonLd).replace(/</g, "\\u003c");
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: "https://proximalabs.example",
    description: company.description,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: company.email,
        telephone: company.phone,
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://proximalabs.example${item.url}`,
    })),
  };
}

export function blogListJsonLd(url: string, title: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: title,
    description,
    url: `https://proximalabs.example${url}`,
    publisher: {
      "@type": "Organization",
      name: company.name,
    },
  };
}
