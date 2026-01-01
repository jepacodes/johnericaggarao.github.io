import { useState } from 'react'
import { Mail, ExternalLink } from 'lucide-react'
import WorkSection from './components/WorkSection'
import ResourcesSection from './components/ResourcesSection'
import RecentEngagementSection from './components/RecentEngagementSection'
import CanvasPage from './components/CanvasPage'
import CertificationsAndAwards from './components/CertificationsAndAwards'
import ServicesSection from './components/ServicesSection'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-8 sm:pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col items-start mb-4 sm:mb-0">
              {/* Logo */}
              <div className="flex items-center mb-2 sm:mb-3 flex-wrap">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black">John Eric</span>
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white bg-teal-primary px-3 sm:px-4 py-1 sm:py-2 ml-1">
                  Aggarao
                </span>
              </div>
              {/* Tagline */}
              <p className="text-teal-primary text-base sm:text-lg lg:text-xl font-medium mt-1">
                Making AI and DS knowledge equitable
              </p>
            </div>
          {/* Navigation */}
          <nav className="flex gap-4 sm:gap-6 items-center text-sm sm:text-base">
            <button
              onClick={() => setActiveTab('home')}
              className={`font-medium hover:text-teal-primary transition-colors ${
                activeTab === 'home' ? 'text-teal-primary' : 'text-black'
              }`}
            >
              HOME
            </button>
            <button
              onClick={() => setActiveTab('about')}
              className={`font-medium hover:text-teal-primary transition-colors ${
                activeTab === 'about' ? 'text-teal-primary' : 'text-black'
              }`}
            >
              ABOUT
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`font-medium hover:text-teal-primary transition-colors ${
                activeTab === 'resources' ? 'text-teal-primary' : 'text-black'
              }`}
            >
              RESOURCES
            </button>
            <a
              href="mailto:johnericaggarao0212@gmail.com"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-primary text-white font-medium rounded hover:bg-opacity-90 transition-colors text-sm sm:text-base"
              aria-label="Email Contact"
            >
              <Mail size={16} />
              <span>Contact</span>
            </a>
            <a
              href="https://calendar.app.google/haU7JFuGPRajmNZeA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-teal-primary text-white font-medium rounded hover:bg-opacity-90 transition-colors text-sm sm:text-base"
              aria-label="Book a Chat"
            >
              <span>Book a Chat</span>
            </a>
          </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16">
        {activeTab === 'home' && (
          <div className="max-w-7xl mx-auto">
            {/* Hero/About Section */}
            <section className="mb-16 sm:mb-20 lg:mb-24 max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-black">
                AI Specialist in Healthcare
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-800 max-w-3xl">
                I am a PhD student and AI Specialist dedicated to the responsible use of technology in healthcare. 
                My work focuses on AI development, systems thinking, AI governance, policy, and ensuring that intelligent systems are safe, ethical, 
                and work for the benefit of patients in the Philippines and beyond.
              </p>
            </section>

            {/* Resources Section */}
            <div className="mb-16 sm:mb-20">
              <ResourcesSection setActiveTab={setActiveTab} />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16 sm:mb-20">
              {/* Work Section - Takes 2 columns */}
              <div className="lg:col-span-2">
                <WorkSection />
              </div>

              {/* Recent Engagement Section - Takes 1 column */}
              <div className="lg:col-span-1">
                <RecentEngagementSection />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="max-w-7xl mx-auto">
            {/* Hero/About Section */}
            <section className="mb-16 sm:mb-20 lg:mb-24 max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-black">
                AI Specialist in Healthcare
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed text-gray-800 max-w-3xl">
                I am a PhD student and AI Specialist dedicated to the responsible use of technology in healthcare. 
                My work focuses on AI development, systems thinking, AI governance, policy, and ensuring that intelligent systems are safe, ethical, 
                and work for the benefit of patients in the Philippines and beyond.
              </p>
            </section>

            {/* Certifications and Awards Section */}
            <div className="mb-16 sm:mb-20">
              <CertificationsAndAwards />
            </div>

            {/* Services Section */}
            <div className="mb-16 sm:mb-20">
              <ServicesSection />
            </div>
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="max-w-7xl mx-auto">
            {/* Introduction Section */}
            <section className="mb-16 sm:mb-20 max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-black">
                Critical Thinking with AI Canvas
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed mb-6 text-gray-800 max-w-3xl">
                An interactive canvas based on Dr. Advait Sarkar's "Tools for Thought" framework to help you use AI without giving up your critical thinking. 
                This workbook helps you pause before using AI and ask whether you're about to enhance your thinking or replace it.
              </p>
              <a
                href="https://github.com/jepacodes/Critical-Thinking-Canvas-with-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-teal-primary text-white font-medium rounded hover:bg-opacity-90 transition-colors"
              >
                <span>View Source Code on GitHub</span>
                <ExternalLink size={20} />
              </a>
            </section>

            {/* Canvas Section */}
            <div className="mb-16 sm:mb-20">
              <CanvasPage />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App


