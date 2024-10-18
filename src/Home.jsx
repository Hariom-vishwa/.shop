import { Link } from "react-router-dom";
import "./App.css";
import "./Home.css";
import { Fashion } from "./Fashion";

export function Home() {
  const carouselDets = [
    {
      h2: "Fashion Sale",
      h1: "Minimal Men Style",
      p: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Etmolestiae repudiandae deserunt iusto reiciendis mollitia placeat,non natus earum! Dolores aliquid facere assumenda!",
      id: "/fashion/menfashion",
      img: "https://i.pinimg.com/564x/86/2c/cf/862ccfc2d64b7c56d31d7d7db94b09df.jpg",
    },
    {
      h2: "New Arrivals",
      h1: "Women's Collection",
      p: "Experience the fresh look with our latest collection. Adorn yourself with style and comfort.",
      id: "/fashion/womenfashion",
      img: "https://rukminim2.flixcart.com/image/850/1000/xif0q/kurta/n/h/0/l-kurta-new-set-1-traditional-fashion-original-imagmxjutefa6nej.jpeg",
    },
    {
      h2: "Exclusive Offer",
      h1: "Trendy Footwear",
      p: "Step up your fashion game with the trendiest footwear of the season. Comfort meets style.",
      id: "/fashion/footwear",
      img: "https://images.squarespace-cdn.com/content/v1/528e7c71e4b0fe20836f0a7e/5f4bf449-d8dd-4631-9ac6-b11f312cf04c/apostolos-vamvouras-SfzbMnIocdc-unsplash.jpeg",
    },
    {
      h2: "Urban Style",
      h1: "Streetwear Collection",
      p: "Discover the coolest streetwear styles to elevate your everyday look. Casual yet trendy.",
      id: "/fashion/streetwear",
      img: "https://imgmedia.lbb.in/media/2023/01/63c7eedd8a2b7e788b49ab8d_1674047197118.jpg",
    },
    {
      h2: "Winter Special",
      h1: "Cozy Jackets and Coats",
      p: "Beat the cold with our winter collection. Warm and fashionable jackets and coats just for you.",
      id: "/fashion/winter",
      img: "https://instagram.fvns6-1.fna.fbcdn.net/v/t39.30808-6/435712432_18437817922015028_7188975271925530558_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=instagram.fvns6-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=F63HSBLvU98Q7kNvgGgetdQ&_nc_gid=2381735332f541e29090a2545210a92d&edm=ANTKIIoAAAAA&ccb=7-5&oh=00_AYAfnNY4FnIHvArkkRoehZtvLvR4TORfooDPuioTGVywLQ&oe=6717C2C2&_nc_sid=d885a2",
    },
  ];

  return (
    <>
      <div className="carouselCont">
        {carouselDets.map((data) => {
          return (
            <div className="carousel">
              <div className="leftContent">
                <h2>{data.h2}</h2>
                <h1>{data.h1}</h1>
                <p>{data.p}</p>
                <Link className="shopNow" to={data.id}>
                  Shop Now
                </Link>
              </div>
              <img src={data.img} />
            </div>
          );
        })}
      </div>

      <Fashion />
    </>
  );
}
