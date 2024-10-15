import { Link } from "react-router-dom"
import "./App.css"

export function Header(){
    return (
        <>
        <header>
        <nav>
          <img
            className="logo"
            src="https://cdn-icons-png.flaticon.com/512/10919/10919715.png"
            alt="logo"
          />
          <div className="sideNav">
            <div className="search">
              <input type="text" />
              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2652/2652234.png"
                  alt="searchBtn"
                />
              </button>
            </div>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/fashion">
              Fashion
            </Link>
            <Link className="link" to="/gadgets">
              Gadgets
            </Link>
          </div>
        </nav>
      </header>

        </>
    )
}