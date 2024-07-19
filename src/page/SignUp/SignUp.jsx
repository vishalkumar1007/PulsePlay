import react from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {signUpStyles} from './SignUp_Style';
import LOGO from '../../assets/PulsePlayLogo.png';
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const SignUp = () => {
  console.log(`height : ${HEIGHT} and Width : ${WIDTH}`);

  return (
    <SafeAreaView style={signUpStyles.main}>
      {/* <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{flex: 1}}
            > */}
      <StatusBar animated={false} backgroundColor={'white'} />
      {/* <ScrollView style={signUpStyles.scrollSignUpMain}> */}
      <View style={signUpStyles.signUpMain}>
        <View style={signUpStyles.logoMainDiv}>
          <View style={signUpStyles.logoDiv}>
            <Image style={signUpStyles.logo} source={LOGO} />
          </View>
        </View>
        <View style={signUpStyles.welcome}>
          <Text style={signUpStyles.welcomeText}>Welcome!</Text>
          <Text style={signUpStyles.signUpText}>Create your account</Text>
        </View>
        <View style={signUpStyles.inputForm}>
          <View style={signUpStyles.inputFormGap}>
            <Text style={signUpStyles.inputLabel}>Name</Text>
            <TextInput
              style={signUpStyles.inputs}
              placeholderTextColor="#a3a3a3"
              placeholder="Enter your name"
              Type='text'
            />
          </View>
          <View style={signUpStyles.inputFormGap}>
            <Text style={signUpStyles.inputLabel}>Email</Text>
            <TextInput
              style={signUpStyles.inputs}
              placeholderTextColor="#a3a3a3"
              placeholder="Enter email id"
            />
          </View>
          <View style={signUpStyles.inputFormGap}>
            <Text style={signUpStyles.inputLabel}>Password</Text>
            <TextInput
              style={signUpStyles.inputs}
              placeholderTextColor="#a3a3a3"
              placeholder="Enter Password"
              secureTextEntry={true}
              />
          </View>
          <View style={signUpStyles.inputFormGap}>
            <Text style={signUpStyles.inputLabel}>Conform Password</Text>
            <TextInput
              style={signUpStyles.inputs}
              placeholderTextColor="#a3a3a3"
              placeholder="Again enter Password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={signUpStyles.OrWith}>
          <View style={signUpStyles.orLine}>
            <View style={signUpStyles.orLineLeft}></View>
            <Text style={signUpStyles.orLineText}>or</Text>
            <View style={signUpStyles.orLineRight}></View>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
      {/* </KeyboardAvoidingView> */}
    </SafeAreaView>
  );
};
export default SignUp;
