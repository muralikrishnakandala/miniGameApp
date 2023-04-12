import { Component, ReactNode } from "react";
import { Text, View, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/startGameScreen";
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from "./screens/GameScreen";
import Colors from "./constants/Color";
import GameOverScreen from "./screens/GameOverScreen";

interface Props {}
interface State {
  userNumber:any
  gameIsOver:any
}
export default class App extends Component<Props, State> {
    constructor(props:Props){
        super(props);
        this.state = {
            userNumber:null,
            gameIsOver:true
        }
    }

    pickedNumberHandler = (pickedNumber:any) => {      
        this.setState({userNumber: pickedNumber});
        this.setState({gameIsOver: false});
    } 

    gameOverHandler = () => {
      this.setState({gameIsOver: true});
    }

    render(){
        let screens = <StartGameScreen onConfirmNumber={this.pickedNumberHandler}/>

        if(this.state.userNumber) {
          screens = <GameScreen userNumber={this.state.userNumber}
          onGameOVer ={this.gameOverHandler}
          />
        }

        if(this.state.gameIsOver && this.state.userNumber) {
          screens = <GameOverScreen/>
        }

        return (
          
          <LinearGradient colors={[Colors.primary700, Colors.accent500]}
          style={styles.rootScreen}
          >
            <ImageBackground 
            source={require('./assets/Images/background.png')}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
            >
              <SafeAreaView style={styles.rootScreen}>
                  {screens}
              </SafeAreaView>
            </ImageBackground>
          </LinearGradient>
                   
        ) 
        
    }
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1
  },
  backgroundImage:{
    opacity:0.15
  }
})