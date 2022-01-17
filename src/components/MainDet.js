import CountUp from 'react-countup';
import CountryCard from './CountryCard';


function MainDet({data}){
    let totDeaths=+data?.TotalDeaths;
    let totConfirmed=+data?.TotalConfirmed;
    let newDeaths=+data.NewDeaths;
    let newConfiremed=+data.NewConfirmed;
    return(
        <div className="main-det" id='header'>
            <div className="det-display">
                <CountryCard for="main-det" country={data.Country} country_code={data.CountryCode}/>
                <div className="case-cont">
                    <h2>Total Cases:</h2>
                    <h2>
                        <CountUp start={0} end={totConfirmed} duration={1} delay={1} separator=','></CountUp>
                    </h2>
                </div>
                <div className="case-cont">
                    <h2>Total Deaths:</h2>
                    <h2>
                        <CountUp start={0} end={totDeaths} duration={1} delay={1} separator=','></CountUp>
                    </h2>
                </div>
                <div className="case-cont">
                    <h2>New Cases:</h2>
                    <h2>
                        <CountUp start={0} end={newConfiremed} duration={1} delay={1} separator=','></CountUp>
                    </h2>
                </div>
                <div className="case-cont">
                    <h2>New Deaths:</h2>
                    <h2>
                        <CountUp start={0} end={newDeaths} duration={1} delay={1} separator=','></CountUp>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default MainDet;