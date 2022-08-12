import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';

export default function index({ navigation }) {
    const data = [
        {
            status: 1,
            date: '10/06/2022',
            saleInvoiceNo: 24562345,
            amount: 245123,
        },
        {
            status: 1,
            date: '10/06/2022',
            saleInvoiceNo: 24562345,
            amount: 245123,
        },
    ]
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <View style={styles.sideBarContainer}>
                <ScrollView>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 25, color: "#000", fontWeight: '600' }}>Customer Name</Text>
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder='Customer ID' style={{ borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 15, fontSize: 15 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder='Customer Code' style={{ borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 15, fontSize: 15 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder='Customer Name' style={{ borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 15, fontSize: 15 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder='Complete Address' style={{ borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 15, fontSize: 15 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder='Tin No' style={{ borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 15, fontSize: 15 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder='Contact No' style={{ borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 15, fontSize: 15 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder='Email Address' keyboardType='text' style={{ borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 15, fontSize: 15 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder='Credit Limit' style={{ borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 15, fontSize: 15 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder='Default Terms' style={{ borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 15, fontSize: 15 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder='Price Level' style={{ borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 15, fontSize: 15 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput placeholder='Tax Type' style={{ borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 6, borderRadius: 15, fontSize: 15 }} />
                    </View>
                </ScrollView>
            </View>
            <View style={{ width: '80%', justifyContent: 'flex-end' }}>
                <ScrollView>
                    <View>
                        <View style={{ position: 'absolute', right: 10, top: 10, flexDirection: 'row', zIndex: 99999, }}>
                            <TouchableOpacity onPress={() => navigation.navigate("Dashboard")} style={{ backgroundColor: "yellow", padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
                                <Image source={require('../../Assets/Image/invoice.png')} style={{ width: 40, height: 40, marginRight: 10 }} />
                                <Text style={{ fontSize: 17, fontWeight: '600' }}>Sale Invoice</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: '100%', marginTop: 60 }}>
                        <ScrollView>
                            <View style={styles.tableContainer}>

                                {/* Table Head Start */}
                                <View style={styles.tableHeadContainer}>
                                    <View style={styles.tableBoxFirst}>
                                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Status</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.tableBoxSecond}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Date</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxThird}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Sales Invoice No</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxFour}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Amount</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* Table Head End  */}
                                {/* Table Body Start  */}
                                {
                                    data.map((e, i) => {
                                        return (
                                            <View style={styles.tableBodyContainer}>
                                                <View style={styles.tableBoxFirst}>
                                                    <View style={styles.tableBody}>
                                                        <TouchableOpacity style={styles.collectionBtn}>
                                                            <Text style={styles.engagementBtnText}>Open Balance</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                                <View style={styles.tableBoxSecond}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.date}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.tableBoxThird}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.saleInvoiceNo}</Text>
                                                    </View>
                                                </View>
                                                <View style={styles.tableBoxFour}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.amount}</Text>
                                                    </View>
                                                </View>
                                            </View>
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
        width: '13%',
        paddingVertical: 10
    },
    tableBoxSecond: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '20%',
        paddingVertical: 10
    },
    tableBoxThird: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '25%',
        paddingVertical: 10
    },
    tableBoxFour: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '30%',
        paddingVertical: 10
    },
    tableBoxFive: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
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