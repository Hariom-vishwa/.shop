import { NavLink } from "react-router-dom"
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
            <NavLink className="NavLink" to="/">
              Home
            </NavLink>
            <NavLink className="NavLink" to="/fashion">
              Fashion
            </NavLink>
            <NavLink className="NavLink" to="/gadgets">
              Gadgets
            </NavLink>
          </div>
        </nav>
      </header>

        </>
    )
}