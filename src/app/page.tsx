"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Home() {
  const [name, setName] = useState("Alex Chen");
  const [bio, setBio] = useState("Passionate software engineer focusing on building scalable web apps. Loves learning new tech.");

  const generatedMarkdown = `# Hi 👋, I'm ${name}

${bio}

### 🛠️ Tech Stack
<!-- Tech stack will go here -->

---
*Generated with [Dev Profile Generator](https://dev-profile-generator.vercel.app/)*
`;

  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 p-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center mb-10">
        <h1 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Dev Profile Generator
        </h1>
        <p className="text-gray-400">Build your stunning developer profile in minutes.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Side: Form (Input) */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            📝 Profile Details
          </h2>
          
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="e.g. Diogo Bessa"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Bio</label>
              <textarea 
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={4}
                className="w-full bg-gray-950 border border-gray-800 rounded-lg p-3 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Write a short bio about yourself..."
              />
            </div>
            
            {/* The Open Source Bait (Good First Issues) */}
            <div className="pt-6 border-t border-gray-800 mt-6">
              <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-4">
                <p className="text-sm text-blue-200">
                  <span className="font-bold">💡 Want to add social links or tech stack icons?</span> <br/>
                  Check our <a href="https://github.com/diogobessaft1/dev-profile-generator/issues" target="_blank" rel="noreferrer" className="text-blue-400 font-semibold hover:underline">GitHub Issues</a> to contribute! This is a great project for your first Pull Request.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Live Preview (Output) */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            👀 Live Preview
          </h2>
          
          <div className="bg-gray-950 border border-gray-800 rounded-lg p-6 flex-grow mb-6 overflow-auto">
            {/* REAL Markdown Rendered View */}
            <article className="prose prose-invert prose-blue max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {generatedMarkdown}
              </ReactMarkdown>
            </article>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-2">Raw Markdown</h3>
            <pre className="bg-gray-950 border border-gray-800 rounded-lg p-4 text-xs text-gray-300 overflow-x-auto font-mono">
              <code>{generatedMarkdown}</code>
            </pre>
          </div>

          <button 
            onClick={() => navigator.clipboard.writeText(generatedMarkdown)}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-lg transition-colors flex justify-center items-center gap-2"
          >
            📋 Copy Markdown
          </button>
        </div>

      </div>
    </main>
  );
}
