import { Component, ReactNode } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Colors from "../../constants/Color";

interface Props {
    children:any;
    onPressButton:any;
   
}
interface State {}
export default class PrimaryButton extends Component<Props, State> {
    constructor(props:Props){
        super(props);
        this.state = {

        }
    }

    
    render(){

        return (
            <View style={styles.buttonOuterContainer}>
                <Pressable onPress={this.props.onPressButton} android_ripple={{color:Colors.primary600}}                
                style={({pressed})=> pressed ? [styles.buttonInnerContainer, styles.pressed] :
                styles.buttonInnerContainer
             }>
                <Text style={styles.buttonText}>{this.props.children}</Text>
            </Pressable>
            </View>
        ) 
        
    }
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
        margin:4,
        borderRadius:28,
        overflow:'hidden'

    },
    buttonInnerContainer:{
        backgroundColor:Colors.primary500,
        paddingVertical:8,
        paddingHorizontal:16,        
        elevation:2,
    }, 
    buttonText:{
        color:'white',
        textAlign:'center'
    },
    pressed: {
        opacity: 0.75
    }
})