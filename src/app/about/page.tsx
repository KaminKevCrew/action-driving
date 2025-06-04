import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
        About Us
      </h1>

      {/* Who We Are Section */}
      <section className="bg-[#2f3136] p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Who We Are</h2>
        <p className="text-gray-300 mb-4">
          Action Driving is a premier provider of professional stunt driving services for the film and entertainment industry. 
          With years of experience and a team of highly skilled drivers, we bring precision, safety, and excitement to every project.
        </p>
        <p className="text-gray-300 mb-4">
          Founded by industry veterans, our company has built a reputation for delivering exceptional driving sequences that captivate audiences 
          and bring directors' visions to life. We pride ourselves on our attention to detail, technical expertise, and commitment to safety.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-[#2f3136] p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
        <p className="text-gray-300 mb-4">
          Our mission is to provide the highest quality stunt driving services while maintaining the utmost standards of safety and professionalism. 
          We aim to exceed client expectations by delivering thrilling, precisely executed driving sequences that enhance storytelling and create 
          memorable cinematic moments.
        </p>
        <p className="text-gray-300 mb-4">
          We are committed to innovation, continuous improvement, and fostering a collaborative environment that respects the creative vision 
          of filmmakers while ensuring the well-being of everyone involved in the production.
        </p>
      </section>

      {/* What We Do Section */}
      <section className="bg-[#2f3136] p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-white mb-4">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-white mb-2">Precision Driving</h3>
            <p className="text-gray-300 mb-4">
              Expert execution of complex driving maneuvers, including high-speed chases, drifting, and precision parking.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-white mb-2">Vehicle Stunts</h3>
            <p className="text-gray-300 mb-4">
              Specialized vehicle stunts such as jumps, rollovers, and controlled crashes designed for maximum visual impact and safety.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-white mb-2">Driver Training</h3>
            <p className="text-gray-300 mb-4">
              Professional training for actors and production staff in advanced driving techniques and vehicle handling.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-white mb-2">Technical Consultation</h3>
            <p className="text-gray-300 mb-4">
              Expert advice on vehicle selection, stunt planning, and scene choreography to achieve the desired cinematic effect.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-[#2f3136] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-white mb-4">Our Vision</h2>
        <p className="text-gray-300 mb-4">
          We envision Action Driving as the industry leader in stunt driving services, recognized globally for our innovation, 
          reliability, and commitment to excellence. We strive to push the boundaries of what's possible in automotive stunts 
          while setting new standards for safety and professionalism.
        </p>
        <p className="text-gray-300 mb-4">
          Our goal is to contribute to the evolution of action filmmaking by developing new techniques, embracing emerging technologies, 
          and nurturing the next generation of stunt driving talent through mentorship and training programs.
        </p>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Link 
          href="/contact" 
          className="inline-block bg-[#5865F2] hover:bg-[#4752c4] text-white font-medium py-2 px-6 rounded-md transition-colors"
        >
          Work With Us
        </Link>
      </div>
    </div>
  );
}
