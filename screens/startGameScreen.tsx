import { Component, ReactNode } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

interface Props {}
interface State {}
export default class StartGameScreen extends Component<Props, State> {
    constructor(props:Props){
        super(props);
        this.state = {

        }
    }
    render(){

        return (
            <View style={styles.inputContainer}>
                <TextInput
                 style={styles.numberInput} 
                keyboardType="number-pad"
                maxLength={2}
                />
                {/* Buttons */}
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>                    
                    <PrimaryButton>Confirm</PrimaryButton>               
                    </View>
                </View>
            </View>
        ) 
        
    }
}

const styles = StyleSheet.create({
    inputContainer:{
        // flex:1,
        marginTop:100,
        marginHorizontal:24,
        backgroundColor:'#3b021f',
        padding:16,
        borderRadius:8,
        elevation: 4, // only android  
        //shadow in ios
        shadowColor:'black',
        shadowOffset: {width:0, height:2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent:'center',
        alignItems:'center'
    },
     numberInput:{
        height:60,
        fontSize: 32,
        borderBottomColor:'#ddb52f',
        borderBottomWidth:2,
        color:'#ddb52f',
        marginVertical:8,
        fontWeight:'bold',
        width:60,
        textAlign:'center',
     },
     buttonsContainer:{
        flexDirection:'row',        
        
     },
     buttonContainer:{
        flex:1
     }
})