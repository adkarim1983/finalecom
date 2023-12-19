import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
     console.log("Selected Size :", size);
  };
  
  
  const handleAddToCart = () => {
    addToCart(product.id, selectedSize); 
  };
  const selectedSizeDisplay = selectedSize ? <p>Taille sélectionnée : {selectedSize}</p> : null;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">{product.old_price} Dh</div>
          <div className="productdisplay-right-price-new">{product.new_price} Dh</div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Séléctionez Votre Taille:</h1>
          <div className="productdisplay-right-sizes">            
            <div className={selectedSize === 'S' ? 'selected' : ''} onClick={() => handleSizeSelection('S')}>S</div>
            <div className={selectedSize === 'M' ? 'selected' : ''} onClick={() => handleSizeSelection('M')}>M</div>
            <div className={selectedSize === 'L' ? 'selected' : ''} onClick={() => handleSizeSelection('L')}>L</div>
            <div className={selectedSize === 'XL' ? 'selected' : ''} onClick={() => handleSizeSelection('XL')}>XL</div>
            <div className={selectedSize === 'XXL' ? 'selected' : ''} onClick={() => handleSizeSelection('XXL')}>XXL</div>
          </div>
        </div>
        <button onClick={handleAddToCart}>Ajouter au Panier</button>

      </div>
    </div>
  )
}

export default ProductDisplay
