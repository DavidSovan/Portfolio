function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Interested in working together or learning more about what I can
            bring to your team? Feel free to reach out!
          </p>
        </div>

        <div className="flex justify-center">
          {/* Contact info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-xl w-full">
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
                    (855) 963-853
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
                <a
                  href="https://github.com/DavidSovan"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/%E1%9E%9F%E1%9E%BB%E1%9E%9C%E1%9E%8E%E1%9F%92%E1%9E%8E-%E1%9E%8A%E1%9F%81%E1%9E%9C%E1%9E%B8%E1%9E%8F-834a07324"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="mailto:sovandavid19@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                >
                  <i className="fas fa-envelope"></i>
                </a>
                <a
                  href="https://t.me/Sovandavid"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
                >
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
