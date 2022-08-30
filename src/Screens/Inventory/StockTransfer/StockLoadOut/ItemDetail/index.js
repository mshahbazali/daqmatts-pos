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
      uom: "Case",
      qty: 245123,
    },
    {
      itemCode: 480002245637,
      tagName: '10/06/2022',
      description: 24562345,
      brand: 245123,
      uom: 'Pack',
      qty: 245123,
    },
  ]
  const [modalVisible, setModalVisible] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  const [qty, setQty] = useState("25")
  const [discount, setDiscount] = useState("30")
  const [amount, setAmount] = useState("25")
  const [selectedIndex, setSelectedIndex] = useState()
  return (
    <View>
      <ScrollView>
        <View style={{ paddingVertical: 13, paddingHorizontal: 18, backgroundColor: '#EB4343' }}>
          <Text style={{ color: '#fff', fontSize: 22, fontWeight: '500' }}>Stock Load-Out</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.sideBarContainer}>
            <ScrollView>
              <View style={{ backgroundColor: '#A1EFF4', paddingVertical: 10, paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Warehouse Details</Text>
              </View>
              <View style={{ paddingHorizontal: 20, marginTop: 10 }}>
                <View style={{ marginTop: 20 }}>
                  <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>To Warehouse:</Text>
                  <SelectDropdown
                    data={["4005 - Main Office Liloan"]}
                    defaultButtonText={"4005 - Main Office Liloan"}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index)
                    }}
                    dropdownIconPosition={"left"}
                    renderDropdownIcon={() => {
                      return (
                        <AntDesign name="caretdown" size={18} color="black" />
                      )
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                      return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                      return item
                    }}
                    buttonStyle={{ backgroundColor: "#FDF5F5", marginTop: 20, justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, }}
                    buttonTextStyle={{ fontSize: 20, textAlign: 'center' }}
                    rowTextStyle={{ fontSize: 20 }}
                    rowStyle={{ backgroundColor: 'white', paddingHorizontal: 10 }}
                  />
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Address:</Text>
                  <Text style={{ fontSize: 18, color: "#000", fontWeight: '400', backgroundColor: "#FDF5F5", paddingHorizontal: 10, paddingVertical: 5, marginRight: 5, marginTop: 20 }}>#4 Pakarde St. Brgy. Guizo</Text>
                  <Text style={{ fontSize: 18, color: "#000", fontWeight: '400', backgroundColor: "#FDF5F5", paddingHorizontal: 10, paddingVertical: 5, marginRight: 5, marginTop: 10 }}>Mandaue City Cebu, 6002</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Contact:</Text>
                  <Text style={{ fontSize: 18, color: "#000", fontWeight: '400', backgroundColor: "#FDF5F5", paddingHorizontal: 10, paddingVertical: 5, marginRight: 5, marginTop: 20 }}>Juan Dela Cruz</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Mobile:</Text>
                  <Text style={{ fontSize: 18, color: "#000", fontWeight: '400', backgroundColor: "#FDF5F5", paddingHorizontal: 10, paddingVertical: 5, marginRight: 5, marginTop: 20 }}>09171112223</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Email:</Text>
                  <Text style={{ fontSize: 18, color: "#000", fontWeight: '400', backgroundColor: "#FDF5F5", paddingHorizontal: 10, paddingVertical: 5, marginRight: 5, marginTop: 20 }}>juandela@gmail.com</Text>
                </View>
              </View>

              <View style={{ backgroundColor: '#A1EFF4', paddingVertical: 10, paddingHorizontal: 10, marginTop: 30, marginBottom: 10 }}>
                <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Summation Info</Text>
              </View>
              <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 10 }}>
                <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Σ SKU</Text>
                <Text style={{ fontSize: 18, color: "#000", fontWeight: '400', backgroundColor: "#FDF5F5", paddingHorizontal: 10, paddingVertical: 5, marginRight: 5, }}>2 SKU’s</Text>
              </View>
              <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 10 }}>
                <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Σ UOM</Text>
                <Text style={{ fontSize: 18, color: "#000", fontWeight: '400', backgroundColor: "#FDF5F5", paddingHorizontal: 10, paddingVertical: 5, marginRight: 5, }}>2 UOM’s</Text>
              </View>
              <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 20, marginVertical: 10 }}>
                <Text style={{ fontSize: 20, color: "#000", fontWeight: '600' }}>Σ UOM</Text>
                <Text style={{ fontSize: 18, color: "#000", fontWeight: '400', backgroundColor: "#FDF5F5", paddingHorizontal: 10, paddingVertical: 5, marginRight: 5, }}>18.00</Text>
              </View>
              <View style={{ marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                <TouchableOpacity onPress={() => setSubmitModal(!submitModal)} style={{ backgroundColor: '#94F692', paddingVertical: 20, paddingHorizontal: 20, borderWidth: 1, borderColor: '#000', borderRadius: 10 }}>
                  <Text style={{ fontSize: 20, color: "#000", fontWeight: '800' }}>Submit</Text>
                </TouchableOpacity>
              </View>

            </ScrollView>
          </View>
          <View style={{ width: '80%' }}>
            <ScrollView>
              <View style={styles.tableContainer}>
                {/* Table Head Start */}
                <View style={styles.tableHeadContainer}>
                  <View style={styles.tableBoxFirst}>
                    <View style={styles.tableHead}>
                      <Text style={styles.tableHeadText}>Description</Text>
                    </View>
                  </View>
                  <View style={styles.tableBoxSecond}>
                    <View style={styles.tableHead}>
                      <Text style={styles.tableHeadText}>Type</Text>
                    </View>
                  </View>
                  <View style={styles.tableBoxThird}>
                    <View style={styles.tableHead}>
                      <Text style={styles.tableHeadText}>UOM</Text>
                    </View>
                  </View>
                  <View style={styles.tableBoxFour}>
                    <View style={styles.tableHead}>
                      <Text style={styles.tableHeadText}>Qty</Text>
                    </View>
                  </View>
                </View>
                {/* Table Head End  */}
                {/* Table Body Start  */}
                {
                  data.map((e, i) => {
                    return (
                      <TouchableOpacity key={i} onPress={() => {
                        setSelectedIndex(i)
                        setModalVisible(!modalVisible)
                      }} style={[styles.tableBodyContainer, { backgroundColor: selectedIndex == i ? "yellow" : "white" }]}>
                        <View style={styles.tableBoxFirst}>
                          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', }}>
                            <AntDesign name="closecircle" size={30} color="red" style={{ marginLeft: 10 }} />
                            <Image source={require("../../../../../Assets/Image/dup.png")} style={{ width: 30, height: 35, marginHorizontal: 10 }} />
                            <View style={styles.tableBody}>
                              <Text style={styles.tableBodyText}>{e.itemCode}</Text>
                            </View>
                          </View>
                        </View>
                        <View style={styles.tableBoxSecond}>
                          <View style={styles.tableBody}>
                            <TouchableOpacity style={styles.collectionBtn}>
                              <Text style={styles.engagementBtnText}>Good</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View style={styles.tableBoxThird}>
                          <View style={styles.tableBody}>
                            <Text style={styles.tableBodyText}>{e.uom}</Text>
                          </View>
                        </View>
                        <View style={styles.tableBoxFour}>
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
        </View>
      </ScrollView>


      {/* Submit Modal  */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={submitModal}
      >
        <ScrollView>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 15 }}>
                <View style={{ marginRight: 150 }}>
                  <Text style={{ color: '#000', fontSize: 19, fontWeight: '500' }}>TRANSACTION SUBMITTED</Text>
                </View>
                <TouchableOpacity onPress={() => setSubmitModal(!submitModal)}>
                  <AntDesign name="closecircleo" size={30} color="#000" />
                </TouchableOpacity>
              </View>
              <View style={{ marginVertical: 20, justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ color: '#000', fontSize: 22, fontWeight: '500', textAlign: 'center', }}>Please Wait for Warehouse Confirmation</Text>
                <Image source={require('../../../../../Assets/Image/loading.png')} style={{ width: 90, height: 90, marginVertical: 20 }} />
              </View>

            </View>
          </View>
        </ScrollView>
      </Modal>


      {/* Item Modal  */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <ScrollView>
          <View style={styles.centeredView}>
            <View style={styles.itemModalView}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'red', paddingHorizontal: 16, paddingVertical: 15 }}>
                <View style={{ marginRight: 150 }}>
                  <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>480001253545</Text>
                  <Text style={{ color: '#fff', fontSize: 23, fontWeight: '500' }}>HBR250</Text>
                  <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>Happy Booster Hotdog Regular</Text>
                  <Text style={{ color: '#fff', fontSize: 20, fontWeight: '500' }}>Virginia  | Hotdogs</Text>
                </View>
                <TouchableOpacity onPress={() => {
                  setSelectedIndex(undefined)
                  setModalVisible(!modalVisible)
                }}>
                  <AntDesign name="closecircleo" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 40, marginTop: 20 }}>
                <Text style={{ color: 'red', fontSize: 20, fontWeight: '500', marginRight: 35 }}>Type</Text>
                <SelectDropdown
                  data={["Bad"]}
                  defaultButtonText={"Bad"}
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
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 40, }}>
                <Text style={{ color: 'red', fontSize: 20, fontWeight: '500', marginRight: 47 }}>Qty</Text>
                <TextInput value={qty} onChangeText={(text) => setQty(text)} style={{ width: '50%', color: '#000', fontSize: 18, fontWeight: '500', paddingVertical: 5, textAlign: 'right', paddingHorizontal: 20, backgroundColor: '#E9F4A1', borderRadius: 30, }} />
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 40, marginTop: 10, marginBottom: 20 }}>
                <Text style={{ color: 'red', fontSize: 20, fontWeight: '500', marginRight: 35 }}>UOM</Text>
                <SelectDropdown
                  data={["Pack"]}
                  defaultButtonText={"Pack"}
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
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{ fontSize: 20, color: "#000", fontWeight: '400', backgroundColor: "#8EFE92", paddingHorizontal: 30, paddingVertical: 5, marginRight: 10, borderRadius: 10 }}>OK</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={{ fontSize: 20, color: "#000", fontWeight: '400', backgroundColor: "#FE958E", paddingHorizontal: 10, paddingVertical: 5, marginRight: 10, borderRadius: 10 }}>CANCEL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: "#fff",
    width: '100%',
  },
  sideBarContainer: {
    width: '20%',
    borderColor: 'grey',
    borderWidth: 1,
    backgroundColor: '#F8FFCB'
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
    width: '50%',
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
    width: '15%',
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
    backgroundColor: '#F0F1C4',
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    borderRadius: 20
  },
  collectionBtn: {
    backgroundColor: '#94F692',
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginHorizontal: 10,
    borderRadius: 20
  },
  engagementBtnText: {
    fontSize: 18, fontWeight: '500', color: "#000",
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 25

  },
  modalView: {
    marginTop: "15%",
    marginLeft: '15%',
    backgroundColor: "#F9FBAB",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  itemModalView: {
    marginTop: "15%",
    marginLeft: '15%',
    backgroundColor: "#fff",
    borderRadius: 20,
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