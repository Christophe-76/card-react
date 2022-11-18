import iconCart from "./icon-cart.svg";
import mainImg from "./image-product-desktop.jpg";
import './App.css';
import './Card.css';
import './display.css';
import React from 'react';

// creation des props pour le produit
// le type, son titre, sa description, son prix, prix réduit, le bouton, les images

function ProdType(props) {
    return <header className="header">{props.name}</header>;
  }
  function ProdTitle(props) {
    return <div className="title">{props.name}</div>;
  }
  function ProdDescription(props) {
    return <div className="description">{props.name}</div>;
  }
  function ProdPrice(props) {
    return <div className="price">${props.name}</div>;
  }
  function ProdPrevPrice(props) {
    return <div className="prevprice">${props.name}</div>;
  }
  function MainImg() {
    return <img className="mainImg" src={mainImg} alt="product" />;
  }
  function ButtonAddToCart(props) {
    return (
      <div className="btnAddToCart">
        <img className="iconCart" src={iconCart} alt="icon-cart" />
        {props.name}
      </div>
    );
  }
  
  function Card () {
    return (
        <div className="main">
          <div className="card">
            <div className="left">
              <MainImg />
            </div>
            <div className="right">
              <ProdType name="PERFUME" />
              <ProdTitle name="Gabrielle Essence Eau De Parfum" />
              <ProdDescription name="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL." />
              <div className="prices">
                <ProdPrice name="149.99" /> <ProdPrevPrice name="169.99" />
              </div>
              <ButtonAddToCart name="Add to Cart" />
            </div>
          </div>
        </div>
      );

}


export default Card;

