import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault(); //　取消預設自動刷新頁面
    setTodos([...todos, todo]); // 留下上次輸入的array資料,同時新增新array資料
    setTodo({ name: "", done: false });
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })} // 輸入參數e,return name:e值,done:false
          value={todo.name}
          type="text"
          placeholder="Enter todo item..."
        ></input>
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
