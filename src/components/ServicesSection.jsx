const services = [
  {
    organization: "Public Library of Science",
    role: "Peer Reviewer"
  },
  {
    organization: "Oxford Open Digital Health",
    role: "Peer Reviewer"
  }
]

function ServicesSection() {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-black">
        Services:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border-l-4 border-teal-primary bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black">
              {service.role}
            </h3>
            <p className="text-sm sm:text-base text-teal-primary font-medium">
              {service.organization}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServicesSection

