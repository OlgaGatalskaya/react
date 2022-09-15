import React, {useState} from "react";


export function UncontrolledRating() {

    let [value, setValue] = useState(0)
    return (
        <div>
            <Star selected={value > 0} setValue={setValue = () => {setValue(1)}}/>
            <Star selected={value > 1} setValue={setValue = () => {setValue(2)}}/>
            <Star selected={value > 2} setValue={setValue = () => {setValue(3)}}/>
            <Star selected={value > 3} setValue={setValue = () => {setValue(4)}}/>
            <Star selected={value > 4} setValue={setValue = () => {setValue(5)}}/>
        </div>
    )

}

type StarPropsTypes = {
    selected: boolean
    setValue: () => void

}

function Star(props: StarPropsTypes) {
    return (
        //(props.selected) ? <span><b>star</b> </span> : <span>star </span>
        <span onClick={props.setValue}> {props.selected ? <b>star</b> : "star"} </span>
    )

}