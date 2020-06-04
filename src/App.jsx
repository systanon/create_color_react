import React, { useState } from "react";
import "./App.css";
import v4 from "uuid/dist/esm-browser/v4";
import { AddColorForm } from "./components/addColorForm";
import { ColorList } from "./components/colorList";

const App = () => {
  const [colors, setColors] = useState([]);
  const addColor = (title, color) => {
    setColors((oldColors) => [
      ...oldColors,
      {
        id: v4(),
        title,
        color,
        rating: 0,
      },
    ]);
  };
  const rateColor = (id, rating) => {
    setColors(
      colors.map((color) => (color.id !== id ? color : { ...color, rating }))
    );
  };
  const removeColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <div className="App">
      <AddColorForm onNewColor={addColor} />
      <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
    </div>
  );
};

export default App;
