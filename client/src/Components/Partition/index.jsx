import { useEffect, useState } from "react";
import  './style.css';

const Partition=({Itype,onChange,holder},)=>{  
    return(
    <div className="part">
        <input type={Itype} onChange={onChange} placeholder={holder} required/>
    </div>
    );
}
export default Partition;
