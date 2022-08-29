import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native'
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
    const [selectedIndex, setSelectedIndex] = useState()

    return (
        <View style={styles.container}>
            <View style={{ width: '100%' }}>
                <ScrollView>
                    <View>
                        <View style={{ flexDirection: 'row', paddingVertical: 13, paddingHorizontal: 18, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#EB4343' }}>
                            <Text style={{ fontSize: 22, fontWeight: '600', color: "#fff" }}>Item Selection</Text>
                            <View style={{ width: "10%" }}>
                                <TouchableOpacity onPress={() => navigation.navigate("StockTransfer")} style={{ backgroundColor: "yellow", padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                    <AntDesign name="left" size={25} color="black" style={{ marginRight: 5 }} />
                                    <Text style={{ fontSize: 22, fontWeight: '600' }}>Back</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', width: "40%", justifyContent: 'center', alignItems: 'center', }}>
                                <TextInput placeholder='Search' style={{ width: '80%', borderBottomColor: 'black', borderBottomWidth: 1.3, fontSize: 19, fontWeight: '500', textAlign: 'center', color: "#000" }} />
                                <TouchableOpacity style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginHorizontal: 12 }}>
                                    <Text style={{ fontSize: 19, fontWeight: '600' }}>Search</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', width: '20%', alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ fontSize: 20, fontWeight: '600', marginRight: 10 }}>ΣSKU</Text>
                                <Text style={{ fontSize: 23, fontWeight: '800', paddingVertical: 5, paddingHorizontal: 12, borderRadius: 10, borderWidth: 2, borderColor: '#000' }}>2.6</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate("ItemDetail")} style={{ width: "10%", backgroundColor: "yellow", padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ fontSize: 22, fontWeight: '600' }}>Next</Text>
                                <AntDesign name="right" size={25} color="black" style={{ marginLeft: 5 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: '100%' }}>
                        <ScrollView>
                            <View style={styles.tableContainer}>

                                {/* Table Head Start */}
                                <View style={styles.tableHeadContainer}>
                                    <View style={styles.tableBoxFirst}>
                                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Code</Text>
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
                                            <Text style={styles.tableHeadText}>Brand</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxFive}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>UOM</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxSix}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>GQty</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxSix}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>BQty</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* Table Head End  */}
                                {/* Table Body Start  */}
                                {
                                    data.map((e, i) => {
                                        return (
                                            <TouchableOpacity key={i} onPress={() => setSelectedIndex()} onLongPress={() => setSelectedIndex(i)} style={styles.tableBodyContainer}>
                                                <View style={{
                                                    borderBottomWidth: 1,
                                                    borderLeftWidth: 1,
                                                    borderColor: "grey",
                                                    width: '10%',
                                                    paddingVertical: 10,
                                                    backgroundColor: selectedIndex == i ? 'yellow' : 'white'
                                                }}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.itemCode}</Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    borderBottomWidth: 1,
                                                    borderColor: "grey",
                                                    borderTopWidth: 0,
                                                    width: '13%',
                                                    paddingVertical: 10,
                                                    backgroundColor: selectedIndex == i ? 'yellow' : 'white'
                                                }}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.tagName}</Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    borderBottomWidth: 1,
                                                    borderColor: "grey",
                                                    width: '30%',
                                                    paddingVertical: 10,
                                                    backgroundColor: selectedIndex == i ? 'yellow' : 'white'
                                                }}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.description}</Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    borderBottomWidth: 1,
                                                    borderColor: "grey",
                                                    borderTopWidth: 0,
                                                    width: '10%',
                                                    paddingVertical: 10,
                                                    backgroundColor: selectedIndex == i ? 'yellow' : 'white'

                                                }}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.brand}</Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    borderBottomWidth: 1,
                                                    borderColor: "grey",
                                                    borderTopWidth: 0,
                                                    width: '15%',
                                                    paddingVertical: 10,
                                                    backgroundColor: selectedIndex == i ? 'yellow' : 'white'

                                                }}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.uom}</Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    borderBottomWidth: 1,
                                                    borderColor: "grey",
                                                    borderTopWidth: 0,
                                                    width: '10%',
                                                    paddingVertical: 10,
                                                    backgroundColor: selectedIndex == i ? 'yellow' : 'white'
                                                }}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.qty}</Text>
                                                    </View>
                                                </View>
                                                <View style={{
                                                    borderRightWidth: 1,
                                                    borderBottomWidth: 1,
                                                    borderColor: "grey",
                                                    borderTopWidth: 0,
                                                    width: '10%',
                                                    paddingVertical: 10,
                                                    backgroundColor: selectedIndex == i ? 'yellow' : 'white'
                                                }}>
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
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ position: 'absolute', top: 10, right: 15 }}>
                                <AntDesign name="closecircle" size={24} color="black" />
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                    <Image source={require('../../../../../Assets/Image/invoice.png')} style={{ width: 60, height: 60, marginRight: 15 }} />
                                    <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Sales Invoice</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                    <Image source={require('../../../../../Assets/Image/collection.png')} style={{ width: 60, height: 60, marginRight: 15 }} />
                                    <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Collection</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                    <Image source={require('../../../../../Assets/Image/replacement.png')} style={{ width: 60, height: 60, marginRight: 15 }} />
                                    <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Stock Replacement</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                    <Image source={require('../../../../../Assets/Image/return.png')} style={{ width: 60, height: 60, marginRight: 15 }} />
                                    <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Sales Return</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                    <Image source={require('../../../../../Assets/Image/free.png')} style={{ width: 60, height: 60, marginRight: 15 }} />
                                    <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                        <Text style={{ fontSize: 20, textAlign: 'center' }}>Free of Charge</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                    <Image source={require('../../../../../Assets/Image/non.png')} style={{ width: 60, height: 60, marginRight: 15 }} />
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
        flexDirection: 'row',
        backgroundColor: "#fff"
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
        textAlign: 'center'
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
        width: '10%',
        paddingVertical: 10
    },
    tableBoxSecond: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '13%',
        paddingVertical: 10
    },
    tableBoxThird: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '30%',
        paddingVertical: 10
    },
    tableBoxFour: {
        borderWidth: 1,
        borderColor: "grey",
        borderTopWidth: 0,
        width: '15%',
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