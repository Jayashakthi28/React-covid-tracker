import CountryCard from "./CountryCard";
import {Link} from "react-scroll";
function CountryCont({ data, setter }) {
  console.log(setter);
  return (
    <div className="country-cont">
      {data.map((t) => (
        <Link         
        to="header"
        key={t.CountryCode}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}>
        <CountryCard
          key={t.CountryCode}
          for="cc"
          country={t.Country}
          country_code={t.CountryCode}
          data={t}
          setter={setter}
        />
        </Link>
      ))}
    </div>
  );
}

export default CountryCont;
