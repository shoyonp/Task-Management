import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const TaskCard = ({ task, refetch }) => {
  const { title, description, category, timestamp, _id } = task || {};
  const axiosPublic = useAxiosPublic();
  //   delete a task
  const handleDelete = (task) => {
    axiosPublic.delete(`/tasks/${_id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        toast.success("Deleted success");
        refetch();
      }
    });
  };

  return (
    <div className="w-full p-4 bg-white shadow-sm rounded-md border border-gray-200 transition-transform transform hover:scale-105">
      {/* Task Content */}
      <div className="flex flex-col gap-1">
        {/* Title */}
        <h2 className="text-base font-semibold text-gray-800 truncate">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-xs line-clamp-2">{description}</p>

        {/* Timestamp */}
        <p className="text-gray-400 text-xs">{timestamp}</p>

        {/* Category */}
        <span className="px-2 py-1 text-[10px] font-medium text-white rounded-md bg-gray-500">
        {category}
        </span>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-2">
          <Link to={`editTask/${task._id}`}>
            <button className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 transition">
              <FaEdit size={12} />
              Edit
            </button>
          </Link>
          <button
            onClick={() => handleDelete(task)}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 transition"
          >
            <FaTrash size={12} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
