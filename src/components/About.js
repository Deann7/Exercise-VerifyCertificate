export default function About() {
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-8 py-8 relative"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="w-full md:w-1/2 flex justify-center transform hover:scale-105 transition-all duration-300">
          <img 
            src="/Computer.png" 
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
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              It has survived not only five centuries, but also the leap into electronic typesetting, 
              remaining essentially unchanged. It was popularised in the 1960s with the release of 
              Letraset sheets containing Lorem Ipsum passages.
            </p>
          </div>
        </div>
      </div>

      <img 
        src="/ak2.png" 
        alt="Decoration"
        className="absolute top-0 opacity-40 right-0 w-28 sm:w-40 md:w-80 h-auto animate-float z-10"
      />
      <img 
        src="/bk2.png" 
        alt="Decoration"
        className="absolute bottom-0 opacity-40 right-0 w-12 sm:w-16 md:w-28 h-auto animate-float delay-150"
      />
      <img 
        src="/bl2.png" 
        alt="Decoration"
        className="absolute bottom-0 opacity-40 left-0 w-12 sm:w-16 md:w-28 h-auto animate-float delay-300"
      />
    </div>
  );
}
