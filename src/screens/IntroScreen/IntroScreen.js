import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight } from 'react-native';
import AppIntro from 'react-native-app-intro';

import Button from '../../common/Button';

class IntroScreen extends React.Component {
  static navigationOptions = {
    title: 'Intro',
    header: {
      visible: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <AppIntro
          showDoneButton={false}
          showSkipButton={false}
        >
          <View style={[styles.slide, { backgroundColor: 'deepskyblue' }]}>
            <View level={10} style={{
              alignItems: 'center'
            }}>
              <Image resizeMode="contain" style={{
                width: 100,
                height: 100,
                margin: 50
              }} source={require('../../assets/logo.png')}></Image>
              <Text style={styles.text}>CRNA starter</Text>
              <Text style={[styles.description]}>Hack your ideas faster!</Text>
            </View>
          </View>
          <View style={[styles.slide, { backgroundColor: 'cadetblue' }]}>
            <View level={-10}>
              <Text style={styles.text}>All-in-one starter</Text>
              <Text style={[styles.description]}>Redux and Navigation ready</Text>
            </View>
          </View>
          <View style={[styles.slide, { backgroundColor: 'cornflowerblue' }]}>
            <View level={-10}>
              <Text style={styles.text}>Let's get started!</Text>
              <View style={{
                marginTop: 50
              }}>
                <Button onPress={() => this.props.navigation.navigate('LoginScreen')} title="Sign in"></Button>
                <Button title="Register"></Button>
              </View>
            </View>
          </View>
        </AppIntro>
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
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center'
  },
  description: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30
  }
});

const mapStateToProps = ({global}) => ({
  appName: global.appName
});

const mapDispatchToProps = (dispatch) => ({});

const IntroScreenWithProp = connect(mapStateToProps, mapDispatchToProps)(IntroScreen);

export default IntroScreenWithProp;
