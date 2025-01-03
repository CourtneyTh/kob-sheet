import React from "react";
import './Sheet.css';
import CharacterInfoEditor from "../CharacterInfo/CharacterInfoEditor.js";

function Sheet(){
    return(
        <div className="sheet">
            <CharacterInfoEditor />
        </div>
    );
}

export default Sheet;