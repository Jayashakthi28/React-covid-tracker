import CountryCard from "./CountryCard";
import {animateScroll as scroll} from "react-scroll";
import { NavLink } from "react-router-dom";
function CountryCont({ data, setter }) {
  console.log(setter);
  return (
    <div className="country-cont">
      {data.map((t) => (
        <NavLink className={"flag-boxer"} to={`/country/${t.Country}`} onClick={scroll.scrollToTop({duration:500})} key={t.Country}>
            <CountryCard
              key={t.CountryCode}
              for="cc"
              country={t.Country}
              country_code={t.CountryCode}
              data={t}
              setter={setter}
            />
        </NavLink>
      ))}
    </div>
  );
}

export default CountryCont;
