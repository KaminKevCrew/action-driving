import Link from 'next/link';

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-text text-center">
        Film Production Services
      </h1>

      {/* Introduction Section */}
      <section className="bg-background-secondary p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-text mb-4">Professional Film Production Services</h2>
        <p className="text-text-normal mb-4">
          Action Driving provides comprehensive film production services specializing in automotive action sequences. 
          Our team of professionals brings decades of combined experience to your production, ensuring safe, 
          spectacular, and precisely executed driving scenes that will captivate your audience.
        </p>
        <p className="text-text-normal mb-4">
          From initial concept development to final execution, we work closely with directors, producers, and stunt coordinators 
          to bring your vision to life while maintaining the highest standards of safety and professionalism.
        </p>
      </section>

      {/* Stunt Drivers Section */}
      <section className="bg-background-secondary p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-text mb-4">Stunt Drivers</h2>
        <p className="text-text-normal mb-4">
          Our roster includes some of the industry's most skilled and experienced stunt drivers, capable of executing 
          complex driving maneuvers with precision and consistency. Each driver in our team has extensive training in:
        </p>
        <ul className="list-disc list-inside text-text-normal mb-4 ml-4">
          <li className="mb-2">Precision driving techniques</li>
          <li className="mb-2">High-speed chase sequences</li>
          <li className="mb-2">Drift and controlled slide maneuvers</li>
          <li className="mb-2">J-turns, 180s, and other technical driving skills</li>
          <li className="mb-2">Motorcycle stunts and specialized vehicle operation</li>
        </ul>
        <p className="text-text-normal mb-4">
          Our drivers maintain rigorous training schedules to ensure their skills remain sharp and up-to-date with the 
          latest techniques and safety protocols in the industry.
        </p>
      </section>

      {/* Action Design Section */}
      <section className="bg-background-secondary p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-text mb-4">Action Design</h2>
        <p className="text-text-normal mb-4">
          Creating memorable action sequences begins with exceptional design. Our action design team works with you from 
          pre-production to develop dynamic, visually stunning driving sequences that advance your story and create 
          unforgettable moments for your audience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-medium text-text mb-2">Pre-Visualization</h3>
            <p className="text-text-normal mb-4">
              We provide detailed storyboards, 3D visualizations, and animatics to help you see the sequence before filming begins.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-text mb-2">Technical Planning</h3>
            <p className="text-text-normal mb-4">
              Comprehensive planning for camera positions, vehicle modifications, and special equipment needs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-text mb-2">Location Scouting</h3>
            <p className="text-text-normal mb-4">
              Expert assessment of potential filming locations to ensure they meet both creative and safety requirements.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-text mb-2">Risk Assessment</h3>
            <p className="text-text-normal mb-4">
              Thorough evaluation of all stunts with detailed safety protocols and contingency plans.
            </p>
          </div>
        </div>
      </section>

      {/* Stunt Coordination Section */}
      <section className="bg-background-secondary p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-text mb-4">Stunt Coordination</h2>
        <p className="text-text-normal mb-4">
          Our stunt coordinators bring years of experience in planning and executing complex automotive action sequences. 
          They serve as the critical link between the creative vision and practical execution, ensuring that every 
          aspect of your driving sequence is meticulously planned and safely executed.
        </p>
        <p className="text-text-normal mb-4">
          Our coordination services include:
        </p>
        <ul className="list-disc list-inside text-text-normal mb-4 ml-4">
          <li className="mb-2">Comprehensive stunt breakdowns and shot planning</li>
          <li className="mb-2">Crew selection and management</li>
          <li className="mb-2">On-set safety supervision</li>
          <li className="mb-2">Liaison with production teams and other departments</li>
          <li className="mb-2">Real-time problem solving and adaptation during filming</li>
        </ul>
        <p className="text-text-normal mb-4">
          Our coordinators pride themselves on their ability to deliver spectacular results while maintaining the highest 
          standards of safety for all cast and crew members.
        </p>
      </section>

      {/* Arm Car and Camera Car Driving Section */}
      <section className="bg-background-secondary p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-text mb-4">Arm Car and Camera Car Driving Experience</h2>
        <p className="text-text-normal mb-4">
          Capturing the perfect shot requires not only skilled performers but also expert camera vehicle operators. 
          Our team includes specialized drivers with extensive experience operating camera cars, Russian arms, and other 
          camera platforms.
        </p>
        <p className="text-text-normal mb-4">
          Action Driving proudly works with <span className="text-text font-medium">CineTorque</span>, an industry leader in camera 
          vehicle technology. This partnership allows us to offer state-of-the-art camera cars and arm systems operated by 
          drivers who understand both the technical requirements of filming and the creative needs of directors and 
          cinematographers.
        </p>
        <p className="text-text-normal mb-4">
          Our camera vehicle operators are trained to:
        </p>
        <ul className="list-disc list-inside text-text-normal mb-4 ml-4">
          <li className="mb-2">Execute precise, repeatable driving patterns</li>
          <li className="mb-2">Maintain optimal camera positions throughout complex sequences</li>
          <li className="mb-2">Work in close coordination with stunt performers</li>
          <li className="mb-2">Adapt quickly to changing conditions and requirements</li>
        </ul>
      </section>

      {/* Vehicle Coordination Section */}
      <section className="bg-background-secondary p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-text mb-4">Vehicle Coordination</h2>
        <p className="text-text-normal mb-4">
          From sourcing the perfect vehicles for your production to ensuring they're properly prepared for stunts, 
          our vehicle coordination team handles all aspects of automotive logistics for your project.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-medium text-text mb-2">Vehicle Sourcing</h3>
            <p className="text-text-normal mb-4">
              Access to an extensive network of specialty vehicles, from vintage classics to modern supercars and custom-built stunt vehicles.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-text mb-2">Technical Preparation</h3>
            <p className="text-text-normal mb-4">
              Expert mechanics and fabricators who can modify vehicles for specific stunts and ensure they perform reliably.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-text mb-2">Transportation Logistics</h3>
            <p className="text-text-normal mb-4">
              Comprehensive management of vehicle transportation, storage, and on-set handling.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-text mb-2">Maintenance and Repair</h3>
            <p className="text-text-normal mb-4">
              On-set technical support to keep vehicles running throughout your production schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Link 
          href="/contact" 
          className="inline-block bg-accent hover:bg-accent-hover text-text font-medium py-2 px-6 rounded-md transition-colors duration-default"
        >
          Request Our Services
        </Link>
      </div>
    </div>
  );
}
