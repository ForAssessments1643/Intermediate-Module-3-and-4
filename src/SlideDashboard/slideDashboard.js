import React from 'react'
import './src/SlideDashboard/SlideDashboard.css'
import Home from './src/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default class SlideDrawer extends React.Component {
   render(){
       let drawerClasses = 'side-drawer'
       if(this.props.show) {
          drawerClasses = 'side-drawer open'
       }       return(
   
          <div className={drawerClasses}>
             return (
    <NavigationContainer>
      <  Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title:"Home"}}  />
      </Stack.Navigator>
   
    </NavigationContainer>
   
  );
          </div>)
    }
    
}