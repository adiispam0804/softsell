import { useState } from "react";
import Hero from "./components/hero";
import HowItWorks from "./components/howitworks";
import WhyChooseUs from "./components/whychooseus";
import Testimonials from "./components/testimonials";
import ContactForm from "./components/contactform";
import Navbar from "./components/navbar";

function App() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <head>
          <title>SoftSell - Resell Your Software Licenses</title>
          <meta name="description" content="Easily resell unused software licenses. Get a quote and earn money fast!" />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <Navbar toggleDark={() => setDark(!dark)} dark={dark} />
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
