import Link from 'next/link';
export default function BlogPage() {
  return (
   <main className='py-12 lg:mt-12 h-screen'>
      <section className="max-w-2xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground mb-6">Coming soon: technical articles, tutorials, and personal insights.</p>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">1. First Blog Post</h2>
            <p className="text-muted-foreground mb-4">A brief description of what will be covered in this post.</p>
            <Link href="/blog?first-post" className="text-primary hover:underline">
              Read more →
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. Second Blog Post</h2>
            <p className="text-muted-foreground mb-4">Another post preview with a short description of the upcoming content.</p>
            <Link href="/blog?second-post" className="text-primary hover:underline">
              Read more →
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Third Blog Post</h2>
            <p className="text-muted-foreground mb-4">A sneak peek into what this post will talk about.</p>
            <Link href="/blog?third-post" className="text-primary hover:underline">
              Read more →
            </Link>
          </div>
        </div>
      </section>
   </main>
  );
}
