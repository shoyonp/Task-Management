import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";

const AddTask = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    console.log(data);
    const newTask = {
      ...data,
      timestamp: new Date(),
      email: user?.email,
    };
    console.log(newTask);

    // axiosPublic.post("/tasks", newTask).then((res) => {
    //   toast.success("post success");
    //   navigate("/home");
    // });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-sm mx-auto p-4 border rounded shadow"
    >
      <div>
        <label className="block">Title</label>
        <input
          {...register("title", { required: true })}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mt-3">
        <label className="block">Description</label>
        <textarea
          {...register("description", { required: true })}
          className="w-full p-2 border rounded"
        ></textarea>
      </div>

      <div className="mt-3">
        <label className="block">Category</label>
        <select
          {...register("category", { required: true })}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          <option value="To-Do">To-Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
