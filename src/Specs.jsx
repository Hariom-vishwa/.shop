import React from "react";
import { useParams } from "react-router-dom";
import { womensWear } from "./Women";

export default function Specs() {
  const { itemName } = useParams();
  const prod = womensWear.find((pro) => pro.name === itemName);

  if (!prod) return <h2 className="prodError">Product not found</h2>;

  return (
    <>
      <div className="specsCont">
        <div className="leftPart">
          <img src={prod.photo} alt={prod.name} />
        </div>
        <div className="rightPart">
          <h1>Item Name: {prod.name}</h1>
          <p>Price: <strong>₹{prod.price}/-</strong></p>
          <p>Color: {prod.color}</p>
          <p>Size: {prod.size}</p>
          
          {Object.entries(prod.details).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}

        </div>
      </div>
    </>
  );
}

// // Specs.js
// import React from "react";
// import { useParams } from "react-router-dom";
// import { womensWear } from "./Women";

// export default function Specs() {
//   const { productName } = useParams();
//   const prod = womensWear.find((pro) => pro.name === productName);

//   if (!prod) return <h2>Product not found</h2>;

//   return (
//     <>
//       <div>
//         <img src={prod.photo} alt="" />
//         <h1>{prod.name}</h1>
//         <p>Price: ₹{prod.price}/-</p>
//         <p>Color: {prod.color}</p>
//         <p>Size: {prod.size}</p>
//         <h3>Details:</h3>
//         {/* <ul>
//           {Object.entries(prod.details).map(([key, value]) => (
//             <li key={key}>
//               <strong>{key}:</strong> {value}
//             </li>
//           ))}
//         </ul> */}
//       </div>
//     </>
//   );
// }
