"use client"
import "./ui/globals.css";
import Courses from './ui/landing/courses/courses';
import FAQ from './ui/landing/faq/faq';
import Footer from './ui/landing/footer/footer';
import Logos from './ui/landing/logos/logos';
import Navbar from './ui/landing/navbar/navbar';
import Pricing from './ui/landing/pricing/pricing';
import Reviews from './ui/landing/reviews/reviews';
import Sylabus from './ui/landing/sylabus/sylabus';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Courses/>
      <Sylabus/>
      <Reviews/>
      <Logos/>
      <FAQ/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default Home

