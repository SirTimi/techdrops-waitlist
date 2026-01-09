// app/page.tsx

'use client';

import { useState } from 'react';
import WaitlistForm from './components/WaitlistForm';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'Do I need coding experience?',
      answer: 'Nope. We assume zero tech knowledge. Everything is explained conceptually, with business examples.',
    },
    {
      question: 'How much time does it take?',
      answer: 'Most users spend 5-10 minutes per module. You can go through the entire path in 3-4 weeks, or take your time.',
    },
    {
      question: 'What if I want a different learning path?',
      answer: 'Free users get two personalized paths. Need more? Upgrade to premium for unlimited paths.',
    },
    {
      question: 'What topics are covered?',
      answer: 'APIs, databases, cloud infrastructure, hiring developers, tool evaluation, tech debt, customer data, security basics, and more.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="TechDrops" className="h-15 w-15" />
            <h1 className="text-2xl font-bold text-teal-600">TechDrops</h1>
          </div>
          <a
            href="#waitlist"
            className="px-6 py-2.5 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors text-sm"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Learn Tech Without <br/>
                <span className="text-teal-600"> Learning To Code.</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Personalized learning paths designed for non-technical founders who need to make better decisions about technology.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-600"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">AI-powered personalization</p>
                  <p className="text-sm text-gray-600">Based on your role and what you're solving for</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-600"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">13 focused modules</p>
                  <p className="text-sm text-gray-600">5-10 minutes each. Finish in 3-4 weeks</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-teal-600"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">No coding required</p>
                  <p className="text-sm text-gray-600">Everything explained through business decisions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="sticky top-8">
            <div id="waitlist" className="bg-gradient-to-br from-teal-50 to-teal-50 border border-teal-200 rounded-2xl p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Get Early Access</h2>
                <p className="text-gray-600 text-sm">Join founders learning to make better tech decisions.</p>
              </div>
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-4">
              <div className="text-teal-600 font-bold text-sm">Step 01</div>
              <h3 className="text-2xl font-bold text-gray-900">Personalize</h3>
              <p className="text-gray-600 leading-relaxed">
                Tell us your role, main challenge, and comfort level with tech. Takes just 2 minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-4">
              <div className="text-teal-600 font-bold text-sm">Step 02</div>
              <h3 className="text-2xl font-bold text-gray-900">Generate</h3>
              <p className="text-gray-600 leading-relaxed">
                AI creates a 13-module learning path tailored exactly to what you need to know.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-4">
              <div className="text-teal-600 font-bold text-sm">Step 03</div>
              <h3 className="text-2xl font-bold text-gray-900">Learn</h3>
              <p className="text-gray-600 leading-relaxed">
                Work through modules at your pace, take quizzes, and track your progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Why TechDrops Works</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Built by Someone Who Understands Both Sides</h3>
            <p className="text-gray-600 leading-relaxed">
              Every concept is explained through the lens of real business decisions: hiring developers, choosing tools, evaluating proposals, talking to investors.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Focused on What Actually Matters</h3>
            <p className="text-gray-600 leading-relaxed">
              You won't waste time on irrelevant concepts. Each module is designed around solving your specific challenges.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Fast to Complete</h3>
            <p className="text-gray-600 leading-relaxed">
              5-10 minutes per module. Most founders finish their entire path in 3-4 weeks, learning at their own pace.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8 space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">No Prerequisites</h3>
            <p className="text-gray-600 leading-relaxed">
              Zero tech knowledge required. Everything is explained conceptually with real business examples.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">FAQ</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-xl overflow-hidden bg-white hover:border-teal-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 flex items-center justify-between"
                >
                  <span className="text-base">{item.question}</span>
                  <span className={`text-teal-600 text-xl flex-shrink-0 ml-4 transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {openFaq === index && (
                  <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed text-sm">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-sm">TechDrops © 2026. All rights reserved.</p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms</a>
              <a href="mailto:hello@techdrops.com" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}