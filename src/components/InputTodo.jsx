import React from "react";

// InputTodoにしか書かないcss
const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input
        disabled={disabled}
        type="text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disable={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
