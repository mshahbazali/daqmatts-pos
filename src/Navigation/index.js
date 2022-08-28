import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RCPHOME, InvoiceLineList, ItemList, PaymentSummary, SalesInvoice, InventoryDashboard } from '../Screens'
export default function index() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen options={{ headerShown: false }} name="RCPHOME" component={RCPHOME} />
                <Stack.Screen options={{ headerShown: false }} name="InvoiceLineList" component={InvoiceLineList} />
                <Stack.Screen options={{ headerShown: false }} name="ItemList" component={ItemList} />
                <Stack.Screen options={{ headerShown: false }} name="PaymentSummary" component={PaymentSummary} />
                <Stack.Screen options={{ headerShown: false }} name="SalesInvoice" component={SalesInvoice} />
                <Stack.Screen options={{ headerShown: false }} name="InventoryDashboard" component={InventoryDashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}