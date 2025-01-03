import React from "react";
import './CharacterInfoEditor.css';
import { useState } from "react";

export default function CharacterInfoEditor() {
  const [formData, setFormData] = useState({name: "",age: "",fear: "",motivation:"",flaws:"",description:""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Age: ${formData.age}, Fear: ${formData.fear}, Motivation: ${formData.motivation}, Flaws: ${formData.flaws}, Description: ${formData.description}`
    );
};
    return(
    <form className="characterinfoeditor" onSubmit={handleSubmit}>
    <div className="line">
      <label htmlFor="name">Name: </label>
      <input className="input" type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
    </div>
    <div className="line">
      <label htmlFor="age">Age: </label>
      <input className="input" type="text" id="age" name="age" value={formData.age} onChange={handleChange}/>
    </div>
    <div className="line">
      <label htmlFor="fear">Fear: </label>
      <input className="input" type="text" id="fear" name="fear" value={formData.fear} onChange={handleChange}/>
    </div>
    <div className="line">
      <label htmlFor="motivation">Motivation: </label>
      <input className="input" type="text" id="motivation" name="motivation" value={formData.motivation} onChange={handleChange}/>
    </div>
    <div className="line">
      <label htmlFor="flaws">Flaws: </label>
      <input className="input" type="text" id="flaws" name="flaws" value={formData.flaws} onChange={handleChange}/>
      </div>
    <div className="line">
      <label htmlFor="description">Description: </label>
      <input className="input" type="text" id="description" name="description" value={formData.description} onChange={handleChange}/>
    </div>
      </form>
    );
}