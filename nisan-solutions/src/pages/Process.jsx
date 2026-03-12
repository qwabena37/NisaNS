import { Link } from "react-router-dom";

export default function Process() {
  const steps = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      title: "Analyze Client Needs",
      description:
        "We begin by conducting deep analysis of your business processes to identify operational challenges and technology opportunities.",
      link: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
      title: "Technical Demonstrations",
      description:
        "Our experts demonstrate relevant technologies and platforms to prove how they can address your business challenges.",
      link: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      title: "Prototype Development",
      description:
        "We rapidly build prototypes and minimum viable products (MVPs) to validate the effectiveness of the proposed solution.",
      link: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      title: "ROI & Business Impact",
      description:
        "We calculate return on investment and expected business impact to ensure the technology delivers measurable value.",
      link: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "Solution Implementation",
      description:
        "Once validated, we implement the full technology solution and integrate it seamlessly into your operations.",
      link: "#",
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      title: "Continuous Optimization",
      description:
        "We monitor system performance and continuously improve the solution to ensure long-term efficiency and growth.",
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* Header Section */}
      <div className="relative h-[650px] flex items-center justify-center px-6 overflow-hidden">

        <img
          src="./images/process.jpg"
          alt="Technology Process"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />

        <div className="relative text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-3">
            Our Technology Consulting Process
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto rounded"></div>

          <p className="text-blue-100 mt-6">
            Our structured approach ensures every technology solution we
            implement solves real business problems and delivers measurable ROI.
          </p>
        </div>
      </div>

      {/* Process Grid */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg bg-white border border-gray-100"
            >

              <img
                src={step.image}
                alt={step.title}
                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Caption */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-600">
                  {step.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {step.description}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-900/70 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <Link
                  to={step.link}
                  className="bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-blue-100 transition"
                >
                  Learn More
                </Link>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}