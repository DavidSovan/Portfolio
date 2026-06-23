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
      setStatus({ type: "success", message: data?.message || "Message sent successfully." });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Something went wrong. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full rounded-2xl bg-[var(--theme-input-bg)] border border-[var(--theme-border)] px-5 py-4 text-sm text-[var(--theme-text)] placeholder-[var(--theme-text-muted)] focus:outline-none focus:border-[var(--theme-text-secondary)] focus:ring-1 focus:ring-[var(--theme-text-secondary)] transition-all duration-300 shadow-sm";

  return (
    <motion.section
      id="contact"
      className="py-32 px-6 w-full min-h-screen flex flex-col items-center justify-center relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-[var(--theme-text-heading)]">
            Let's Connect
          </h2>
          <p className="text-[var(--theme-text-muted)] max-w-xl mx-auto text-base">
            Open for new opportunities and interesting projects. Let's build something great together.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            className="lg:col-span-2 glass rounded-3xl p-8 md:p-12 border border-[var(--theme-border)] flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-[var(--theme-text-heading)] mb-8">
                Contact Details
              </h3>

              <div className="space-y-8">
                {[
                  { icon: "✉", label: "Email", value: "sovandavid19@gmail.com", link: "mailto:sovandavid19@gmail.com" },
                  { icon: "📱", label: "Phone", value: "(855) 87-963-853", link: "tel:+85587963853" },
                  { icon: "📍", label: "Location", value: "Phnom Penh, Cambodia", link: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-5 group">
                    <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[var(--theme-surface)] border border-[var(--theme-border)] text-[var(--theme-text-heading)] text-lg flex-shrink-0 transition-all group-hover:bg-[var(--theme-text-heading)] group-hover:text-[var(--theme-bg)]">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--theme-text-muted)] mb-1">{item.label}</h4>
                      {item.link ? (
                        <a href={item.link} className="text-[var(--theme-text-heading)] font-medium text-base hover:opacity-80 transition-opacity">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-[var(--theme-text-heading)] font-medium text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-[var(--theme-border)]">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--theme-text-muted)] mb-4">Social Profiles</h4>
              <div className="flex space-x-3">
                {[
                  { icon: "fab fa-github", href: "https://github.com/DavidSovan" },
                  { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/%E1%9E%9F%E1%9E%BB%E1%9E%9C%E1%9E%8E%E1%9F%92%E1%9E%8E-%E1%9E%8A%E1%9F%81%E1%9E%9C%E1%9E%B8%E1%9E%8F-834a07324" },
                  { icon: "fab fa-telegram-plane", href: "https://t.me/Sovandavid" },
                ].map((link, i) => (
                  <motion.a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-2xl glass text-[var(--theme-text-secondary)] hover:text-[var(--theme-bg)] hover:bg-[var(--theme-text-heading)] transition-all duration-300 border border-[var(--theme-border)]"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <i className={link.icon} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3 glass rounded-3xl p-8 md:p-12 border border-[var(--theme-border)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold tracking-tight text-[var(--theme-text-heading)] mb-8">
              Send a Message
            </h3>

            {status.message && (
              <div
                className={`mb-8 rounded-2xl border px-5 py-4 text-sm font-medium ${
                  status.type === "success"
                    ? "border-green-500/30 bg-green-500/5 text-green-500"
                    : "border-red-500/30 bg-red-500/5 text-red-500"
                }`}
              >
                {status.message}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-[var(--theme-text-muted)] mb-2 ml-1">Name</label>
                  <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-[var(--theme-text-muted)] mb-2 ml-1">Email</label>
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-[var(--theme-text-muted)] mb-2 ml-1">Message</label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={inputClass} placeholder="How can I help you?" />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl bg-[var(--theme-text-heading)] text-[var(--theme-bg)] font-medium text-base transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed mt-4"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <div className="mt-24 text-center pb-8">
          <p className="text-sm text-[var(--theme-text-muted)]">
            © {new Date().getFullYear()} Sovan David. All rights reserved.
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
