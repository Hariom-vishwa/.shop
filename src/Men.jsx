
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
    {
      photo: "https://infinia.in/cdn/shop/products/1_55e21ecd-7d51-4411-a4f3-f00df1f86d42.jpg",
      name: "Printed T-Shirt",
      color: "Red",
      size: "M",
      price: 299,
    },
    {
      photo: "https://spykar.com/cdn/shop/products/L2igAtcjqh-1.jpg",
      name: "Denim Shirt",
      color: "Dark Blue",
      size: 40,
      price: 1099,
    },
    {
      photo: "https://n.nordstrommedia.com/id/sr3/2bfee7de-e7b9-4a5a-bf81-a76f73eda77d.jpeg",
      name: "V-Neck Sweater",
      color: "Burgundy",
      size: "L",
      price: 1499,
    },
    {
      photo: "https://imagescdn.vanheusenindia.com/img/app/product/6/668521-6885713.jpg",
      name: "Track Pant",
      color: "Gray",
      size: 34,
      price: 499,
    },
    {
      photo: "https://img0.junaroad.com/uiproducts/20478725/zoom_0-1698938552.jpg",
      name: "Casual Blazer",
      color: "Navy Blue",
      size: 40,
      price: 2599,
    },
    {
      photo: "https://veirdo.in/cdn/shop/files/Eyes-on-Style-Men-s-Blue-Hoodie-with-Eye-Print-Veirdo-2656.jpg",
      name: "Graphic Hoodie",
      color: "Blue",
      size: "XL",
      price: 999,
    },
    {
      photo: "https://img0.junaroad.com/uiproducts/18145037/zoom_0-1641905653.jpg",
      name: "Formal Trousers",
      color: "Charcoal Gray",
      size: 36,
      price: 799,
    },
    {
      photo: "https://images.express.com/is/image/expressfashion/0037_04105192_1056_5_fb?cache=on&wid=480&fmt=jpeg&qlt=85,1&resmode=sharp2&op_usm=1,1,5,0&defaultImage=Photo-Coming-Soon",
      name: "Peacoat",
      color: "Black",
      size: 42,
      price: 3499,
    },
    {
      photo: "https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/k/m/w/s-classic-henley-evolve-fashions-original-imagwjk7zj4h7rat.jpeg",
      name: "Henley T-Shirt",
      color: "Dark Navy",
      size: "L",
      price: 549,
    },
    {
      photo: "https://www.hancockfashion.com/cdn/shop/products/1_a40c6863-2a3a-4457-bfb0-607bc7c64c40.jpg",
      name: "Button-Down Shirt",
      color: "Light Blue",
      size: 42,
      price: 649,
    },
    {
      photo: "https://getketchadmin.getketch.com/product/8905980330012/660/KHJK000127_1.JPG",
      name: "Bomber Jacket",
      color: "Green",
      size: "M",
      price: 2299,
    },
    {
      photo: "https://images.bestsellerclothing.in/data/selected/2-mar-2022/216498201_2.jpg",
      name: "Slim Fit Blazer",
      color: "Light Pink",
      size: 42,
      price: 2799,
    },
    {
      photo: "https://www.verywellfit.com/thmb/pYgtg51O8KxgguQDQr5ISLLAUGA=/fit-in/1500x4329/filters:no_upscale():max_bytes(150000):strip_icc()/vwt-best-overall-shoe-test-reebok-nano-x2-training-tstaples-017-d5a2db6ac9df4087a0507eb77dfe0387.jpg",
      name: "Athletic Shoes",
      color: "Gray",
      size: 9,
      price: 1699,
    },
    {
      photo: "https://www.tistabene.com/cdn/shop/products/mainimage1607084616.jpg",
      name: "Printed Shirt",
      color: "Brown",
      size: 38,
      price: 999,
    }
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
