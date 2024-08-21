import CheckBox from "./checkBox";
import { View,Text } from "react-native"
import React, { FC } from "react"
import { TaskType } from "../../types";

type Props = {
  item:TaskType
}


const TaskItem:FC <Props> = ({item}: Props)=>{
    return(
        <View  style={{ flexDirection: "row" }}>
        <Text>{item.name}</Text>
        <CheckBox value={!!item.completedAt} />
      </View>
    )
}

export default TaskItem