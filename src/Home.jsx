import { Link } from "react-router-dom";
import "./App.css";
import "./Home.css";
import { Fashion } from "./Fashion";

export function Home() {
  return (
    <>

      {/* Carousel  */}

      <div className="carouselCont">

        {/* 1  */}

        <div className="carousel">
          <div className="leftContent">
            <h2>Fashion Sale</h2>
            <h1>Minimal Men Style</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              molestiae repudiandae deserunt iusto reiciendis mollitia placeat,
              non natus earum! Dolores aliquid facere assumenda!
            </p>
            <Link className="shopNow" to="/fashion/menfashion">Shop Now</Link>
          </div>
          <img
            src="https://i.pinimg.com/564x/86/2c/cf/862ccfc2d64b7c56d31d7d7db94b09df.jpg"
            alt="Men Minimal Style"
          />
        </div>

        {/* 2 */}

        <div className="carousel">
          <div className="leftContent">
            <h2>Fashion Sale</h2>
            <h1>Minimal Men Style</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              molestiae repudiandae deserunt iusto reiciendis mollitia placeat,
              non natus earum! Dolores aliquid facere assumenda!
            </p>
            <a href="/fashion/menfashion">Shop Now</a>
          </div>
          <img
            src="https://mensflair.com/wp-content/uploads/2022/04/mens-minimalist-wardrobe.jpg"
            alt="Men Minimal Style"
          />
        </div>

        {/* 3 */}
        
        <div className="carousel">
          <div className="leftContent">
            <h2>Fashion Sale</h2>
            <h1>Minimal Men Style</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              molestiae repudiandae deserunt iusto reiciendis mollitia placeat,
              non natus earum! Dolores aliquid facere assumenda!
            </p>
            <a href="/fashion/menfashion">Shop Now</a>
          </div>
          <img
            src="https://mensflair.com/wp-content/uploads/2022/04/mens-minimalist-wardrobe.jpg"
            alt="Men Minimal Style"
          />
        </div>

        {/* 4 */}

        <div className="carousel">
          <div className="leftContent">
            <h2>Fashion Sale</h2>
            <h1>Minimal Men Style</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
              molestiae repudiandae deserunt iusto reiciendis mollitia placeat,
              non natus earum! Dolores aliquid facere assumenda!
            </p>
            <a href="/fashion/menfashion">Shop Now</a>
          </div>
          <img
            src="https://mensflair.com/wp-content/uploads/2022/04/mens-minimalist-wardrobe.jpg"
            alt="Men Minimal Style"
          />
        </div>
      </div>

      <Fashion/>
    </>
  );
}
