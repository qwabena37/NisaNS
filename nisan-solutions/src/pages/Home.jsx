import { useState } from "react";
import {
  FaBuilding,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaRobot,
  FaChartLine,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import { MdConstruction } from "react-icons/md";
import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function Home() {
  const [openContact, setOpenContact] = useState(null);

  const services = [
    {
      id: 1,
      title: "AI Business Consulting",
      icon: <FaRobot />,
      description:
        "We analyze business workflows and implement AI-powered solutions that automate operations, improve decision-making and increase efficiency.",
    },
    {
      id: 2,
      title: "Software & SaaS Solutions",
      icon: <FaCloud />,
      description:
        "Custom software platforms and SaaS integrations designed to solve complex operational challenges across industries.",
    },
    {
      id: 3,
      title: "Data Intelligence & Analytics",
      icon: <FaChartLine />,
      description:
        "Advanced data analytics platforms that convert raw data into actionable business intelligence.",
    },
    {
      id: 4,
      title: "Enterprise Systems Integration",
      icon: <FaDatabase />,
      description:
        "Seamless integration of enterprise systems, cloud infrastructure and digital platforms.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Analyze Client Needs",
      description:
        "We conduct deep business analysis to identify operational challenges, inefficiencies and growth opportunities.",
    },
    {
      step: "2",
      title: "Technical Demonstration",
      description:
        "Our experts demonstrate potential technology solutions to prove real-world feasibility and performance.",
    },
    {
      step: "3",
      title: "Prototype Development",
      description:
        "We rapidly build working prototypes and MVPs to validate the solution before full implementation.",
    },
    {
      step: "4",
      title: "ROI Validation",
      description:
        "We calculate measurable return on investment to ensure the technology solution delivers real business value.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-white text-slate-900">

      {/* HERO SECTION */}

      <section className="relative h-[100vh] flex items-center justify-center text-center px-6 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          alt="AI Technology"
          className="absolute inset-0 w-full h-full object-cover"
        />
      <div className="absolute inset-0 bg-black/60"></div>
        {/* NS & NC Buttons on bottom-left */}
<div className="absolute left-6 bottom-11 flex flex-col gap-3 md:gap-4 z-20">

  {/* NR */}
  <div className="relative group w-fit">
    <motion.a
      whileHover={{ scale: 1.1 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 3 }}
      href="https://nisan-r.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 md:gap-2 
      text-sm md:text-base 
      text-white hover:text-blue-700 transition font-medium"
    >
      <FaBuilding className="text-lg md:text-xl" /> Nisan Realty
    </motion.a>

    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-56 bg-blue-500 shadow-lg rounded-lg p-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50">
      <p className="font-semibold text-white flex items-center gap-2">
        <FaBuilding /> Nisan Realty
      </p>

      <p className="text-gray-300 text-sm mt-1">
Your trusted real estate partner delivering quality homes
            and investment opportunities across Ghana.
      </p>
    </div>
  </div>

  {/* NC */}
  <div className="relative group w-fit">
    <motion.a
      whileHover={{ scale: 1.1 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
      href="https://nisa-nc.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 md:gap-2 
      text-sm md:text-base 
      text-white hover:text-blue-700 transition font-medium"
    >
      <MdConstruction className="text-lg md:text-xl" /> Nisan Constructions
    </motion.a>

    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 w-56 bg-blue-500 shadow-lg rounded-lg p-3 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300 z-50">
      <p className="font-semibold text-white flex items-center gap-2">
        <MdConstruction /> Nisan Constructions
      </p>

      <p className="text-gray-300 text-sm mt-1">
Expert construction solutions and consultancy services designed to build your vision.      </p>
    </div>
  </div>

</div>
        <div className="absolute inset-0 bg-blue-900/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="mt-8 text-4xl md:text-6xl font-bold text-white">
            Transforming Business Challenges Into
            <span className="text-blue-300"> Intelligent Solutions</span>
          </h1>

          <p className="mt-8 text-blue-100 text-lg leading-relaxed">
            Nisan Solutions bridges the gap between complex business problems
            and cutting-edge technology using AI, advanced analytics, and
            scalable software solutions.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Explore Our Solutions
          </button>
        </motion.div>

        {/* Floating Contact Icons */}
{/* Floating Contact Icons on right */}
<div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
  {[
    {
      type: "phone",
      icon: <FaPhoneAlt />,
      color: "bg-blue-500",
      link: "tel:+233123456789",
    },
    {
      type: "whatsapp",
      icon: <FaWhatsapp />,
      color: "bg-blue-500",
      link: "https://wa.me/233123456789",
    },
    {
      type: "email",
      icon: <FaEnvelope />,
      color: "bg-blue-500",
      link: "mailto:info@nisansolutions.com",
    },
  ].map((item) => (
    <a
      key={item.type}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <motion.button
        whileHover={{ scale: 1.15 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className={`${item.color} text-white p-4 rounded-full shadow-lg`}
      >
        {item.icon}
      </motion.button>
    </a>
  ))}
</div>
      </section>

      {/* ABOUT */}

      <section className="py-24 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-900">
          Technology That Solves Real Business Problems
        </h2>

        <p className="mt-6 text-slate-600 text-lg leading-relaxed">
          At Nisan Solutions, we specialize in bridging the gap between
          technology and business operations. Our team combines deep technical
          expertise with strategic consulting to deliver AI-driven platforms,
          enterprise software, and scalable SaaS solutions that solve complex
          operational challenges.
        </p>
      </section>

      {/* SERVICES */}

      <section id="services" className="bg-blue-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-semibold text-blue-900 mb-14 text-center">
            Our Technology Solutions
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition text-center"
              >
                <div className="text-blue-600 text-3xl mb-4 flex justify-center">
                  {service.icon}
                </div>

                <h3 className="font-semibold text-lg text-slate-900">
                  {service.title}
                </h3>

                <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}

      <section className="py-24 px-6 max-w-7xl mx-auto">

        <h2 className="text-3xl font-semibold text-blue-900 text-center mb-16">
          Our Proven Technology Consulting Process
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          {process.map((step) => (
            <motion.div
              key={step.step}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-blue-600 mb-4">
                {step.step}
              </div>

              <h3 className="font-semibold text-lg text-slate-900">
                {step.title}
              </h3>

              <p className="text-slate-600 mt-3 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* CTA */}

      <section className="bg-blue-900 py-24 text-center px-6">

        <h2 className="text-3xl font-semibold text-white">
          Ready to Transform Your Business With Technology?
        </h2>

        <p className="text-blue-200 mt-6 max-w-2xl mx-auto">
          Let Nisan Solutions help you identify the right technology,
          demonstrate its impact, and implement solutions that deliver real ROI.
        </p>

        <a
  href="mailto:nisansolutions@gmail.com?subject=Consultation Request&body=Hello Nisan Solutions,%0D%0A%0D%0AI would like to schedule a consultation."
  className="mt-8 inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-blue-100 transition"
>
  Schedule Consultation
</a>
      </section>
  {/* IMPACT / ACHIEVEMENTS */}

<section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

    {/* Businesses */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="p-8 rounded-xl shadow-md"
    >
      <h3 className="text-4xl font-bold text-blue-600">
        <CountUp end={200} duration={2} />+
      </h3>

      <p className="mt-3 text-slate-700 font-medium">
        Businesses Improved
      </p>
    </motion.div>

    {/* Staff Trained */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="p-8 rounded-xl shadow-md"
    >
      <h3 className="text-4xl font-bold text-blue-600">
        <CountUp end={100} duration={2} />+
      </h3>

      <p className="mt-3 text-slate-700 font-medium">
        Staff Trained on Proven Technical Business Principles
      </p>
    </motion.div>

    {/* Strategic Solutions */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="p-8 rounded-xl shadow-md"
    >
      <h3 className="text-4xl font-bold text-blue-600">
        <CountUp end={150} duration={2} />+
      </h3>

      <p className="mt-3 text-slate-700 font-medium">
        Strategic Solutions Implemented
      </p>
    </motion.div>

  </div>
</section>

    </div>
  );
}