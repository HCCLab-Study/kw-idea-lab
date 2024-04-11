import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function News() {
  return (
    <div>
      <p>
        더 많은 소식과 근황 보기 :{' '}
        <Link target="_blank" href="https://www.instagram.com/kw.idea.lab/">
          Instagram
        </Link>
        <div className="object-cover w-[100%] p-[40%] relative">
          <Image src="/assets/image/news.png" alt="instagram" fill />
        </div>
      </p>
    </div>
  );
}
