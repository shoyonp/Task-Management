import React from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import TaskCard from "../components/TaskCard";

const Home = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: tasks = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      return res.data;
    },
  });
  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {tasks?.map((task) => (
        <TaskCard key={task._id} task={task}></TaskCard>
      ))}
    </div>
  );
};

export default Home;
