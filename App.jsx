import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MoviesList from './src/screens/MoviesList';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {withAuthenticator} from '@aws-amplify/ui-react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="MoviesList"
            component={MoviesList}
            options={{title: 'Camila and Amber Movies'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
  },
};

export default withAuthenticator(App);
