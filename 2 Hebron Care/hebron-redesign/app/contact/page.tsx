"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Calendar } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "submitting" | "success" | "error";

const inputBase =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-ink placeholder:text-ink-muted transition-colors duration-200 focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/20 disabled:opacity-60";

const labelBase = "mb-1.5 block text-sm font-medium text-ink";

export default function ContactPage() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xdkonbpj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMessage(
          json?.errors?.[0]?.message ||
            "Something went wrong. Please try again or call us directly."
        );
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "We couldn't send your message right now. Please call us or try again later."
      );
      setStatus("error");
    }
  }

  return (
    <div className="bg-cream min-h-screen">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="px-6 pb-16 pt-32 text-center md:pt-40">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-gold">
            Get in touch
          </p>
          <h1
            className="mx-auto max-w-3xl font-serif text-5xl font-light leading-tight text-teal md:text-6xl lg:text-7xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            We&rsquo;d love to hear from&nbsp;you.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-lg font-light leading-relaxed text-ink-light">
            Whether you&rsquo;re just beginning to explore care options or ready
            to schedule a visit, we&rsquo;re here and we&rsquo;re happy to
            help.
          </p>
        </ScrollReveal>

        {/* Thin gold rule */}
        <ScrollReveal delay={0.25}>
          <div className="mx-auto mt-10 h-px w-16 bg-gold/50" />
        </ScrollReveal>
      </section>

      {/* ── Two-column layout ─────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── LEFT: Contact Form ──────────────────────────────── */}
          <ScrollReveal direction="left">
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm md:p-10">
              <h2
                className="mb-2 font-serif text-2xl font-medium text-teal"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Send us a message
              </h2>
              <p className="mb-8 text-sm font-light text-ink-muted">
                We typically respond within one business day.
              </p>

              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center gap-4 rounded-xl bg-teal/5 px-8 py-12 text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/10">
                    <Send className="h-6 w-6 text-teal" />
                  </div>
                  <h3
                    className="font-serif text-2xl font-medium text-teal"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    Message received!
                  </h3>
                  <p className="max-w-xs text-sm font-light leading-relaxed text-ink-light">
                    Thank you for reaching out. Someone from our team will be in
                    touch with you soon. We look forward to speaking with you.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm text-teal underline underline-offset-4 transition-opacity hover:opacity-70"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelBase}>
                      Your name <span className="text-gold">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      className={inputBase}
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className={labelBase}>
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="(425) 555-0100"
                      className={inputBase}
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* What are you looking for */}
                  <div>
                    <label htmlFor="inquiry" className={labelBase}>
                      What are you looking for?{" "}
                      <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="inquiry"
                        name="inquiry"
                        required
                        defaultValue=""
                        className={cn(
                          inputBase,
                          "cursor-pointer appearance-none pr-10"
                        )}
                        disabled={status === "submitting"}
                      >
                        <option value="" disabled>
                          Choose one…
                        </option>
                        <option value="Just exploring options">
                          Just exploring options
                        </option>
                        <option value="Ready to schedule a tour">
                          Ready to schedule a tour
                        </option>
                        <option value="Respite care inquiry">
                          Respite care inquiry
                        </option>
                        <option value="Other">Other</option>
                      </select>
                      {/* Chevron */}
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 5l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelBase}>
                      Your message <span className="text-gold">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us a little about your situation or what you'd like to know…"
                      className={cn(inputBase, "resize-none")}
                      disabled={status === "submitting"}
                    />
                  </div>

                  {/* Error */}
                  {status === "error" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600"
                    >
                      {errorMessage}
                    </motion.p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className={cn(
                      "inline-flex w-full items-center justify-center gap-2.5 rounded-lg px-6 py-3.5 text-base font-medium text-white transition-all duration-200",
                      "bg-teal hover:bg-teal-light focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2",
                      "disabled:cursor-not-allowed disabled:opacity-60"
                    )}
                  >
                    {status === "submitting" ? (
                      <>
                        <svg
                          className="h-4 w-4 animate-spin"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8H4z"
                          />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-ink-muted">
                    We respect your privacy and will never share your
                    information.
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* ── RIGHT: Contact Info + Map ──────────────────────── */}
          <ScrollReveal direction="right">
            <div className="flex flex-col gap-8">
              {/* Info card */}
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h2
                  className="mb-6 font-serif text-2xl font-medium text-teal"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Reach us directly
                </h2>

                <ul className="space-y-5">
                  {/* Phone */}
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                      <Phone className="h-4 w-4 text-teal" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                        Phone
                      </p>
                      <a
                        href="tel:+14253747954"
                        className="text-base font-medium text-ink transition-colors hover:text-teal"
                      >
                        (425) 374-7954
                      </a>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                      <Mail className="h-4 w-4 text-teal" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                        Email
                      </p>
                      <a
                        href="mailto:hebroncareafhllc@gmail.com"
                        className="text-base font-medium text-ink transition-colors hover:text-teal"
                      >
                        hebroncareafhllc@gmail.com
                      </a>
                    </div>
                  </li>

                  {/* Address */}
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                      <MapPin className="h-4 w-4 text-teal" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                        Address
                      </p>
                      <a
                        href="https://maps.google.com/?q=2421+81st+Pl+SE+Everett+WA+98208"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-ink transition-colors hover:text-teal"
                      >
                        2421 81st Pl SE
                        <br />
                        Everett, WA 98208
                      </a>
                    </div>
                  </li>

                  {/* Hours */}
                  <li className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
                      <Clock className="h-4 w-4 text-teal" />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                        Hours
                      </p>
                      <p className="text-base font-medium text-ink">
                        Office: Mon–Fri, 9am–5pm
                      </p>
                      <p className="mt-0.5 text-sm font-light text-ink-light">
                        Care staff available 24/7
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Map with 3D tilt effect */}
              <motion.div
                className="overflow-hidden rounded-2xl shadow-md"
                style={{
                  perspective: "1200px",
                  transformStyle: "preserve-3d",
                }}
                initial={{
                  rotateX: 4,
                  rotateY: -2,
                  scale: 0.98,
                }}
                whileHover={{
                  rotateX: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <iframe
                  title="Hebron Care Adult Family Home location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2681.5!2d-122.1763!3d47.8923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490163ea2f80001%3A0x1!2s2421+81st+Pl+SE%2C+Everett%2C+WA+98208!5e0!3m2!1sen!2sus!4v1711000000000!5m2!1sen!2sus"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>

              {/* Schedule visit CTA */}
              <div className="flex items-center gap-3 rounded-xl border border-gold/30 bg-gold/5 px-5 py-4">
                <Calendar className="h-5 w-5 flex-shrink-0 text-gold" />
                <p className="text-sm font-light text-ink-light">
                  <span className="font-medium text-ink">
                    Ready to see the home?
                  </span>{" "}
                  Tours are free and there&rsquo;s no pressure, just a warm
                  welcome.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Bottom CTA: Call us directly ──────────────────────── */}
      <section className="border-t border-gray-100 bg-teal py-20 text-center text-white">
        <ScrollReveal>
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gold/80">
            Prefer to talk?
          </p>
          <h2
            className="mb-4 font-serif text-3xl font-light md:text-4xl"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Call us directly
          </h2>
          <p className="mx-auto mb-8 max-w-md text-base font-light leading-relaxed text-white/70">
            Our team is happy to answer any questions and help you figure out if
            Hebron Care is the right fit for your family.
          </p>
          <a
            href="tel:+14253747954"
            className={cn(
              "inline-flex items-center gap-3 rounded-full px-8 py-4",
              "bg-white text-teal transition-all duration-200 hover:bg-cream",
              "text-2xl font-medium tracking-wide md:text-3xl",
              "focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal"
            )}
          >
            <Phone className="h-6 w-6 md:h-7 md:w-7" />
            (425) 374-7954
          </a>
          <p className="mt-5 text-sm font-light text-white/50">
            Mon–Fri, 9am–5pm &middot; Care available 24/7
          </p>
        </ScrollReveal>
      </section>
    </div>
  );
}
