import { React,} from "react";
import "./cards.css";
// import { useNavigate } from "react-router-dom";

export default function Cards(props) {
  // const navigate = useNavigate();
  // function handleClick() {
  //   navigate("./mensProducts");
  // }
  return (
    <div className="card">
      <img src={props.img} alt="mens-fashion" />
      <h2>{props.title}</h2>
    </div>
  );
}

// import React, { useCallback } from "react";
// import "./cards.css";
// import { useNavigate } from "react-router-dom";

// export default function Cards(props) {
//   const navigate = useNavigate(); // Call useNavigate as a function
//   const handleClick = useCallback(() => {
//     navigate("/mensProducts");
//   }, [navigate]);

//   return (
//     <div className="card" onClick={handleClick}>
//       <img src={props.img} alt="mens-fashion" />
//       <h2>{props.title}</h2>
//     </div>
//   );
// }
