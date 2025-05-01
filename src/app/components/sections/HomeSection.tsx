import HeroLinks from "../navigation/HeroLinks";

export default function HeroSection() {
  return (
    <section className="w-full mt-48 sm:mt-56 mb-24 sm:mb-24 flex flex-col gap-2 items-center justify-center text-center space-y-4 md:space-y-14 px-6 dark:main-gradient">
      <div className="flex flex-col items-center max-w-full">
        <h2 className="font-sans text-[min(12vw,56px)] font-extrabold text-neon-blue text-white drop-shadow-lg md:drop-shadow-xl md:backdrop:backdrop-contrast-100 text-center">
          Full-Stack Developer
        </h2>
      </div>
      <div className="flex flex-col items-center max-w-5xl md:max-w-full">
        <p className="text-[min(5vw,36px)] sm:text-[min(2vw,30px)] drop-shadow-lg sm:max-w-2xl font-sans font-semibold">
          Passionate about building scalable and user-friendly web applications.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[min(4vw,30px)] sm:text-[min(2vw,30px)]  sm:text-xl font-sans text-break sm:max-w-xl md:max-w-full font-medium">
          Full-Stack Developer | Problem Solver | Self-Taught Coder
        </p>
        <p className="text-[min(4vw,30px)] sm:text-[min(2vw,30px)] font-sans sm:text-xl font-medium sm:max-w-xl md:max-w-full">
          I transform ideas into elegant, functional applications. With over 3 years of hands-on experience building end-to-end solutions, I blend creative design with robust backend architecture to create memorable digital experiences.
        </p>
      </div>
      <HeroLinks />
    </section>
  );
}
