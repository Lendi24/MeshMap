import React from "react";

export function setToolConfigState(val:number) {state = val; console.log(val)}

let state = 0;
let data = [
    {
        title : "1",
        key : "value",
    },

    {
        title : "2",
        key : "value",
    },

    {
        title : "3",
        key : "value",
    },

];

export default (
    <>
        <b> { data[state].title } </b>
    </>
)
