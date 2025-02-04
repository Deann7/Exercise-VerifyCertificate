export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-8 py-8 relative"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-full md:w-1/2 flex justify-center transform hover:scale-105 transition-all duration-300">
          <img
            src="/ContohSertifikat.jpg"
            alt="Certificate Example"
            className="max-w-full md:max-w-lg"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left z-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-sky-950 mb-8 md:mb-12 transform hover:scale-102 transition-all duration-300">
            About EXERCISE Verify
          </h2>
          <div className="space-y-4">
            <p className="text-gray-700 text-base sm:text-lg">
              Exercise Verify is an online platform designed to authenticate the
              legitimacy of certificates issued by Exercise FTUI. This service
              ensures that every certificate received by participants is genuine
              and valid.
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              The platform simplifies the verification process with a fast and
              accurate system, ensuring transparency and trust in the
              certificates.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
