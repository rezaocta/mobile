import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Home, Finish } from '../pages';
import { useEffect } from 'react';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash"
                component={Splash}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name="Finish" component={Finish}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default Router;