import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard, RCP, Remitance, Inventory, Booking, Setting, SIDelivery, Transaction, Reports } from '../Screens'
export default function index() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="Remitance" component={Remitance} />
                <Stack.Screen options={{ headerShown: false }} name="Dashboard" component={Dashboard} />
                <Stack.Screen options={{ headerShown: false }} name="RCP" component={RCP} />
                <Stack.Screen options={{ headerShown: false }} name="Booking" component={Booking} />
                <Stack.Screen options={{ headerShown: false }} name="Setting" component={Setting} />
                <Stack.Screen options={{ headerShown: false }} name="SIDelivery" component={SIDelivery} />
                <Stack.Screen options={{ headerShown: false }} name="Transaction" component={Transaction} />
                <Stack.Screen options={{ headerShown: false }} name="Reports" component={Reports} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}