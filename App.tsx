import { Component, ReactNode } from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/startGameScreen";
import LinearGradient from 'react-native-linear-gradient';

interface Props {}
interface State {}
export default class App extends Component<Props, State> {
    constructor(props:Props){
        super(props);
        this.state = {

        }
    }
    render(){

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
            <StartGameScreen/>
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