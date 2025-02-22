import TaskCard from "../components/TaskCard";
import useTask from "../hooks/useTask";

const Home = () => {
  const { tasks, refetch, loading } = useTask();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  // Categorize tasks
  const todoTasks = tasks?.filter((task) => task.category === "To-Do") || [];
  const inProgressTasks =
    tasks?.filter((task) => task.category === "In Progress") || [];
  const doneTasks = tasks?.filter((task) => task.category === "Done") || [];

  return (
    <div className="my-6 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Todo Column */}
      <div className="p-4 bg-gray-100 shadow-md rounded-md min-h-[400px] space-y-3">
        <h2 className="text-xl font-bold text-center mb-4 text-blue-600">To-Do</h2>
        {todoTasks?.length > 0 ? (
          todoTasks.map((task) => (
            <TaskCard key={task._id} task={task} refetch={refetch} />
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks</p>
        )}
      </div>

      {/* In Progress Column */}
      <div className="p-4 bg-gray-100 shadow-md rounded-md min-h-[400px] space-y-3">
        <h2 className="text-xl font-bold text-center mb-4 text-yellow-600">In Progress</h2>
        {inProgressTasks.length > 0 ? (
          inProgressTasks.map((task) => (
            <TaskCard key={task._id} task={task} refetch={refetch} />
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks</p>
        )}
      </div>

      {/* Done Column */}
      <div className="p-4 bg-gray-100 shadow-md rounded-md min-h-[400px] space-y-3">
        <h2 className="text-xl font-bold text-center mb-4 text-green-600">Done</h2>
        {doneTasks.length > 0 ? (
          doneTasks.map((task) => (
            <TaskCard key={task._id} task={task} refetch={refetch} />
          ))
        ) : (
          <p className="text-center text-gray-500">No tasks</p>
        )}
      </div>
    </div>
  );
};

export default Home;
