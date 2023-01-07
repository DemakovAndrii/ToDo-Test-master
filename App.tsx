import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CreateTaskScreen from './src/screens/CreateTaskScreen';
import {useColorScheme} from 'react-native';
import Palette from './src/styles/Palette';
import CustomBackButtom from './src/components/custom/CustomBackButtom';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

const App = () => {
  const scheme = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="TaskScreen"
            component={CreateTaskScreen}
            options={{
              headerShadowVisible: false,
              title: '',
              headerStyle: {
                backgroundColor: scheme
                  ? Palette.darkTh.backGround
                  : Palette.lightTh.backGround,
              },
              headerLeft: () => <CustomBackButtom />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <App />
    </GestureHandlerRootView>
  );
};
// export default App;
