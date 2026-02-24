"use client";

import { useState } from "react";
import type { ContactFormData, ContactFormErrors } from "@/types";
import { SERVICES } from "@/lib/constants";

const INITIAL_FORM: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Please enter your full name (at least 2 characters).";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (data.phone && !/^\+?[\d\s\-()]{7,15}$/.test(data.phone))
    errors.phone = "Enter a valid phone number.";
  if (!data.service)
    errors.service = "Please select the service you are interested in.";
  if (!data.message.trim() || data.message.trim().length < 20)
    errors.message =
      "Please describe your requirements (at least 20 characters).";
  return errors;
}

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverMsg, setServerMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("submitting");
    setErrors({});

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setForm(INITIAL_FORM);
        setServerMsg(data.message || "Your message has been sent!");
      } else {
        setStatus("error");
        setServerMsg(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMsg(
        "Network error. Please check your connection and try again.",
      );
    }
  };

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      aria-label="Contact form"
      className="space-y-6"
    >
      {/* Success banner */}
      {status === "success" && (
        <div
          role="alert"
          aria-live="polite"
          className="bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-xl px-5 py-4 flex items-center gap-3"
        >
          <span className="text-xl" aria-hidden="true">
            ✅
          </span>
          <span>{serverMsg}</span>
        </div>
      )}

      {/* Error banner */}
      {status === "error" && (
        <div
          role="alert"
          aria-live="polite"
          className="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-xl px-5 py-4 flex items-center gap-3"
        >
          <span className="text-xl" aria-hidden="true">
            ⚠️
          </span>
          <span>{serverMsg}</span>
        </div>
      )}

      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1.5"
          >
            Full Name{" "}
            <span className="text-red-400" aria-label="required">
              *
            </span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Aditya Sharma"
            className="input-base"
            aria-required="true"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            disabled={isSubmitting}
          />
          {errors.name && (
            <p
              id="name-error"
              role="alert"
              className="mt-1.5 text-xs text-red-400"
            >
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1.5"
          >
            Email Address{" "}
            <span className="text-red-400" aria-label="required">
              *
            </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@college.ac.in"
            className="input-base"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p
              id="email-error"
              role="alert"
              className="mt-1.5 text-xs text-red-400"
            >
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Phone + Service */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-300 mb-1.5"
          >
            Phone Number{" "}
            <span className="text-gray-500 text-xs">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 XXXXX XXXXX"
            className="input-base"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            disabled={isSubmitting}
          />
          {errors.phone && (
            <p
              id="phone-error"
              role="alert"
              className="mt-1.5 text-xs text-red-400"
            >
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-gray-300 mb-1.5"
          >
            Service Interested In{" "}
            <span className="text-red-400" aria-label="required">
              *
            </span>
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={handleChange}
            className="input-base"
            aria-required="true"
            aria-invalid={!!errors.service}
            aria-describedby={errors.service ? "service-error" : undefined}
            disabled={isSubmitting}
          >
            <option value="" disabled>
              Select a service…
            </option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">Other / General Enquiry</option>
          </select>
          {errors.service && (
            <p
              id="service-error"
              role="alert"
              className="mt-1.5 text-xs text-red-400"
            >
              {errors.service}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
          Your Message{" "}
          <span className="text-red-400" aria-label="required">
            *
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Briefly describe your research topic, current stage, and what help you need…"
          className="input-base resize-none"
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="mt-1.5 text-xs text-red-400"
          >
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <svg
              className="w-5 h-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
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
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message →"
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We typically respond within 24 hours on business days.
      </p>
    </form>
  );
}
