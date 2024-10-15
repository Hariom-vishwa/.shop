
import "./App.css";
import "./Men.css";

export function Menfashion() {
  const mensWear = [
    {
      photo: "https://m.media-amazon.com/images/I/61zXG2OWWgL._AC_UY1100_.jpg",
      name: "Straight Fit Jeans",
      color: "Light Blue",
      size: 32,
      price: 499,
    },
    {
      photo: "https://www.snitch.co.in/cdn/shop/files/5c2f787416549624179e94f26a709a5d.webp",
      name: "Slim Fit Chinos",
      color: "Khaki",
      size: 34,
      price: 699,
    },
    {
      photo: "https://images.bestsellerclothing.in/data/JJ/26-may-2023/209239202_g1.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto",
      name: "Polo T-Shirt",
      color: "Navy Blue",
      size: "L",
      price: 349,
    },
    {
      photo: "https://www.saintg.in/cdn/shop/files/Untitled-27.1.jpg?v=1703237545&width=1080",
      name: "Leather Jacket",
      color: "Black",
      size: "M",
      price: 2499,
    },
    {
      photo: "https://www.sporto.in/cdn/shop/products/2_23030189-c443-4aa6-aa4e-7c1cd613a63a_1200x1600.jpg",
      name: "Casual Shorts",
      color: "Olive Green",
      size: 36,
      price: 599,
    },
    {
      photo: "https://5.imimg.com/data5/SELLER/Default/2021/8/NH/IK/JL/114353871/men-grey-plain-hoodies.jpg",
      name: "Hooded Sweatshirt",
      color: "Gray",
      size: "XL",
      price: 1199,
    },
    {
      photo: "https://www.andamen.com/cdn/shop/products/01_bc099c88-3938-4b4d-bf63-6523ea805bc5.jpg",
      name: "Formal Dress Shirt",
      color: "White",
      size: 42,
      price: 799,
    },
    {
      photo: "https://assets.ajio.com/medias/sys_master/root/20231116/cVVz/65562c23afa4cf41f58e15c8/-473Wx593H-469534189-black-MODEL.jpg",
      name: "Running Shoes",
      color: "Black",
      size: 10,
      price: 1299,
    },
    {
      photo: "https://assets.ajio.com/medias/sys_master/root/20230801/NcPl/64c91f48a9b42d15c9818c26/-473Wx593H-466385762-blue-MODEL.jpg",
      name: "Denim Jacket",
      color: "Blue",
      size: "L",
      price: 1999,
    },
    {
      photo: "https://getketchadmin.getketch.com/product/8905404271259/660/HLTR004577_6.jpg",
      name: "Cargo Pants",
      color: "Beige",
      size: 38,
      price: 899,
    },
  ];

  return (
    <>
      
      {/* Main  */}

      <h1>Men's Wear - Fashion</h1>

      <div className="itemsCont">
        {mensWear.map((data) => {
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
            </div>
          );
        })}
      </div>
    </>
  );
}
