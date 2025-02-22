import { FaEdit, FaTrash } from "react-icons/fa";

const TaskCard = ({ task }) => {
  const { title, description, category, timestamp } = task || {};

  return (
    <div className="w-full max-w-sm p-5 bg-white shadow-lg rounded-md border border-gray-200 transition-transform transform hover:scale-105">
      <div className="flex flex-col gap-3">
        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        {/* Description */}
        <p className="text-gray-600 text-sm">{description}</p>
        {/* Timestamp */}
        <p className="text-gray-400 text-xs">📅 {timestamp}</p>
        {/* Category */}
        <span
          className={
            "px-3 py-1 text-xs font-medium text-white rounded-full bg-gray-500"
          }
        >
          {category}
        </span>
        {/*  Buttons */}
        <div className="flex justify-between mt-3">
          <button className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-white bg-blue-600 rounded-lg shadow hover:bg-blue-700 transition">
            <FaEdit />
            Edit
          </button>
          <button className="flex items-center gap-2 px-3 py-1 text-sm font-medium text-white bg-red-600 rounded-lg shadow hover:bg-red-700 transition">
            <FaTrash />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
