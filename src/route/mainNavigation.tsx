import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../sreens/list-screen';
import { MainNavigationParams } from './mainNavigationParams';
import UserDetail from '../sreens/user-detail';


const Stack = createNativeStackNavigator<MainNavigationParams>();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="ListScreen" component={ListScreen} />
                <Stack.Screen name="UserDetail" component={UserDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation