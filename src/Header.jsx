import { NavLink } from "react-router-dom";
import "./App.css";
import { BackButton } from "./BackButton";

export function Header() {
  return (
    <>
      <header>
        <nav>
          <h1 className="logo">.Shop</h1>
          <div className="sideNav">
            <div className="search">
              <input type="text" />
              <button className="searchBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-search"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
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
            <BackButton/>
          </div>
        </nav>
      </header>
    </>
  );
}
