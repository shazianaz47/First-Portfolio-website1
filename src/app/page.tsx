import React from 'react';

import Link from 'next/link';
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Portfolio from '../app/components/Portfolio';


export default function Home() {
  return (
    <div>
       <Header/>
      
      <main>
      
        <section className="bg-gray-900 text-white text-center p-16">
          <h1 className="text-5xl font-bold">Shazia Naz</h1>
          <p className="text-xl mt-4">Graphic Designer & Web Developer</p>
        </section>
         <div className="bg-blue-200 text-gray-900 p-8">
          <div className="text-4xl font-bold mb-4">
        <Link href="/skills" >Skills</Link></div></div>
        <Portfolio/> 
        {/* <Link href="/contact">contact_us</Link> */}
      </main>
      <Footer/>
    </div>
  );
}
