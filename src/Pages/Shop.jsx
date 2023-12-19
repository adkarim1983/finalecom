import React from 'react'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Offers from '../Components/Offers/Offers'
import Popular from '../Components/Popular/Popular'
import PhotoComponent from '../Components/PhotoComponent/PhotoComponent'; // Import du composant

const Shop = () => {
  return (
    <div>
      <PhotoComponent />
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop


// <PhotoComponent />  essayer mettre la photo au niveau de la premiere page du site.