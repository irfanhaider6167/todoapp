import { useGlobalContext } from "../../context/todoContex";
import TailwindTable from "../../components/shared/TailwindTable";

function TodoList() {
  const { state } = useGlobalContext();

  return (
    <>
      <h2 className="text-center text-gray-500 p-6 font-bold text-2xl dark:text-white">
        Todo Items List
      </h2>

      <div className="p-4">
        <TailwindTable data={state.todos} />
      </div>
    </>
  );
}

export default TodoList;
