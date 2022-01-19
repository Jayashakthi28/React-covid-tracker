import { useLocation } from "react-router-dom";

export function IsIndia(){
    const loc=useLocation().pathname;
    return loc.match(/^\/india.*/gi);
}