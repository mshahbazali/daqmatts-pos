import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView, Modal, TextInput } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome } from '@expo/vector-icons';

export default function Index({ navigation }) {
  const data = [
    {
      no: 1,
      date: '10/06/2022',
      referenceNo: 54356457634,
      brand: 245123,
      uom: 0.3,
      sku: 0.7,
      qty: 245123,
    },
    {
      no: 2,
      date: '10/06/2022',
      referenceNo: 45245245545,
      brand: 245123,
      uom: 0.5,
      sku: 0.2,
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
              <Text style={{ fontSize: 22, fontWeight: '600', color: "#fff" }}>Stock Load-In</Text>
              <TouchableOpacity style={{ width: "10%", backgroundColor: "yellow", padding: 5, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                <Image source={require('../../../../../Assets/Image/sync.png')} style={{ width: 34, height: 27, marginRight: 5 }} />
                <Text style={{ fontSize: 22, fontWeight: '700' }}>SYNC</Text>
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
                      <Text style={styles.tableHeadText}>No</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.tableBoxSecond}>
                    <View style={styles.tableHead}>
                      <Text style={styles.tableHeadText}>Status</Text>
                    </View>
                  </View>
                  <View style={styles.tableBoxThird}>
                    <View style={styles.tableHead}>
                      <Text style={styles.tableHeadText}>Date</Text>
                    </View>
                  </View>
                  <View style={styles.tableBoxFour}>
                    <View style={styles.tableHead}>
                      <Text style={styles.tableHeadText}>Reference No.</Text>
                    </View>
                  </View>
                  <View style={styles.tableBoxFive}>
                    <View style={styles.tableHead}>
                      <Text style={styles.tableHeadText}>ΣQty</Text>
                    </View>
                  </View>
                  <View style={styles.tableBoxSix}>
                    <View style={styles.tableHead}>
                      <Text style={styles.tableHeadText}>ΣSKU</Text>
                    </View>
                  </View>
                  <View style={styles.tableBoxSix}>
                    <View style={styles.tableHead}>
                      <Text style={styles.tableHeadText}>ΣUOM</Text>
                    </View>
                  </View>
                  <View style={styles.tableBoxSeven}>
                    <View style={styles.tableHead}>
                      <Text style={styles.tableHeadText}>Action</Text>
                    </View>
                  </View>
                </View>
                {/* Table Head End  */}
                {/* Table Body Start  */}
                {
                  data.map((e, i) => {
                    return (
                      <TouchableOpacity key={i} onLongPress={() => setSelectedIndex(i)} style={styles.tableBodyContainer}>
                        <View style={{
                          borderBottomWidth: 1,
                          borderLeftWidth: 1,
                          borderColor: "grey",
                          width: '5%',
                          paddingVertical: 10,
                        }}>
                          <View style={styles.tableBody}>
                            <Text style={styles.tableBodyText}>{e.no}</Text>
                          </View>
                        </View>
                        <View style={{
                          borderBottomWidth: 1,
                          borderColor: "grey",
                          borderTopWidth: 0,
                          width: '10%',
                          paddingVertical: 10,
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                          <TouchableOpacity style={styles.collectionBtn}>
                            <Text style={styles.engagementBtnText}>Pending</Text>
                          </TouchableOpacity>
                        </View>
                        <View style={{
                          borderBottomWidth: 1,
                          borderColor: "grey",
                          width: '15%',
                          paddingVertical: 10,
                        }}>
                          <View style={styles.tableBody}>
                            <Text style={styles.tableBodyText}>{e.date}</Text>
                          </View>
                        </View>
                        <View style={{
                          borderBottomWidth: 1,
                          borderColor: "grey",
                          borderTopWidth: 0,
                          width: '20%',
                          paddingVertical: 10,

                        }}>
                          <View style={styles.tableBody}>
                            <Text style={styles.tableBodyText}>{e.referenceNo}</Text>
                          </View>
                        </View>
                        <View style={{
                          borderBottomWidth: 1,
                          borderColor: "grey",
                          borderTopWidth: 0,
                          width: '10%',
                          paddingVertical: 10,

                        }}>
                          <View style={styles.tableBody}>
                            <Text style={styles.tableBodyText}>{e.qty}</Text>
                          </View>
                        </View>
                        <View style={{
                          borderBottomWidth: 1,
                          borderColor: "grey",
                          borderTopWidth: 0,
                          width: '5%',
                          paddingVertical: 10,

                        }}>
                          <View style={styles.tableBody}>
                            <Text style={styles.tableBodyText}>{e.sku}</Text>
                          </View>
                        </View>
                        <View style={{
                          borderBottomWidth: 1,
                          borderColor: "grey",
                          borderTopWidth: 0,
                          width: '5%',
                          paddingVertical: 10,
                        }}>
                          <View style={styles.tableBody}>
                            <Text style={styles.tableBodyText}>{e.uom}</Text>
                          </View>
                        </View>
                        <View style={{
                          borderRightWidth: 1,
                          borderBottomWidth: 1,
                          borderColor: "grey",
                          borderTopWidth: 0,
                          width: '30%',
                          paddingVertical: 10,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                          <TouchableOpacity style={{
                            backgroundColor: '#1EE9F6',
                            paddingVertical: 5,
                            paddingHorizontal: 20,
                            marginHorizontal: 10,
                            borderRadius: 10,
                          }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>View</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{
                            backgroundColor: '#8FF07F',
                            paddingVertical: 5,
                            paddingHorizontal: 20,
                            marginHorizontal: 10,
                            borderRadius: 10,
                          }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Accept</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={{
                            backgroundColor: '#F68787',
                            paddingVertical: 5,
                            paddingHorizontal: 20,
                            marginHorizontal: 10,
                            borderRadius: 10,
                          }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Reject</Text>
                          </TouchableOpacity>
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
    borderTopWidth: 0,
    width: '5%',
    paddingVertical: 10
  },
  tableBoxSecond: {
    borderTopWidth: 0,
    width: '10%',
    paddingVertical: 10
  },
  tableBoxThird: {
    borderTopWidth: 0,
    width: '15%',
    paddingVertical: 10
  },
  tableBoxFour: {
    borderTopWidth: 0,
    width: '20%',
    paddingVertical: 10
  },
  tableBoxFive: {
    borderTopWidth: 0,
    width: '10%',
    paddingVertical: 10
  },
  tableBoxSix: {
    borderTopWidth: 0,
    width: '5%',
    paddingVertical: 10
  },
  tableBoxSeven: {
    borderTopWidth: 0,
    width: '30%',
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
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderRadius: 20,

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