import React from "react";

const CheckListItem = ({ label, text, checked, onChange }) => {
    return (
        <div>
            <input onClick = {e => handleUserClick(e)}
            type="checkbox" checked={checked} onChange={onChange} />
           
        </div>
    );
};

export default CheckListItem;