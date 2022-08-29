import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'

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
    const [modalSubmit, setModalSubmit] = useState(false);
    const [qty, setQty] = useState("25")
    const [discount, setDiscount] = useState("30")
    const [amount, setAmount] = useState("25")
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', }}>
                <ScrollView>
                    <View>
                        <View style={{ flexDirection: 'row', paddingVertical: 13, paddingHorizontal: 18, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#EB4343' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                <TouchableOpacity onPress={() => navigation.navigate("ItemList")}>
                                    <AntDesign name="arrowleft" size={32} color="black" style={{ marginHorizontal: 10 }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: "#F0F1C4", padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 22, fontWeight: '600' }}>Item Select</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ fontSize: 24, fontWeight: '600', marginRight: 10 }}>Σ Qty</Text>
                                <TouchableOpacity style={{ backgroundColor: "#F0F1C4", padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 22, fontWeight: '600' }}>38.00</Text>
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity onPress={() => setModalSubmit(!modalSubmit)} style={{ backgroundColor: "#F0F1C4", padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                                <Text style={{ fontSize: 22, fontWeight: '600' }}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ width: '100%',  }}>
                        <ScrollView>
                            <View style={styles.tableContainer}>

                                {/* Table Head Start */}
                                <View style={styles.tableHeadContainer}>
                                    <View style={styles.tableBoxFirst}>
                                        <TouchableOpacity style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Description</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.tableBoxSecond}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Type</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxThird}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Price</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxFour}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Bal</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxFive}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Qty</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxSix}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>UOM</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxSix}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Disc</Text>
                                        </View>
                                    </View>
                                    <View style={styles.tableBoxSix}>
                                        <View style={styles.tableHead}>
                                            <Text style={styles.tableHeadText}>Sub-Total</Text>
                                        </View>
                                    </View>
                                </View>
                                {/* Table Head End  */}
                                {/* Table Body Start  */}
                                {
                                    data.map((e, i) => {
                                        return (
                                            <TouchableOpacity key={i} onPress={() => setModalVisible(!modalVisible)} style={styles.tableBodyContainer}>
                                                <View style={styles.tableBoxFirst}>
                                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                                                        <AntDesign name="closecircle" size={30} color="red" style={{ marginLeft: 10 }} />
                                                        <Image source={require("../../../../Assets/Image/dup.png")} style={{ width: 30, height: 35, marginHorizontal: 10 }} />
                                                        <View style={styles.tableBody}>
                                                            <Text style={styles.tableBodyText}>{e.itemCode}</Text>
                                                        </View>
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
                                                <View style={styles.tableBoxSix}>
                                                    <View style={styles.tableBody}>
                                                        <Text style={styles.tableBodyText}>{e.qty}</Text>
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
                    <ScrollView>
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'red', paddingHorizontal: 16, paddingVertical: 15 }}>
                                    <View style={{ marginRight: 150 }}>
                                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>CNHDM1K</Text>
                                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>Champion Hotdog Mini 1Kg</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                        <AntDesign name="closecircleo" size={30} color="#fff" />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20, marginHorizontal: 15, marginBottom: 15 }}>
                                    <Text style={{ color: 'red', fontSize: 20, fontWeight: '500', marginRight: 47 }}>Qty Requested</Text>
                                    <TextInput value={qty} onChangeText={(text) => setQty(text)} style={{ width: '50%', color: '#000', fontSize: 18, fontWeight: '500', paddingVertical: 5, textAlign: 'center', backgroundColor: '#E9F4A1', borderRadius: 30, }} />
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15, marginVertical: 10 }}>
                                    <Text style={{ color: 'red', fontSize: 20, fontWeight: '500', marginRight: 35 }}>UOM</Text>
                                    <SelectDropdown
                                        data={["Status"]}
                                        defaultButtonText={"Status"}
                                        onSelect={(selectedItem, index) => {
                                            console.log(selectedItem, index)
                                        }}
                                        renderDropdownIcon={() => {
                                            return (
                                                <AntDesign name="caretdown" size={18} color="black" />
                                            )
                                        }}
                                        dropdownIconPosition={"left"}
                                        buttonTextAfterSelection={(selectedItem, index) => {
                                            // text represented after item is selected
                                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                                            return selectedItem
                                        }}
                                        rowTextForSelection={(item, index) => {
                                            // text represented for each item in dropdown
                                            // if data array is an array of objects then return item.property to represent item in dropdown
                                            return item
                                        }}
                                        buttonStyle={{ width: '50%', color: '#000', fontSize: 18, fontWeight: '500', paddingVertical: 5, textAlign: 'center', backgroundColor: '#E9F4A1', borderRadius: 30, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}
                                        buttonTextStyle={{ fontSize: 20, textAlign: 'center' }}
                                        rowTextStyle={{ fontSize: 20 }}
                                        rowStyle={{ backgroundColor: 'white', paddingHorizontal: 10 }}
                                    />
                                </View>
                                <View style={{ justifyContent: 'space-between', alignItems: 'center', marginVertical: 40, marginHorizontal: 40, flexDirection: 'row' }}>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: 20, color: "#000", fontWeight: '400', backgroundColor: "#8EFE92", paddingHorizontal: 30, paddingVertical: 5, marginRight: 10, borderRadius: 10 }}>OK</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text style={{ fontSize: 20, color: "#000", fontWeight: '400', backgroundColor: "#FE958E", paddingHorizontal: 10, paddingVertical: 5, marginRight: 10, borderRadius: 10 }}>CANCEL</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalSubmit}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.submitModalView}>
                            <Text style={{ fontSize: 25, color: "#000", fontWeight: '500', textAlign: 'center' }}>Request Submitted</Text>
                            <AntDesign name="checkcircle" size={40} color="#42760F" style={{ marginVertical: 15 }} />
                            <TouchableOpacity onPress={() => setModalSubmit(!modalSubmit)} style={{ borderColor: '#000', borderWidth: 2, paddingVertical: 5, paddingHorizontal: 30, marginTop: 15, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
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
    submitModalView: {
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
        backgroundColor: '#F0F1C4',
        paddingVertical: 2,
        paddingHorizontal: 5,
        marginHorizontal: 10,
        borderRadius: 20
    },
    collectionBtn: {
        backgroundColor: '#F0F1C4',
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
        marginTop: 10,
        marginBottom: 25

    },
    modalView: {
        marginTop: "15%",
        backgroundColor: "white",
        borderRadius: 20,
        // alignItems: "center",
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