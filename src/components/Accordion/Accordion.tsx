import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    title: string,

}

export const UncontrolledAccordion = (props: UncontrolledAccordionPropsType) => {
        let [collapsed, setCollapsed] = useState(false)


        return (

            <div>
                <UncontrolledAccordionTitle
                    title={props.title}
                    onClick={() => {
                        setCollapsed(!collapsed)
                    }}/>
                {/*<button onClick={() => {
                setCollapsed(!collapsed)
            }}>TOGGLE</button>
            */}
                {!collapsed && <AccordionBody/>}

            </div>
        )
    }

type UncontrolledAccordionTitleProps = {
    title: string
    onClick: () => void
}

function UncontrolledAccordionTitle (props: UncontrolledAccordionTitleProps) {
    return (
        <h3 onClick = {props.onClick}>{props.title}</h3>
    )
}






type AccordionPropsType = {
    title: string,
    collapsed: boolean
    onClick: () => void


}

export function Accordion (props:AccordionPropsType) {


        return (
            <div>
                <AccordionTitle title = {props.title} onClick={props.onClick} />
                {!props.collapsed && <AccordionBody/> }

            </div>
        );
    }




type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}


function AccordionTitle (props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody () {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

