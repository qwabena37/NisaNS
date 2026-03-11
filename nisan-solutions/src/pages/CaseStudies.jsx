import { motion } from "framer-motion";

export default function CaseStudies() {

  const caseStudies = [
    {
      title: "AI Sales Forecasting System",
      industry: "Retail",
      problem:
        "A large retail company struggled with inaccurate demand forecasting, leading to excess inventory and lost sales.",
      solution:
        "Nisan Solutions implemented an AI-powered predictive analytics platform that analyzed historical sales data and market trends.",
      result:
        "Improved forecasting accuracy by 35% and reduced inventory waste by 28%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      title: "Automated Customer Support Platform",
      industry: "Financial Services",
      problem:
        "The company faced high operational costs due to a large manual customer support team.",
      solution:
        "We deployed an AI-powered chatbot and automated support system integrated with their CRM platform.",
      result:
        "Reduced support workload by 40% and improved customer response time by 60%.",
      image: "./images/finance.avif"
    },
    {
      title: "Enterprise Data Intelligence Dashboard",
      industry: "Logistics",
      problem:
        "Executives lacked real-time visibility into operational performance and logistics efficiency.",
      solution:
        "Nisan Solutions developed an advanced data analytics dashboard integrating multiple enterprise systems.",
      result:
        "Improved operational decision-making and increased logistics efficiency by 25%.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
    },
    {
      title: "Business Process Automation System",
      industry: "Manufacturing",
      problem:
        "Manual internal workflows slowed down production and increased administrative overhead.",
      solution:
        "We implemented automation workflows that streamlined operations and integrated ERP systems.",
      result:
        "Reduced operational processing time by 45% and increased productivity across departments.",
      image: "./images/manuf.jpg"
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-white text-gray-900">

      {/* Hero Section */}

      <section className="relative h-[500px] flex items-center justify-center text-center px-6 overflow-hidden">

        <img
          src="./images/case.jpg"
          alt="Technology Consulting"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />

        <div className="relative z-10 max-w-3xl">

          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Case Studies
          </h1>

          <div className="w-24 h-1 bg-blue-500 mx-auto my-6"></div>

          <p className="text-blue-100">
            Explore how Nisan Solutions helps organizations solve complex
            business challenges through innovative technology, AI solutions,
            and enterprise software systems.
          </p>

        </div>

      </section>


      {/* Case Studies */}

      <section className="max-w-7xl mx-auto py-20 px-6">

        <div className="grid md:grid-cols-2 gap-12">

          {caseStudies.map((study, index) => (

            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition"
            >

              <img
                src={study.image}
                alt={study.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <span className="text-sm text-blue-600 font-semibold">
                  {study.industry}
                </span>

                <h2 className="text-xl font-semibold mt-2">
                  {study.title}
                </h2>

                <div className="mt-4 space-y-3 text-sm">

                  <p>
                    <span className="font-semibold text-gray-900">
                      Problem:
                    </span>{" "}
                    {study.problem}
                  </p>

                  <p>
                    <span className="font-semibold text-gray-900">
                      Solution:
                    </span>{" "}
                    {study.solution}
                  </p>

                  <p className="text-blue-700 font-medium">
                    Result: {study.result}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* CTA Section */}

      <section className="bg-blue-900 text-center py-20 px-6">

        <h2 className="text-3xl font-semibold text-white">
          Ready to Transform Your Business?
        </h2>

        <p className="text-blue-200 mt-6 max-w-xl mx-auto">
          Let Nisan Solutions analyze your challenges, demonstrate
          technology solutions, and implement systems that deliver
          measurable business impact.
        </p>

        <button className="mt-8 bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-blue-100 transition">
          Schedule Consultation
        </button>

      </section>

    </div>
  );
}