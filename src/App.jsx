import React from 'react'
import "./style.css";
import Header from './components/Header';
import Hero from "./components/Hero";
import CategoryCard from './components/CategoryCard';
import ProductCard from './components/ProductCard';
import NewsletterForm from './components/NewsletterForm';

const App = () => {
  return (
    <div>
        <Header />
        <Hero />
        <CategoryCard />
        <ProductCard />
        <NewsletterForm />
    </div>
  )
}

export default App
