import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HomeSection() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center space-y-4 px-6 dark:main-gradient">
      <h2 className="text-6xl font-bold text-neon-blue drop-shadow-md text-center"> Full-Stack Developer</h2>
      <p className="text-lg max-w-xl text-gray-300 font-light">
        Passionate about building scalable and user-friendly web applications.
      </p>
      <div className="flex space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={35} className="text-neon-blue hover:text-neon-pink transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={35} className="text-neon-blue hover:text-neon-pink transition" />
        </a>
        <a href="mailto:oded@example.com">
          <FaEnvelope size={35} className="text-neon-blue hover:text-neon-pink transition" />
        </a>
      </div>
    </section>
  );
}
