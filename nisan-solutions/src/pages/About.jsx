import { motion } from "framer-motion";

export default function About() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  return (
    <div className="bg-white text-gray-900">

      {/* Hero Section */}

      <section className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] overflow-hidden">

        <motion.img
          src="./images/s_about.jpg"
          alt="Nisan Solutions Technology"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 6 }}
        />

        <div className="absolute inset-0 bg-blue-900/70 flex items-center justify-center">

          <motion.h1
            className="text-3xl md:text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Nisan Solutions
          </motion.h1>

        </div>
      </section>

      {/* History, Vision, Mission */}

      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:items-stretch">

        {/* Image */}

        <motion.div
          className="h-full"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="h-full border-4 border-blue-600 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="Technology Consulting"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}

        <motion.div
          className="flex flex-col justify-between h-full space-y-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold text-blue-600">
              Our Story
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Nisan Solutions was founded to bridge the gap between complex
              business challenges and innovative technology. Our team combines
              deep technical expertise with strategic consulting to design
              solutions that help organizations operate more efficiently,
              make better decisions, and scale confidently.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold text-blue-600">
              Our Vision
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              To become a leading technology consulting firm delivering
              AI-driven solutions that transform businesses and industries
              across Africa and beyond.
            </p>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="text-2xl font-bold text-blue-600">
              Our Mission
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to help organizations unlock the full potential of
              technology through intelligent software systems, advanced
              analytics, and scalable digital platforms that deliver measurable
              business impact.
            </p>
          </motion.div>

        </motion.div>

      </section>

      {/* Meet Our Team */}

      <section className="py-20 px-6 bg-blue-50">

        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >

          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold text-blue-700 mb-14"
          >
            Leadership Team
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            {[{
              name: "Soraya James",
              role: "Chief Executive Officer",
              img: "./team/T1.PNG"
            },
            {
              name: "Akosua Owusu",
              role: "Head of Technology",
              img: ""
            },
            {
              name: "David Asare",
              role: "AI Solutions Architect",
              img: ""
            }].map((member, index) => (

              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >

                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-blue-600"
                />

                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>

                <p className="text-blue-600 text-sm">
                  {member.role}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </section>

    </div>
  );
}