"use client";

import { ArrowRight, Check, Loader2, Shield } from "lucide-react";
import { FormEvent, useState } from "react";

type SubmitState = "idle" | "sending" | "success";

const inquiryTypes = [
  { value: "audit", label: "Quality Audit" },
  { value: "test", label: "Testing" },
  { value: "consult", label: "Consultancy" },
  { value: "other", label: "General" },
];

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitState !== "idle") return;

    const form = event.currentTarget;
    setSubmitState("sending");

    window.setTimeout(() => {
      setSubmitState("success");
      form.reset();

      window.setTimeout(() => {
        setSubmitState("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-2">
          <label className="block font-display text-label-md text-primary" htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
            disabled={submitState !== "idle"}
            className="form-input-focus w-full rounded border border-outline-variant bg-surface p-3 text-body-md transition-all disabled:opacity-60"
          />
        </div>

        <div className="space-y-2">
          <label className="block font-display text-label-md text-primary" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="Organization Name"
            disabled={submitState !== "idle"}
            className="form-input-focus w-full rounded border border-outline-variant bg-surface p-3 text-body-md transition-all disabled:opacity-60"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block font-display text-label-md text-primary" htmlFor="email">
          Professional Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@company.com"
          disabled={submitState !== "idle"}
          className="form-input-focus w-full rounded border border-outline-variant bg-surface p-3 text-body-md transition-all disabled:opacity-60"
        />
      </div>

      <div className="space-y-2">
        <span className="block font-display text-label-md text-primary">Inquiry Type</span>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {inquiryTypes.map((type) => (
            <label key={type.value} className="cursor-pointer">
              <input
                type="radio"
                name="type"
                value={type.value}
                defaultChecked={type.value === "other"}
                disabled={submitState !== "idle"}
                className="peer sr-only"
              />
              <div className="border border-outline-variant p-3 text-center font-display text-label-md transition-all peer-checked:border-primary peer-checked:bg-primary peer-checked:text-on-primary peer-disabled:opacity-60">
                {type.label}
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block font-display text-label-md text-primary" htmlFor="message">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell me about your quality objectives and constraints..."
          disabled={submitState !== "idle"}
          className="form-input-focus w-full resize-y rounded border border-outline-variant bg-surface p-3 text-body-md transition-all disabled:opacity-60"
        />
      </div>

      <div className="flex flex-col items-center justify-between gap-6 pt-4 md:flex-row">
        <div className="flex items-center text-on-surface-variant">
          <Shield className="mr-2 h-5 w-5" />
          <span className="font-display text-label-md">
            Secure submission encrypted via SSL
          </span>
        </div>

        <button
          type="submit"
          disabled={submitState !== "idle"}
          className={`flex w-full items-center justify-center px-10 py-4 font-display text-label-md shadow-md transition-all md:w-auto ${
            submitState === "success"
              ? "bg-on-tertiary-container text-white"
              : "bg-primary text-on-primary hover:opacity-90"
          } disabled:cursor-not-allowed disabled:opacity-80`}
        >
          {submitState === "sending" && (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          )}
          {submitState === "success" && (
            <>
              <Check className="mr-2 h-5 w-5" />
              Message Sent
            </>
          )}
          {submitState === "idle" && (
            <>
              Submit Inquiry
              <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
