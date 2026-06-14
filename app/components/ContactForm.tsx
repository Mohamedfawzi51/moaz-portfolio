"use client";

import { ArrowRight, Check, Loader2, Shield } from "lucide-react";
import { FormEvent, useState } from "react";

type SubmitState = "idle" | "sending" | "success" | "error";

const inquiryTypes = [
  { value: "audit", label: "Quality Audit" },
  { value: "test", label: "Testing" },
  { value: "consult", label: "Consultancy" },
  { value: "other", label: "General" },
];

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitState !== "idle" && submitState !== "error") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitState("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          type: formData.get("type"),
          message: formData.get("message"),
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Failed to send message.");
      }

      setSubmitState("success");
      form.reset();

      window.setTimeout(() => {
        setSubmitState("idle");
      }, 3000);
    } catch (error) {
      setSubmitState("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message.",
      );
    }
  };

  const isDisabled = submitState === "sending" || submitState === "success";

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
            disabled={isDisabled}
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
            disabled={isDisabled}
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
          disabled={isDisabled}
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
                disabled={isDisabled}
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
          disabled={isDisabled}
          className="form-input-focus w-full resize-y rounded border border-outline-variant bg-surface p-3 text-body-md transition-all disabled:opacity-60"
        />
      </div>

      {submitState === "error" && errorMessage && (
        <p className="rounded border border-error/30 bg-error-container px-4 py-3 text-body-md text-on-error-container">
          {errorMessage}
        </p>
      )}

      <div className="flex flex-col items-center justify-between gap-6 pt-4 md:flex-row">
        <div className="flex items-center text-on-surface-variant">
          <Shield className="mr-2 h-5 w-5" />
          <span className="font-display text-label-md">
            Secure submission encrypted via SSL
          </span>
        </div>

        <button
          type="submit"
          disabled={submitState === "sending" || submitState === "success"}
          className={`flex w-full items-center justify-center px-10 py-4 font-display text-label-md shadow-md transition-all md:w-auto ${
            submitState === "success"
              ? "bg-on-tertiary-container text-white"
              : submitState === "error"
                ? "bg-primary text-on-primary hover:opacity-90"
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
          {(submitState === "idle" || submitState === "error") && (
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
