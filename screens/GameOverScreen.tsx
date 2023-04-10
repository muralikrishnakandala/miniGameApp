import { Component, ReactNode } from "react";
import { Text, View, StyleSheet } from "react-native";

interface Props {}
interface State {}
export default class GameOverScreen extends Component<Props, State> {
    constructor(props:Props){
        super(props);
        this.state = {

        }
    }
    render(){

        return (
            <View>
                <Text>GameOverScreen</Text>
            </View>
        ) 
        
    }
}

const styles = StyleSheet.create({

})