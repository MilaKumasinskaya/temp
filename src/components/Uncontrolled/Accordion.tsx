import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
    // collapsed: boolean
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    let [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue}/> <button onClick={() => {setCollapsed(false)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )

    // if (props.collapsed) {
    //     return (
    //         <div>
    //             <AccordionTitle title={props.titleValue}/>
    //         </div>
    //     );
    // } else {
    //     return (
    //         <><AccordionTitle title={props.titleValue}/>
    //             <AccordionBody/></>
    //     )
    // }
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>-- {props.title} --</h3>
    );
}

type AccordionBodyPropsType = {}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return (

        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    );
}

export default UncontrolledAccordion;