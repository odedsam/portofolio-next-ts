import HeroLinks from "../navigation/HeroLinks";

export default function HeroSection() {
  return (
    <section className="w-full mt-32 sm:mt-56 mb-44 sm:mb-24 flex flex-col gap-2 items-center justify-center text-center space-y-4 px-6 dark:main-gradient">
      <div className="flex flex-col items-center max-w-full">
        <h2 className="text-[min(12vw,52px)] font-extrabold text-neon-blue drop-shadow-lg text-center font-sans text-break">
          Full-Stack Developer &#x7B;&#x7D;
        </h2>
      </div>
      <div className="flex flex-col items-center max-w-5xl">
        <p className="text-[min(5vw,36px)] sm:text-[min(2vw,36px)] font-fira font-semibold">
          Passionate about building scalable and user-friendly web applications.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[min(4vw,30px)] sm:text-[min(2vw,30px)] font-sans text-break font-medium">
          Full-Stack Developer | Problem Solver | Self-Taught Coder
        </p>
        <p className="text-[min(4vw,30px)] sm:text-[min(2vw,30px)] font-sans font-medium ">
          I transform ideas into elegant, functional applications. With over 3 years of hands-on experience building end-to-end solutions, I blend creative design with robust backend architecture to create memorable digital experiences.
        </p>
      </div>
      <HeroLinks />
    </section>
  );
}
