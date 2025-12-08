import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-8 py-12 border-t border-stone-200 bg-cream">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <Link href="/" className="block font-serif text-2xl italic mb-6">Adorned Adult Family Home</Link>
          <div className="flex flex-col gap-2 text-xs text-stone-500 font-medium">
            <p>1115 I Street NE, Auburn, WA 98002</p>
            <a href="mailto:adornedafh@gmail.com" className="hover:text-stone-900">adornedafh@gmail.com</a>
            <a href="tel:+12533865737" className="hover:text-stone-900">(253) 386-5737</a>
          </div>
        </div>

        <div className="flex gap-8 text-[10px] uppercase tracking-widest font-semibold text-stone-500">
          <a href="https://adornedafh.com" className="hover:text-stone-900 transition-colors">Website</a>
          <a href="#" className="hover:text-stone-900 transition-colors">Facebook</a>
          <a href="#" className="hover:text-stone-900 transition-colors">License #756441</a>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-stone-200/50 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-400 uppercase">
        <p>© 2022-2025 Adorned Adult Family Home LLC. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-stone-600">Privacy</a>
          <a href="#" className="hover:text-stone-600">Terms</a>
        </div>
      </div>
    </footer>
  );
}
