import { ExternalLink, Mail } from 'lucide-react'

const works = [
  {
    title: "AI Precision Diet Control",
    description: "Using personal patient data to generate personalized recommendations.",
    link: "https://github.com/jepaisme/ai-precision-diet-control"
  },
  {
    title: "Introduction to ML Mini Book",
    description: "An introduction to machine learning guide focused on making the concepts easily understandable. If you want to be a beta tester, contact me.",
    link: null,
    contact: true
  },
  {
    title: "Cancer Images Analysis",
    description: "Research and analysis on cancer image classification and diagnostic applications using AI.",
    link: null
  },
  {
    title: "UP College of Medicine CEBS Report Analytics Generator Software",
    description: "Software solution for generating analytics reports for the College of Medicine CEBS.",
    link: null
  },
  {
    title: "Policy Work",
    description: "Research and analysis on AI governance frameworks and policy recommendations.",
    link: "https://mjm.usm.my/uploads/issues/1632/Formatted%20MJM-20-0778%20READY%20color.pdf",
    isPdf: true
  },
  {
    title: "Narrative Review",
    description: "Comprehensive reviews on AI ethics, healthcare applications, and responsible deployment.",
    link: null
  }
]

function WorkSection() {
  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-black">
        Work:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {works.map((work, index) => (
          <div
            key={index}
            className="border-l-4 border-teal-primary bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black">
              {work.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              {work.description}
            </p>
            {work.link && (
              <a
                href={work.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-teal-primary font-medium hover:underline text-sm sm:text-base"
              >
                {work.isPdf ? 'View PDF' : 'View Repository'}
                <ExternalLink size={16} />
              </a>
            )}
            {work.contact && (
              <a
                href="mailto:johnericaggarao0212@gmail.com"
                className="inline-flex items-center gap-2 text-teal-primary font-medium hover:underline text-sm sm:text-base"
              >
                Contact Me
                <Mail size={16} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkSection

