import React, { useState, useEffect } from 'react';

const ProductCard = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError('Failed to load products.');
        setLoading(false);
      });
  }, []);

  return (
    <section className="Products-container">
      <div className="container">
        <h1>Shop by Category</h1>
        <div className="Products">
          {loading && (
            <>
              <div className="Product-card" aria-hidden="true">
                <div className="skeleton image"></div>
                <div className='product-text'>
                  <div className="skeleton text" style={{ width: '70%' }}></div>
                  <div className="skeleton text" style={{ width: '40%', marginTop: 8 }}></div>
                </div>
                <button className='product-btn' disabled>add to cart</button>
              </div>
              <div className="Product-card" aria-hidden="true">
                <div className="skeleton image"></div>
                <div className='product-text'>
                  <div className="skeleton text" style={{ width: '60%' }}></div>
                  <div className="skeleton text" style={{ width: '35%', marginTop: 8 }}></div>
                </div>
                <button className='product-btn' disabled>add to cart</button>
              </div>
              <div className="Product-card" aria-hidden="true">
                <div className="skeleton image"></div>
                <div className='product-text'>
                  <div className="skeleton text" style={{ width: '80%' }}></div>
                  <div className="skeleton text" style={{ width: '30%', marginTop: 8 }}></div>
                </div>
                <button className='product-btn' disabled>add to cart</button>
              </div>
            </>
          )}

          {!loading && error && (
            <div role="status" aria-live="polite" style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
              {error}
            </div>
          )}

          {!loading && !error && products.length === 0 && (
            <div role="status" aria-live="polite" style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
              No products available.
            </div>
          )}

          {!loading && !error && products.length > 0 && (
            products.map((product) => (
              <div className="Product-card" key={product.id}>
                <img src={product.image} alt={product.title} width="100" />
                <h3 className='product-text'>{product.title}</h3>
                <p className='product-para'>${product.price}</p>
                <button className='product-btn'>add to cart</button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
