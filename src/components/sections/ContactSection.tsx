'use client';

import { useRef } from 'react';
import { MdEmail, MdSend } from 'react-icons/md';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <section id="contact" className="py-20 px-6 bg-base-200 border-t border-base-300">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <MdEmail className="text-3xl text-primary" />
          <h2 className="text-3xl font-bold text-base-content">Let&lsquo;s Connect</h2>
        </div>

        <p className="text-base-content/70 mb-10">Have a project in mind, job offer, or just want to say hi? I&lsquo;d love to hear from you.</p>

        <form
          ref={formRef}
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submission is disabled. Contact me via email instead.');
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <input type="text" placeholder="Your Name" required className="input input-bordered w-full" />
          <input type="email" placeholder="Your Email" required className="input input-bordered w-full" />
          <textarea placeholder="Your Message" required className="textarea textarea-bordered md:col-span-2 w-full min-h-[140px]" />
          <button type="submit" className="btn btn-primary md:col-span-2 gap-2">
            <MdSend />
            Send Message
          </button>
        </form>

        <div className="mt-10 text-sm text-base-content/60">
          Or email me directly at:{' '}
          <a className="underline" href="mailto:oded970@gmail.com">
            oded970@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
