import Link from 'next/link';
import React from 'react';
import Image from 'next/image';  // Import Image component

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <Image src="/logo.svg" alt="Bhartee AI Logo" width={108} height={72} /> 
    
    </Link>
  );
};