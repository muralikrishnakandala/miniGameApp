import { Component, ReactNode } from "react";
import { Text, View, StyleSheet } from "react-native";
import Title from "../components/UI/Title";

interface Props {}
interface State {}
export default class GameScreen extends Component<Props, State> {
    constructor(props:Props){
        super(props);
        this.state = {

        }
    }
    render(){

        return (
            <View style={styles.screen}>
                <Title>Opponent's Guess</Title>      
                <View>
                {/* Guess Number  */}
                <Text>Guess Number</Text>
                </View>
                <View>
                {/* Higher or Lower */}
                <Text>Higher or Lower</Text>
                </View>
                <View>

                <Text>Log Rounds</Text>
                {/* Log Rounds */}
                </View>
            </View>
        ) 
        
    }
}

const styles = StyleSheet.create({
        screen: {
            // flex:1,
            padding:24
        }
})