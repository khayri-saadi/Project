import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import HomeScreen from './HomeScreen'
import {useTheme} from '@react-navigation/native'

const HomeStack = createStackNavigator()
const HomeStackScreen = ({navigation}) => {

  const {colors} =  useTheme()
  return(
    <HomeStack.Navigator screenOptions={{headerStyle:{
      backgroundColor : '#70b5f9'
    },
    headerTintColor : '#ffff',
    headerBackTitleStyle : {
      fontWeight : 'bold',
      textAlign : 'center',
      },
      
      }}
      
      >
      <HomeStack.Screen name='home' component={HomeScreen}  options={{
        title:'',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#70b5f9" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }}/>
    </HomeStack.Navigator>
  
  

  )}
    
  export default HomeStackScreen;