function CountryCard(props){
    if(props.for==="main-det"){
        return(
            <div className="flag-wrap">
                <img src="https://countryflagsapi.com/png/india" alt=""></img>
                <h2>India</h2>
            </div>
        );
    }
    else{
        return(
            <div className="flag-boxer">
                <img src="https://countryflagsapi.com/png/za" alt=""></img>
                <h2>India</h2>
            </div>
        )
    }
}

export default CountryCard;