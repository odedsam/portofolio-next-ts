import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function HeroLinks() {
  return (
      <div className="flex space-x-4 mt-16 md:mt-12 cursor-pointer">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub size={45} className="text-neon-blue hover:text-neon-pink transition" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={45} className="text-neon-blue hover:text-neon-pink transition" />
        </a>
        <a href="mailto:oded@example.com">
          <FaEnvelope size={45} className="text-neon-blue hover:text-neon-pink transition" />
        </a>
      </div>
  );
}
// &#x7B;&#x7D;
// &#123;&#125;
