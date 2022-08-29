import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'

export default function Index({ navigation }) {
    const data = [
        {
            status: 1,
            date: '10/06/2022',
            transaction: "SR152355624863",
            sku: 245123,
            qty: 245123,
        },
        {
            status: 1,
            date: '10/06/2022',
            transaction: "SR152355624863",
            sku: 245123,
            qty: 245123,
        },
    ]
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ height: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 15, backgroundColor: 'red', alignItems: 'center', }}>
                <Text style={{ color: 'white', fontSize: 25 }}>Stock Request</Text>
                <TouchableOpacity onPress={() => navigation.navigate("RequestItem")} style={{ backgroundColor: "#A1EFF4", padding: 10, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
                    <Image source={require('../../../../Assets/Image/request.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
                    <Text style={{ fontSize: 18, fontWeight: '600' }}>REQUEST</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.sideBarContainer}>
                    <ScrollView>
                        <View style={{ backgroundColor: '#A1EFF4', paddingVertical: 10, paddingHorizontal: 10 }}>
                            <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Filters</Text>
                        </View>
                        <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Date From:</Text>
                                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', marginTop: 15 }}>
                                    <Text style={{ fontSize: 18, color: "#DF5656", fontWeight: '400', backgroundColor: "#FDF5F5", paddingHorizontal: 10, paddingVertical: 5, marginRight: 10 }}>04/05/2022</Text>
                                    <Image source={require('../../../../Assets/Image/calendar.png')} style={{ width: 26, height: 26, marginRight: 10 }} />
                                </View>
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Date From:</Text>
                                <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: 'center', marginTop: 15 }}>
                                    <Text style={{ fontSize: 18, color: "#DF5656", fontWeight: '400', backgroundColor: "#FDF5F5", paddingHorizontal: 10, paddingVertical: 5, marginRight: 10 }}>04/05/2022</Text>
                                    <Image source={require('../../../../Assets/Image/calendar.png')} style={{ width: 26, height: 26, marginRight: 10 }} />
                                </View>
                            </View>
                            <View style={{ marginTop: 30 }}>
                                <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Sort</Text>
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
                                    buttonStyle={{ backgroundColor: "#FDF5F5", marginTop: 20, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, }}
                                    buttonTextStyle={{ fontSize: 20, textAlign: 'center' }}
                                    rowTextStyle={{ fontSize: 20 }}
                                    rowStyle={{ backgroundColor: 'white', paddingHorizontal: 10 }}
                                />
                                <Text style={{ fontSize: 20, color: "#000", fontWeight: '400', backgroundColor: "#FDF5F5", paddingHorizontal: 10, paddingVertical: 5, marginRight: 10 }}>Date</Text>
                                <Text style={{ fontSize: 20, color: "#000", fontWeight: '400', backgroundColor: "#FDF5F5", paddingHorizontal: 10, paddingVertical: 5, marginRight: 10 }}>Transaction No.</Text>
                            </View>
                            <View style={{ marginTop: 30 }}>
                                <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Sort</Text>
                                <SelectDropdown
                                    data={["Ascending"]}
                                    defaultButtonText={"Ascending"}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                    }}
                                    renderDropdownIcon={() => {
                                        return (
                                            <AntDesign name="caretdown" size={18} color="black" />
                                        )
                                    }}
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
                                    buttonStyle={{ backgroundColor: "#FDF5F5", marginTop: 20, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, }}
                                    buttonTextStyle={{ fontSize: 20, textAlign: 'center' }}
                                    rowTextStyle={{ fontSize: 20 }}
                                    rowStyle={{ backgroundColor: 'white', paddingHorizontal: 10 }}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{ width: '80%', justifyContent: 'flex-end' }}>
                    <ScrollView>
                        <View style={{ width: '100%' }}>
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
                                                <Text style={styles.tableHeadText}>Transaction No</Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableBoxFour}>
                                            <View style={styles.tableHead}>
                                                <Text style={styles.tableHeadText}>Σ SKU</Text>
                                            </View>
                                        </View>
                                        <View style={styles.tableBoxFive}>
                                            <View style={styles.tableHead}>
                                                <Text style={styles.tableHeadText}>ΣQTY</Text>
                                            </View>
                                        </View>
                                    </View>
                                    {/* Table Head End  */}
                                    {/* Table Body Start  */}
                                    {
                                        data.map((e, i) => {
                                            return (
                                                <View key={i} style={styles.tableBodyContainer}>
                                                    <View style={styles.tableBoxFirst}>
                                                        <View style={styles.tableBody}>
                                                            <TouchableOpacity style={styles.collectionBtn}>
                                                                <Text style={styles.engagementBtnText}>Submitted</Text>
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
                                                            <Text style={styles.tableBodyText}>{e.transaction}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={styles.tableBoxFour}>
                                                        <View style={styles.tableBody}>
                                                            <Text style={styles.tableBodyText}>{e.sku}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={styles.tableBoxFive}>
                                                        <View style={styles.tableBody}>
                                                            <Text style={styles.tableBodyText}>{e.qty}</Text>
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
                                        {/* <Image source={require('../../../Assets/Image/invoice.png')} style={{ width: 60, height: 60, marginRight: 15 }} /> */}
                                        <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                            <Text style={{ fontSize: 20, textAlign: 'center' }}>Sales Invoice</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                        {/* <Image source={require('../../../Assets/Image/collection.png')} style={{ width: 60, height: 60, marginRight: 15 }} /> */}
                                        <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                            <Text style={{ fontSize: 20, textAlign: 'center' }}>Collection</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                        {/* <Image source={require('../../../Assets/Image/replacement.png')} style={{ width: 60, height: 60, marginRight: 15 }} /> */}
                                        <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                            <Text style={{ fontSize: 20, textAlign: 'center' }}>Stock Replacement</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                        {/* <Image source={require('../../../Assets/Image/return.png')} style={{ width: 60, height: 60, marginRight: 15 }} /> */}
                                        <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                            <Text style={{ fontSize: 20, textAlign: 'center' }}>Sales Return</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                        {/* <Image source={require('../../../Assets/Image/free.png')} style={{ width: 60, height: 60, marginRight: 15 }} /> */}
                                        <TouchableOpacity style={{ width: 150, backgroundColor: "yellow", alignItems: 'center', justifyContent: 'center', paddingVertical: 25, paddingHorizontal: 20, borderRadius: 20 }}>
                                            <Text style={{ fontSize: 20, textAlign: 'center' }}>Free of Charge</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ marginLeft: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', width: '45%' }}>
                                        {/* <Image source={require('../../../Assets/Image/non.png')} style={{ width: 60, height: 60, marginRight: 15 }} /> */}
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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row', backgroundColor: "#fff", height: '100%'
    },
    sideBarContainer: {
        width: '20%',
        borderColor: 'grey',
        borderWidth: 1,
        backgroundColor: '#F8FFCB',

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
        width: '33%',
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
        backgroundColor: '#FFA6A6',
        padding: 8,
        marginHorizontal: 10,
        borderRadius: 10
    },
    engagementBtnText: {
        fontSize: 15, fontWeight: '500', color: "#000", textAlign: 'center'
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