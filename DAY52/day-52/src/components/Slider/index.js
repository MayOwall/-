import { useState, useCallback, useEffect, useRef } from "react";
import styled from "@emotion/styled";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 16px;
`;

const Rail = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #aaa;
  z-index: 0;
`;

const Handle = styled.div`
  positon: absolute;
  top: 8px;
  left: 100px;
  width: 12px;
  height: 12px;
  border: 2px solid #44b;
  border-radius: 50%;
  background-color: white;
  transform: translate(-50%, 0);
  cursor: grab;
  z-index: 10;
`;

const Track = styled.div`
  position: absolute;
  top: 6px;
  left: 0;
  width: 0;
  height: 4px;
  border-radius: 2px;
  background-color: #44b;
`;

const Slider = ({
  min = 0,
  max = 100,
  step = 0.1,
  defaultValue,
  onChange,
  ...props
}) => {
  //슬라이더에 필요한 state들
  const sliderRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [value, setValue] = useState(defaultValue ? defaultValue : min);

  //슬라이더에 필요한 로직들
  const handleMouseDown = useCallback(() => {
    setDragging(true);
  }, []);
  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging) return;

      const handleOffset = e.pageX - sliderRef.current.offsetLeft;
      const sliderWidth = sliderRef.current.offsetWidth;

      const track = handleOffset / sliderWidth;
      let newValue = min;
      if (track < 0) {
        newValue = min;
      } else if (track > 1) {
        newValue = max;
      } else {
        newValue = Math.round((min + (max - min) * track) / step) * step;
        newValue = Math.min(Math.max(min, newValue));
      }

      setValue(newValue);
      onChange && onChange(newValue);
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [value, min, max, dragging, sliderRef, handleMouseUp, onChange]);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <SliderContainer ref={sliderRef} {...props}>
      <Rail></Rail>
      <Track style={{ width: `${percentage}%` }} />
      <Handle
        onMouseDown={handleMouseDown}
        style={{ left: `${percentage}%` }}
      ></Handle>
    </SliderContainer>
  );
};

export default Slider;
