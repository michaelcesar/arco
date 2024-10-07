import Image from 'next/image';

interface ImagesProps {
  url: string;
  width?: number;
  height?: number;
}

export default function Images({
  url,
  width = 140,
  height = 140
}: ImagesProps) {
  return <Image src={url} alt="logo" width={width} height={height} />;
}
