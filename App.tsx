import { Component, ReactNode } from "react";
import { Text, View, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/startGameScreen";
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from "./screens/GameScreen";

interface Props {}
interface State {
  userNumber:any
}
export default class App extends Component<Props, State> {
    constructor(props:Props){
        super(props);
        this.state = {
            userNumber:null
        }
    }

    pickedNumberHandler = (pickedNumber:any) => {
      console.log(pickedNumber)
          this.setState({userNumber: pickedNumber})
    } 

    render(){
        let screens = <StartGameScreen onConfirmNumber={this.pickedNumberHandler}/>

        if(this.state.userNumber) {
          screens = <GameScreen/>
        }

        return (
          
          <LinearGradient colors={['#4e0329', '#ddb52f']}
          style={styles.rootScreen}
          >
            <ImageBackground 
            source={require('./assets/Images/background.png')}
            resizeMode="cover"
            style={styles.rootScreen}
            imageStyle={styles.backgroundImage}
            >
              <SafeAreaView>
                  {screens}
              </SafeAreaView>
            </ImageBackground>
          </LinearGradient>
          
           
        ) 
        
    }
}

const styles = StyleSheet.create({
  rootScreen:{
    // backgroundColor:'#ddb52f',
    flex:1
  },
  backgroundImage:{
    opacity:0.15
  }
})