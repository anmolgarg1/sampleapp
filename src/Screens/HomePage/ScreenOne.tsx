import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';


export class Profile extends React.Component {
  constructor(props) {
    super(props);
  }
  logout() {

    AsyncStorage.clear()
    this.props.navigation.navigate('Login');

  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
        <TouchableOpacity
          onPress={() => this.logout()} style={[styles.buttonContainer, styles.LogoutButton]}>
          <Text style={styles.LogoutText}>LogOut</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  LogoutButton: {
    backgroundColor: "#002171",
  },
  LogoutText: {
    color: 'white',
  },
});
export default Profile;
