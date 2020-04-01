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
export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      errorusername: "",
      password: "",
      errorpassword: "",
      autherror: false,

    }
  }
  Submit = async () => {
    this.setState({ errorusername: "" });
    this.setState({ errorpassword: "" });
    if (!this.state.username) {
      this.setState({ errorusername: "Please Enter Username" });
    }
    if (!this.state.password) {
      this.setState({ errorpassword: "Please Enter Password" });
    }
    else {
      try {
        const username = await AsyncStorage.getItem('username');
        const password = await AsyncStorage.getItem('password');
        if (this.state.username == username && this.state.password == password) {
          console.log("Success");
          this.textInput.clear()
          this.props.navigation.navigate('Home');

        } else {
          console.log("Wrong Password");
          this.setState({ autherror: true });
          this.textInput.clear()
        }
      } catch (e) {
        console.log("Error");
      }
    }

  }
  Register() {
    console.log(this.props);
    this.props.navigation.navigate('Register');
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
    let autherror = [];
    if (this.state.autherror == true) {
      autherror = (
        <Text style={{ color: 'white' }}>Wrong Credentials !!</Text>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#002171" />

        <View style={styles.headerContent}>
          <Text style={styles.name}>
            Login
           </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Username"
            underlineColorAndroid='transparent'
            onChangeText={value => this.setState({ username: value })}
            ref={input => { this.textInput = input }}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid='transparent'
            onChangeText={value => this.setState({ password: value })}
            ref={input => { this.textInput = input }}
          />
        </View>
        <TouchableOpacity style={[styles.buttonContainer, styles.LoginButton]} onPress={() => this.Submit()}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
        {autherror}
        <TouchableOpacity style={styles.buttonContainer}>
          <Text>Or</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonContainer, styles.RegisterButton]} onPress={() => this.Register()}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableOpacity>
      </View>

    );
  }
}



export default Login;
