import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App() {
  return (
    <div className="App">

        <PageTitle title={'This is APP component'} />
        <PageTitle title={'Hello'} />
        <Rating value={3} />
        <Accordion title={'Menu'} collapsed={true}/>
        <Accordion  title={'Users'} collapsed={false}/>
        <Rating value={4} />
        <Rating value={0} />
        <Rating value={2} />
    </div>
  );
}

type PageTitlePropsType = {
    title: string
}
function PageTitle (props:PageTitlePropsType) {
    return <h1>{props.title}</h1>


}





export default App;
