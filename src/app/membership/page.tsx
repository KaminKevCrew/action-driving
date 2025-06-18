import Link from 'next/link';

export default function MembershipPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-text text-center">
        Membership
      </h1>

      {/* Eligibility Requirements Section */}
      <section className="bg-background-secondary p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-text mb-4">Eligibility Requirements</h2>
        <p className="text-text-normal mb-4">
          Action Driving Collective welcomes passionate drivers who are committed to the art of precision driving and 
          professional stunt work. Our membership is open to individuals who meet the following criteria:
        </p>
        <ul className="list-disc pl-6 text-text-normal mb-4">
          <li className="mb-2">Valid driver's license with a clean driving record</li>
          <li className="mb-2">Completion of a recognized stunt driving or precision driving course</li>
          <li className="mb-2">Demonstrated commitment to safety and professionalism</li>
          <li className="mb-2">Willingness to participate in collective events and training sessions</li>
          <li className="mb-2">Recommendation from an existing member (preferred but not required)</li>
        </ul>
        <p className="text-text-normal">
          We evaluate each application on a case-by-case basis and may consider exceptional candidates who don't meet all criteria 
          but demonstrate extraordinary potential or specialized skills.
        </p>
      </section>

      {/* Membership Benefits Section */}
      <section className="bg-background-secondary p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-text mb-4">Membership Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium text-text mb-2">Professional Opportunities</h3>
            <p className="text-text-normal mb-4">
              Access to exclusive job opportunities in film, television, and live events through our industry connections and production partnerships.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-text mb-2">Advanced Training</h3>
            <p className="text-text-normal mb-4">
              Regular training sessions with industry professionals to refine and expand your driving skills and techniques.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-text mb-2">Networking</h3>
            <p className="text-text-normal mb-4">
              Connect with fellow stunt professionals, directors, and industry insiders through member-only events and gatherings.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-text mb-2">Equipment Access</h3>
            <p className="text-text-normal mb-4">
              Use of collective vehicles, safety equipment, and training facilities for personal skill development and project preparation.
            </p>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="bg-background-secondary p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-text mb-4">How to Join</h2>
        <p className="text-text-normal mb-4">
          Joining Action Driving Collective involves a straightforward application process designed to ensure that all members 
          share our commitment to excellence and safety.
        </p>
        <ol className="list-decimal pl-6 text-text-normal mb-4">
          <li className="mb-3">
            <span className="font-medium">Submit an Application</span>: Complete our online application form detailing your experience, 
            qualifications, and why you want to join the collective.
          </li>
          <li className="mb-3">
            <span className="font-medium">Initial Review</span>: Our membership committee will review your application and contact you 
            for an initial interview if your qualifications meet our requirements.
          </li>
          <li className="mb-3">
            <span className="font-medium">Skills Assessment</span>: Qualified applicants will be invited to a practical skills assessment 
            to demonstrate their driving abilities and safety awareness.
          </li>
          <li className="mb-3">
            <span className="font-medium">Probationary Period</span>: Successful candidates will enter a 3-month probationary membership 
            period, during which they'll participate in collective activities and training.
          </li>
          <li className="mb-3">
            <span className="font-medium">Full Membership</span>: Upon successful completion of the probationary period, candidates will be 
            offered full membership in the Action Driving Collective.
          </li>
        </ol>
      </section>

      {/* Membership Levels Section */}
      <section className="bg-background-secondary p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-text mb-4">Membership Levels</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-ui-border rounded-lg p-6">
            <h3 className="text-xl font-medium text-text mb-2">Associate Member</h3>
            <p className="text-text-normal mb-4">
              For emerging talent with basic qualifications. Includes access to training sessions and networking events.
            </p>
          </div>
          <div className="border border-ui-border rounded-lg p-6">
            <h3 className="text-xl font-medium text-text mb-2">Professional Member</h3>
            <p className="text-text-normal mb-4">
              For established drivers with proven experience. Includes all associate benefits plus job referrals and equipment access.
            </p>
          </div>
          <div className="border border-ui-border rounded-lg p-6">
            <h3 className="text-xl font-medium text-text mb-2">Elite Member</h3>
            <p className="text-text-normal mb-4">
              For industry veterans with exceptional skills. Includes all professional benefits plus leadership opportunities and premium industry connections.
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
          Apply for Membership
        </Link>
      </div>
    </div>
  );
}
