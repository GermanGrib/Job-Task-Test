import { useEffect, useRef, useState } from "react";
import styles from "./input.module.scss";

const Input = () => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLDivElement | null>(null);
  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    setText(e.currentTarget.innerText);
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const clipboardText = e.clipboardData.getData("text/plain");
    document.execCommand("insertText", false, clipboardText);
    setText(clipboardText);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    if (text.trim() === "") {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    if (inputRef.current && isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const handleSendBtn = () => {
    if (text.trim()) {
      console.log("Message sent", text);
      setText("");
      if (inputRef.current) {
        inputRef.current.innerText = "";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendBtn();
    }
  };

  return (
    <div className={styles.root}>
      <div
        className={styles.input}
        ref={inputRef}
        contentEditable
        onInput={handleInput}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onPaste={handlePaste}
        suppressContentEditableWarning={true}
      >
        {!isFocused && text === "" && (
          <span className={styles.placeholder}>Type message</span>
        )}
      </div>
      <div className={styles.buttonsWrapper}>
        <div className={styles.clipWrapper}>
          <img src="/clip.svg" alt="clip icon" />
        </div>
        <img
          className={styles.sendBtn}
          src="/send.svg"
          alt="send icon"
          onClick={handleSendBtn}
        />
      </div>
    </div>
  );
};

export default Input;
