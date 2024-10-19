import { useNavigate } from "react-router-dom";
import "./App.css"

export function BackButton() {
  const goBack = useNavigate();
  function handleBtn() {
    goBack(-1);
  }

  return (
    <>
    {
        goBack=="/"?
     "" :
        <button className="backBtn" onClick={handleBtn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="rgba(255,255,255,1)"
        >
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
        </svg>
      </button>
   }
    </>
  );
}