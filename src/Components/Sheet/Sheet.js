import React from "react";
import './Sheet.css';
import CharacterInfoEditor from "../CharacterInfo/CharacterInfoEditor.js";
import ImageUpload from "../CharacterImage/ImageUpload.js";

function Sheet(){
    return(
        <div className="sheet">
            <CharacterInfoEditor />
            <ImageUpload />
        </div>
    );
}

export default Sheet;