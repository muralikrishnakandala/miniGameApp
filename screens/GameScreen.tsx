import { Component, ReactNode } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/UI/Title";
import NumberContainer from "../components/Game/NumberContainer";
import PrimaryButton from "../components/UI/PrimaryButton";

interface Props {
    userNumber:any
    onGameOVer:any
}
interface State {
    currentGuess: any
}
let minBoundary = 1;
let maxBoundary = 100;
export default class GameScreen extends Component<Props, State> {
    constructor(props:Props){
        super(props);
        this.state = {
            currentGuess: this.generateRandomBetween(1,100,this.props.userNumber)
        }
    }

    generateRandomBetween = (min:any, max:any, exclude:any) => {
        const rndNum = Math.floor(Math.random() * (max-min)) + min;
        if(rndNum === exclude) {
            this.generateRandomBetween(min,max, exclude);
            return;
        } else {
            return rndNum
        }        
    }

    nextGuessHandler = (direction:any) => {

        if((direction === 'lower' && this.state.currentGuess < this.props.userNumber) ||
        (direction === 'greater' && this.state.currentGuess > this.props.userNumber)) {
            Alert.alert("Don't lie!", "You know that this is wrong...",[{
                text:'Sorry!', style:'cancel'
            }] ) ;
            return;          
        }

        if(direction === 'lower'){
            maxBoundary = this.state.currentGuess 
            // const newRndNumber = this.generateRandomBetween(minBoundary,maxBoundary,this.state.currentGuess)
        } else {
            minBoundary = this.state.currentGuess + 1
            // const newRndNumber = this.generateRandomBetween(minBoundary,maxBoundary,this.state.currentGuess)
        }
        const newRndNumber = this.generateRandomBetween(minBoundary,maxBoundary,this.state.currentGuess)
        console.log(minBoundary, maxBoundary)
        this.setState({currentGuess: newRndNumber})
    }   

    componentDidUpdate(prevProps: any, prevState: any, snapshot?: any) {
        if(this.state.currentGuess === prevProps.userNumber) {
            this.props.onGameOVer()
        }
    }

    render(){

        return (
            <View style={styles.screen}>
                <Title>Opponent's Guess</Title>      
                <View>
                {/* Guess Number  */}
                <NumberContainer>{this.state.currentGuess}</NumberContainer>
                </View>
                <View>                    
                {/* Higher or Lower */}
                <Text>Higher or  Lower</Text>  
                <View>
                <PrimaryButton onPressButton={()=>this.nextGuessHandler('lower')}>-</PrimaryButton>
                <PrimaryButton onPressButton={()=>this.nextGuessHandler('greater')}>+</PrimaryButton>
                </View>              
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
            flex:1,
            padding:24
        }
})