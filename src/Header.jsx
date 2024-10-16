import { Link } from "react-router-dom"
import "./App.css"

export function Header(){
    return (
        <>
        <header>
        <nav>
          <h1 className="logo">.Shop</h1>
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