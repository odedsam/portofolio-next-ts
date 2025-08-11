'use client';

import type { ImageProps } from 'next/image';
import { useState } from 'react';
import { FALLBACK_IMAGE } from '@/config';
import Image from 'next/image';

type LazyImageProps = {
  src: string;
  alt: string;
  placeholder?: React.ReactElement;
} & Omit<ImageProps, 'src' | 'alt'>;

const NextLazyImage = ({ src, alt, placeholder, ...rest }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && placeholder}
      <Image
        src={src}
        alt={alt}
        width={400}
        height={300}
        sizes="(max-width: 768px) 100vw, 50vw"
        blurDataURL={FALLBACK_IMAGE}
        onLoad={() => setLoaded(true)}
        className={`${rest.className ?? ''} ${!loaded ? 'hidden' : ''}`}
        {...rest}
      />
    </>
  );
};

export default NextLazyImage;
