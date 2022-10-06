import {Accordion} from "./Accordion";
import {useState} from "react";

export default {
    title: 'Accordion',
    component: Accordion
}

export const AccordionCollapsed = () => <Accordion title={'Title'} collapsed={true} onClick={()=>{}}/>
export const AccordionNotCollapsed = () => <Accordion title={'Title'} collapsed={false} onClick={()=>{}}/>
export const AccordionChange = () => {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    return (
        <Accordion title={'Title'} collapsed={collapsed} onClick={()=>{setCollapsed(!collapsed)}}/>

    )

}

