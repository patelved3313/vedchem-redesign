import Image from 'next/image';
import Link from 'next/link';
export default function Logo(){return <Link href="/en" className="flex items-center gap-3"><Image src="/ved-logo.png" alt="Ved Chem Corporation" width={118} height={54} className="h-12 w-auto object-contain" priority/></Link>}
