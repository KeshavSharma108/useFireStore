import React, { FC, useEffect, useState } from "react";
import { View } from "react-native";
import { TaskType } from "../../types";
import TaskItem from "./taskItem";
import { db, streamTasks } from "../db/fireStore";
import { collection, onSnapshot } from "firebase/firestore";

const Tasks: FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>();

  const mapDocToTask = (document): TaskType => {
    return {
      id: document.id,
      name: document.data().name,
      createdAt: document.data().createdAt,
      completedAt: document.data().completedAt,
    };
  };

  useEffect(() => {
    streamTasks({
      next: (querySnapshot) => {
        const tasks = querySnapshot.docs.map((docSnapshot) =>
          mapDocToTask(docSnapshot)
        );
        // Update the state with the tasks
        setTasks(tasks);
      },
    });

    // fetchData().then((tasks) => setTasks(tasks));
    // Clean up the subscription when the component unmounts
  }, [setTasks]);

  return (
    <View>
      {tasks?.map((task) => (
        <TaskItem key={task.id} item={task} />
      ))}
    </View>
  );
};

export default Tasks;
