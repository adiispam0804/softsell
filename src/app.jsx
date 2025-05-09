import { useState } from "react";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";

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
