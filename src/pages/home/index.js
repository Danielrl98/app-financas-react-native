import { StatusBar } from "expo-status-bar";
import { View,Text} from "react-native";
import Header from "../../components/Header";
import { Button } from "react-native-web";

export default function HomeScreen({ navigation }){
    return(
        <View>
            <Header name="Daniel Rezende"/>
            <Text> Home </Text>
            <Button  onPress={() => navigation.navigate('teste')}>Ir para teste</Button>
            <StatusBar style="auto"></StatusBar>
        </View>
    )
}