import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/scenes/Home';
import ViewDetails from './src/scenes/ViewDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import defaultTheme from './src/styles/theme';
import { useFonts } from 'expo-font';
import Theme from './src/styles/theme';
import AddPatient from './src/scenes/AddPatient';
import AddRecord from './src/scenes/AddRecord';
import store from './src/redux/stores';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

const { colors, font } = Theme;

export default function App() {
  const [loaded] = useFonts({
    'BalooThambi2-Bold': require('./src/assets/fonts/BalooThambi2-Bold.ttf'),
    'BalooThambi2-Regular': require('./src/assets/fonts/BalooThambi2-Regular.ttf'),
    'BalooThambi2-Medium': require('./src/assets/fonts/BalooThambi2-Medium.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer theme={defaultTheme}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName='Home'>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='ViewDetails' component={ViewDetails} />
            <Stack.Screen name='AddPatient' component={AddPatient} />
            <Stack.Screen name='AddRecord' component={AddRecord} />
          </Stack.Navigator>
        </NavigationContainer>
        {/* <ViewDetails /> */}
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
});
