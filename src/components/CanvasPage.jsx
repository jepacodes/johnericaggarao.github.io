import { useState } from 'react'
import { Download } from 'lucide-react'

function CanvasPage() {
  const [canvasData, setCanvasData] = useState({
    taskName: '',
    date: '',
    goalStakes: '',
    human: {
      directContact: '',
      friction: ''
    },
    interface: {
      challenge: '',
      guardrails: ''
    },
    machine: {
      lowCognitiveLoad: '',
      highVariety: ''
    },
    synthesis: ''
  })

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.')
      setCanvasData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }))
    } else {
      setCanvasData(prev => ({
        ...prev,
        [field]: value
      }))
    }
  }

  const exportPDF = () => {
    window.print()
  }

  const exportData = () => {
    const dataStr = JSON.stringify(canvasData, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'ai-cognition-canvas.json'
    link.click()
  }

  const clearCanvas = () => {
    setCanvasData({
      taskName: '',
      date: '',
      goalStakes: '',
      human: {
        directContact: '',
        friction: ''
      },
      interface: {
        challenge: '',
        guardrails: ''
      },
      machine: {
        lowCognitiveLoad: '',
        highVariety: ''
      },
      synthesis: ''
    })
  }

  return (
    <section>
      <div className="bg-white p-6 sm:p-8 shadow-sm border border-gray-200">
        {/* Header */}
        <div className="mb-8 flex justify-between items-start">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">AI Cognition Canvas</h1>
            <p className="text-sm text-gray-600">Tools for Thought Framework | Advait Sarkar</p>
          </div>
          <button
            onClick={exportPDF}
            className="px-4 py-2 bg-teal-primary text-white font-medium rounded hover:bg-opacity-90 transition-colors text-sm"
          >
            <Download size={16} className="inline mr-2" />
            PRINT / SAVE PDF
          </button>
        </div>

        {/* Header Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 pb-6 border-b">
          <div>
            <label className="block text-sm font-bold text-black mb-1">TASK NAME:</label>
            <input
              type="text"
              value={canvasData.taskName}
              onChange={(e) => handleInputChange('taskName', e.target.value)}
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-primary"
              placeholder="e.g., Q4 Strategy Memo"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-black mb-1">DATE:</label>
            <input
              type="text"
              value={canvasData.date}
              onChange={(e) => handleInputChange('date', e.target.value)}
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-primary"
              placeholder="e.g., 2025-01-15"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-black mb-1">GOAL / STAKES:</label>
            <input
              type="text"
              value={canvasData.goalStakes}
              onChange={(e) => handleInputChange('goalStakes', e.target.value)}
              className="w-full p-2 border-b-2 border-gray-300 focus:outline-none focus:border-teal-primary"
              placeholder="e.g., Inform leadership on..."
            />
          </div>
        </div>

        {/* Main Content - Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* THE HUMAN */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">THE HUMAN</h2>
            <p className="text-xs text-gray-600 mb-4">(Material Engagement)</p>
            
            <div className="mb-6">
              <h3 className="text-sm font-bold text-black mb-2">A. Direct Contact:</h3>
              <p className="text-xs text-gray-600 mb-2">What source materials must I read or touch raw? (No summaries)</p>
              <textarea
                value={canvasData.human.directContact}
                onChange={(e) => handleInputChange('human.directContact', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-primary text-sm"
                rows="4"
                placeholder="List the primary documents, data, or sources you will engage with directly..."
              />
            </div>

            <div>
              <h3 className="text-sm font-bold text-black mb-2">B. The Friction:</h3>
              <p className="text-xs text-gray-600 mb-2">What specific struggles or decisions must I keep to ensure I learn?</p>
              <textarea
                value={canvasData.human.friction}
                onChange={(e) => handleInputChange('human.friction', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-primary text-sm"
                rows="4"
                placeholder="Identify the difficult parts you must do yourself—the thinking you refuse to outsource..."
              />
            </div>
          </div>

          {/* THE INTERFACE */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">THE INTERFACE</h2>
            <p className="text-xs text-gray-600 mb-4">(Productive Resistance)</p>
            
            <div className="mb-6">
              <h3 className="text-sm font-bold text-black mb-2">C. The Challenge:</h3>
              <p className="text-xs text-gray-600 mb-2">How should AI challenge my bias? (e.g., "Act as a critic", "Find the flaw")</p>
              <textarea
                value={canvasData.interface.challenge}
                onChange={(e) => handleInputChange('interface.challenge', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-primary text-sm"
                rows="4"
                placeholder="Define how you will prompt AI to push back on your thinking..."
              />
            </div>

            <div>
              <h3 className="text-sm font-bold text-black mb-2">D. The Guardrails:</h3>
              <p className="text-xs text-gray-600 mb-2">What is the AI explicitly forbidden from doing?</p>
              <textarea
                value={canvasData.interface.guardrails}
                onChange={(e) => handleInputChange('interface.guardrails', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-primary text-sm"
                rows="4"
                placeholder="e.g., 'Drafting the conclusion', 'Summarizing before I read', 'Making the final call'..."
              />
            </div>
          </div>

          {/* THE MACHINE */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">THE MACHINE</h2>
            <p className="text-xs text-gray-600 mb-4">(AI Support)</p>
            
            <div className="mb-6">
              <h3 className="text-sm font-bold text-black mb-2">E. Low Cognitive Load:</h3>
              <p className="text-xs text-gray-600 mb-2">Tasks AI can fully handle: Formatting, syntax, summarizing after I've read.</p>
              <textarea
                value={canvasData.machine.lowCognitiveLoad}
                onChange={(e) => handleInputChange('machine.lowCognitiveLoad', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-primary text-sm"
                rows="4"
                placeholder="List mechanical tasks you're delegating to AI..."
              />
            </div>

            <div>
              <h3 className="text-sm font-bold text-black mb-2">F. High Variety:</h3>
              <p className="text-xs text-gray-600 mb-2">AI as idea generator: alternatives, stress-tests, blind spot detection.</p>
              <textarea
                value={canvasData.machine.highVariety}
                onChange={(e) => handleInputChange('machine.highVariety', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-primary text-sm"
                rows="4"
                placeholder="How will you use AI to expand possibilities and challenge assumptions?"
              />
            </div>
          </div>
        </div>

        {/* Footer - Synthesis */}
        <div className="border-t pt-6">
          <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">SYNTHESIS: AUTHENTICITY & WORKFLOW</h2>
          <p className="text-xs text-gray-600 mb-4">
            Describe your workflow: Raw Materials → AI Interaction → Human Critique → Synthesis → Ownership Verification. 
            How will you know the final output is genuinely yours?
          </p>
          <div className="flex gap-4">
            <textarea
              value={canvasData.synthesis}
              onChange={(e) => handleInputChange('synthesis', e.target.value)}
              className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-primary text-sm"
              rows="4"
              placeholder="Map the loop from raw input to owned output"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6 pt-6 border-t">
          <button
            onClick={exportPDF}
            className="px-4 py-2 bg-teal-primary text-white font-medium rounded hover:bg-opacity-90 transition-colors text-sm"
          >
            <Download size={16} className="inline mr-2" />
            Print / Save PDF
          </button>
          <button
            onClick={exportData}
            className="px-4 py-2 border border-gray-300 text-black font-medium rounded hover:bg-gray-50 transition-colors text-sm"
          >
            Export JSON
          </button>
          <button
            onClick={clearCanvas}
            className="px-4 py-2 border border-gray-300 text-black font-medium rounded hover:bg-gray-50 transition-colors text-sm"
          >
            Clear Canvas
          </button>
        </div>

        {/* Attribution */}
        <p className="text-xs text-gray-500 mt-6 pt-4 border-t text-center">
          Based on "How to Stop AI from Killing Your Critical Thinking" by Advait Sarkar | Tools for Thought Framework
        </p>
      </div>
    </section>
  )
}

export default CanvasPage
