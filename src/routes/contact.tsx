import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Mail, ShieldCheck, Sparkles } from "lucide-react";

import { ContactFormShell, GradientPanel, SectionHeading } from "@/components/stackearn-site";
import { site } from "@/lib/stackearn-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact StackEarn — Support & Enquiries" },
      {
        name: "description",
        content:
          "Contact StackEarn for support, feedback, app questions, and partnership enquiries through email or the contact form.",
      },
      { property: "og:title", content: "Contact StackEarn — Support & Enquiries" },
      {
        property: "og:description",
        content:
          "Reach the StackEarn team for support, questions, and product feedback.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    {
      title: "Email",
      value: site.email,
      description: "For support requests, business enquiries, and platform questions.",
      icon: Mail,
    },
    {
      title: "Need assistance?",
      value: "Fast response focus",
      description: "We aim to keep support clear, useful, and easy to access.",
      icon: ShieldCheck,
    },
    {
      title: "Working hours",
      value: site.hours,
      description: "Regular support hours for managing incoming messages and requests.",
      icon: Clock3,
    },
  ];

  return (
    <div className="page-shell">
      <section className="hero-section hero-section-tight">
        <div className="hero-copy">
          <SectionHeading
            eyebrow="Contact StackEarn"
            title={<>Need assistance?</>}
            description="Reach out through email or the contact form for support, product questions, and feedback."
          />
          <div className="mt-8 space-y-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="inline-feature">
                  <div className="icon-chip icon-chip-soft">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-base font-semibold text-title">{card.title}</div>
                    <div className="text-sm font-medium text-primary">{card.value}</div>
                    <div className="text-sm leading-6 text-muted-foreground">{card.description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <GradientPanel className="p-8 lg:p-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-sm font-semibold text-primary">
            <Sparkles className="h-4 w-4" />
            Send us a message
          </div>
          <ContactFormShell />
        </GradientPanel>
      </section>
    </div>
  );
}
