import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error || "Failed to send message.");
      }

      const data = await response.json().catch(() => null);

      setStatus({
        type: "success",
        message: data?.message || "Your message has been sent!",
      });
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 px-6 w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 32 }}
      whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={
        prefersReducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" }
      }
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section header */}
        <motion.div
          className="mb-12 text-center"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.6, ease: "easeOut" }
          }
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interested in working together or learning more about what I can
            bring to your team? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact info */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-xl w-full"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: "easeOut", delay: 0.05 }
            }
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  📧
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    sovandavid19@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  📱
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">
                    Phone
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    (855) 87-963-853
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="mt-1 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                  📍
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 dark:text-gray-300">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Stueng Mean Chey, Mean Chey, Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-10">
              <h4 className="font-medium text-gray-700 dark:text-gray-300 mb-4">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/DavidSovan"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                  whileHover={
                    prefersReducedMotion ? {} : { y: -2, scale: 1.08 }
                  }
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                >
                  <i className="fab fa-github"></i>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/%E1%9E%9F%E1%9E%BB%E1%9E%9C%E1%9E%8E%E1%9F%92%E1%9E%8E-%E1%9E%8A%E1%9F%81%E1%9E%9C%E1%9E%B8%E1%9E%8F-834a07324"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                  whileHover={
                    prefersReducedMotion ? {} : { y: -2, scale: 1.08 }
                  }
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                >
                  <i className="fab fa-linkedin-in"></i>
                </motion.a>
                <motion.a
                  href="mailto:sovandavid19@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                  whileHover={
                    prefersReducedMotion ? {} : { y: -2, scale: 1.08 }
                  }
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                >
                  <i className="fas fa-envelope"></i>
                </motion.a>
                <motion.a
                  href="https://t.me/Sovandavid"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                  whileHover={
                    prefersReducedMotion ? {} : { y: -2, scale: 1.08 }
                  }
                  whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                >
                  <i className="fab fa-telegram-plane"></i>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-xl w-full"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={
              prefersReducedMotion
                ? { duration: 0 }
                : { duration: 0.6, ease: "easeOut", delay: 0.12 }
            }
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
              Send Me a Message
            </h3>

            {status.message && (
              <div
                className={`mb-6 rounded-lg border px-4 py-3 text-sm ${
                  status.type === "success"
                    ? "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-900/40 dark:text-green-200"
                    : "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-900/40 dark:text-red-200"
                }`}
              >
                {status.message}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
                  placeholder="Tell me a bit about your project or question..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-md transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-50 disabled:cursor-not-allowed disabled:opacity-60 dark:focus:ring-offset-gray-900"
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : { scale: 1.02, boxShadow: "0 18px 40px rgba(79, 70, 229, 0.4)" }
                }
                whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
