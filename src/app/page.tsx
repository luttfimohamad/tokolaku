import Image from 'next/image';
import Navbar from '@/components/navbar';
import Products from './Products/page';

export default function Home() {
  return (
    <>
      <Navbar />
      <Products />
    </>
  );
}
