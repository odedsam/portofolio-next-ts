import HeroLinks from '../navigation/HeroLinks';
import MacTerminal from '../ui/MacTerminal';

export default function HeroSection() {
  return (
    <section className="w-full mt-48 sm:mt-56 mb-24 flex flex-col gap-4 items-center justify-center text-center space-y-4 md:space-y-14 px-6 dark:main-gradient">
      <div className="flex flex-col items-center max-w-full">
        <h2 className="tracking-tighter font-sans text-[min(12vw,56px)] font-extrabold text-neon-blue text-black dark:text-white drop-shadow-lg md:drop-shadow-xl md:backdrop:backdrop-contrast-100 text-center">
          Full-Stack Developer &#x7B;&#x7D;
        </h2>
      </div>
      <div className="flex flex-col items-center max-w-5xl">
        <p className="text-[min(5vw,36px)] sm:text-[min(2vw,30px)] drop-shadow-lg sm:max-w-2xl font-sans tracking-tight font-semibold">
          Passionate about building scalable and user-friendly web applications.
        </p>
      </div>
      <MacTerminal />
      <HeroLinks />
    </section>
  );
}
