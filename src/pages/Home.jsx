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
  return (
    <div className="my-6 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {tasks?.map((task) => (
        <TaskCard key={task._id} task={task} refetch={refetch}></TaskCard>
      ))}
    </div>
  );
};

export default Home;
