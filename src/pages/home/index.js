import {useState} from 'react'
import {View, Text,StyleSheet, Image, TouchableOpacity, Modal } from 'react-native'
import Slider from '@react-native-community/slider'
import {ModalPassword} from '../../components/modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"


export function Home(){
  const [size, setSize] = useState(10)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  
  function generatePassword(){
    let password = "";
    for (let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
  
    setPasswordValue(password)
    setModalVisible(true);
  }
  
  
  return(
    <View style={styles.container}>
      <Image
      source={require("../../assets/azul1.png")}
     style={styles.logo}
     
     />
     
     <Text style={styles.title}>{size} caracteres</Text>
    
    <View style={styles.area}>
     <Slider
      style={{ height: 50}}
      minimunValue={6}
      maximumValue={20}
      maximumTrackTintColor="#000000"
      minimumTrackTintColor="#000000"
      thumbTintColor="#ffd700"
      value={size}
      onValueChange={ (value) => setSize(value.toFixed(0)) }   
    />

    </View>
    <TouchableOpacity style={styles.button} onPress={generatePassword}> 
      <Text style={styles.buttonText}> Gerar senha </Text>
    </TouchableOpacity>
    
    <Modal visible={modalVisible} animationType="fade" transparent={true}>
      <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
    </Modal>
    
    
    </View>
  )
} 

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#000000",
    justifyContent: 'center',
    alignItems: 'center',
    

  },
  logo:{
    marginBottom: 60
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fffff0",
    borderRadius: 8,
    padding: 6
    
  },
  button:{
    padding: 6,
    backgroundColor: "#01A6EA",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 14,
    
  },
    buttonText:{
      color: "#FFFF",
      fontSize: 17,
    },
    title:{
      fontSize: 25,
     color: "#FFFFFF"
     
      
    }


})