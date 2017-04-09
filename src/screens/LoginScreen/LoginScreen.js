import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';

import Button from '../../common/Button';

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{
          flex: 0,
          padding: 10,
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: 'skyblue'
          }}>{this.props.appName}</Text>
          <Text style={{
            color: 'gray',
            fontSize: 16
          }}>Your amazing starter</Text>
        </View>
        <View style={{
          flex: 0,
          marginTop: 10,
          padding: 5,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TextInput style={{
            height: 50,
            textAlign: 'center'
          }} placeholder="Email address"></TextInput>
          <TextInput secureTextEntry={true} style={{
            height: 50,
            textAlign: 'center'
          }} placeholder="Password"></TextInput>
          <Button style={{
            marginTop: 20,
            width: 200
          }} title="Sign in" onPress={() => {}} />

          <View style={{
            marginTop: 50,
            alignItems: 'center'
          }}>
            <Text>Don't have an account?</Text>
            <TouchableHighlight onPress={() => alert('Register')} underlayColor="orange" style={{
              padding: 5
            }}>
              <Text style={{
                color: 'skyblue'
              }}>Register</Text>
            </TouchableHighlight>
          </View>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
});

const mapStateToProps = ({global}) => ({
  appName: global.appName
});

const mapDispatchToProps = (dispatch) => ({});

const LoginScreenWithProp = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export default LoginScreenWithProp;
