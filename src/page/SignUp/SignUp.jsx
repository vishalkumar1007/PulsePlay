import {useState, useEffect} from 'react';
// import Svg, { Path, Line, Circle, PolyLine } from 'react-native-svg';
// import Svg, {Path, Circle} from 'react-native-svg';
import {
  Dimensions,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LOGO from '../../assets/PulsePlayLogo.png';
import { PasswordLookSvg  , PasswordHideSvg} from '../../component/SvgIcon';

const SignUp = () => {
  const [WIDTH, setWidth] = useState(Dimensions.get('window').width);
  const [HEIGHT, setHeight] = useState(Dimensions.get('window').height);
  const [viewPassword , setViewPassword] = useState(false);
  const [conformViewPassword , setConformViewPassword] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWidth(Dimensions.get('window').width);
      setHeight(Dimensions.get('window').height);
    };

    const subscription = Dimensions.addEventListener('change', handleResize);

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <SafeAreaView style={[signUpStyles.main, {width: WIDTH, height: HEIGHT}]}>
      <StatusBar animated={false} backgroundColor={'white'} />

      <View
        style={[
          signUpStyles.signUpMain,
          {width: WIDTH * 0.85, height: HEIGHT * 0.9},
        ]}>
        <View
          style={[
            signUpStyles.logoMainDiv,
            {width: WIDTH * 0.85, height: HEIGHT * 0.1},
          ]}>
          <View
            style={[
              signUpStyles.logoDiv,
              {width: WIDTH * 0.85, height: HEIGHT * 0.1},
            ]}>
            <Image
              style={[
                signUpStyles.logo,
                {width: WIDTH * 0.85, height: HEIGHT * 0.09},
              ]}
              source={LOGO}
            />
          </View>
        </View>
        <View
          style={[
            signUpStyles.welcome,
            {width: WIDTH * 0.85, paddingTop: HEIGHT * 0.02},
          ]}>
          <Text style={[signUpStyles.welcomeText, {fontSize: HEIGHT * 0.0265}]}>
            Welcome!
          </Text>
          <Text style={[signUpStyles.signUpText, {fontSize: HEIGHT * 0.0135}]}>
            Create your account
          </Text>
        </View>
        <View
          style={[
            signUpStyles.inputForm,
            {width: WIDTH * 0.85, paddingTop: HEIGHT * 0.025},
          ]}>
          <View
            style={[
              signUpStyles.inputFormGap,
              {width: WIDTH * 0.8, height: HEIGHT * 0.08},
            ]}>
            <View style={signUpStyles.labelDiv}>
              <Text
                style={[signUpStyles.inputLabel, {fontSize: HEIGHT * 0.018}]}>
                Name
              </Text>
            </View>
            <View style={signUpStyles.inputRapDiv}>
              <TextInput
                style={[signUpStyles.inputs, {fontSize: HEIGHT * 0.017}]}
                placeholderTextColor="#bebebe"
                placeholder="Enter your name"
              />
            </View>
          </View>
          <View
            style={[
              signUpStyles.inputFormGap,
              {width: WIDTH * 0.8, height: HEIGHT * 0.08},
            ]}>
            <View style={signUpStyles.labelDiv}>
              <Text
                style={[signUpStyles.inputLabel, {fontSize: HEIGHT * 0.018}]}>
                Email
              </Text>
            </View>
            <View style={signUpStyles.inputRapDiv}>
              <TextInput
                style={[signUpStyles.inputs, {fontSize: HEIGHT * 0.017}]}
                placeholderTextColor="#bebebe"
                placeholder="Enter email id"
              />
            </View>
          </View>
          <View
            style={[
              signUpStyles.inputFormGap,
              {width: WIDTH * 0.8, height: HEIGHT * 0.08},
            ]}>
            <View style={signUpStyles.labelDiv}>
              <Text
                style={[signUpStyles.inputLabel, {fontSize: HEIGHT * 0.018}]}>
                Password
              </Text>
            </View>
            <View style={signUpStyles.inputRapDiv}>
              <TextInput
                style={[signUpStyles.inputs, {fontSize: HEIGHT * 0.017}]}
                placeholderTextColor="#bebebe"
                placeholder="Enter password"
                secureTextEntry={!viewPassword}
              />
              <TouchableOpacity style={[signUpStyles.viewSvgIconDiv , {top:HEIGHT*0.015}]} onPress={()=>{setViewPassword(!viewPassword)}}>
                {
                  viewPassword===true?<PasswordLookSvg/>:<PasswordHideSvg/>
                }
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              signUpStyles.inputFormGap,
              {width: WIDTH * 0.8, height: HEIGHT * 0.08},
            ]}>
            <View style={signUpStyles.labelDiv}>
              <Text
                style={[signUpStyles.inputLabel, {fontSize: HEIGHT * 0.018}]}>
                Conform Password
              </Text>
            </View>
            <View style={signUpStyles.inputRapDiv}>
              <TextInput
                style={[signUpStyles.inputs, {fontSize: HEIGHT * 0.017}]}
                placeholderTextColor="#bebebe"
                placeholder="Conform your password"
                secureTextEntry={!conformViewPassword}
                />
              <TouchableOpacity style={[signUpStyles.viewSvgIconDiv , {top:HEIGHT*0.015}]} onPress={()=>{setConformViewPassword(!conformViewPassword)}}>              
                {
                  conformViewPassword===true?<PasswordLookSvg/>:<PasswordHideSvg/>
                }
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={[
              signUpStyles.btnDiv,
              {width: WIDTH * 0.8, height: HEIGHT * 0.08},
            ]}>
            <TouchableOpacity style={[signUpStyles.touchBtn, {}]}>
              <View style={[signUpStyles.btn]}>
                <Text
                  style={[signUpStyles.btnText, {fontSize: HEIGHT * 0.018}]}>
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[signUpStyles.OrWith, {height: HEIGHT * 0.125}]}>
          <View style={[signUpStyles.orLine]}>
            <View style={[signUpStyles.orLineLeft]}></View>
            <Text style={[signUpStyles.orLineText]}>or</Text>
            <View style={[signUpStyles.orLineRight]}></View>
          </View>
          <View style={[signUpStyles.otherOptionLogin]}></View>
        </View>
        <View style={signUpStyles.haveAccount}>
          <Text style={{color:'#1c1c1d' , fontWeight:`500`}}>Already have an account ? </Text>
          <TouchableOpacity><Text style={{color:'purple' , fontWeight:`500`}}>Login</Text></TouchableOpacity>
        </View>
      </View>
      {/* </ScrollView> */}
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>

    // <SafeAreaView style={{backgroundColor:'red',width:WIDTH,height:HEIGHT , display:'flex',justifyContent:'center',alignItems:'center'}}>
    //   <View style={{backgroundColor:'green',width:WIDTH*0.7,height:HEIGHT*0.8}}>

    //   </View>
    // </SafeAreaView>
  );
};

