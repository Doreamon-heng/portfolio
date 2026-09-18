'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Mail, Send, CheckCircle } from 'lucide-react';

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Name</label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Email</label>
              <input
                type="email"
                required
                placeholder="john@example.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Message</label>
              <textarea
                rows={4}
                required
                placeholder="Tell me about your project details..."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-cyan-500 text-slate-950 font-bold rounded-lg text-sm flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};