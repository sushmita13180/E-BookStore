import React from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function About() {
  return (
    <>
    <Navbar />
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4  my-12 md:mt-10'>
      <hr className='mt-20' />
      <h1 className='text-2xl font-semibold text-center underline mt-10'>About Us</h1>

<p className='mt-4 text-justify'>
Welcome to my <span className='text-blue-700'>Sushmita E-Bookstore</span>, your one-stop destination for discovering and reading the best e-books across all genres! Our mission is simple: to bring the world of literature to your fingertips and provide an enjoyable, seamless reading experience for book lovers everywhere.
</p>

<p className='mt-3 text-justify'>We believe that books are windows to new worlds, ideas, and perspectives. Whether you're looking for the latest bestsellers, timeless classics, or hidden gems from independent authors, our carefully curated collection offers something for everyone.</p>

<p className='mt-3 text-justify'> 
At <span className='text-blue-700'>Sushmita E-Bookstore</span>, we are passionate about reading and are committed to making e-books easily accessible to all. Our user-friendly platform allows you to explore books, purchase, and enjoy your reading experience on any device, anytime, anywhere. Plus, our personalized recommendations and frequent discounts make it easier than ever to dive into your next great read.
</p>

<p className='mt-3 text-justify'>
We pride ourselves on offering a vast selection, from fiction to non-fiction, fantasy to self-help, and everything in between. Our team works tirelessly to ensure that every e-book you find here is of the highest quality, with a secure and easy purchasing process.
</p>

<p className='mt-3 text-justify'>
Join us today, and become part of a growing community of readers who share a love for books and a passion for learning, growing, and escaping into captivating stories.
</p>

<h2 className='text-xl font-semibold underline mt-3'>
Our Values:
</h2>

<ul className='mt-2'>
<li>
  <span className='font-semibold'>Accessibility :</span> We believe that every reader should have access to the books they love, on any device they choose.</li>
<li><span className='font-semibold'>Quality :</span> We ensure that all books offered on our platform are carefully selected for quality and value.</li>
<li><span className='font-semibold'>Community :</span> We strive to build a community where readers can connect, share, and discover new favorites.</li>
<li><span className='font-semibold'>Innovation :</span> We are committed to bringing you the best digital reading experience with continuous improvements to our platform.</li>
</ul>
<br />
Explore. Read. Discover.

<p className='text-xl text-red-500 text-center'>😊Happy reading...😊</p>
    </div>
    <Footer />
    </>
  )
}

export default About;