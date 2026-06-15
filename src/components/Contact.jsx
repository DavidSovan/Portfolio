import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || "Failed to send message.");
      }

      const data = await response.json().catch(() => null);
      setStatus({ type: "success", message: data?.message || "Message sent successfully! ✨" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full rounded-xl bg-[var(--theme-input-bg)] border border-[var(--theme-border-medium)] px-4 py-3 text-sm text-[var(--theme-text)] placeholder-[var(--theme-text-muted)] focus:outline-none focus:border-anime-purple/50 focus:ring-1 focus:ring-anime-purple/30 transition-all duration-300";

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 w-full min-h-screen flex flex-col items-center justify-center relative"
      initial={prefersReducedMotion ? {} : { opacity: 0 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          className="mb-12 text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="anime-gradient-text">Get In Touch</span>
          </h2>
          <p className="text-[var(--theme-text-muted)] max-w-xl mx-auto text-sm">
            Interested in working together? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            className="glass rounded-2xl p-8 border border-[var(--theme-border)]"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut", delay: 0.05 }}
          >
            <h3 className="text-xl font-semibold text-[var(--theme-text-heading)] mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              {[
                { icon: "✉", label: "Email", value: "sovandavid19@gmail.com" },
                { icon: "📱", label: "Phone", value: "(855) 87-963-853" },
                { icon: "📍", label: "Location", value: "Phnom Penh, Cambodia" },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-xl anime-gradient text-white text-sm flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-[var(--theme-text-secondary)]">{item.label}</h4>
                    <p className="text-[var(--theme-text)] text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <h4 className="text-sm font-medium text-[var(--theme-text-secondary)] mb-4">Connect With Me</h4>
              <div className="flex space-x-3">
                {[
                  { icon: "fab fa-github", href: "https://github.com/DavidSovan" },
                  { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/%E1%9E%9F%E1%9E%BB%E1%9E%9C%E1%9E%8E%E1%9F%92%E1%9E%8E-%E1%9E%8A%E1%9F%81%E1%9E%9C%E1%9E%B8%E1%9E%8F-834a07324" },
                  { icon: "fas fa-envelope", href: "mailto:sovandavid19@gmail.com" },
                  { icon: "fab fa-telegram-plane", href: "https://t.me/Sovandavid" },
                ].map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    className="w-10 h-10 flex items-center justify-center rounded-lg glass text-[var(--theme-text-secondary)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-surface-hover)] transition-all duration-300 border border-[var(--theme-border)]"
                    whileHover={prefersReducedMotion ? {} : { y: -2, scale: 1.08 }}
                    whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                  >
                    <i className={link.icon} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8 border border-[var(--theme-border)]"
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.6, ease: "easeOut", delay: 0.12 }}
          >
            <h3 className="text-xl font-semibold text-[var(--theme-text-heading)] mb-6">
              Send Me a Message
            </h3>

            {status.message && (
              <div
                className={`mb-6 rounded-xl border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-anime-green/30 bg-anime-green/5 text-anime-green"
                    : "border-anime-red/30 bg-anime-red/5 text-anime-red"
                }`}
              >
                {status.message}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-[var(--theme-text-secondary)] mb-1.5">Name</label>
                <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-[var(--theme-text-secondary)] mb-1.5">Email</label>
                <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[var(--theme-text-secondary)] mb-1.5">Message</label>
                <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} className={inputClass} placeholder="Your message..." />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl text-white font-medium anime-gradient transition-all duration-300 disabled:opacity-60"
                whileHover={prefersReducedMotion ? {} : { scale: 1.02, boxShadow: "0 0 30px rgba(196,77,255,0.4)" }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
              >
                {isSubmitting ? "Sending..." : "Send Message ✨"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
