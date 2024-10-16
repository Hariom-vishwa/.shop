import { Link } from "react-router-dom";
import "./Fashion.css";

export function Fashion() {
  const fashion = [
    {
      category: "Men's Fashion",
      photo:
        "https://i0.wp.com/armenyl.com/wp-content/uploads/2021/09/Mens-StreetStyle-at-New-York-Fashion-Week-photo-by-Armenyl.jpg",
      id: "/fashion/menfashion",
    },
    {
      category: "Women's Fashion",
      photo:
        "https://i0.wp.com/mylook.com.de/wp-content/uploads/2024/07/90s-streetwear-outfit-for-women-2OzzdviIReuo5lZ74v5OxQ-ZCm4ASxpSc6MDKWdDReSNQ.jpeg",
      id: "/fashion/womenfashion",
    },
    {
      category: "Kid's Fashion",
      photo:
        "https://i.pinimg.com/736x/de/2e/69/de2e6960806d35b03f5a303e5d13b475.jpg",
      id: "/fashion/kidsfashion",
    },
  ];

  return (
    <>
    

      {/* Category  */}

      <h1 className="fashionHeading">Fashion</h1>
      <div className="fashionCate">
        {fashion.map((key, value) => {
          return (
            <Link to={key.id} className="fashionCont">
              <img src={key.photo} alt={key.category} />
              <h2>{key.category}</h2>
            </Link>
          );
        })}
      </div>
    </>
  );
}
