export default function TrainingPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">
        Training
      </h1>

      {/* Training Philosophy Section */}
      <div className="bg-[#2f3136] p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Our Training Philosophy</h2>
        <p className="text-gray-300 mb-4">
          At Action Driving, we believe that exceptional driving skills are built on a foundation of 
          safety and technical proficiency. Our training programs are designed to develop drivers who 
          are not only fast but also responsible and consistent.
        </p>
        <p className="text-gray-300 mb-4">
          Safety is our paramount concern. We emphasize proper techniques, situational awareness, 
          and risk management in all our training sessions. We believe that a safe driver is ultimately 
          a faster driver, as confidence comes from knowing you have the skills to handle your vehicle 
          in any situation.
        </p>
        <p className="text-gray-300">
          Technical skill development is methodical and progressive in our approach. We break down 
          complex driving techniques into manageable components, allowing drivers to build competence 
          step by step. This structured approach ensures that our students develop a comprehensive 
          understanding of vehicle dynamics and control.
        </p>
      </div>

      {/* Driving Labs Section */}
      <div className="bg-[#2f3136] p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Driving Labs</h2>
        <p className="text-gray-300 mb-4">
          Our driving labs provide hands-on experience in controlled environments where you can 
          practice and refine specific skills. These sessions combine theoretical instruction with 
          practical application, allowing you to immediately implement what you've learned.
        </p>
        <p className="text-gray-300 mb-4">
          Each lab focuses on a particular aspect of performance driving, such as cornering techniques, 
          braking optimization, or managing weight transfer. Our instructors provide real-time feedback 
          and guidance throughout these sessions.
        </p>

        <h3 className="text-xl font-semibold mb-2 text-white mt-6">Eligibility Requirements</h3>
        <ul className="list-disc pl-5 text-gray-300 mb-4">
          <li className="mb-2">Valid driver's license with a clean record</li>
          <li className="mb-2">Completion of our Basic Safety Course or equivalent experience</li>
          <li className="mb-2">Vehicle in good mechanical condition (if using your own)</li>
          <li className="mb-2">Proper safety gear including helmet and appropriate footwear</li>
          <li>Signed liability waiver and proof of insurance</li>
        </ul>

        <p className="text-gray-300">
          Driving labs are scheduled monthly and have limited capacity to ensure quality instruction. 
          Early registration is recommended as these sessions typically fill quickly.
        </p>
      </div>

      {/* Private Coaching Section */}
      <div className="bg-[#2f3136] p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Private Coaching & Feedback</h2>
        <p className="text-gray-300 mb-4">
          For those seeking personalized instruction, we offer one-on-one coaching sessions with our 
          expert instructors. These private sessions are tailored to your specific goals and skill level, 
          providing targeted feedback and accelerated improvement.
        </p>
        <p className="text-gray-300 mb-4">
          Our coaching includes:
        </p>
        <ul className="list-disc pl-5 text-gray-300 mb-4">
          <li className="mb-2">Comprehensive driving assessment to identify strengths and areas for improvement</li>
          <li className="mb-2">Customized training plan based on your goals</li>
          <li className="mb-2">Video analysis of your driving technique</li>
          <li className="mb-2">Data-driven feedback using telemetry and performance metrics</li>
          <li>Follow-up sessions to track progress and refine skills</li>
        </ul>

        <p className="text-gray-300">
          Private coaching sessions can be scheduled at your convenience, subject to instructor availability. 
          Contact us directly to discuss your needs and book your personalized training experience.
        </p>
      </div>
    </div>
  );
}
