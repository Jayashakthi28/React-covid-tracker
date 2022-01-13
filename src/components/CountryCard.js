function CountryCard(props){
    if(props.for==="main-det"){
        return(
            <div className="flag-wrap">
                <img src="https://countryflagsapi.com/png/india" style={{width:"320px",height:"213px",backgroundColor:"black"}} alt=""></img>
                <h2>India</h2>
            </div>
        );
    }
    else{
        return(
            <div className="flag-boxer">
                <img src="https://countryflagsapi.com/png/za" style={{width:"320px",height:"213px",backgroundColor:"blue"}} alt=""></img>
                <h2>India</h2>
            </div>
        )
    }
}

export default CountryCard;