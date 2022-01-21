import { IsIndia } from "./IsIndia";

const image = require("../assets/overall.jpg");
const noImg = require("../assets/noImg.jpg");
const indImg = "https://countryflagsapi.com/png/ind";
console.log(image, noImg, indImg);

function CountryCard(props) {
  let url =
    props.country === "Overall"
      ? image
      : props.country
      ? IsIndia()
        ? indImg
        : `https://countryflagsapi.com/png/${props.country_code}`
      : noImg;
  console.log(props);
  if(!props.country_code){
    url=noImg;
  }
  if (props.for === "main-det") {
    return (
      <div className="flag-wrap">
        <img
          src={url}
          style={{ width: "300px", height: "220px", backgroundColor: "black" }}
          alt=""
        ></img>
        <h2>{props.country}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <img
          src={url}
          style={{ width: "300px", height: "220px", backgroundColor: "black" }}
          alt=""
        ></img>
        <h2>{props.country}</h2>
      </div>
    );
  }
}

export default CountryCard;
