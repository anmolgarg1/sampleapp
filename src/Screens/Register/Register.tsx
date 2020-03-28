import React from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../StyleSheet/shared.style';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      errorusername: "",
      password: "",
      errorpassword: "",
      message:false,

    }
  }
  Login() {
    console.log(this.props);
    this.props.navigation.navigate('Login');
  }

  Save = async () =>{
    this.setState({ errorusername: "" });
    this.setState({ errorpassword: "" });
    console.log(this.state.username);
    await AsyncStorage.clear()
    if (!this.state.username) {
      this.setState({ errorusername: "Please Enter Username" });
      console.log("ASdas");

    }
    if (!this.state.password) {
      this.setState({ errorpassword: "Please Enter Password" });
      console.log("ppASdas");

    }
    else if(this.state.username !='' && this.state.password!=''){
      try {
        await AsyncStorage.setItem('username', this.state.username)
        await AsyncStorage.setItem('password', this.state.password)
        this.setState({ message:true });

      } catch (e) {
        console.log("Error");
      }
    }
  }

  render() {
    const {
      container,
      headerContent,
      name,
      inputContainer,
      inputs,
      buttonContainer,
      LoginButton,
      RegisterButton,
      loginText
    } = styles;
    let usererror = [];
    let passworderror = [];
    let successmessage=[];
    if (this.state.errorusername != "") {
      usererror = (
        <Text style={{color:'#fff'}}>{this.state.errorusername}</Text>
      );
    }
    if (this.state.errorpassword != "") {
      passworderror = (
        <Text style={{color:'#fff'}}>{this.state.errorpassword}</Text>
      );
    }
    if (this.state.message == true) {
      successmessage = (
        <Text style={{color:'#fff'}}>Registered SuccessFully !!</Text>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#002171" />

        <View style={styles.headerContent}>
          <Text style={styles.name}>
            Register
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Username"
            underlineColorAndroid='transparent'
            onChangeText={value => this.setState({ username: value })}
          />
        </View>
        {usererror}
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={value => this.setState({ password: value })}
          />
        </View>
        {passworderror}
        <TouchableOpacity style={[styles.buttonContainer, styles.RegisterButton]} onPress={() => this.Save()}>

          <Text style={styles.loginText}>Save</Text>

        </TouchableOpacity>
        {successmessage}
        <View style={styles.buttonContainer}>
          <Text>Or</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.Login()} style={[styles.buttonContainer, styles.RegisterButton]}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

export default Register;
