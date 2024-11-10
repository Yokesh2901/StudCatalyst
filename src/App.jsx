import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import BrandLogo from './components/BrandsLogo/BrandsLogo'
import Services from './components/Services/Services'
import BlogsComp from './components/Blogs/BlogsComp'
import Footer from './components/Footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <BrandLogo />
      <Services />
      <BlogsComp />
      <Footer />
    </div>
  )
}

export default App