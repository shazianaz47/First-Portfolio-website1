import React from 'react';


import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import About from '../app/components/About';
import Skills from '../app/components/Skills';
import Portfolio from '../app/components/Portfolio';
import Contact from '../app/components/Contact';

export default function Home() {
  return (
    <div>
       <Header/>
       
      <main>
        <section className="bg-gray-900 text-white text-center p-16">
          <h1 className="text-5xl font-bold">Shazia Naz</h1>
          <p className="text-xl mt-4">Graphic Designer & Web Developer</p>
        </section>
             <About/>         
        <Skills/>
        <Portfolio/> 
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}
