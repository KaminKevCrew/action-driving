"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // In a real application, you would send this data to a server
  };

  const handleQuickPrompt = (prompt: string) => {
    setFormData(prev => ({
      ...prev,
      subject: prompt
    }));
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscribed with email:', formData.email);
    setSubscribed(true);
    // In a real application, you would send this to a server
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
        Contact Us
      </h1>

      {/* Email Addresses Section */}
      <div className="bg-[#2f3136] p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Reach Out to Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">General Inquiries</h3>
            <p className="text-gray-300 mb-1">Email: <a href="mailto:info@actiondriving.com" className="text-accent hover:underline">info@actiondriving.com</a></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Membership</h3>
            <p className="text-gray-300 mb-1">Email: <a href="mailto:membership@actiondriving.com" className="text-accent hover:underline">membership@actiondriving.com</a></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Training Programs</h3>
            <p className="text-gray-300 mb-1">Email: <a href="mailto:training@actiondriving.com" className="text-accent hover:underline">training@actiondriving.com</a></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Film & Production Work</h3>
            <p className="text-gray-300 mb-1">Email: <a href="mailto:filmwork@actiondriving.com" className="text-accent hover:underline">filmwork@actiondriving.com</a></p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <h3 className="text-xl font-semibold text-white mb-2">Follow Us</h3>
          <a 
            href="https://instagram.com/actiondriving" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-accent hover:underline"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @actiondriving
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-[#2f3136] p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Send Us a Message</h2>

        {/* Quick Prompts */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Prompts:</h3>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => handleQuickPrompt("Membership Inquiry")}
              className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-hover transition"
            >
              Membership Inquiry
            </button>
            <button 
              onClick={() => handleQuickPrompt("Training Information")}
              className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-hover transition"
            >
              Training Information
            </button>
            <button 
              onClick={() => handleQuickPrompt("Film Work Opportunity")}
              className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-hover transition"
            >
              Film Work Opportunity
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="bg-green-800 text-white p-4 rounded mb-6">
            <p>Thank you for your message! We'll get back to you soon.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-600 transition"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-white mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#3f4147] text-white rounded focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#3f4147] text-white rounded focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-white mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-[#3f4147] text-white rounded focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-[#3f4147] text-white rounded focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white rounded hover:bg-accent-hover transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-[#2f3136] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Join Our Mailing List</h2>
        <p className="text-gray-300 mb-4">
          Stay updated with the latest news, events, and opportunities from Action Driving.
        </p>

        {subscribed ? (
          <div className="bg-green-800 text-white p-4 rounded">
            <p>Thank you for subscribing to our mailing list!</p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email address"
              required
              className="flex-grow px-4 py-2 bg-[#3f4147] text-white rounded focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-accent text-white rounded hover:bg-accent-hover transition"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
