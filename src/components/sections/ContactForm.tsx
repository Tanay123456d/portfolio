"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "captured" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please tell me about your project";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide a bit more detail (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("loading");

    // Integrated handlers live in src/lib/contact.ts — uncomment the handler
    // there to connect a backend (e.g. Resend, Formspree) via API route.
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data?.error || "Submission failed");
      }

      if (data?.delivered) {
        setStatus("success");
        setFeedback("");
      } else {
        setStatus("captured");
        setFeedback(
          "Your message was received on the server, but no delivery service is connected yet. Reach me directly via email in the meantime."
        );
      }

      setFormData({ name: "", email: "", company: "", projectType: "", budget: "", message: "" });
    } catch (err) {
      setStatus("error");
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setFeedback(message);
      setTimeout(() => {
        setStatus("idle");
        setFeedback("");
      }, 4000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-meta uppercase tracking-widest text-muted-foreground">
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-border py-3 text-body-md placeholder:text-foreground/20 focus:border-accent focus:outline-none transition-colors duration-300"
            placeholder="Your name"
            required
          />
          {errors.name && (
            <p className="text-meta text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-meta uppercase tracking-widest text-muted-foreground">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-border py-3 text-body-md placeholder:text-foreground/20 focus:border-accent focus:outline-none transition-colors duration-300"
            placeholder="you@company.com"
            required
          />
          {errors.email && (
            <p className="text-meta text-red-500 mt-1">{errors.email}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="block text-meta uppercase tracking-widest text-muted-foreground">
          Company / Organization
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-border py-3 text-body-md placeholder:text-foreground/20 focus:border-accent focus:outline-none transition-colors duration-300"
          placeholder="Where do you work?"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="projectType" className="block text-meta uppercase tracking-widest text-muted-foreground">
            Project Type
          </label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-border py-3 text-body-md appearance-none focus:border-accent focus:outline-none transition-colors duration-300"
          >
            <option value="">Select a type</option>
            <option value="brand-identity">Brand Identity</option>
            <option value="art-direction">Art Direction</option>
            <option value="digital">Digital Design</option>
            <option value="editorial">Editorial Design</option>
            <option value="social">Social Media Design</option>
            <option value="packaging">Packaging</option>
            <option value="creative-direction">Creative Direction</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="budget" className="block text-meta uppercase tracking-widest text-muted-foreground">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-border py-3 text-body-md appearance-none focus:border-accent focus:outline-none transition-colors duration-300"
          >
            <option value="">Select a range</option>
            <option value="under-500">Under ₹50,000</option>
            <option value="500-1k">₹50,000 — ₹1,00,000</option>
            <option value="1k-5k">₹1,00,000 — ₹5,00,000</option>
            <option value="5k-plus">₹5,00,000+</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-meta uppercase tracking-widest text-muted-foreground">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-border py-3 text-body-md placeholder:text-foreground/20 focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
          placeholder="Tell me about your project, timeline, and goals…"
          required
        />
        {errors.message && (
          <p className="text-meta text-red-500 mt-1">{errors.message}</p>
        )}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className={`group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-display text-body-sm uppercase tracking-wider transition-all duration-300 hover:bg-accent ${
            status === "loading" ? "opacity-60 cursor-not-allowed" : ""
          }`}
        >
          {status === "loading" ? (
            <>
              <span className="animate-spin w-4 h-4 border-2 border-background border-t-transparent rounded-full" />
              Sending…
            </>
          ) : status === "success" ? (
            <>Message Sent — Thank You ✓</>
          ) : status === "captured" ? (
            <>Message Captured — Email Me Directly</>
          ) : status === "error" ? (
            <>Failed to Send — Try Again</>
          ) : (
            <>
              Send Inquiry
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </>
          )}
        </button>
      </div>

      {feedback && (
        <div
          role="status"
          className={`text-meta px-4 py-3 border ${
            status === "error"
              ? "text-red-500 border-red-500/30"
              : status === "captured"
              ? "text-muted-foreground border-accent/30"
              : "text-green-600"
          }`}
        >
          {feedback}
        </div>
      )}
    </form>
  );
}