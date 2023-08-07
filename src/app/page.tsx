import Image from 'next/image';
import Navbar from '@/components/navbar';
import Products from './products/page';

export default function Home() {
  return (
    <>
      <Navbar />
      <Products />
    </>
  );
}
