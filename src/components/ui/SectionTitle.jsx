export default function SectionTitle({
  number,
  title,
}) {
  return (
    <div className="mb-20">

      <div className="flex items-center gap-4 mb-4">

        <span
          className="
          text-[#dfff00]
          text-sm
          tracking-[0.3em]
          "
        >
          {number}
        </span>

        <div className="h-px flex-1 bg-white/10" />

      </div>

      <h2 className="text-5xl md:text-6xl font-black">
        {title}
      </h2>

    </div>
  );
}