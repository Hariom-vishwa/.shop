import "./App.css";
import "./Home.css";

export function Home() {
  return (
    <>
      {/* Main  */}

      <h1 className="message">
        This is Homepage. Access other pages from Nav bar.{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-up-right"
        >
          <path d="M13 5H19V11" />
          <path d="M19 5L5 19" />
        </svg>
      </h1>

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
            <a href="/fashion/menfashion">Shop Now</a>
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
    </>
  );
}
