'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

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
        onLoad={() => setLoaded(true)}
        className={`${rest.className ?? ''} ${!loaded ? 'hidden' : ''}`}
        {...rest}
      />
    </>
  );
};

export default NextLazyImage;
