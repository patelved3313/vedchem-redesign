import Image from 'next/image';

export default function Logo() {
  return (
    <div className="relative h-16 w-36">
      <Image
        src="/ved-logo.png"
        alt="Ved Chem Corporation"
        fill
        priority
        className="object-contain"
      />
    </div>
  );
}
