import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';

export default function index({ navigation }) {
    const data = [
        {
            name: 'Gross Amount',
            amount: '21,087.00',
        },
        {
            name: 'VATable Sales',
            amount: '18,827.69',
        },
        {
            name: 'VAT 12%',
            amount: '2,259.32',
        },
        {
            name: 'Zero-Rated',
            amount: '0.00',
        },
        {
            name: 'VAT-Exempt',
            amount: '0.00',
        },
        {
            name: 'Less: Promo',
            amount: '0.00',
        },
        {
            name: 'Less: Promo',
            amount: '0.00',
        },
        {
            name: 'Gross Due',
            amount: '21,087.00',
        },
        {
            name: 'Applied Credits',
            amount: '1,140.00',
        },
        {
            name: 'Applied Points',
            amount: '0.00',
        },
    ]
    const [modalVisible, setModalVisible] = useState(false);
    const [cashContainer, setCashContainer] = useState(true)
    const [checkContainer, setCheckContainer] = useState(false)
    const [walletContainer, setWalletContainer] = useState(false)
    const [splitContainer, setSplitContainer] = useState(false)
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', }}>
                <ScrollView>
                    <View>
                        <View style={{ flexDirection: 'row', paddingVertical: 13, paddingHorizontal: 18, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#1EE9F6' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                <TouchableOpacity onPress={() => navigation.navigate("Reports")} style={{ backgroundColor: "yellow", padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                    <AntDesign name="arrowleft" size={32} color="black" style={{ marginHorizontal: 10 }} />
                                    <Text style={{ fontSize: 22, fontWeight: '600' }}>Order Details</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ backgroundColor: "yellow", padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 22, fontWeight: '600' }}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: 10 }}>
                        <ScrollView>
                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', marginVertical: 15 }}>
                                <View style={{ backgroundColor: '#A19A9A', width: '33%', paddingVertical: 10, borderRadius: 20, paddingHorizontal: 20, marginHorizontal: 17 }}>
                                    <View style={{ backgroundColor: "#000", paddingVertical: 6, justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 13 }}>
                                        <Text style={{ fontSize: 22, color: "#fff", fontWeight: '400' }}>Customer Info</Text>
                                    </View>
                                    <View style={{ marginTop: 10 }}>
                                        <Text style={{ color: '#fff', fontSize: 23, fontWeight: '400' }}>Name</Text>
                                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400', marginTop: 10 }}>CC1485052</Text>
                                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>Enzo Meat Market Foods Corp.</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 14 }}>
                                        <View style={{ width: '45%' }}>
                                            <Text style={{ color: '#fff', fontSize: 21, fontWeight: '400', textAlign: 'center' }}>Tax Type</Text>
                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400', textAlign: 'center', paddingVertical: 6, borderBottomColor: '#000', borderBottomWidth: 1.4 }}>VAT</Text>
                                        </View>
                                        <View style={{ width: '45%' }}>
                                            <Text style={{ color: '#fff', fontSize: 21, fontWeight: '400', textAlign: 'center' }}>Default Terms</Text>
                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400', textAlign: 'center', paddingVertical: 6, borderBottomColor: '#000', borderBottomWidth: 1.4 }}>7 Days</Text>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: "#000", paddingVertical: 6, width: '100%', borderRadius: 13, paddingHorizontal: 15, marginTop: 15 }}>
                                        <Text style={{ fontSize: 22, color: "#fff", fontWeight: '400', }}>Credit Standing</Text>
                                    </View>
                                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                        <View style={{ width: '40%' }}>
                                            <Text style={{ color: '#fff', fontSize: 23, fontWeight: '400' }}>Credit Limit</Text>
                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400', marginTop: 10, borderBottomColor: "#000", borderBottomWidth: 1.5, paddingVertical: 6 }}>200,000.00</Text>
                                        </View>
                                        <TouchableOpacity style={{ backgroundColor: "yellow", padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                            <Text style={{ fontSize: 18, fontWeight: '600' }}>SYNC</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginTop: 10, }}>
                                        <View style={{ width: '45%' }}>
                                            <Text style={{ color: '#fff', fontSize: 23, fontWeight: '400' }}>Outstanding Due</Text>
                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400', marginTop: 10, borderBottomColor: "#000", borderBottomWidth: 1.5, paddingVertical: 6 }}>145,000.00</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                        <View style={{ width: '40%' }}>
                                            <Text style={{ color: '#fff', fontSize: 23, fontWeight: '400' }}>Credit Limit</Text>
                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400', marginTop: 10, borderBottomColor: "#000", borderBottomWidth: 1.5, paddingVertical: 6 }}>200,000.00</Text>
                                        </View>
                                        <View style={{ width: '47%' }}>
                                            <Text style={{ color: '#fff', fontSize: 23, fontWeight: '400' }}>Outstanding Due</Text>
                                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400', marginTop: 10, borderBottomColor: "#000", borderBottomWidth: 1.5, paddingVertical: 6 }}>145,000.00</Text>
                                        </View>
                                    </View>
                                    <View style={{ backgroundColor: "#000", paddingVertical: 6, width: '100%', borderRadius: 13, paddingHorizontal: 15, marginTop: 15 }}>
                                        <Text style={{ fontSize: 22, color: "#fff", fontWeight: '400', }}>Invoice Info</Text>
                                    </View>
                                    <View style={{ width: '47%', marginTop: 20 }}>
                                        <Text style={{ color: '#000', fontSize: 20, fontWeight: '500' }}>Sales Invoice Type</Text>
                                    </View>
                                    <View style={{ marginTop: 16, width: '55%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400' }}>Cash</Text>
                                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '400', }}>Charge</Text>
                                    </View>
                                    <View style={{ backgroundColor: "#000", paddingVertical: 6, width: '100%', borderRadius: 13, paddingHorizontal: 15, marginTop: 15 }}>
                                        <Text style={{ fontSize: 22, color: "#fff", fontWeight: '400', textAlign: 'center' }}>System References</Text>
                                    </View>
                                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                        <Text style={{ color: '#000', fontSize: 17, fontWeight: '500' }}>Transaction</Text>
                                        <Text style={{ color: 'yellow', fontSize: 17, fontWeight: '500' }}>100025324320</Text>
                                    </View>
                                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                        <Text style={{ color: '#000', fontSize: 17, fontWeight: '500' }}>Cash</Text>
                                        <Text style={{ color: 'yellow', fontSize: 17, fontWeight: '500' }}>100025324320</Text>
                                    </View>
                                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                        <Text style={{ color: '#000', fontSize: 17, fontWeight: '500' }}>Charge</Text>
                                        <Text style={{ color: 'yellow', fontSize: 17, fontWeight: '500' }}>100025324320</Text>
                                    </View>
                                    <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                        <Text style={{ color: '#000', fontSize: 17, fontWeight: '500' }}>Payment</Text>
                                        <Text style={{ color: 'yellow', fontSize: 17, fontWeight: '500' }}>100025324320</Text>
                                    </View>
                                </View>
                                <View style={{ backgroundColor: "#EDEDD1", borderColor: '#000', borderWidth: 1, height: '100%', width: '28%', paddingVertical: 10, borderRadius: 20, paddingHorizontal: 20, marginHorizontal: 17 }}>
                                    <View style={{ backgroundColor: "#000", paddingVertical: 6, justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 13 }}>
                                        <Text style={{ fontSize: 22, color: "#fff", fontWeight: '400' }}>Payment Details</Text>
                                    </View>
                                    <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: "space-between" }}>
                                        <View style={{ marginTop: 15, width: '40%' }}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setCashContainer(true)
                                                    setCheckContainer(false)
                                                    setWalletContainer(false)
                                                    setSplitContainer(false)
                                                }}
                                                style={{ backgroundColor: cashContainer == true ? '#fa9bd6' : '#82C5EF', padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                                <Text style={{ fontSize: 20, fontWeight: '600' }}>Cash</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setCashContainer(false)
                                                    setCheckContainer(false)
                                                    setWalletContainer(true)
                                                    setSplitContainer(false)
                                                }}
                                                style={{ backgroundColor: walletContainer == true ? '#fa9bd6' : '#82C5EF', padding: 10, borderRadius: 10, marginTop: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                                <Text style={{ fontSize: 20, fontWeight: '600' }}>eWallet</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ marginTop: 15, width: '40%' }}>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setCashContainer(false)
                                                    setCheckContainer(true)
                                                    setWalletContainer(false)
                                                    setSplitContainer(false)
                                                }} style={{ backgroundColor: checkContainer == true ? '#fa9bd6' : '#82C5EF', padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                                <Text style={{ fontSize: 20, fontWeight: '600' }}>Check</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                onPress={() => {
                                                    setCashContainer(false)
                                                    setCheckContainer(false)
                                                    setWalletContainer(false)
                                                    setSplitContainer(true)
                                                }}
                                                style={{ backgroundColor: splitContainer == true ? '#fa9bd6' : '#82C5EF', padding: 10, marginTop: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                                <Text style={{ fontSize: 20, fontWeight: '600' }}>SPLIT</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>


                                    {/* Cash Container  */}
                                    {
                                        cashContainer == true ?
                                            <View style={{ backgroundColor: "#C4C4C4", paddingTop: 10, paddingBottom: 70, width: '100%', borderRadius: 13, paddingHorizontal: 15, marginTop: 80 }}>
                                                <TouchableOpacity style={{ backgroundColor: "yellow", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '20%' }}>
                                                    <Text style={{ fontSize: '80%', fontWeight: '600' }}>CASH</Text>
                                                </TouchableOpacity>
                                                <Text style={{ color: '#000', fontSize: 20, fontWeight: '400', marginTop: 20 }}>Amount</Text>
                                                <Text style={{ color: 'red', fontSize: 24, fontWeight: '600', marginTop: 10, borderBottomColor: '#000', borderBottomWidth: 1.5, paddingVertical: 5, textAlign: 'center' }}>P 22,000.00</Text>
                                            </View>
                                            :
                                            // Check Container 
                                            checkContainer == true ?
                                                <View style={{ backgroundColor: "#C4C4C4", paddingTop: 10, paddingBottom: 70, width: '100%', borderRadius: 13, paddingHorizontal: 15, marginTop: 80 }}>
                                                    <TouchableOpacity style={{ backgroundColor: "yellow", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '20%' }}>
                                                        <Text style={{ fontSize: '80%', fontWeight: '600' }}>CHECK</Text>
                                                    </TouchableOpacity>
                                                    <Text style={{ color: '#000', fontSize: 20, fontWeight: '400', marginTop: 20 }}>Bank & Branch</Text>
                                                    <Text style={{ color: '#FF0000', fontSize: 20, fontWeight: '600', marginTop: 10, borderRadius: 16, backgroundColor: '#88F0EA', paddingVertical: 5, textAlign: 'center' }}>PNB-Subangdaku</Text>
                                                    <Text style={{ color: '#000', fontSize: 20, fontWeight: '400', marginTop: 20 }}>Check No.</Text>
                                                    <Text style={{ color: '#FF0000', fontSize: 20, fontWeight: '600', marginTop: 10, borderRadius: 16, backgroundColor: '#88F0EA', paddingVertical: 5, textAlign: 'center' }}>12354853</Text>
                                                    <Text style={{ color: '#000', fontSize: 20, fontWeight: '400', marginTop: 20 }}>Check Date</Text>
                                                    <Text style={{ color: '#FF0000', fontSize: 20, fontWeight: '600', marginTop: 10, borderRadius: 16, backgroundColor: '#88F0EA', paddingVertical: 5, textAlign: 'center' }}>06/24/2022</Text>
                                                    <Text style={{ color: '#000', fontSize: 20, fontWeight: '400', marginTop: 20 }}>Amount</Text>
                                                    <Text style={{ color: '#FF0000', fontSize: 20, fontWeight: '600', marginTop: 10, borderRadius: 16, backgroundColor: '#88F0EA', paddingVertical: 5, textAlign: 'center' }}>P 22,000.00</Text>
                                                </View>
                                                :
                                                // EWallet Conatiner 
                                                walletContainer == true ?
                                                    <View style={{ backgroundColor: "#C4C4C4", paddingTop: 10, paddingBottom: 70, width: '100%', borderRadius: 13, paddingHorizontal: 15, marginTop: 80 }}>
                                                        <TouchableOpacity style={{ backgroundColor: "yellow", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '20%' }}>
                                                            <Text style={{ fontSize: '80%', fontWeight: '600' }}>eWallet</Text>
                                                        </TouchableOpacity>
                                                        <Text style={{ color: '#000', fontSize: 20, fontWeight: '400', marginTop: 20 }}>Wallet Name</Text>
                                                        <Text style={{ color: '#FF0000', fontSize: 20, fontWeight: '600', marginTop: 10, borderRadius: 16, backgroundColor: '#88F0EA', paddingVertical: 5, textAlign: 'center' }}>GCASH</Text>
                                                        <Text style={{ color: '#000', fontSize: 20, fontWeight: '400', marginTop: 20 }}>Reference No.</Text>
                                                        <Text style={{ color: '#FF0000', fontSize: 20, fontWeight: '600', marginTop: 10, borderRadius: 16, backgroundColor: '#88F0EA', paddingVertical: 5, textAlign: 'center' }}>G5254278413145</Text>
                                                        <Text style={{ color: '#000', fontSize: 20, fontWeight: '400', marginTop: 20 }}>Amount</Text>
                                                        <Text style={{ color: '#FF0000', fontSize: 20, fontWeight: '600', marginTop: 10, borderRadius: 16, backgroundColor: '#88F0EA', paddingVertical: 5, textAlign: 'center' }}>P 22,000.00</Text>
                                                    </View>
                                                    :
                                                    // Split Container 
                                                    <View>
                                                        <View style={{ backgroundColor: "#C4C4C4", paddingTop: 10, paddingBottom: 40, width: '100%', borderRadius: 13, paddingHorizontal: 15, marginTop: 80 }}>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                                                                <TouchableOpacity style={{ backgroundColor: "yellow", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '20%' }}>
                                                                    <Text style={{ fontSize: '80%', fontWeight: '600', }}>Split</Text>
                                                                </TouchableOpacity>
                                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                                                    <TouchableOpacity>
                                                                        <AntDesign name="pluscircleo" size={24} color="black" />
                                                                    </TouchableOpacity>
                                                                    <View style={{ width: '67%' }}>
                                                                        <Text style={{ marginHorizontal: 10, fontSize: 18, fontWeight: '600', color: '#000', textAlign: 'center' }}>4</Text>
                                                                        <Text style={{ marginHorizontal: 10, fontSize: 15, fontWeight: '600', color: '#000', textAlign: 'center' }}>Payment</Text>
                                                                    </View>
                                                                    <TouchableOpacity>
                                                                        <AntDesign name="minuscircleo" size={24} color="black" />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                                                                <AntDesign name="delete" size={18} color="black" style={{ width: '10%', marginRight: 10 }} />
                                                                <Text style={{ color: '#000', fontSize: 17, fontWeight: '600', width: '30%', marginRight: 5 }}>Cash</Text>
                                                                <Text style={{ color: '#000', fontSize: 16, fontWeight: '600', width: '40%', marginRight: 10 }}>10,000.00</Text>
                                                                <Text style={{ color: '#000', fontSize: 13, fontWeight: '400', backgroundColor: '#88F0EA', paddingVertical: 2, textAlign: 'center', paddingHorizontal: 4, width: '33%' }}>DETAILS</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                                                                <AntDesign name="delete" size={18} color="black" style={{ width: '10%', marginRight: 10 }} />
                                                                <Text style={{ color: '#000', fontSize: 17, fontWeight: '600', width: '30%', marginRight: 5 }}>Check</Text>
                                                                <Text style={{ color: '#000', fontSize: 16, fontWeight: '600', width: '40%', marginRight: 10 }}>5,000.00</Text>
                                                                <Text style={{ color: '#000', fontSize: 13, fontWeight: '400', backgroundColor: '#88F0EA', paddingVertical: 2, textAlign: 'center', paddingHorizontal: 4, width: '33%' }}>DETAILS</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                                                                <AntDesign name="delete" size={18} color="black" style={{ width: '10%', marginRight: 10 }} />
                                                                <Text style={{ color: '#000', fontSize: 17, fontWeight: '600', width: '30%', marginRight: 5 }}>eWallet</Text>
                                                                <Text style={{ color: '#000', fontSize: 16, fontWeight: '600', width: '40%', marginRight: 10 }}>5,000.00</Text>
                                                                <Text style={{ color: '#000', fontSize: 13, fontWeight: '400', backgroundColor: '#88F0EA', paddingVertical: 2, textAlign: 'center', paddingHorizontal: 4, width: '33%' }}>DETAILS</Text>
                                                            </View>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20 }}>
                                                                <AntDesign name="delete" size={18} color="black" style={{ width: '10%', marginRight: 10 }} />
                                                                <Text style={{ color: '#000', fontSize: 17, fontWeight: '600', width: '30%', marginRight: 5 }}>eWallet</Text>
                                                                <Text style={{ color: '#000', fontSize: 16, fontWeight: '600', width: '40%', marginRight: 10 }}>5,000.00</Text>
                                                                <Text style={{ color: '#000', fontSize: 13, fontWeight: '400', backgroundColor: '#88F0EA', paddingVertical: 2, textAlign: 'center', paddingHorizontal: 4, width: '33%' }}>DETAILS</Text>
                                                            </View>
                                                        </View>
                                                        <Text style={{ color: '#FF0000', fontSize: 20, fontWeight: '600', marginTop: 10, borderRadius: 16, backgroundColor: '#88F0EA', paddingVertical: 5, textAlign: 'center' }}>P 22,000.00</Text>
                                                    </View>
                                    }


                                    <View style={{ backgroundColor: "#000", paddingVertical: 6, width: '100%', borderRadius: 13, paddingHorizontal: 15, marginTop: 40 }}>
                                        <Text style={{ fontSize: 22, color: "#fff", fontWeight: '400', textAlign: 'center' }}>Credits & Points</Text>
                                    </View>
                                    <View style={{ backgroundColor: "#CDCDC7", paddingVertical: 6, width: '100%', borderRadius: 13, paddingHorizontal: 15, marginTop: 40 }}>
                                        <Text style={{ fontSize: 22, color: "#000", fontWeight: '400', textAlign: 'center' }}>Credit & Returns</Text>
                                    </View>
                                    <View style={{ backgroundColor: "#CDCDC7", paddingVertical: 6, width: '100%', borderRadius: 13, paddingHorizontal: 15, marginTop: 40 }}>
                                        <Text style={{ fontSize: 22, color: "#000", fontWeight: '400', textAlign: 'center' }}>Apply Points</Text>
                                    </View>

                                </View>
                                <View style={{ backgroundColor: "#B5F9B4", borderColor: '#000', borderWidth: 1, height: '100%', width: '28%', paddingVertical: 10, borderRadius: 20, paddingHorizontal: 20, marginHorizontal: 17 }}>
                                    <View style={{ backgroundColor: "#000", paddingVertical: 6, justifyContent: 'center', alignItems: 'center', width: '100%', borderRadius: 13 }}>
                                        <Text style={{ fontSize: 22, color: "#fff", fontWeight: '400' }}>Invoice Summary</Text>
                                    </View>
                                    {
                                        data.map((e, i) => {
                                            return (
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 18 }}>
                                                    <Text style={{ fontSize: 22, color: "#000", fontWeight: '400', textAlign: 'center' }}>{e.name}</Text>
                                                    <Text style={{ fontSize: 22, color: "red", fontWeight: '400', textAlign: 'center' }}>{e.amount}</Text>
                                                </View>
                                            )
                                        })
                                    }
                                    <View style={{ backgroundColor: 'red', width: '100%', height: 2, }}></View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 18 }}>
                                        <Text style={{ fontSize: 22, color: "#000", fontWeight: '600', textAlign: 'center' }}>NET DUE</Text>
                                        <Text style={{ fontSize: 22, color: "red", fontWeight: '600', textAlign: 'center' }}>19,947.00</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 18 }}>
                                        <Text style={{ fontSize: 22, color: "#000", fontWeight: '400', textAlign: 'center' }}>Tendered</Text>
                                        <Text style={{ fontSize: 22, color: "red", fontWeight: '400', textAlign: 'center' }}>22,000.00</Text>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 18 }}>
                                        <Text style={{ fontSize: 22, color: "#000", fontWeight: '400', textAlign: 'center' }}>Change</Text>
                                        <Text style={{ fontSize: 22, color: "#000", fontWeight: '500', textAlign: 'center' }}>2,053.00</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={{ fontSize: 25, color: "#000", fontWeight: '500', textAlign: 'center' }}>Invoice Submitted</Text>
                            <AntDesign name="checkcircle" size={40} color="#42760F" style={{ marginVertical: 15 }} />
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ borderColor: '#000', borderWidth: 2, paddingVertical: 5, paddingHorizontal: 30, marginTop: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ fontSize: 20, fontWeight: '600' }}>OK</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', backgroundColor: "#fff"
    },
    sideBarContainer: {
        width: '20%',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderColor: 'grey',
        borderWidth: 1
    },
    sideBarLogoContainer: {
        marginBottom: 25
    },
    menuContainer: {
        marginVertical: 10
    },
    menuBox: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuText: {
        color: "#000",
        fontSize: 23,
        fontWeight: '500'
    },

    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20
    },
    dateContainerText: {
        fontSize: 26,
        fontWeight: '500',
    },
    calendarBox: {
        backgroundColor: '#9ADFEE',
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        borderColor: '#000',
        borderWidth: 1
    },
    calendarBoxCurrent: {
        backgroundColor: '#FD9191',
        paddingVertical: 12,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        borderColor: '#000',
        borderWidth: 1
    },
    calendarBoxTopText: {
        fontSize: 23,
        fontWeight: '600',
    },
    calendarBoxBottomText: {
        fontSize: 17,
        fontWeight: '600',
    },
    tableContainer: {
        justifyContent: 'center',
        width: '100%',
        marginTop: 20
    },
    tableHeadContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
    },
    tableBodyContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    tableHead: {
        paddingVertical: 10,
        textAlign: 'center',
        backgroundColor: '#000'
    },
    tableHeadText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: '500',
    },
    tableBody: {
        paddingVertical: 10,
        textAlign: 'center',
    },
    tableBodyText: {
        color: "#000",
        fontSize: 18,
        fontWeight: '500',
    },
    tableHeadEngagementText: {
        color: "#000",
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center'
    },
    tableBoxFirst: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '28%',
        paddingVertical: 10
    },
    tableBoxSecond: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '10%',
        paddingVertical: 10
    },
    tableBoxThird: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '10%',
        paddingVertical: 10
    },
    tableBoxFour: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '10%',
        paddingVertical: 10
    },
    tableBoxFive: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '10%',
        paddingVertical: 10
    },
    tableBoxSix: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '10%',
        paddingVertical: 10
    },
    engagementBtn: {
        backgroundColor: 'yellow',
        paddingVertical: 2,
        paddingHorizontal: 5,
        marginHorizontal: 10,
        borderRadius: 20
    },
    collectionBtn: {
        backgroundColor: 'yellow',
        paddingVertical: 2,
        paddingHorizontal: 5,
        marginHorizontal: 10,
        borderRadius: 20
    },
    engagementBtnText: {
        fontSize: 15, fontWeight: '500', color: "#000",
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,

    },
    modalView: {
        marginTop: "10%",
        marginLeft: "10%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})