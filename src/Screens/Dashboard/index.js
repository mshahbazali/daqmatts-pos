import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';

export default function index({ navigation }) {
    const data = [{
        seq: 1,
        code: 3289469812,
        Name: 'Shahbaz Ali',
        Address: "Poblacion, Liloan, Cebu",
    }]
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.sideBarContainer}>
                <ScrollView>
                    <View style={styles.sideBarLogoContainer}>
                        <Image source={require("../../Assets/Image/logo.png")} style={{ width: 150, height: 80 }} />
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menuBox} >
                            <AntDesign name="home" size={30} color="black" style={{ marginRight: 15 }} />
                            <Text style={styles.menuText}>Dashboard</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity style={styles.menuBox} onPress={() => navigation.navigate("Dashboard")}>
                            <AntDesign name="enviroment" size={30} color="black" style={{ marginRight: 15 }} />
                            <Text style={styles.menuText}>RCP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer} >
                        <TouchableOpacity style={styles.menuBox} >
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
                        <TouchableOpacity style={styles.menuBox}>
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
                    <View>
                        <View style={{ position: 'absolute', right: 10, top: 10, flexDirection: 'row', zIndex: 99999 }}>
                            <Image source={require('../../Assets/Image/walk.png')} style={{ width: 20, height: 40, marginRight: 10 }} />
                            <TouchableOpacity style={{ backgroundColor: "yellow", padding: 10, borderRadius: 10 }}>
                                <Text style={{ fontSize: 17, fontWeight: '600' }}>Walk In</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.dateContainer}>
                            <Text style={styles.dateContainerText}>JUNE 18, 2022 - JUNE 22, 2022</Text>
                            <Image source={require('../../Assets/Image/calendar.png')} style={{ width: 40, height: 40, marginHorizontal: 20 }} />
                        </View>
                        <View style={{ justifyContent: 'center', width: '100%', alignItems: 'center', marginTop: 15 }}>
                            <ScrollView horizontal={true}>
                                <View style={styles.calendarBox}>
                                    <Text style={styles.calendarBoxTopText}>MON</Text>
                                    <Text style={styles.calendarBoxBottomText}>06/06/2022</Text>
                                </View>
                                <View style={styles.calendarBox}>
                                    <Text style={styles.calendarBoxTopText}>TUE</Text>
                                    <Text style={styles.calendarBoxBottomText}>06/06/2022</Text>
                                </View>
                                <View style={styles.calendarBox}>
                                    <Text style={styles.calendarBoxTopText}>WED</Text>
                                    <Text style={styles.calendarBoxBottomText}>06/06/2022</Text>
                                </View>
                                <View style={styles.calendarBoxCurrent}>
                                    <Text style={styles.calendarBoxTopText}>THU</Text>
                                    <Text style={styles.calendarBoxBottomText}>06/06/2022</Text>
                                </View>
                                <View style={styles.calendarBox}>
                                    <Text style={styles.calendarBoxTopText}>FRI</Text>
                                    <Text style={styles.calendarBoxBottomText}>06/06/2022</Text>
                                </View>
                                <View style={styles.calendarBox}>
                                    <Text style={styles.calendarBoxTopText}>SAT</Text>
                                    <Text style={styles.calendarBoxBottomText}>06/06/2022</Text>
                                </View>
                                <View style={styles.calendarBox}>
                                    <Text style={styles.calendarBoxTopText}>SUN</Text>
                                    <Text style={styles.calendarBoxBottomText}>06/06/2022</Text>
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                    <View style={{ width: '100%' }}>
                        <ScrollView>
                            <View style={styles.tableContainer}>

                                {/* Table Head Start */}
                                <View style={styles.tableHeadContainer}>
                                    <View style={styles.tableBoxFirst}>
                                        <TouchableOpacity style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Seq.</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.tableBoxSecond}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Code</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxThird}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Name</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxFour}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Address</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxFive}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadEngagementText}>Engagement Status</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxSix}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Collection Status</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* Table Head End  */}
                                {/* Table Body Start  */}
                                {
                                    data.map((e, i) => {
                                        return (
                                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.tableBodyContainer}>
                                                <View style={styles.tableBoxFirst}>
                                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.tableHead}>
                                                        <Text style={styles.tableHeadText}>{e.seq}</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={styles.tableBoxSecond}>
                                                    <View style={styles.tableHead}>
                                                        <Text style={styles.tableHeadText}>{e.code}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.tableBoxThird}>
                                                    <View style={styles.tableHead}>
                                                        <Text style={styles.tableHeadText}>{e.Name}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.tableBoxFour}>
                                                    <View style={styles.tableHead}>
                                                        <Text style={styles.tableHeadText}>{e.Address}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.tableBoxFive}>
                                                    <View style={styles.tableHead}>
                                                        <TouchableOpacity style={styles.engagementBtn}>
                                                            <Text style={styles.engagementBtnText}>Non-Productive</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={styles.tableBoxSix}>
                                                    <View style={styles.tableHead}>
                                                        <TouchableOpacity style={styles.collectionBtn}>
                                                            <Text style={styles.engagementBtnText}>Open Balance</Text>
                                                        </TouchableOpacity>
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
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ position: 'absolute', top: 10, right: 15 }}>
                                <AntDesign name="closecircle" size={24} color="black" />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                    <Image source={require('../../Assets/Image/invoice.png')} style={{ width: 60, height: 60, marginRight: 15 }} />
                                    <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Sales Invoice</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                    <Image source={require('../../Assets/Image/collection.png')} style={{ width: 60, height: 60, marginRight: 15 }} />
                                    <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Collection</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                    <Image source={require('../../Assets/Image/replacement.png')} style={{ width: 60, height: 60, marginRight: 15 }} />
                                    <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Stock Replacement</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                    <Image source={require('../../Assets/Image/return.png')} style={{ width: 60, height: 60, marginRight: 15 }} />
                                    <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Sales Return</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                    <Image source={require('../../Assets/Image/free.png')} style={{ width: 60, height: 60, marginRight: 15 }} />
                                    <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Free of Charge</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                    <Image source={require('../../Assets/Image/non.png')} style={{ width: 60, height: 60, marginRight: 15 }} />
                                    <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Non Productive</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
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
        marginTop: 20
    },
    tableHeadContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20
    },
    tableBodyContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    tableHead: {
        // borderBottomColor: 'grey',
        // borderBottomWidth: 1,
        paddingVertical: 10,
        textAlign: 'center'
    },
    tableHeadText: {
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
        width: '8%',
        paddingVertical: 10
    },
    tableBoxSecond: {
        borderWidth: 1,
        borderColor: "grey",
        width: '14%',
        paddingVertical: 10
    },
    tableBoxThird: {
        borderWidth: 1,
        borderColor: "grey",
        width: '17%',
        paddingVertical: 10
    },
    tableBoxFour: {
        borderWidth: 1,
        borderColor: "grey",
        width: '27%',
        paddingVertical: 10
    },
    tableBoxFive: {
        borderWidth: 1,
        borderColor: "grey",
        width: '15%',
        paddingVertical: 10
    },
    tableBoxSix: {
        borderWidth: 1,
        borderColor: "grey",
        width: '15%',
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