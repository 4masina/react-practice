import React from "react";
import CheckList Item from "./CheckListItem";

const Content = () => {
    let toDoList = [
        { label: "Work", Text: "Work"},
        { label: "Read a Book", Text: "Read a book"},
        { label: "GoToGym", text: "Go To Gym"},
    ];
    let mappingToDoList = toDoList.map(({ label, text }) => (
        <CheckListItem key={label} label={label} text={text} />
    )   
};

export default Content;