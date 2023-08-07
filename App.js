import { StyleSheet, View } from 'react-native';
import { StatusBar} from 'expo-status-bar'; 
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Ionicons} from "@expo/vector-icons"

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';

// import FavoritesContextProvider from './store/context/FavoritesContext';
import { Provider } from 'react-redux';
import { store } from './store/redux/Store';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

export default function App() {
  const DrawerNavigator = () => {
    return (
        <Drawer.Navigator 
        screenOptions={{
          headerStyle: {backgroundColor: '#351401'}, 
          headerTintColor: 'white', 
          sceneContainerStyle: {backgroundColor: '#3f2f25'},
          drawerContentStyle: {backgroundColor: '#351401'},
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: '#351401',
          drawerActiveBackgroundColor: '#e4baa1'
        }}
        >
          <Drawer.Screen name='Categories' component={CategoriesScreen} 
          options= {{
            title: 'All Categories',
            drawerIcon: ({color, size}) => (
              <Ionicons name='list' color={color} size={size} />
            ),
          } }/>
          <Drawer.Screen name='Favorites' component={FavoritesScreen} 
          options= {{
            drawerIcon: ({color, size}) => (
              <Ionicons name='star' color={color} size={size} />
            ),
          } }/>
        </Drawer.Navigator>
    )
  }
  return (
    <>
    <View style={styles.container}>
      <StatusBar style='light' />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#351401'}, headerTintColor: 'white', contentStyle: {backgroundColor: '#3f2f25'}}}>
            <Stack.Screen name='Meals Categories' component={DrawerNavigator} options={{ headerShown: false}} />
            <Stack.Screen name='Meals Overview' component={MealsOverviewScreen} />
            <Stack.Screen name='Meals Details' component={MealsDetailsScreen} options={{title: 'About the Meal'}} />
          </Stack.Navigator>
        </NavigationContainer>
        </Provider>
      {/* </FavoritesContextProvider> */}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
  },
});
