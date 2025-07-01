import React, { useState } from 'react';
import axios from '../../api/axios';  
import { Link } from 'react-router-dom';
        // ← your configured Axios base‑URL instance

const NEWSLETTER_URL = '/subscribers';       // the router you showed is mounted at /api/subscribers

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || submitting) return;

    setSubmitting(true);
    setMessage('');
    setError('');

    try {
      const res = await axios.post(NEWSLETTER_URL, { email });
      // When controller responds with { message: 'Subscribed successfully' }
      setMessage(res.data.message || `Thank you for subscribing with ${email}!`);
      setEmail('');
    } catch (err) {
      /* Possible responses:
         409 – Already subscribed
         400 – Email missing / invalid
         500 – Server error
      */
      const msg =
        err.response?.data?.message ||
        'Something went wrong. Please try again later.';
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-8 px-4 sm:px-8 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        {/* Navigation Links */}
        <ul className="flex flex-wrap gap-6 text-white text-base font-medium drop-shadow">
          <li>
  <Link
    to="/login"
    className="hover:underline hover:text-orange-200 transition"
  >
    Admin
  </Link>
</li>
          {/* <li><a className="hover:underline hover:text-orange-200 transition" href="#">Services</a></li>
          <li><a className="hover:underline hover:text-orange-200 transition" href="#">Projects</a></li>
          <li><a className="hover:underline hover:text-orange-200 transition" href="#">Testimonials</a></li>
          <li><a className="hover:underline hover:text-orange-200 transition" href="#">Connect</a></li> */}
        </ul>

        {/* Subscribe Form */}
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="flex items-center gap-3 w-full sm:w-auto bg-white/20 rounded-xl shadow-md px-4 py-3 backdrop-blur-md mt-4 sm:mt-0"
        >
          <span className="text-white font-semibold text-sm sm:text-base whitespace-nowrap">
            Subscribe to update news
          </span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            required
            disabled={submitting}
            className="flex-grow sm:flex-grow-0 w-full sm:w-64 px-3 py-2 rounded border border-white/30 text-blue-900 placeholder-blue-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          />
          <button
            type="submit"
            disabled={submitting || !email}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm sm:text-base px-5 py-2 rounded shadow transition disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            {submitting ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      </div>

      {/* Feedback Messages */}
      {message && (
        <p className="text-center text-green-200 font-medium mt-4">
          {message}
        </p>
      )}
      {error && (
        <p className="text-center text-red-200 font-medium mt-4">
          {error}
        </p>
      )}
    </section>
  );
}
