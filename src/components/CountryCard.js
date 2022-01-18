const image=require('../assets/overall.jpg');

function currChanger(setter,data){
    let obj={
        ...setter.apiData
    }
    obj.curr=data;
    console.log(obj);
    setter.setapiData(obj);
    window.scroll=0;
}

function CountryCard(props){
    const url=(props.country==='Overall')?image:`https://countryflagsapi.com/png/${props.country_code}`;
    if(props.for==="main-det"){
        return(
            <div className="flag-wrap">
                <img src={url} style={{width:"320px",height:"213px",backgroundColor:"black"}} alt=""></img>
                <h2>{props.country}</h2>
            </div>
        );
    }
    else{
        return(
            <div onClick={()=>{
                currChanger(props.setter,props.data)
                }}>
                <img src={url} style={{width:"320px",height:"213px",backgroundColor:"blue"}} alt=""></img>
                <h2>{props.country}</h2>
            </div>
        )
    }
}

export default CountryCard;