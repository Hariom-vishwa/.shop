import React from "react";
import { useParams } from "react-router-dom";
import { footwear } from "./Footwear";

export default function FootwearSpecs() {
  const { itemName } = useParams();
  const prod = footwear.find((pro) => pro.name === itemName);

  if (!prod) return <h2 className="prodError">Product not found</h2>;
  return (
    <>
      <div className="specsCont">
        <div className="leftPart">
          <img src={prod.photo} alt={prod.name} />
        </div>
        <div className="rightPart">
          <h1>Item Name: {prod.name}</h1>
          <div className="rightSpecs">
            <p>
              <strong>Price:</strong> <strong>₹{prod.price}/-</strong>
            </p>
            <p>
              <strong>Color:</strong> {prod.color}
            </p>
            <p>
              <strong>Size:</strong> {prod.size}
            </p>
            <p>
              <strong>Compatible for: </strong> {prod.gender}
            </p>

            {Object.entries(prod.details).map(([key, value]) => (
              <p key={key}>
                <strong>{key}:</strong> {value}
              </p>
            ))}
          </div>
          <div className="actionBtns">
            <a href="#" className="buyNow">
              Buy Now
            </a>
            <a href="#" className="addToCart">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
