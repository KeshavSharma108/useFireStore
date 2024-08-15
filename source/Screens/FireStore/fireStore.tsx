import React,{FC} from "react";
import { StyleSheet,Text,View } from "react-native";
import Tasks from "../../Component/task";


const Home: FC = () =>(
    <View style={styles.container}>
        <Tasks/>
    </View>
)


export default Home
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})

