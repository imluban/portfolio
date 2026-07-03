"use client";

import { useState } from "react";

export default function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");

    const formData = new FormData(e.target);

    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      setSuccess("Message sent successfully.");
      e.target.reset();
    }

    setLoading(false);
  }

  return (
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Let&epos;s Build Something Together
        </h2>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-xl bg-black border border-white/10"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-4 rounded-xl bg-black border border-white/10"
          />

          <input
            name="subject"
            placeholder="Subject"
            required
            className="w-full p-4 rounded-xl bg-black border border-white/10"
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            required
            className="w-full p-4 rounded-xl bg-black border border-white/10"
          />

          <button
            type="submit"
            disabled={loading}
            className="
              px-8
              py-4
              rounded-full
              bg-[var(--accent)]
              text-black
              font-semibold
            "
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {success && (
            <p className="text-green-400">
              {success}
            </p>
          )}
        </form>

      </div>
    </section>
  );
}