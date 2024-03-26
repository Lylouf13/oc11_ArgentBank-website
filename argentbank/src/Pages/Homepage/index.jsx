import React from 'react'

import Header from '../../Components/Header/Header';
import Banner from '../../Components/Banner/Banner'
import Footer from '../../Components/Footer/Footer';
import Features from '../../Containers/Features/Features';

export default function Homepage() {
  return (
    <div>
        <Header />
        <Banner />
        <Features />
        <Footer />
    </div>
  )
}
