import { Oswald } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
  display: 'swap',
});

export default function HeaderLogo() {
  return (
    <Link href="/home">
      <div className="flex items-center">
        <span className="py-2 px-3">
          <Image
            src="/assets/image/kw-icon.jpeg"
            alt="kwangwoon icon"
            height={40}
            width={141.641}
          />
        </span>
        <span className={`py-4 px-3 text-xl ${oswald.className} font-[400]`}>
          IDEA Lab
        </span>
      </div>
    </Link>
  );
}
