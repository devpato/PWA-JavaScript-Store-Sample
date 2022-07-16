import React from 'react';
import './Item.css';

const Item = () => {
  return (
    <>
        <div className="item">
            <img src={require(`../assets/nike1.jpeg`).default} alt="nike1"/>
            <h2>Item 1</h2>
            <button>Add To Cart</button>
        </div>
        <div className="item">
            <img src={require(`../assets/nike2.jpeg`).default} alt="nike2"/>
            <h2>Item 2</h2>
            <button>Add To Cart</button>
        </div>
        <div className="item">
            <img src={require(`../assets/nike3.jpeg`).default} alt="nike3"/>
            <h2>Item 3</h2>
            <button>Add To Cart</button>
        </div>
        <div className="item">
            <img src={require(`../assets/nike4.jpeg`).default} alt="nike4"/>
            <h2>Item 4</h2>
            <button>Add To Cart</button>
        </div>
        <div className="item">
            <img src={require(`../assets/nike5.jpeg`).default} alt="nike5"/>
            <h2>Item 5</h2>
            <button>Add To Cart</button>
        </div>
        <div className="item">
            <img src={require(`../assets/nike6.jpeg`).default} alt="nike6"/>
            <h2>Item 6</h2>
            <button>Add To Cart</button>
        </div>
    </>
  );
}

export default Item;
