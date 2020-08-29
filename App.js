import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Feed from './components/Feed';
import News from './components/Newfeed';
import Main from './components/Main';
import Notification from './components/Notification';
import Test from './components/Test';
import { color } from 'react-native-reanimated';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ title: 'Welcome' }}/>
        <Stack.Screen name="Screen_Feed" component={Feed} 
          options={{ 
            
            title: 'Bản tin',
            
            headerStyle: {
              backgroundColor: '#3949AB',
              borderBottomRightRadius : 10,
              borderBottomLeftRadius: 10,
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: '100',
            },
            
            }}/>
        <Stack.Screen name="Screen_News" component={News} 
          options={{ 
            title: 'Bản tin',
            
            headerStyle: {
              backgroundColor: '#3949AB',
              borderBottomRightRadius : 10,
              borderBottomLeftRadius: 10,
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: '100',
            },
        }}/>
        <Stack.Screen name="Screen_Notification" component={Notification} 
          options={{ 
            title: 'Thông báo',
            
            headerStyle: {
              backgroundColor: '#3949AB',
              borderBottomRightRadius : 10,
              borderBottomLeftRadius: 10,
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: '100',
            },
        }}/>
        <Stack.Screen name="Screen_Test" component={Test} 
          options={{ 
            title: 'Test',
            
            headerStyle: {
              backgroundColor: '#3949AB',
              borderBottomRightRadius : 10,
              borderBottomLeftRadius: 10,
            },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: '100',
            },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;