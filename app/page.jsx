"use client"
import "./ui/globals.css";
import Courses from './ui/landing/courses/courses';
import Footer from './ui/landing/footer/footer';
import Navbar from './ui/landing/navbar/navbar';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Courses/>
      <Footer/>
    </div>
  )
}

export default Home

