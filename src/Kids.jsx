import { Link } from "react-router-dom";
import "./Styles/Men.css";

export const kidsWear = [
  {
    photo:
      "https://rightmarc.com/cdn/shop/files/Girl_-_Right_Marc-2783096.jpg?v=1724758077",
    name: "Printed T-shirt",
    color: "Yellow",
    size: "8-10 years",
    price: 399,
    details: {
      material: "Cotton",
      fit: "Regular Fit",
      pattern: "Printed",
      sleeves: "Short Sleeves",
      neckStyle: "Round Neck",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "Right Marc",
      countryOfOrigin: "India",
    },
  },
  {
    photo:
      "https://images.bestsellerclothing.in/data/JJ/22-mar-2024/900381301_g4.jpg",
    name: "Cargo Shorts",
    color: "Dark Green",
    size: "9-11 years",
    price: 599,
    details: {
      material: "Cotton",
      fit: "Regular Fit",
      pattern: "Solid",
      length: "Above Knee",
      pockets: "4 Pockets",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "JJ",
      countryOfOrigin: "India",
    },
  },
  {
    photo:
      "https://assets.ajio.com/medias/sys_master/root/20231025/EvJM/65381af7ddf7791519553902/-473Wx593H-466743580-mustard-MODEL.jpg",
    name: "Hooded Sweatshirt",
    color: "Mustard Yellow",
    size: "6-7 years",
    price: 899,
    details: {
      material: "Fleece",
      fit: "Regular Fit",
      pattern: "Solid",
      sleeves: "Full Sleeves",
      neckStyle: "Hooded",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "AJIO",
      countryOfOrigin: "India",
    },
  },
  {
    photo:
      "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/10241901/2020/11/5/d58ec97a-dcad-4bb0-b6cd-c0651c5022271604550763758MarksSpencerBoysNavyBlueSolidPulloverSweater1.jpg",
    name: "Solid Sweater",
    color: "Navy Blue",
    size: "7-8 years",
    price: 799,
    details: {
      material: "Wool Blend",
      fit: "Regular Fit",
      pattern: "Solid",
      sleeves: "Full Sleeves",
      neckStyle: "Round Neck",
      careInstructions: "Hand Wash",
      occasion: "Casual",
      brand: "Marks & Spencer",
      countryOfOrigin: "India",
    },
  },
  {
    photo:
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/15998722/2021/12/2/42642222-d888-4443-bfa7-653d3996902c1638445973110-METRO-KIDS-COMPANY-Boys-Navy-Blue-Solid-Regular-Shorts-39416-1.jpg",
    name: "Regular Fit Shorts",
    color: "Navy Blue",
    size: "5-6 years",
    price: 499,
    details: {
      material: "Cotton",
      fit: "Regular Fit",
      pattern: "Solid",
      length: "Above Knee",
      pockets: "2 Pockets",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "Metro Kids Company",
      countryOfOrigin: "India",
    },
  },
  {
    photo: "https://www.gap.com/webcontent/0055/015/374/cn55015374.jpg",
    name: "Denim Jacket",
    color: "Light Grey",
    size: "10-12 years",
    price: 1299,
    details: {
      material: "Denim",
      fit: "Regular Fit",
      pattern: "Solid",
      length: "Waist Length",
      sleeves: "Full Sleeves",
      closure: "Buttoned",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "GAP",
      countryOfOrigin: "India",
    },
  },
  {
    photo:
      "https://data.family-nation.com/imgprodotto/gray-label-pinafore-dress-burgundy-100-soft-organic-italian-cotton-fleece-dresses__35622.jpg",
    name: "Pinafore Dress",
    color: "Maroon",
    size: "6-7 years",
    price: 999,
    details: {
      material: "Organic Cotton",
      fit: "Regular Fit",
      pattern: "Solid",
      length: "Knee Length",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "Gray Label",
      countryOfOrigin: "Italy",
    },
  },
  {
    photo:
      "https://www.jiomart.com/images/product/500x630/rvzjexnwzz/shirazikidswear-boys-black-printed-pure-cotton-track-pants-8-9y-product-images-rvzjexnwzz-0-202209142038.jpg",
    name: "Printed Track Pants",
    color: "Dark Grey",
    size: "7-8 years",
    price: 699,
    details: {
      material: "Cotton",
      fit: "Regular Fit",
      pattern: "Printed",
      length: "Full Length",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "Shirazikidswear",
      countryOfOrigin: "India",
    },
  },
  {
    photo:
      "https://img.tatacliq.com/images/i15//437Wx649H/MP000000019799703_437Wx649H_202311291842002.jpeg",
    name: "Sneakers",
    color: "White",
    size: "6",
    price: 799,
    details: {
      material: "Synthetic",
      fit: "Regular",
      soleMaterial: "Rubber",
      pattern: "Solid",
      closure: "Lace-Up",
      careInstructions: "Wipe Clean",
      occasion: "Casual",
      brand: "Tata Cliq",
      countryOfOrigin: "India",
    },
  },
  {
    photo:
      "https://www.eliandamalia.com/wp-content/uploads/2022/05/Black_Bomber130.jpg",
    name: "Bomber Jacket",
    color: "Black",
    size: "9-10 years",
    price: 1399,
    details: {
      material: "Polyester",
      fit: "Regular Fit",
      pattern: "Solid",
      length: "Waist Length",
      sleeves: "Full Sleeves",
      closure: "Zip Closure",
      careInstructions: "Machine Wash",
      occasion: "Casual",
      brand: "Eli and Amalia",
      countryOfOrigin: "India",
    },
  },
];

export function Kidsfashion() {
  return (
    <>
      <h1>Kid's Wear - Fashion</h1>

      <div className="itemsCont">
        {kidsWear.map((data, i) => {
          return (
            <div key={i} className="item">
              <img src={data.photo} alt={data.name} />
              <div className="nameNcolor">
                <h2>{data.name}</h2>
                <h3>Price: ₹{data.price}/-</h3>
              </div>
              <Link className="viewDetails" to={`/fashion/kidsfashion/${data.name}`}>{"View Details >>"}</Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
