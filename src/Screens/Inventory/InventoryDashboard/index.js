import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';

export default function Index({ navigation }) {
    const data = [
        {
            itemCode: 480002245637,
            tagName: '10/06/2022',
            description: 24562345,
            brand: 245123,
            uom: 245123,
            qty: 245123,
        },
        {
            itemCode: 480002245637,
            tagName: '10/06/2022',
            description: 24562345,
            brand: 245123,
            uom: 245123,
            qty: 245123,
        },
    ]
    const [modalVisible, setModalVisible] = useState(false);
    const [stockRequest, setStockRequest] = useState(false);
    const [stockTransfer, setStockTransfer] = useState(false);
    const [physicalCount, setPhysicalCount] = useState(false);
    const [reclassifyStocks, setReclassifyStocks] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.sideBarContainer}>
                <ScrollView>
                    <View style={styles.sideBarLogoContainer}>
                        <Image source={require("../../../Assets/Image/logo.png")} style={{ width: 150, height: 80 }} />
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menuBox}>
                            <AntDesign name="home" size={30} color="black" style={{ marginRight: 15 }} />
                            <Text style={styles.menuText}>Dashboard</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menuBox} onPress={() => navigation.navigate("RCPHOME")}>
                            <AntDesign name="enviroment" size={30} color="black" style={{ marginRight: 15 }} />
                            <Text style={styles.menuText}>RCP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer} >

                        <TouchableOpacity style={styles.menuBox}>

                            <AntDesign name="calculator" size={30} color="black" style={{ marginRight: 15 }} />
                            <Text style={styles.menuText}>Transaction</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menuBox} >
                            <Feather name="list" size={30} color="black" style={{ marginRight: 15 }} />
                            <Text style={styles.menuText}>Inventory</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menuBox}>
                            <Entypo name="credit" size={30} color="black" style={{ marginRight: 15 }} />
                            <Text style={styles.menuText}>Remitance</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menuBox} >
                            <AntDesign name="carryout" size={30} color="black" style={{ marginRight: 15 }} />
                            <Text style={styles.menuText}>Booking</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menuBox} >
                            <AntDesign name="car" size={30} color="black" style={{ marginRight: 15 }} />
                            <Text style={styles.menuText}>SI Delivery</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>

                        <TouchableOpacity style={styles.menuBox} >
                            <FontAwesome name="bar-chart-o" size={30} color="black" style={{ marginRight: 15 }} />
                            <Text style={styles.menuText}>Reports</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menuBox} >
                            <Feather name="settings" size={30} color="black" style={{ marginRight: 15 }} />
                            <Text style={styles.menuText}>Settings</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View style={{ width: '80%', justifyContent: 'flex-end' }}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15, backgroundColor: 'red', alignItems: 'center', }}>
                        <Text style={{ color: 'white', fontSize: 25 }}>Inventory Management</Text>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ backgroundColor: "#A1EFF4", padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
                            <Image source={require('../../../Assets/Image/option_icon.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
                            <Text style={{ fontSize: 18, fontWeight: '800' }}>OPTIONS</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', marginTop: 10 }}>
                        <ScrollView>
                            <View style={styles.tableContainer}>

                                {/* Table Head Start */}
                                <View style={styles.tableHeadContainer}>
                                    <View style={styles.tableBoxFirst}>
                                        <TouchableOpacity style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Product Code</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.tableBoxSecond}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Tag Name</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxThird}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Description</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxFour}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>GQty</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxFive}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>BQty</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxSix}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>ΣQty</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* Table Head End  */}
                                {/* Table Body Start  */}
                                {
                                    data.map((e, i) => {
                                        return (
                                            <TouchableOpacity key={i} style={styles.tableBodyContainer}>
                                                <View style={styles.tableBoxFirst}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.itemCode}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.tableBoxSecond}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.tagName}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.tableBoxThird}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.description}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.tableBoxFour}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.brand}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.tableBoxFive}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.uom}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.tableBoxSix}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.qty}</Text>
                                                    </View>
                                                </View>
                                            </TouchableOpacity>
                                        )

                                    })
                                }
                                {/* Table Body End  */}
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
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ marginBottom: 15 }}>
                                <AntDesign name="closecircle" size={24} color="red" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setStockRequest(true)
                                setStockTransfer(false)
                                setPhysicalCount(false)
                                setReclassifyStocks(false)
                                navigation.navigate("StockRequest")
                                setModalVisible(!modalVisible)

                            }} style={{ backgroundColor: stockRequest == true ? "yellow" : "#82EEF5", alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 70, borderRadius: 20 }}>
                                <Text style={{ fontSize: 22, textAlign: 'center' }}>Stock Request</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setStockRequest(false)
                                setStockTransfer(true)
                                setPhysicalCount(false)
                                setReclassifyStocks(false)
                                navigation.navigate("StockTransfer")
                                setModalVisible(!modalVisible)
                            }} style={{ backgroundColor: stockTransfer == true ? "yellow" : "#82EEF5", alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 70, borderRadius: 20, marginTop: 15 }}>
                                <Text style={{ fontSize: 22, textAlign: 'center' }}>Stock Transfer</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setStockRequest(false)
                                setStockTransfer(false)
                                setPhysicalCount(true)
                                setReclassifyStocks(false)
                                setModalVisible(!modalVisible)
                            }} style={{ backgroundColor: physicalCount == true ? "yellow" : "#82EEF5", alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 65, borderRadius: 20, marginTop: 15 }}>
                                <Text style={{ fontSize: 22, textAlign: 'center' }}>Physical Count</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setStockRequest(false)
                                setStockTransfer(false)
                                setPhysicalCount(false)
                                setReclassifyStocks(true)
                                setModalVisible(!modalVisible)
                            }} style={{ backgroundColor: reclassifyStocks == true ? "yellow" : "#82EEF5", alignItems: 'center', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 55, borderRadius: 20, marginTop: 15 }}>
                                <Text style={{ fontSize: 22, textAlign: 'center' }}>Reclassify Stocks</Text>
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
        paddingHorizontal: 25,
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
        marginTop: 5
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
    tableBody: {
        paddingVertical: 10,
        textAlign: 'center',
    },
    tableBodyText: {
        color: "#000",
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center'
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
        textAlign: 'center'
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
        width: '17%',
        paddingVertical: 10, textAlign: 'center'
    },
    tableBoxSecond: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '15%',
        paddingVertical: 10
    },
    tableBoxThird: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '36%',
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
        fontSize: 15, fontWeight: '500', color: "#000", textAlign: 'center'
    },
    centeredView: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 20
    },
    modalView: {
        marginTop: "5%",
        marginLeft: "73%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
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