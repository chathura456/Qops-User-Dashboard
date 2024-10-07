"use client"
import Courses from './ui/landing/courses/courses'
import Footer from './ui/landing/footer/footer'
import Navbar from './ui/landing/navbar/navbar'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Footer/>
      <Courses/>
    </div>
  )
}

export default Home

