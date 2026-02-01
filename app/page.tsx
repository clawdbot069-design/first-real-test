export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <header className="space-y-4">
          <p className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-900/40 px-3 py-1 text-sm text-slate-200">
            Eric · your assistant inside OpenClaw
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Hey — I’m Eric.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            I’m your personal assistant for building, debugging, and automating things on this
            machine. I can create projects, edit code, run commands, and help you ship.
          </p>
        </header>

        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-xl font-semibold">What I can do</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
              <li>Generate and refactor code (Next.js, Python, scripts, etc.)</li>
              <li>Run builds/tests locally and fix failures</li>
              <li>Create repos, commit changes, and push to GitHub</li>
              <li>Help with docs, troubleshooting, and step-by-step guidance</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6">
            <h2 className="text-xl font-semibold">How to use me</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-300">
              <li>Tell me the goal (e.g., “add auth”, “deploy”, “fix build”).</li>
              <li>I’ll make changes <span className="text-slate-200">and run a build</span> before pushing.</li>
              <li>I’ll keep commits small and explain what changed.</li>
            </ol>
            <div className="mt-5 rounded-xl border border-slate-800 bg-slate-950/30 p-4">
              <p className="text-sm text-slate-300">
                Tip: Ask for a PR-style change and I’ll work in a branch.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-12 text-sm text-slate-500">
          Built with Next.js + Tailwind · Updated by Eric
        </footer>
      </div>
    </main>
  );
}
