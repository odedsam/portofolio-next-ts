import { Mail } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';



export default function ContactPage() {
  return (
    <main className="py-24 lg:mt-12 h-screen">
      <section className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <p className="text-muted-foreground mb-6">
          Let’s connect! Feel free to reach out for freelance work, collaborations, or just to say hi.
        </p>

        <div className="space-y-4">
          <Link href="mailto:oded970@gmail.com" className="flex items-center gap-2 text-primary hover:underline">
            <Mail className="w-5 h-5" />
            oded970@gmail.com
          </Link>

          <Link
            href="https://linkedin.com/in/oded-shmuel-18484a338/"
            target="_blank"
            className="flex items-center gap-2 text-primary hover:underline">
            <FaLinkedin className="w-5 h-5" />
            LinkedIn Profile
          </Link>
        </div>
      </section>
    </main>
  );
}
