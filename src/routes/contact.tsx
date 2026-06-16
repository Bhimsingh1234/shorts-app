import { createFileRoute } from "@tanstack/react-router";
import { Clock3, Mail, MessageCircleMore, ShieldCheck, Sparkles } from "lucide-react";

import { ContactFormShell, GradientPanel, PageHero, contactHeroPills } from "@/components/stackearn-site";
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
        content: "Reach the StackEarn team for support, questions, and product feedback.",
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
      title: "Email Us",
      value: site.email,
      description: "For support requests, product questions and business enquiries.",
      icon: Mail,
    },
    {
      title: "Reliable Support",
      value: "Fast response focus",
      description: "We aim to keep support helpful, clear and easy to access.",
      icon: ShieldCheck,
    },
    {
      title: "Working Hours",
      value: site.hours,
      description: "Regular support hours for incoming messages and requests.",
      icon: Clock3,
    },
  ];

  return (
    <div className="page-shell reveal-fade">
      <PageHero
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Contact Us" }]}
        eyebrow="Contact Us"
        title={
          <>
            We’re Here to <span className="text-primary">Help</span>
          </>
        }
        description="Have questions, suggestions or need support? Feel free to reach out to us and our team will get back to you as soon as possible."
        pills={contactHeroPills}
        variant="contact"
      />

      <section className="section-gap reveal-up">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="space-y-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.title} className="inline-feature compact-feature">
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

          <GradientPanel className="p-6 lg:p-8">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-sm font-semibold text-primary">
              <Sparkles className="h-4 w-4" />
              Send Us a Message
            </div>
            <ContactFormShell />
          </GradientPanel>
        </div>
      </section>

      <section className="section-gap reveal-up delay-1">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <GradientPanel className="p-6 text-center">
            <div className="mx-auto icon-chip icon-chip-soft">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <h2 className="mt-5 text-xl font-bold text-title">Email Us</h2>
            <p className="mt-2 text-primary">{site.email}</p>
          </GradientPanel>
          <GradientPanel className="p-6 text-center">
            <div className="mx-auto icon-chip icon-chip-soft">
              <MessageCircleMore className="h-5 w-5 text-primary" />
            </div>
            <h2 className="mt-5 text-xl font-bold text-title">Live Chat</h2>
            <p className="mt-2 text-muted-foreground">Available Soon</p>
          </GradientPanel>
          <GradientPanel className="p-6 text-center">
            <div className="mx-auto icon-chip icon-chip-soft">
              <ShieldCheck className="h-5 w-5 text-primary" />
            </div>
            <h2 className="mt-5 text-xl font-bold text-title">Reliable Support</h2>
            <p className="mt-2 text-muted-foreground">Friendly and helpful answers</p>
          </GradientPanel>
          <GradientPanel className="p-6 text-center">
            <div className="mx-auto icon-chip icon-chip-soft">
              <Clock3 className="h-5 w-5 text-primary" />
            </div>
            <h2 className="mt-5 text-xl font-bold text-title">Working Hours</h2>
            <p className="mt-2 text-muted-foreground">{site.hours}</p>
          </GradientPanel>
        </div>
      </section>
    </div>
  );
}
