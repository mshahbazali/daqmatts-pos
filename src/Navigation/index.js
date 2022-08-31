import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RCPHOME, InvoiceLineList, ItemList, PaymentSummary, SalesInvoice, InventoryDashboard, StockRequest, ItemListLine, RequestItem, StockLoadIn, StockTransfer, StockLoadOut, ItemDetail, ItemSelection, Pending } from '../Screens'
export default function index() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>


                {/* RCO HOME  */}
                <Stack.Screen options={{ headerShown: false }} name="RCPHOME" component={RCPHOME} />
                <Stack.Screen options={{ headerShown: false }} name="InvoiceLineList" component={InvoiceLineList} />
                <Stack.Screen options={{ headerShown: false }} name="ItemList" component={ItemList} />
                <Stack.Screen options={{ headerShown: false }} name="PaymentSummary" component={PaymentSummary} />
                <Stack.Screen options={{ headerShown: false }} name="SalesInvoice" component={SalesInvoice} />

                {/* Inventory Dashboard */}

                <Stack.Screen options={{ headerShown: false }} name="InventoryDashboard" component={InventoryDashboard} />

                {/* Stock Request */}
                <Stack.Screen options={{ headerShown: false }} name="StockRequest" component={StockRequest} />
                <Stack.Screen options={{ headerShown: false }} name="ItemListLine" component={ItemListLine} />
                <Stack.Screen options={{ headerShown: false }} name="RequestItem" component={RequestItem} />

                {/* Stock Transfer */}

                <Stack.Screen options={{ headerShown: false }} name="StockTransfer" component={StockTransfer} />

                {/* Stock Load In */}

                <Stack.Screen options={{ headerShown: false }} name="StockLoadIn" component={StockLoadIn} />
                <Stack.Screen options={{ headerShown: false }} name="Pending" component={Pending} />

                {/* Stock Load Out */}

                <Stack.Screen options={{ headerShown: false }} name="StockLoadOut" component={StockLoadOut} />
                <Stack.Screen options={{ headerShown: false }} name="ItemDetail" component={ItemDetail} />
                <Stack.Screen options={{ headerShown: false }} name="ItemSelection" component={ItemSelection} />


            </Stack.Navigator>
        </NavigationContainer>
    )
}