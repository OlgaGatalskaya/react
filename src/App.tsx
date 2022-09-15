import React, {useState} from 'react';
import './App.css';
import {Accordion, UncontrolledAccordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState(false)
    return (
        <div className="App">

            <OnOff on={switchOn} onChange={setSwitchOn}/>

            {/*<UncontrolledAccordion title={'No control'}/>*/}
            {/*<Accordion title={'Menu'}
                        collapsed={accordionCollapsed}
                        onClick={() => {
                            setAccordionCollapsed(!accordionCollapsed)
                        }}/>*/}
            {/*<UncontrolledAccordion title={'Users'}/>*/}
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}

            {/*<UncontrolledRating/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>


}


export default App;
