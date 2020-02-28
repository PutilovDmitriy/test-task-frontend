import React from "react";
import Tr from './Tr';
import Th from './Th';
import Distance from './Distance'
import WalkingDate from "./Date";

function primeriDetect(id){
    if (id % 2 !== 0){
        return "#FFFFFF";
    }
}

function Walking( props ) {
    return (
     <Tr bgColor={ primeriDetect(props.walking.id) }>
        <Th marginLeft="16px"><WalkingDate date={ props.walking.date }/></Th>
        <Th><Distance distance={ props.walking.distance }/></Th>        
    </Tr>
)}
export default Walking;