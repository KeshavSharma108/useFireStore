import React, { FC, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";

type Props = {
  value: boolean;
};

const FireStore: FC<Props> = ({ value }: Props) => {
  const [isChecked, setChecked] = useState<boolean>(value);
  return (
    <TouchableOpacity onPress={() => setChecked(!isChecked)}>
      {isChecked ? (
        <Fontisto name="checkbox-passive" size={24} color="black" />
      ) : (
        <Fontisto name="checkbox-active" size={24} color="black" />
      )}
    </TouchableOpacity>
  );
};

export default FireStore;
