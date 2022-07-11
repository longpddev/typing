import React, { useEffect, useMemo, useRef } from "react";
import { characterStatus, pointerStatus } from "../common/constants";
import { mapText } from "../helper/function";
import Character from "./Character";

const Typing = ({ text, onFinish, ...props }) => {
  const pointRef = useRef(0);
  const onFinishRef = useRef();
  onFinishRef.current = onFinish;
  const textList = useRef();
  textList.current = useMemo(() => {
    pointRef.current = 0;
    return mapText(text, (item) => ({
      correct: null,
      char: item,
    }));
  }, [text]);

  useEffect(() => {
    const setPointer = (point) => {
      const text = textList.current[point];
      const pointEl = document.getElementById(
        `character-${point}-${text.char}`
      );

      pointEl.firstChild.setAttribute("class", pointerStatus.active);

      if (point - 1 < 0) return;
      const prevText = textList.current[point - 1];
      const prevPointEl = document.getElementById(
        `character-${point - 1}-${prevText.char}`
      );

      prevPointEl.firstChild.setAttribute("class", pointerStatus.unactive);
    };
    setPointer(0);
    const handleKeyDown = (e) => {
      if (e.key === "Shift") return;
      e.preventDefault();
      const currentKey = textList.current[pointRef.current];
      const ele = document.getElementById(
        `character-${pointRef.current}-${currentKey.char}`
      );

      const correct = () => {
        ele.lastChild.setAttribute("class", characterStatus.correct);
      };

      const notCorrect = () => {
        ele.lastChild.setAttribute("class", characterStatus.uncorrect);
      };
      if (textList.current[pointRef.current].correct === null) {
        if (e.key === currentKey.char) {
          textList.current[pointRef.current].correct = true;
          correct();
        } else {
          textList.current[pointRef.current].correct = false;
          notCorrect();
        }
      }

      if (e.key === currentKey.char) {
        if (textList.current.length <= pointRef.current + 1) {
          onFinishRef.current();
          return;
        }
        pointRef.current++;
        setPointer(pointRef.current);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [text]);
  return (
    <div
      tabIndex={0}
      className="container-md focus:border-gray-400 border"
      {...props}
    >
      {textList.current.map((item, index) => (
        <Character key={index} index={index} char={item.char} />
      ))}
    </div>
  );
};

export default Typing;
