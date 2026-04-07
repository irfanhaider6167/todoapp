import React from "react";
import { useGlobalContext } from "../../context/todoContex";
import { Link } from "react-router-dom";

function TailwindTable({ data, onEdit }) {
  const { del, state, statusChange } = useGlobalContext();
  return (
    <div className="p-4">
      <div className="overflow-x-auto rounded-2xl shadow">
        <table className="min-w-full border border-gray-200 dark:border-gray-700">
          {/* HEADER */}
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">
                ID
              </th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">
                Task
              </th>
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">
                Status
              </th>
              {/* <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-200"></th> */}
              <th className="px-4 py-2 text-center text-gray-700 dark:text-gray-200">
                Actions
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="bg-white dark:bg-gray-900">
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="px-4 py-2 text-gray-700 dark:text-gray-200">
                  {item.id}
                </td>

                <td
                  className={`px-4 py-2 dark:text-gray-200 
                    ${item.status ? "line-through opacity-60" : ""}`}
                >
                  {item.description}
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded-md ${
                      item.status
                        ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200"
                    }`}
                  >
                    {item.status ? "completed" : "pending"}
                  </span>
                </td>

                {/* ACTION BUTTONS */}
                {/* <td className="px-4 py-2 text-center"></td> */}
                <td className="px-4 py-2 flex items-center justify-center gap-2">
                  <input
                    type="checkbox"
                    checked={item.status}
                    onChange={() => statusChange(item.id)}
                    className="w-5 h-5 cursor-pointer accent-green-500"
                  />
                  <Link to={`/edit/${item.id}`}>
                    <button
                      onClick={() => onEdit(item)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 
                               dark:bg-blue-400 dark:text-black"
                    >
                      Edit
                    </button>
                  </Link>

                  <button
                    onClick={() => del(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 
                               dark:bg-red-400 dark:text-black"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TailwindTable;
