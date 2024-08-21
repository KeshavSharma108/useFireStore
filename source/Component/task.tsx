import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import { TaskType } from "../../types";
import TaskItem from "./taskItem";
import { fetchData } from "../db/fireStore";

const Tasks: FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>();
  useEffect(() => {
    fetchData().then((tasks) => setTasks(tasks));
  }, []);

  return (
    <View>
      {tasks?.map((task) => (
        <TaskItem key={task.id} item={task} />
      ))}
    </View>
  );
};

export default Tasks;
