import React from "react";
import { ColorItem } from "../color/ColorItem";

import "./style.css";

export const ColorList = ({
  colors = [],
  onRate = (f) => f,
  onRemove = (f) => f,
}) => {
  return (
    <div className="color-list">
      {colors.length !== 0 ? (
        colors.map((color) => (
          <ColorItem
            key={color.id}
            {...color}
            onRate={(rating) => onRate(color.id, rating)}
            onRemove={() => onRemove(color.id)}
          />
        ))
      ) : (
        <p>No colors selected .Add color</p>
      )}
    </div>
  );
};
