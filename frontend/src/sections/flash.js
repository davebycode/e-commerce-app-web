import React from "react";
function Flash() {
    const today = new Date()
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
        return (
        <div className="flash">
            <h2><i class="fa-solid fa-tag" style={{color:"red"}}></i>Flash Sales : <span>{time}</span></h2>   
        </div>
    )
}
export default Flash