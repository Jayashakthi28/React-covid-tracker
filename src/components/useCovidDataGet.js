import { useEffect,useState} from "react";
import axios from "axios";

const useCovidDataGet = () => {
  const [apiData, setapiData] = useState({});
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://api.covid19api.com/summary"
    })
      .then((res) => {
        console.log(res.data);
        setapiData({
        countries:res.data["Countries"],
        curr:res.data["Global"],
        date:res.data["Date"]
        });
      })
      .catch((e) => {
        console.log(e);
      });
  },[]);
  return {apiData}
};

export default useCovidDataGet;
