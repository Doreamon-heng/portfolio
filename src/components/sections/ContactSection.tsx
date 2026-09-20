'use client';

import React, { useState, useRef } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Paste your EmailJS keys here
    const SERVICE_ID = 'service_l9ywcuk'; // Replace with your Service ID
    const TEMPLATE_ID = 'template_lqrnksw'; // Replace with your Template ID
    const PUBLIC_KEY = 'Yd_ZFnQi2qH7YLonx'; // Replace with your Public Key

    if (!formRef.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('EmailJS Error:', err);
        setError('Failed to send message. Check console for details.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-20 w-full max-w-6xl mx-auto px-6 border-t border-slate-800/50">
      <SectionHeading
        title="Get In Touch"
        subtitle="Have a project requirement, collaboration idea, or question? Send a message."
      />

      <div className="max-w-xl mx-auto p-8 rounded-xl border border-slate-800 bg-slate-900/40">
        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-100">Message Sent!</h3>
            <p className="text-sm text-slate-400 mt-2">
              Thank you for reaching out. I will respond to your message as soon as possible.
            </p>
          </div>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="John Doe"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="john@example.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Message</label>
              <textarea
                rows={4}
                name="message"
                required
                placeholder="Tell me about your project details..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 resize-none"
              />
            </div>

            {error && <p className="text-xs text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};