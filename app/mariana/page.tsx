export default function MarianaPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <section className="max-w-3xl text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-pink-400">
          Team Next.js Project
        </p>

        <h1 className="text-4xl font-bold">
          Homepage Content Section
        </h1>

        <p className="text-zinc-300 text-lg">
          This page was created by Mariana as part of the collaborative
          versioning activity. It demonstrates the use of an individual branch,
          a descriptive commit and a pull request to the development branch.
        </p>

        <div className="grid gap-4 sm:grid-cols-3 pt-4">
          <article className="rounded-2xl border border-pink-400/40 p-5">
            <h2 className="font-semibold">Branches</h2>
            <p className="text-sm text-zinc-400">
              Each member works on an individual branch.
            </p>
          </article>

          <article className="rounded-2xl border border-pink-400/40 p-5">
            <h2 className="font-semibold">Commits</h2>
            <p className="text-sm text-zinc-400">
              Every change must have a clear message.
            </p>
          </article>

          <article className="rounded-2xl border border-pink-400/40 p-5">
            <h2 className="font-semibold">Pull Request</h2>
            <p className="text-sm text-zinc-400">
              Changes are reviewed before merging.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
