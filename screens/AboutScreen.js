
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default class ProfileView extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar} source={require('./1234.png')}/>
                <Text style={styles.name}>
                  Deepak Tejwani
                </Text>
            </View>
          </View>

          <View style={styles.profileDetail}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Budding React Native Developer</Text>
              <Text style={styles.title}>Student, VESIT, Mumbai</Text>
              <Text style={styles.title}> </Text>
            </View>
            <View style={styles.detailContent}>
            </View>
            <View style={styles.detailContent}>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.bodyContent}>
    <Text style={styles.description}>{'\n'}Hello! Like all, even I was hankering to learn something really interesting this quaratine
               and I came across this article interpreting the PROS and CONS of native apps and the next moment I decided to learn React Native.
               This was my very first app as titled 'Riveting Indian Cuisines'.{'\n'} {'\n'} From Components, Styling, Layouts to Responsive and Adaptive UI's to Navigation to State Management, I've made use of all the mentioned concepts as much as I could.
               Hoping to learn and taking learnings from this app to next level indeed :)
              </Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#f5428d",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  profileDetail:{
    alignSelf: 'center',
    marginTop:200,
    alignItems: 'center',
    flexDirection: 'row',
    position:'absolute',
    backgroundColor: "#ffffff"
  },
  detailContent:{
    margin:10,
    alignItems: 'center'
  },
  title:{
    fontSize:20,
    color: "#f5428d"
  },
  count:{
    fontSize:18,
  },
  bodyContent: {
    alignItems: 'center',
    padding:30,
    marginTop:40
  },
  textInfo:{
    fontSize:18,
    marginTop:20,
    color: "#f5428d",
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#f5428d",
  },
  description:{
    fontSize:20,
    color: "#f5428d",
    marginTop:10,
    textAlign: 'center'
  },
});
 