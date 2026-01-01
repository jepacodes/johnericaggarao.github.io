import { ExternalLink } from 'lucide-react'

const resources = [
  {
    title: "Critical Thinking with AI Canvas",
    description: "An interactive canvas based on Dr. Advait Sarkar's 'Tools for Thought' framework to help you use AI without giving up your critical thinking. This workbook helps you pause before using AI and ask whether you're about to enhance your thinking or replace it.",
    link: "https://github.com/jepacodes/Critical-Thinking-Canvas-with-AI.git",
    useCanvas: true
  }
]

function ResourcesSection({ setActiveTab }) {
  return (
    <section className="max-w-4xl">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-black">
        Resources (Must Try!):
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="border-l-4 border-teal-primary bg-white p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setActiveTab && setActiveTab('resources')}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-black">
              {resource.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
              {resource.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setActiveTab && setActiveTab('resources')
                }}
                className="inline-flex items-center gap-2 text-teal-primary font-medium hover:underline text-sm sm:text-base text-left"
              >
                Use Canvas
              </button>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 text-teal-primary font-medium hover:underline text-sm sm:text-base"
              >
                View Repository
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ResourcesSection

