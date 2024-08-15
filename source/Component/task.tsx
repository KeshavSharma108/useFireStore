import React, { FC, useEffect, useState } from "react";
import { View, Text } from "react-native";
import CheckBox from "./checkBox";
import { db } from "../db";
import { collection,  getDocs } from "firebase/firestore";
const Tasks: FC = () => {
  const [tasks, setTasks] = useState<Object[]>();
  useEffect(() => {
  const fetchData = async () => {
    try {
        const querySnapshot = await getDocs(collection(db,'tasks'));
        const dataList = querySnapshot.docs.map(doc => ({
            id:doc.id,
            name:doc.data().name,
            createdAt:doc.data().createdAt,
            completedAt: doc.data().completedAt
        }));
   setTasks(dataList)
   
    }  catch (error){
        console.error('Error fetching' , error)
    }
  };

fetchData()

  }, []);

  return (
    <View>
      {tasks?.map((task) => (
        <View key={task.id} style={{ flexDirection: "row" }}>
          <Text>{task.name}</Text>
          <CheckBox value={!!task.completedAt} />
        </View>
      ))}
    </View>
  );
};

export default Tasks;
