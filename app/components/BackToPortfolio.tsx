import Link from "next/link";

export default function BackToPortfolio() {
  return (
    <div className="sticky top-16 z-40 py-3 px-4 md:px-80 bg-[#fffbeb]/95 backdrop-blur-sm ">
      <Link
        href="/portfolio"
        className="inline-flex items-center gap-2 text-[#d9385b] font-space-grotesk font-semibold hover:text-[#b82d4a] transition-colors"
      >
        ← Back to portfolio
      </Link>
    </div>
  );
}
