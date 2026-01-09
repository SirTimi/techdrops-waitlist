// app/components/WaitlistForm.tsx

'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          role: role || null,
          source: 'waitlist-page',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Something went wrong');
        setLoading(false);
        return;
      }

      setSuccess(true);
      setEmail('');
      setFirstName('');
      setRole('');
      setLoading(false);

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError('Failed to submit. Please try again.');
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="w-full max-w-md mx-auto p-6 bg-green-50 border border-green-200 rounded-lg">
        <div className="text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h3 className="text-xl font-semibold text-green-900 mb-2">
            You're in!
          </h3>
          <p className="text-green-800">
            Check your email for confirmation. We'll notify you when TechDrops launches.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>

      {/* First Name Field */}
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="John"
          required
          className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>

      {/* Role Field (Optional) */}
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-900 mb-2">
          What's your role? (Optional)
        </label>
        <select
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        >
          <option value="">Select a role...</option>
          <option value="founder">Founder</option>
          <option value="business-owner">Business Owner</option>
          <option value="solo-entrepreneur">Solo Entrepreneur</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
          <p className="text-sm text-orange-800">{error}</p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? 'Reserving your spot...' : 'Reserve My Spot'}
      </button>

      {/* Small Text */}
      <p className="text-center text-xs text-gray-600">
        No spam. Early access to TechDrops.
      </p>
    </form>
  );
}