import React from "react";
import CheckListItem from "./CheckListItem";

const Content = () => {
    // Define your to-do list here. Each item should be an object with label and text properties.
    let toDoList = [
        { label: "Work", Text: "Work",  checked: false },
        { label: "Read a Book", Text: "Read a book", checked: false },
        { label: "GoToGym", text: "Go To Gym", checked:false },
    ];
    const handleUserClick = (e) => {setCheckedItems...CheckListItem.onChange(index)} checked={toDoList[index].checked} />
    const mappingToDoList = toDoList.map(({ label, text }) => (
        <CheckListItecm handleUserClick = {handleUserClick} label={label} text={text} checked={checked} />
    ));
    return <>{mappingToDoList}</>   
};

export default Content;