import React, {useRef} from 'react';
import {useSetRecoilState} from 'recoil';
import {todoListState} from '../../atoms/todo';

let id = 0;
const getId = () => id++;

export default function TodoItemCreator() {
  const inputRef = useRef<HTMLInputElement>(null);
  const setTodoList = useSetRecoilState(todoListState);

  const addTodoItem = () => {
    setTodoList((prev) => [
      ...prev,
      {
        id: getId(),
        text: inputRef.current!.value,
        isComplete: false,
      },
    ]);
  };

  return (
    <div>
      <label htmlFor="todo">input todo</label>
      <input id="todo" type="text" ref={inputRef} />
      <button onClick={addTodoItem}>Submit</button>
    </div>
  );
}
