"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ContactPage() {
  const searchParams = useSearchParams();

  // Message templates for quick prompts
  const membershipInquiryMessage = "I am interested in becoming a member of Action Driving.\n\nI would like to know more about:\n- Membership requirements\n- Benefits and privileges\n- Current membership fees\n- Application process\n\nPlease provide me with detailed information. Thank you.";

  const trainingInformationMessage = "I would like to inquire about your training programs.\n\nI am specifically interested in:\n- Types of training courses available\n- Schedule and duration\n- Skill level requirements\n- Pricing information\n\nPlease send me more details about your training options.";

  const filmWorkOpportunityMessage = "I am interested in film work opportunities with Action Driving.\n\nMy relevant experience includes:\n- [Add your driving experience]\n- [Add any film/stunt work experience]\n\nPlease let me know about any upcoming opportunities and what requirements you have for participants.";

  // Message template for Slide-a-rama registration
  const slideARamaMessage = "I would like to register for the Slide-a-rama event on April 14-15, 2025.\n\nFirst Name: [first name]\nLast Name: [last name]\n\nPlease contact me with registration details.";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [activePrompt, setActivePrompt] = useState('');

  // Handle auto-selection of prompt from URL parameters
  useEffect(() => {
    const prompt = searchParams.get('prompt');
    if (prompt === 'slide-a-rama') {
      handleQuickPrompt("Slide-a-rama Registration", slideARamaMessage);

      // Scroll to the form and focus on the name field
      const nameInput = document.getElementById('name');
      if (nameInput) {
        nameInput.scrollIntoView({ behavior: 'smooth' });
        nameInput.focus();
      }
    }
  }, [searchParams]);

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
    setActivePrompt('');
    // In a real application, you would send this data to a server
  };

  const handleQuickPrompt = (prompt: string, message: string = '') => {
    setActivePrompt(prompt);
    setFormData(prev => ({
      ...prev,
      subject: prompt,
      message: message
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
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-text text-center">
        Contact Us
      </h1>

      {/* Email Addresses Section */}
      <div className="bg-background-secondary p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-text">Reach Out to Us</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-text mb-2">General Inquiries</h3>
            <p className="text-text-normal mb-1">Email: <a href="mailto:info@actiondriving.com" className="text-accent">info@actiondriving.com</a></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-text mb-2">Membership</h3>
            <p className="text-text-normal mb-1">Email: <a href="mailto:membership@actiondriving.com" className="text-accent">membership@actiondriving.com</a></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-text mb-2">Training Programs</h3>
            <p className="text-text-normal mb-1">Email: <a href="mailto:training@actiondriving.com" className="text-accent">training@actiondriving.com</a></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-text mb-2">Film & Production Work</h3>
            <p className="text-text-normal mb-1">Email: <a href="mailto:filmwork@actiondriving.com" className="text-accent">filmwork@actiondriving.com</a></p>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-6 pt-6 border-t border-ui-border">
          <h3 className="text-xl font-semibold text-text mb-2">Follow Us</h3>
          <a 
            href="https://instagram.com/actiondrivingcollective"
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-accent"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @actiondrivingcollective
          </a>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-background-secondary p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-text">Send Us a Message</h2>

        {/* Quick Prompts */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-text mb-2">Quick Prompts:</h3>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => handleQuickPrompt("Membership Inquiry", membershipInquiryMessage)}
              className={`px-4 py-2 rounded transition-colors duration-default ${
                activePrompt === "Membership Inquiry" 
                  ? "bg-accent-hover ring-2 ring-accent" 
                  : "bg-accent hover:bg-accent-hover"
              }`}
            >
              Membership Inquiry
            </button>
            <button 
              onClick={() => handleQuickPrompt("Training Information", trainingInformationMessage)}
              className={`px-4 py-2 rounded transition-colors duration-default ${
                activePrompt === "Training Information" 
                  ? "bg-accent-hover ring-2 ring-accent" 
                  : "bg-accent hover:bg-accent-hover"
              }`}
            >
              Training Information
            </button>
            <button 
              onClick={() => handleQuickPrompt("Film Work Opportunity", filmWorkOpportunityMessage)}
              className={`px-4 py-2 rounded transition-colors duration-default ${
                activePrompt === "Film Work Opportunity" 
                  ? "bg-accent-hover ring-2 ring-accent" 
                  : "bg-accent hover:bg-accent-hover"
              }`}
            >
              Film Work Opportunity
            </button>
            <button 
              onClick={() => handleQuickPrompt("Slide-a-rama Registration", slideARamaMessage)}
              className={`px-4 py-2 rounded transition-colors duration-default ${
                activePrompt === "Slide-a-rama Registration" 
                  ? "bg-accent-hover ring-2 ring-accent" 
                  : "bg-accent hover:bg-accent-hover"
              }`}
              id="slide-a-rama-prompt"
            >
              Slide-a-rama Registration
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="bg-green-800 text-text p-4 rounded mb-6">
            <p>Thank you for your message! We'll get back to you soon.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="mt-2 px-4 py-2 bg-green-700 text-text rounded hover:bg-green-600 transition-colors duration-default"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-text mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background-tertiary text-text rounded focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-text mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background-tertiary text-text rounded focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-text mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-background-tertiary text-text rounded focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-text mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={10}
                className="w-full px-4 py-2 bg-background-tertiary text-text rounded focus:outline-none focus:ring-2 focus:ring-accent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-text rounded hover:bg-accent-hover transition-colors duration-default"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-background-secondary p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-text">Join Our Mailing List</h2>
        <p className="text-text-normal mb-4">
          Stay updated with the latest news, events, and opportunities from Action Driving.
        </p>

        {subscribed ? (
          <div className="bg-green-800 text-text p-4 rounded">
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
              className="flex-grow px-4 py-2 bg-background-tertiary text-text rounded focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-accent text-text rounded hover:bg-accent-hover transition-colors duration-default"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
