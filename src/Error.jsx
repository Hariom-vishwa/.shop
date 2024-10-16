import "./App.css";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";

export function Error() {
    const navigate=useNavigate()
    const id=10
    function handleback()
    {
        navigate("/fashion",{state:{id:id}})
    }
  return (
    <>
    <Header/>
      <div className="errorCont">
        <h1 className="errorMes">Something went wrong! Go to Homepage.</h1>
        <button onClick={handleback}>Back</button>
      </div>
      <Footer/>
    </>
  );
}
