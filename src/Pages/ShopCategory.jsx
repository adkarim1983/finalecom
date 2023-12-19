import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'


const ShopCategory = (props) => {
  const path = window.location.pathname; // Retrieves the path from the URL

  
  // Split the path using '/' and get the last segment which should contain "chemises"
  const segments = path.split('/');
  var category = segments[segments.length - 1]; // Retrieves "chemises" from the URL
  category = category.charAt(0).toUpperCase() + category.slice(1);

  console.log(category); // Outputs: "chemises"
  


  const {all_product} = useContext(ShopContext);
  console.log(all_product);

  const filteredProducts = all_product.filter(item => item.category == category);
  console.log(filteredProducts)

  const items = filteredProducts.map((item, i) => (
    <Item
      key={i}
      id={item.id}
      name={item.name}
      image={item.image}
      category={item.category}
      new_price={item.new_price}
      old_price={item.old_price}
    />
  ));
  
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-products">
        {items}
      </div>
    </div>
  );
  
}   

export default ShopCategory 
/*   
// apres avoir testé le code,  les produits ne sont plus affichés
{all_product
  .filter(item => props.category === item.category) 
  .map((item, i) => (
    <Item
      key={i}
      id={item.id}
      name={item.name}
      image={item.image}
      category={item.category}
      new_price={item.new_price}
      old_price={item.old_price}
    />
  ))}
*/