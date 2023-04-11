import { Component, ReactNode } from "react";
import { Text, View, StyleSheet, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/UI/PrimaryButton";
import Title from "../components/UI/Title";

interface Props {onConfirmNumber:any}
interface State {enteredNumber:any}
export default class StartGameScreen extends Component<Props, State> {
    constructor(props:Props){
        super(props);
        this.state = {
            enteredNumber: ''
        }
    }

    numberInputHandler = (enteredInputNumber:any) => {    
        // step2:      enteredInputNumber from text input is set to state   
        this.setState({enteredNumber: enteredInputNumber})
    } 
    
    resetInputHandler = () => {        
        this.setState({enteredNumber: ''})    
     }

     confirmInputHandler = () => {
        const choosenNumber = parseInt(this.state.enteredNumber)
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
            Alert.alert('Invalid Number!',
            'Number has to be a number between 1 and 99',
            [{text:'Okay', style:'destructive', onPress: this.resetInputHandler}]
            );
            return;
        }
        this.props.onConfirmNumber(choosenNumber)
        
     }

    render(){

        return (
            <>
                <Title>Guess My Number</Title>
            <View style={styles.inputContainer}>
                <TextInput
                 style={styles.numberInput} 
                keyboardType="number-pad"
                maxLength={2}
                //step1: numberInputHandler function call
                onChangeText={this.numberInputHandler}
                value={this.state.enteredNumber}
                />
                {/* Buttons */}
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                    <PrimaryButton onPressButton={this.resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>                    
                    <PrimaryButton onPressButton={this.confirmInputHandler}>Confirm</PrimaryButton>               
                    </View>
                </View>
            </View></>
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