import { Routes, Route } from "react-router-dom";
import TodoList from "../../features/todo/TodoList";
import AddEditItems from "../../features/todo/AddEditItems";
import Error from "./Error";

function ContentArea() {
  return (
    <div className="flex-1 p-0">
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddEditItems />} />
        <Route path="/edit/:id" element={<AddEditItems />} />
      </Routes>
    </div>
  );
}

export default ContentArea;
