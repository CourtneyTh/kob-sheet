import React from "react";
import "./ImageUpload.css";

export default function ImageUpload() {
  return (
    <div className="imagebox">
      <input type="file" accept="image/*" />
    </div>
  );
}