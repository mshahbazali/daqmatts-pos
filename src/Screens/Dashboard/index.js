import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

export default function index() {
    const number = [1, 2, 3, 4, 6, 78, 9, 4, 2, 45]
    return (
        <View style={styles.container}>
            <View style={styles.sideBarContainer}>
                <ScrollView>
                    <View style={styles.sideBarLogoContainer}>
                        <Image source={require("../../Assets/Image/logo.png")} style={{ width: 150, height: 80 }} />
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity>
                            <Text style={styles.menuText}>Dashboard</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity>
                            <Text style={styles.menuText}>RCP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity>
                            <Text style={styles.menuText}>Transaction</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity>
                            <Text style={styles.menuText}>Inventory</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity>
                            <Text style={styles.menuText}>Remitance</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity>
                            <Text style={styles.menuText}>Booking</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity>
                            <Text style={styles.menuText}>SI Delivery</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity>
                            <Text style={styles.menuText}>Reports</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.menuContainer}>
                        <TouchableOpacity>
                            <Text style={styles.menuText}>Settings</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
            <View style={{ width: '80%', justifyContent: 'flex-end' }}>
                <ScrollView>
                    <View>
                        <View style={{ position: 'absolute', right: 10, top: 10, flexDirection: 'row' }}>
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
                                <View style={styles.tableBoxFirst}>
                                    <View style={styles.tableHead}>
                                        <Text style={styles.tableHeadText}>Seq.</Text>
                                    </View>

                                    <ScrollView>
                                        {
                                            number.map((e, i) => {
                                                return (
                                                    <View style={styles.tableHead}>
                                                        <Text style={styles.tableHeadText}>{e}</Text>
                                                    </View>

                                                )
                                            })
                                        }

                                    </ScrollView>
                                </View>
                                <View style={styles.tableBoxSecond}>
                                    <View style={styles.tableHead}>
                                        <Text style={styles.tableHeadText}>Code</Text>
                                    </View>
                                    <ScrollView>
                                        {
                                            number.map((e, i) => {
                                                return (
                                                    <View style={styles.tableHead}>
                                                        <Text style={styles.tableHeadText}>12346795</Text>
                                                    </View>
                                                )
                                            })
                                        }

                                    </ScrollView>
                                </View>
                                <View style={styles.tableBoxThird}>
                                    <View style={styles.tableHead}>
                                        <Text style={styles.tableHeadText}>Name</Text>
                                    </View>
                                    <ScrollView>
                                        {
                                            number.map((e, i) => {
                                                return (
                                                    <View style={styles.tableHead}>
                                                        <Text style={styles.tableHeadText}>Shahbaz Ali</Text>
                                                    </View>
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                                <View style={styles.tableBoxFour}>
                                    <View style={styles.tableHead}>
                                        <Text style={styles.tableHeadText}>Address</Text>
                                    </View>
                                    <ScrollView>
                                        {
                                            number.map((e, i) => {
                                                return (
                                                    <View style={styles.tableHead}>
                                                        <Text style={styles.tableHeadText}>Poblacion, Liloan, Cebu</Text>
                                                    </View>
                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                                <View style={styles.tableBoxFive}>
                                    <View style={styles.tableHead}>
                                        <Text style={styles.tableHeadEngagementText}>Engagement Status</Text>
                                    </View>
                                    <ScrollView>
                                        {
                                            number.map((e, i) => {
                                                return (
                                                    <View style={styles.tableHead}>
                                                        <TouchableOpacity style={styles.engagementBtn}>
                                                            <Text style={styles.engagementBtnText}>Non-Productive</Text>
                                                        </TouchableOpacity>
                                                    </View>

                                                )
                                            })
                                        }
                                    </ScrollView>
                                </View>
                                <View style={styles.tableBoxSix}>
                                    <View style={styles.tableHead}>
                                        <Text style={styles.tableHeadText}>Collection Status</Text>
                                    </View>
                                    <ScrollView>
                                        {
                                            number.map((e, i) => {
                                                return (
                                                    <View style={styles.tableHead}>
                                                        <TouchableOpacity style={styles.collectionBtn}>
                                                            <Text style={styles.engagementBtnText}>Open Balance</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                )
                                            })
                                        }

                                    </ScrollView>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View >
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
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
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginTop: 20
    },
    tableHead: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
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
})