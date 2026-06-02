export default function KarolPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
      <section className="max-w-3xl text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
          Git Versioning Strategy
        </p>

        <h1 className="text-4xl font-bold">
          Navigation Menu Feature
        </h1>

        <p className="text-slate-300 text-lg">
          This page was created by Karol as part of the team versioning strategy.
          The objective is to demonstrate work on an individual branch, using
          descriptive commits and a pull request to the development branch.
        </p>

        <nav className="flex flex-wrap justify-center gap-4 pt-4">
          <span className="rounded-full border border-cyan-400 px-5 py-2">
            Home
          </span>
          <span className="rounded-full border border-cyan-400 px-5 py-2">
            About
          </span>
          <span className="rounded-full border border-cyan-400 px-5 py-2">
            Services
          </span>
          <span className="rounded-full border border-cyan-400 px-5 py-2">
            Contact
          </span>
        </nav>
      </section>
    </main>
  );
}
