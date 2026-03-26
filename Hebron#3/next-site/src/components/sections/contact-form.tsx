"use client";

import { useState, FormEvent } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const body: Record<string, string> = {
      access_key: "f6c61f92-7ace-4991-a36f-697a7b307632",
    };

    data.forEach((value, key) => {
      if (typeof value === "string") {
        body[key] = value;
      }
    });

    // Handle checkbox separately
    const tourCheckbox = form.querySelector<HTMLInputElement>(
      'input[name="tour_interest"]'
    );
    body.tour_interest = tourCheckbox?.checked
      ? "Yes, interested in a tour"
      : "No";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          result.message || "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to send your message right now. Please try again later."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-16 h-16 rounded-full bg-clay/10 flex items-center justify-center mb-6">
          <CheckCircle className="w-8 h-8 text-clay" />
        </div>
        <h3 className="text-2xl font-serif text-rock mb-3">Message sent</h3>
        <p className="text-rock/60 text-sm mb-8 max-w-sm">
          Thank you for reaching out. We will get back to you as soon as
          possible, usually within one business day.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-clay hover:text-clay-dark transition-colors underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* First Name + Last Name */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="first_name"
            className="text-xs font-medium text-rock/80"
          >
            First Name
          </label>
          <Input
            id="first_name"
            name="first_name"
            required
            placeholder="Jane"
            className="bg-white/80 border-rock/10 rounded-2xl px-5 py-3.5 text-sm h-auto focus-visible:ring-clay/50 focus-visible:border-clay/50"
          />
        </div>
        <div className="space-y-1.5">
          <label
            htmlFor="last_name"
            className="text-xs font-medium text-rock/80"
          >
            Last Name
          </label>
          <Input
            id="last_name"
            name="last_name"
            required
            placeholder="Smith"
            className="bg-white/80 border-rock/10 rounded-2xl px-5 py-3.5 text-sm h-auto focus-visible:ring-clay/50 focus-visible:border-clay/50"
          />
        </div>
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-xs font-medium text-rock/80">
          Email Address
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className="bg-white/80 border-rock/10 rounded-2xl px-5 py-3.5 text-sm h-auto focus-visible:ring-clay/50 focus-visible:border-clay/50"
        />
      </div>

      {/* Phone */}
      <div className="space-y-1.5">
        <label htmlFor="phone" className="text-xs font-medium text-rock/80">
          Phone Number
        </label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(360) 555-0123"
          className="bg-white/80 border-rock/10 rounded-2xl px-5 py-3.5 text-sm h-auto focus-visible:ring-clay/50 focus-visible:border-clay/50"
        />
      </div>

      {/* Care needs */}
      <div className="space-y-1.5">
        <label
          htmlFor="care_needs"
          className="text-xs font-medium text-rock/80"
        >
          Care needs or questions
        </label>
        <Textarea
          id="care_needs"
          name="care_needs"
          rows={3}
          placeholder="Tell us about your loved one's care needs or any questions you have"
          className="bg-white/80 border-rock/10 rounded-2xl px-5 py-3.5 text-sm focus-visible:ring-clay/50 focus-visible:border-clay/50 resize-none"
        />
      </div>

      {/* Expected move-in date */}
      <div className="space-y-1.5">
        <label
          htmlFor="move_in_date"
          className="text-xs font-medium text-rock/80"
        >
          Expected move in date{" "}
          <span className="text-rock/40 font-normal">(optional)</span>
        </label>
        <Input
          id="move_in_date"
          name="move_in_date"
          placeholder="e.g. April 2026, As soon as possible"
          className="bg-white/80 border-rock/10 rounded-2xl px-5 py-3.5 text-sm h-auto focus-visible:ring-clay/50 focus-visible:border-clay/50"
        />
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-medium text-rock/80">
          Your message
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="How can we help you?"
          className="bg-white/80 border-rock/10 rounded-2xl px-5 py-3.5 text-sm focus-visible:ring-clay/50 focus-visible:border-clay/50 resize-none"
        />
      </div>

      {/* Tour toggle */}
      <label className="flex items-center gap-3 cursor-pointer group py-1">
        <div className="relative">
          <input
            type="checkbox"
            name="tour_interest"
            className="peer sr-only"
          />
          <div className="w-10 h-6 bg-rock/10 rounded-full peer-checked:bg-clay transition-colors" />
          <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm peer-checked:translate-x-4 transition-transform" />
        </div>
        <span className="text-sm text-rock/70 group-hover:text-rock transition-colors">
          I&apos;m interested in scheduling a tour
        </span>
      </label>

      {/* Error message */}
      {status === "error" && errorMessage && (
        <div className="text-sm text-red-600 bg-red-50 rounded-2xl px-5 py-3">
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <Button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-rock text-white rounded-2xl py-4 h-auto text-sm font-medium hover:bg-rock/90 transition-colors border-none"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
