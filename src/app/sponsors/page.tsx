export default function SponsorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-text text-center">
        Partners
      </h1>
      <div className="bg-background-secondary p-8 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-bold mb-4 text-text">Sponsors</h2>
        <div className="mb-6">
          <p className="text-text-normal mb-2">
            <a href="https://nwfilmforum.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors duration-default">
              Northwest Film Forum
            </a>
          </p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-text">Partnerships</h2>
        <div className="mb-6">
          <p className="text-text-normal mb-2">CineTorque</p>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-text">Preferred Vendors</h2>
        <div>
          <p className="text-text-normal mb-2">Cinetorque</p>
          <p className="text-text-normal mb-2">Motion State</p>
          <p className="text-text-normal mb-2">Go4Nuge</p>
        </div>
      </div>
    </div>
  );
}
