import CountUp from 'react-countup';

function widthChanger(e){
    e.target.style.width="auto";
}

function MainDet({data}){
    let totDeaths=+data['TotalDeaths'];
    let totConfirmed=+data['TotalConfirmed'];
    return(
        <div className="main-det">
            <div className="det-display">
                <div className="flag-wrap">
                    <img src="https://countryflagsapi.com/png/india" onLoad={widthChanger} alt=""></img>
                    <h2>India</h2>
                </div>
                <div className="case-cont">
                    <h2>Total Cases:</h2>
                    <h2>
                        <CountUp start={0} end={totConfirmed} duration={3} delay={1} separator=','></CountUp>
                    </h2>
                </div>
                <div className="case-cont">
                    <h2>Total Deaths:</h2>
                    <h2>
                        <CountUp start={0} end={totDeaths} duration={3} delay={1} separator=','></CountUp>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default MainDet;