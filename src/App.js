import React from 'react';
import './App.css';
import { Header, Features, Testimonials, Pricing, ContactForm, Footer, Hero } from "./Components/index.js";



function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