export const signUpStyles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    // width:WIDTH,
    // height:HEIGHT,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpMain: {
    // backgroundColor:'green',
    // width:'85%',
    // height:'85%',
  },
  scrollSignUpMain: {
    // height:HEIGHT,
    // width:'100%',
  },
  logoMainDiv: {
    // backgroundColor: 'orange',
    width: '100%',
    height: '12%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoDiv: {
    // backgroundColor: 'green',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    // backgroundColor: 'pink',
    resizeMode: 'contain', // Ensures the image scales correctly
  },
  welcome: {
    // backgroundColor: 'brown',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // paddingTop: 5
  },
  welcomeText: {
    color: '#131314', //black
    fontWeight: '500',
  },
  signUpText: {
    color: '#4a4a4a', //black gray
  },
  inputForm: {
    // backgroundColor: 'pink',
    // width: {},
    // height: '61%',
    paddingVertical: 15,
    display: 'flex',
    // justifyContent:'center',
    alignItems: 'center',
    gap: 22,
  },
  inputFormGap: {
    // backgroundColor: 'green',
    // width: '90%',
  },

  inputRapDiv: {
    // backgroundColor: 'blue',
    width: '100%',
    height: '60%',
  },

  viewSvgIconDiv: {
    // backgroundColor: 'gray',
    position: 'absolute',
    right: 10,
    // bottom: '25%',
  },

  inputs: {
    width: '100%',
    // height: '55%',
    minHeight: 40,
    borderWidth: 1,
    borderColor: '#bebebe',
    paddingHorizontal: 10,
    borderRadius: 5,
    color: '#494949',
  },
  labelDiv: {
    // backgroundColor: 'pink',
    width:'100%',
    height:'40%'
  },
  inputLabel: {
    color: '#494949',
    fontSize: 18,
    fontWeight: `500`,
  },
  btnDiv: {
    // backgroundColor: 'gray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchBtn: {
    marginTop: 10,
    backgroundColor: 'purple',
    width: '100%',
    minHeight: 35,
    height: '52%',
    borderRadius: 7,
  },
  btn: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  btnText: {
    color: 'white',
    fontWeight: '500',
  },
  OrWith: {
    backgroundColor: 'green',
    width: '100%',
    // height: '16%'
  },
  orLine: {
    // backgroundColor:'red',
    width: '100%',
    height: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
  orLineLeft: {
    width: '40%',
    height: '8%',
    backgroundColor: '#dedede',
  },
  orLineText: {
    color: '#9b9999',
    fontSize: 15,
  },
  orLineRight: {
    width: '40%',
    height: '8%',
    backgroundColor: '#dedede',
  },

  otherOptionLogin: {
    backgroundColor: 'pink',
    width: '100%',
    height: '80%',
  },
  haveAccount:{
    // backgroundColor:'yellow',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    gap:7
  }
});

export default SignUp;
