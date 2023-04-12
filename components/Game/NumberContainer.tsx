import { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../../constants/Color";

interface Props {
    children:any;
  
}
interface State {}
export default class NumberContainer extends Component<Props, State> {
    constructor(props:Props){
        super(props);
        this.state = {

        }
    } 
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.numberText}>{this.props.children}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
            borderWidth:4,
            borderColor:Colors.accent500,
            margin:24,
            padding:24,
            borderRadius:8,
            alignItems:'center',
            justifyContent:'center',

    },
    numberText:{
            fontSize:36,
            fontWeight:'bold',
            color:Colors.accent500
    }
    
})