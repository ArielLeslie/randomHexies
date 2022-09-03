import React, { useCallback, useRef, useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";
import useClickOutside from "./useClickOutside";

interface ColorPickerProps {
  color: string,
  onChange: (color: string)=> void,
  type: string,
}

export default function ColorPicker({ color, onChange, type }: ColorPickerProps): JSX.Element {
  const popover = useRef<HTMLDivElement>(null);
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="picker">
      <div
        className={type}
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
          <HexColorInput color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
}
