import React from 'react';
import {
  Footer,
  Blog,
  Possibillity,
  Features,
  WhatGPT3,
  Header,
} from './containers';
import { CTA, Brand, NavBar } from './components';
import './App.css';

export default function App() {
  return (
    <>
      <section className='App'>
        <section className='gradient__bg'>
          <NavBar />
          <Header />
        </section>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibillity />
        <CTA />
        <Blog />
        <Footer />
      </section>
    </>
  );
}
