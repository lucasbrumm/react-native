import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import FirstScreen from './src/pages/FirstScreen'
import Home from './src/pages/Home'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
import PageUsePassword from './src/pages/PageUsePassword'

export type RootStackParamList = {
  Home: undefined
  FirstScreen: undefined
  PageUsePassword: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='FirstScreen'
            component={FirstScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='PageUsePassword'
            component={PageUsePassword}
            options={{
              statusBarColor: 'black',
              statusBarStyle: 'auto',
              headerStyle: {
                backgroundColor: 'black',
              },
              headerTitle: '',
              headerBackVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
