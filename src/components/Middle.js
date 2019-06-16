import React from "react";

const DateDay = () => {

    let date = new Date ();
    let hours = date.getHours();
    let timeOfDay;
    let styles = {
        fontSize: 15
    }

    if(hours < 12){
        timeOfDay = 'morning';
        styles.color = '#04756F'
    } else if (hours >= 12 && hours <17){
        timeOfDay = 'afternoon';
         styles.color = '#8914A3'
    } else {
        timeOfDay = 'night';
         styles.color = '#D90000'
    }

    return(
    <h1 style = {styles}> Good {timeOfDay} ! </h1>
    )
}

export default DateDay;