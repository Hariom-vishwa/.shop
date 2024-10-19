import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

export function Error() {
    
  return (
    <>
    <Header/>
      <div className="errorCont">
        <h1 className="errorMes">Something went wrong! Go to Homepage.</h1>
        {/* <button>Back</button> */}
      </div>
      <Footer/>
    </>
  );
}
