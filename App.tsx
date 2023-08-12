import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from './screens/Main';
import Details from './screens/Details';
import MakeUp from './screens/MakeUp';
import SkinCare from './screens/SkinCare';
const Stack = createNativeStackNavigator();
import Container from './screens/Reducer/Container';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(Container);
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            component={Main}
            name="Main"
          />
          <Stack.Screen
            options={{headerShown: false}}
            component={Details}
            name="Details"
          />
          <Stack.Screen
            options={{headerShown: false}}
            component={MakeUp}
            name="MakeUp"
          />
          <Stack.Screen
            options={{headerShown: false}}
            component={SkinCare}
            name="SkinCare"
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
