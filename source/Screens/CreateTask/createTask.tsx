import { Formik } from "formik";
import React from "react";
import { Button, TextInput, View, Text } from "react-native";
import { db } from "../../db";
import { collection, getDocs } from "firebase/firestore";
import * as yup from "yup";


type FormProps = {
  name:string 
}


const CreateTask = ({ navigation }) => {
  const validationSchema = yup.object().shape<FormProps>({
    name: yup.string().required(), 
  });

  return (
    <View>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={async (values) => {
          const querySnapshot = await getDocs(collection(db, "tasks"));
          const tasks = querySnapshot.docs.map((doc) => ({
            name: values.name,
            createdAt: new Date(),
            completedAt: null,
          }));
          navigation.navigate("FireStore", { tasks });

          console.log(tasks)
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <View>
            <TextInput
              onChangeText={handleChange("name")}
              placeholder={"Describe task"}
              value={values.name}
              autoFocus={true}
            />
            {errors["name"] ? <Text>{errors["name"]}</Text> : null}

            <Button title="Create" onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CreateTask;
