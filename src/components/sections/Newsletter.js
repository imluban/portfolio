export default function Newsletter() {
  return (
    <section className="py-32">
      <div className="max-w-3xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold mb-6">
          Stay Updated
        </h2>

        <p className="text-white/60 mb-10">
          Insights on AI, startups,
          software development and building products.
        </p>

        <form className="flex gap-4 flex-col md:flex-row">
          <input
            type="email"
            placeholder="Email Address"
            className="
              flex-1
              p-4
              rounded-full
              bg-black
              border
              border-white/10
            "
          />

          <button
            className="
              px-8
              py-4
              rounded-full
              bg-[var(--accent)]
              text-black
              font-semibold
            "
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
}