import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-8 lg:px-[120px] py-6 bg-transparent border-b border-gray-100/50">
      <div className="font-['Comfortaa:Bold',_sans-serif] text-[18px] text-[#25282b]">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          Madelyn Torff
        </Link>
      </div>
      <nav className="flex items-center gap-8 lg:gap-12">
        <Link 
          href="/about" 
          className="font-['Raleway:Medium',_sans-serif] text-[18px] text-[#25282b] hover:opacity-80 transition-opacity"
        >
          About
        </Link>
        <button className="font-['Raleway:Medium',_sans-serif] text-[18px] text-[#25282b] hover:opacity-80 transition-opacity">
          Projects
        </button>
        <button className="font-['Raleway:Medium',_sans-serif] text-[18px] text-[#25282b] hover:opacity-80 transition-opacity">
          Contacts
        </button>
      </nav>
    </header>
  );
}
