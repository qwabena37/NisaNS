export default function Solutions() {
  const solutions = [
    {
      name: "AI Business Intelligence",
      description:
        "Advanced AI systems that analyze business data, generate insights and automate decision making for faster growth.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    },
    {
      name: "Custom Software Development",
      description:
        "Tailor-made enterprise software platforms designed to solve complex operational and workflow challenges.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    },
    {
      name: "SaaS Platform Solutions",
      description:
        "Cloud-based SaaS platforms that enable businesses to scale operations efficiently with minimal infrastructure.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    },
    {
      name: "Data Analytics & Intelligence",
      description:
        "Transform raw data into strategic insights through advanced analytics, dashboards and predictive modeling.",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
    {
      name: "Cloud Infrastructure",
      description:
        "Secure and scalable cloud systems that support enterprise operations and digital transformation initiatives.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
    {
      name: "Business Process Automation",
      description:
        "Automation technologies that eliminate repetitive tasks and streamline workflows across organizations.",
      image:
        "./images/auto.jpg",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* Hero Header */}
      <div className="relative h-[650px] flex items-center justify-center overflow-hidden">

        <img
          src="./images/solutions.avif"
          alt="Technology Solutions"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />

        <div className="relative text-center px-6 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Technology Solutions
          </h2>

          <div className="w-24 h-1 bg-blue-500 mx-auto rounded mb-6"></div>

          <p className="max-w-xl mx-auto text-blue-100">
            We design and implement advanced technology solutions that help
            businesses solve complex operational challenges and unlock new
            opportunities for growth.
          </p>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-blue-500/20 transition duration-500 group border border-gray-100"
            >

              <div className="overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.name}
                  className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-600">
                  {solution.name}
                </h3>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {solution.description}
                </p>

                <button className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105">
                  Learn More
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}