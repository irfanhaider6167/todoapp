import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import { useNavigate, useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/todoContex";

function AddEditItems() {
  const { state, addtodoData, editData } = useGlobalContext();
  const { id } = useParams();
  const numericId = Number(id);
  const navigate = useNavigate();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      description: "",
    },
  });

  const onSubmit = (rowData) => {
    if (id) {
      editData(rowData, numericId);
    } else {
      addtodoData({
        id: state.todos.length + 1,
        status: false,
        ...rowData,
      });
    }
    navigate("/");
  };

  useEffect(() => {
    if (id) {
      const data = state.todos.find((item) => item.id === numericId);
      if (data) {
        setValue("description", data.description);
      }
    }
  }, [id, numericId, setValue, state.todos]);

  return (
    <>
      <h2 className="text-center p-6 font-bold text-gray-500 text-2xl dark:text-white">
        {id ? "Edit Todo Data" : "Add Todo"}
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col sm:flex-row p-2 items-center justify-center gap-3"
      >
        <InputText
          {...register("description")}
          className="w-full sm:w-auto p-2 border rounded-md 
            border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-800 
            text-black dark:text-white
            focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Enter todo..."
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-md w-full sm:w-auto
                   hover:bg-blue-600 transition
                   dark:bg-blue-400 dark:text-black"
        >
          {id ? "Update" : "➕ Add Task"}
        </button>
      </form>
    </>
  );
}

export default AddEditItems;
