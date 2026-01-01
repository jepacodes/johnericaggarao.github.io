import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: "Outstanding Contributor Award",
    organization: "National Telehealth Center, National Institutes of Health, University of the Philippines Manila",
    date: "December 6, 2025",
    description: "Awarded for outstanding performance and exceptional contribution to the National Telehealth Center.",
    image: "/certificates/outstanding-contributor.png"
  },
  {
    title: "Certificate of Completion - Internship at Meralco (I@M) Program",
    organization: "MERALCO",
    date: "August 19, 2022",
    description: "Successfully completed the minimum requirement of 250 hours under the Internship at Meralco (I@M) Program from July 4 to August 16, 2022.",
    image: "/certificates/meralco-internship.png"
  },
  {
    title: "Machine Learning with Python",
    organization: "IBM & Coursera",
    date: "October 1, 2024",
    description: "Successfully completed with honors - an online non-credit course authorized by IBM and offered through Coursera.",
    image: "/certificates/ibm-ml-python.png",
    verification: "https://coursera.org/verify/CIL1RECOOJHE"
  },
  {
    title: "Fundamentals of Data Science in Precision Medicine and Cloud Computing",
    organization: "Stanford Medicine, Department of Genetics",
    date: "February 5, 2024",
    description: "Program Duration: 40 hours. Certificate of Achievement.",
    image: "/certificates/stanford-medicine.png"
  },
  {
    title: "Explainable AI for Public Policy",
    organization: "UP Center for Integrative and Development Studies",
    date: "July 2025",
    description: "Research and policy work on explainable AI applications in public policy.",
    image: "/certificates/up-cids-explainable-ai.png"
  },
  {
    title: "Certificate of Participation - IMSP Research Seminar",
    organization: "Institute of Mathematical Sciences and Physics, College of Arts and Sciences, University of the Philippines Los Baños",
    date: "November 17-18, 2023",
    description: "For actively attending the IMSP Research Seminar on Analytic and Theoretical Tools for the Data-Enabled Sciences (IMSP ATTDES) held at the Mathematics Building, University of the Philippines Los Baños, College Laguna, Philippines.",
    image: "/certificates/imsp-research-seminar.png"
  },
  {
    title: "AI in Business and Natural Language Processing for Business",
    organization: "Kozminski University (Polish National Agency for Academic Exchange - NAWA)",
    date: "May 8 - June 19, 2023",
    description: "E-learning course on AI in business and natural language processing for business. Part of The Heart of AI: Artificial Intelligence Workshop Hub and Data Science in the Centre of Europe program, funded by European Funds and the European Social Fund.",
    image: "/certificates/kozminski-ai-business.png"
  }
]

function CertificationsAndAwards() {
  const [imageErrors, setImageErrors] = useState({})

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  return (
    <section>
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-black">
        Certifications and Awards:
      </h2>
      <div className="space-y-6 sm:space-y-8">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="border-l-4 border-teal-primary bg-white p-4 sm:p-6 shadow-sm"
          >
            <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
              <div className="md:w-1/3">
                {!imageErrors[index] ? (
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto rounded shadow-sm"
                    onError={() => handleImageError(index)}
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center shadow-sm">
                    <span className="text-gray-400 text-sm">Certificate Image</span>
                  </div>
                )}
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-black">
                  {cert.title}
                </h3>
                <p className="text-sm sm:text-base text-teal-primary font-medium mb-2">
                  {cert.organization}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  {cert.date}
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  {cert.description}
                </p>
                {cert.verification && (
                  <a
                    href={cert.verification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal-primary font-medium hover:underline text-sm"
                  >
                    Verify Certificate
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CertificationsAndAwards

