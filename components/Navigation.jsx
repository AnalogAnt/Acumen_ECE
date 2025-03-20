import Link from 'next/link';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="flex justify-center items-center gap-8 mt-4">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={`text-white hover:text-gray-300 transition-colors ${
            router.pathname === link.path ? 'font-bold' : ''
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navigation; 