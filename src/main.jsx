import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function ProductCard({ name, price, onSale = false }) {
  const [buttonText, setButtonText] = useState("Click Me");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleClick = () => {
    setButtonText("Clicked!");
    setButtonDisabled(true);
    
    setTimeout(() => {
      setButtonText("Click Me");
      setButtonDisabled(false);
    }, 1000);
  };

  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
      {onSale && <div className="sale-badge">SALE</div>}
      <button 
        onClick={handleClick} 
        disabled={buttonDisabled}
      >
        {buttonText}
      </button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="app-container">
      <h1>Product Catalog</h1>
      <div className="products-grid">
        <ProductCard name="Wireless Headphones" price={79.99} onSale={true} />
        <ProductCard name="Smart Watch" price={149.99} />
        <ProductCard name="Bluetooth Speaker" price={39.99} onSale={true} />
      </div>
    </div>
  </React.StrictMode>
);