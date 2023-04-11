import { Component } from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
    children:any;
  
}
interface State {}
export default class Title extends Component<Props, State> {
    constructor(props:Props){
        super(props);
        this.state = {

        }
    } 
    render(){
        return <Text style={styles.title}>{this.props.children}</Text>
    }
}

const styles = StyleSheet.create({
    title:{
            fontSize: 24,
            fontWeight:'bold',
            color:'white',
            textAlign:'center',
            borderWidth:2,
            borderColor:'white',
            padding:12
    },
    
})