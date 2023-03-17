import React from 'react';

import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/onOff/onOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/Accordion";
import {UncontrolledRating} from "./components/UncontrolledRating/Rating";

function App() {
    return (
        <div className={"App"}>
            <OnOff/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating />
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
            {/*<OnOff  on={false}/>*/}
            {/*    <PageTitle title={"This is APP component"} />*/}
            {/*    <PageTitle title={"My friends"} />*/}
            {/*    Article 1*/}
            {/*    <Rating value={3} />*/}
            {/*    <Accordion titleValue={"Menu"} collapsed={true} />*/}
            {/*    <Accordion titleValue={"Users"} collapsed={false} />*/}
            {/*    Article 2*/}
            {/*    <Rating value={0} />*/}
            {/*    <Rating value={1} />*/}
            {/*    <Rating value={2} />*/}
            {/*    <Rating value={3} />*/}
            {/*    <Rating value={4} />*/}
            {/*    <Rating value={5} />*/}
            {/*    <Rating value={6} />*/}
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
