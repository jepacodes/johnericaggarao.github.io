const engagements = [
  {
    title: "Climate Solution AI Pitch - South Korea",
    description: "Just got back from South Korea where we pitched a climate solution powered by AI. We won, which was great, but the real highlight was seeing what other teams brought to the table and learning from the speakers/judges.",
    link: "https://www.linkedin.com/posts/jepaisme_just-got-back-from-south-korea-where-we-pitched-activity-7333475394618114048-QIWX?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQ2-8BOTjJleNuKrW2ArZu0uFZhkkILws"
  },
  {
    title: "UPM SILab - Transformative Change in the Philippines",
    description: "Privileged to witness the dawn of transformative change in the Philippines. The possibilities ahead aren't just promising—they're game-changing. Exciting times for innovation, growth, and progress.",
    link: "https://www.linkedin.com/posts/jepaisme_upmsilab4uhc-upmsilab-activity-7333473756809502720-tRtS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQ2-8BOTjJleNuKrW2ArZu0uFZhkkILws"
  },
  {
    title: "Interoperability & Digital Health",
    description: "Exploring interoperability solutions in digital health and AI applications.",
    link: "https://www.linkedin.com/posts/jepaisme_interoperability-digitalhealth-ai-activity-7300809391421673474-8EBZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQ2-8BOTjJleNuKrW2ArZu0uFZhkkILws"
  },
  {
    title: "Digital Health & Interoperability",
    description: "Advancing digital health solutions with focus on interoperability and health tech innovation.",
    link: "https://www.linkedin.com/posts/jepaisme_digitalhealth-interoperability-healthtech-activity-7295392777360523267-1Bht?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQ2-8BOTjJleNuKrW2ArZu0uFZhkkILws"
  },
  {
    title: "Data Science Event",
    description: "Engaging with the data science community and sharing insights on AI and data-driven solutions.",
    link: "https://www.linkedin.com/posts/jepaisme_data-datascience-dataevent-activity-7248482093180067840-uIwr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQQ2-8BOTjJleNuKrW2ArZu0uFZhkkILws"
  }
]

function RecentEngagementSection() {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-black">
        Recent Engagement:
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        {engagements.map((engagement, index) => (
          <a
            key={index}
            href={engagement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-l-4 border-teal-primary bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow block"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-black">
              {engagement.title}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              {engagement.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default RecentEngagementSection

