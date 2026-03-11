import { motion } from "framer-motion";

export default function Contact() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">

      {/* Page Header */}
      <div className="relative h-[600px] flex items-center justify-center px-6">

        {/* Background Image */}
        <img
  src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
  alt="Artificial Intelligence System"
  className="absolute inset-0 w-full h-full object-cover brightness-50"
/>

        {/* Header Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0}
          className="relative text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl mt-10 font-bold text-white mb-3">
            Contact Nisan Solutions
          </h1>

          {/* Blue underline */}
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded mb-6"></div>

          <p className="text-white">
            Whether you are exploring AI solutions, business automation,
            or digital transformation strategies, our team is ready to
            support your organization with innovative technology solutions.
            Reach out to us and let’s start the conversation.
          </p>
        </motion.div>
      </div>

      {/* Contact Content */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto py-16 px-6">

        {/* Contact Information */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.2}
          className="space-y-8"
        >

          {/* Office */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-blue-500/10 transition"
          >
            <h2 className="text-xl text-blue-500 font-semibold mb-2">
              Our Office
            </h2>

            <p>
              Nisan Solutions <br />
              Spintex, Accra <br />
              Ghana
            </p>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            variants={fadeUp}
            custom={0.4}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-blue-500/10 transition"
          >
            <h2 className="text-xl text-blue-500 font-semibold mb-2">
              Contact Details
            </h2>

            <p>
              📞 +233 20 302 0239 <br />
              📞 +233 20 302 0239 <br />
              📞 +233 20 302 0239 <br />
              📧 info@nisansolutions.com
            </p>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            variants={fadeUp}
            custom={0.5}
            className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-blue-500/10 transition"
          >
            <h2 className="text-xl text-blue-500 font-semibold mb-2">
              Business Hours
            </h2>

            <p>
              Monday – Friday: 8:00 AM – 6:00 PM <br />
              Saturday: 9:00 AM – 3:00 PM
            </p>
          </motion.div>

        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.6}
          className="bg-gray-900 p-8 rounded-xl shadow-2xl"
        >
          <h2 className="text-xl text-blue-500 font-semibold mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your project or business challenge..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            ></textarea>

            <button
              type="button"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>

          </form>
        </motion.div>

      </div>
    </div>
  );
}