import { View, Text, Button, StyleSheet, StatusBar } from "react-native";

import DoctorSelectBox from "../atoms/doctorSelectBox";

import { Colors } from "../utils/colors";

const PopUpPage = ({select, cancel}) => {
	
    return (
      <View style={styles.container}>
        <View style={styles.pickBox}>
          <View style={styles.titleBox}>
            <Text 
                style={styles.title}
            >Select Doctor</Text>
          </View>
          <View style={styles.selectSection}>
          <DoctorSelectBox />
          </View>
          <View style={styles.buttonBox}>
            <Button 
              title="Select" 
              color={Colors.highlight}
              onPress={select}
            />
            <Button 
              title="Cancel" 
              color={Colors.ordinary}
              onPress={cancel}
            />
          </View>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: "100%",
    width: "100%",
    backgroundColor: Colors.transparent,
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    top: 0,
    bottom: 0,
    zIndex: 1000
  },
  pickBox: {
    height: 300,
    width: "88%",
    backgroundColor: Colors.white,
    borderColor: Colors.highlight,
    borderEndWidth: 0.5,
    borderBottomWidth: 0.5,
   
  },
  titleBox: {
   // height: 40,
    flex: 0.15,
    borderColor: Colors.highlight,
    borderBottomWidth: 2,
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    color: Colors.highlight,
    marginLeft: 5
  },
  selectSection: {
    flex: 0.7,
  },
  radioBox: {
  	flexDirection: "row",
  	alignItems: "center"
  },
  buttonBox: {
    flex: 0.15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  }
  
});

export default PopUpPage;