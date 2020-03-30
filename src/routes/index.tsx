import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// routes
import privateRoutes from './private';
import mainRoutes from './main';

const Stack = createStackNavigator();

export default function Routes() {
    const isAuthenticated = false;

    const availableScreens = isAuthenticated ? privateRoutes : mainRoutes;

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            {availableScreens.map((screen) => (
                <Stack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                />
            ))}
        </Stack.Navigator>
    );
}
