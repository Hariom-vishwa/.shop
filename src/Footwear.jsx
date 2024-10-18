import "./Fashion.css";

export function Footwear() {
  const footwear = [
    // Male Footwear
    {
      photo: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/16242578/2023/1/11/d897d4ae-835b-426c-958b-ead461b6d0651673420612033-El-Paso-Men-Brown-Flat-Boots-1691673420611917-7.jpg",
      name: "Men's Leather Boots",
      gender: "Male",
      color: "Brown",
      size: 9,
      price: 2999,
    },
    {
      photo: "https://img.tatacliq.com/images/i14/437Wx649H/MP000000014414443_437Wx649H_202310152338341.jpeg",
      name: "Men's Running Shoes",
      gender: "Male",
      color: "Black",
      size: 10,
      price: 1599,
    },
    {
      photo: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/15778982/2021/10/25/705a529a-97a1-4b60-bdf2-64bab0d151031635184404737ProvogueMenBlackSolidFormalDebys1.jpg",
      name: "Men's Formal Shoes",
      gender: "Male",
      color: "Black",
      size: 8,
      price: 2499,
    },

    // Female Footwear
    {
      photo: "https://img.tatacliq.com/images/i18//437Wx649H/MP000000023026732_437Wx649H_202407242302351.jpeg",
      name: "Women's High Heels",
      gender: "Female",
      color: "Red",
      size: 6,
      price: 1999,
    },
    {
      photo: "https://www.tresmode.com/cdn/shop/files/the-samsy-beige-women-s-casual-ballerinas-tresmode-tresmode-1.jpg",
      name: "Women's Ballet Flats",
      gender: "Female",
      color: "Beige",
      size: 7,
      price: 899,
    },
    {
      photo: "https://assets.ajio.com/medias/sys_master/root/20230628/YT2z/649b7be8eebac147fc161384/-473Wx593H-465799664-white-MODEL.jpg",
      name: "Women's Sneakers",
      gender: "Female",
      color: "White",
      size: 6,
      price: 1499,
    },

    // Kids Footwear
    {
      photo: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/AUGUST/24/GPHDIjyq_b72e799d592f40b1a73e1f3352566b87.jpg",
      name: "Kids' Sandals",
      gender: "Kids",
      color: "Blue",
      size: 3,
      price: 499,
    },
    {
      photo: "https://www.numberoneshoesandhannahs.co.nz/content/products/meteor-lights-skechers-shoes-red-image08-meteor-lights-skechers-shoes.jpg",
      name: "Kids' Sports Shoes",
      gender: "Kids",
      color: "Red",
      size: 4,
      price: 999,
    },
    {
      photo: "https://www.touchy-style.com/cdn/shop/files/fashion-comfortable-breathable-boys-girls-children-casual-shoes-t18h-13-touchy-style-2.webp",
      name: "Kids' Casual Shoes",
      gender: "Kids",
      color: "Pink",
      size: 2,
      price: 799,
    },
  ];

  return (
    <>
      <h1>Footwear</h1>

      <div className="itemsCont">
        {footwear.map((data) => {
          return (
            <div className="item">
              <img src={data.photo} alt={data.name} />
              <div className="nameNcolor">
                <h2>{data.name}</h2>
                <h3>{data.color}</h3>
              </div>
              <div className="sizeNprice">
                <h3>Price: ₹{data.price}/-</h3>
                <h3>Size: {data.size}</h3>
              </div>
              <div className="compatibility">
                <h3>Compatible for {data.gender}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
