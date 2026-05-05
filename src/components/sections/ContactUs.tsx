"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin, Mail, PhoneCall, Send,
  Facebook, Twitter, Linkedin, Instagram, CheckCircle2, Clock
} from "lucide-react";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 text-sm placeholder:text-gray-300 focus:outline-none focus:border-brand-orange focus:bg-white transition-all font-medium";

  return (
    <main className="bg-[#f9f9f9] min-h-screen">

      {/* ── Hero Banner ── */}
      <section className="bg-brand-blue py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] bg-brand-orange/10 rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-orange font-medium uppercase tracking-[0.25em] text-xs mb-3"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            Contact <span className="text-brand-orange">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-200 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light"
          >
            Questions, partnerships, or just a hello — we'd love to hear from you.

          </motion.p>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="max-w-5xl mx-auto px-6 -mt-10 relative z-20">
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              Icon: MapPin,
              label: "Our Office",
              value: "3/437, M.M Colony, Pal Road, Jodhpur – 342008",
              accent: "bg-brand-orange/10 text-brand-orange",
            },
            {
              Icon: PhoneCall,
              label: "Phone",
              value: "+91 94140 59185",
              accent: "bg-brand-blue/10 text-brand-blue",
            },
            {
              Icon: Mail,
              label: "Email",
              value: "idi@idinitiatives.com",
              accent: "bg-teal-100 text-teal-700",
            },
          ].map(({ Icon, label, value, accent }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
            >
              <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${accent}`}>
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-0.5">{label}</p>
                <p className="text-gray-700 text-sm font-medium leading-relaxed">{value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-lg p-8 md:p-10"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 180 }}
                  className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 className="w-8 h-8 text-teal-600" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-semibold text-brand-blue mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm font-medium">We'll get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="px-5 py-2 rounded-xl bg-brand-orange text-white text-sm font-medium hover:bg-brand-orange/90 transition-all"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-1">Send a Message</h2>
                <p className="text-gray-400 text-sm font-medium mb-8">We'll respond promptly — usually within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="text-gray-500 text-xs font-medium uppercase tracking-wide">Full Name *</label>
                      <input
                        type="text" required
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-gray-500 text-xs font-medium uppercase tracking-wide">Email *</label>
                      <input
                        type="email" required
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-gray-500 text-xs font-medium uppercase tracking-wide">Topic</label>
                    <select
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">Select a topic...</option>
                      <option>General Inquiry</option>
                      <option>Partnership</option>
                      <option>Volunteering</option>
                      <option>Media & Press</option>
                      <option>Donation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-gray-500 text-xs font-medium uppercase tracking-wide">Message *</label>
                    <textarea
                      rows={5} required
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      placeholder="How can we help you?"
                      className={`${inputClass} resize-none`}
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-brand-orange text-white text-sm font-medium rounded-xl shadow-md shadow-brand-orange/20 hover:bg-brand-orange/90 transition-all"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Working Hours */}
            <div className="bg-brand-blue rounded-3xl p-7 text-white">
              <div className="flex items-center gap-2 mb-5">
                <Clock className="w-4 h-4 text-brand-orange" />
                <p className="text-xs font-medium uppercase tracking-wider text-brand-orange">Office Hours</p>
              </div>
              <ul className="space-y-3 text-sm">
                {[
                  ["Mon – Fri", "9:00 AM – 6:00 PM"],
                  ["Saturday", "9:00 AM – 2:00 PM"],
                  ["Sunday", "Closed"],
                ].map(([day, time]) => (
                  <li key={day} className="flex justify-between border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-blue-200 font-medium">{day}</span>
                    <span className="text-white font-medium">{time}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-md p-7">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400 mb-4">Follow Us</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { Icon: Facebook, label: "Facebook", bg: "hover:bg-blue-600" },
                  { Icon: Twitter, label: "Twitter", bg: "hover:bg-sky-500" },
                  { Icon: Instagram, label: "Instagram", bg: "hover:bg-pink-500" },
                  { Icon: Linkedin, label: "LinkedIn", bg: "hover:bg-blue-700" },
                ].map(({ Icon, label, bg }) => (
                  <motion.a
                    key={label}
                    href="#"
                    whileHover={{ y: -2 }}
                    className={`flex items-center gap-2 text-gray-500 text-sm font-medium bg-gray-50 rounded-xl px-3 py-2.5 border border-gray-100 transition-all ${bg} hover:text-white hover:border-transparent`}
                  >
                    <Icon className="w-4 h-4" /> {label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Google Map ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-10 rounded-3xl overflow-hidden border-4 border-white shadow-xl h-72 md:h-96"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.85!2d72.9691!3d26.2663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c5456789abc%3A0x0!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1714900000000"
            width="100%" height="100%"
            style={{ border: 0 }}
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IDI Office Location"
          ></iframe>
        </motion.div>
      </section>
    </main>
  );
}
