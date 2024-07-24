import { useState, useEffect } from 'react';
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
import GOOGLE_LOGO from '../../assets/googleLogo.png'
import FACEBOOK_LOGO from '../../assets/FacebookLogo.png'
import X_LOGO from '../../assets/XLogo.png'
import { PasswordLookSvg  , PasswordHideSvg} from '../../component/SvgIcon';

const Login = () => {
    const [WIDTH, setWidth] = useState(Dimensions.get('window').width);
    const [HEIGHT, setHeight] = useState(Dimensions.get('window').height);
    const [viewPassword, setViewPassword] = useState(false);
    const [conformViewPassword, setConformViewPassword] = useState(false);

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
        <SafeAreaView style={[signUpStyles.main, { width: WIDTH, height: HEIGHT }]}>
            <StatusBar animated={false} backgroundColor={'white'} barStyle={'dark-content'}/>

            <View
                style={[
                    signUpStyles.signUpMain,
                    { width: WIDTH * 0.85, height: HEIGHT * 0.75 },
                ]}>
                <View
                    style={[
                        signUpStyles.logoMainDiv,
                        { width: WIDTH * 0.85, height: HEIGHT * 0.105 },
                    ]}>
                    <View
                        style={[
                            signUpStyles.logoDiv,
                            { width: WIDTH * 0.85, height: HEIGHT * 0.1 },
                        ]}>
                        <Image
                            style={[
                                signUpStyles.logo,
                                { width: WIDTH * 0.85, height: HEIGHT * 0.09 },
                            ]}
                            source={LOGO}
                        />
                    </View>
                </View>
                <View
                    style={[
                        signUpStyles.welcome,
                        { width: WIDTH * 0.85, paddingTop: HEIGHT * 0.025 },
                    ]}>
                    <Text style={[signUpStyles.welcomeText, { fontSize: HEIGHT * 0.0265 }]}>
                        Welcome Back!
                    </Text>
                    <Text style={[signUpStyles.signUpText, { fontSize: HEIGHT * 0.0135 }]}>
                        Login your account
                    </Text>
                </View>
                <View
                    style={[
                        signUpStyles.inputForm,
                        { width: WIDTH * 0.85, paddingTop: HEIGHT * 0.035 },
                    ]}>
                    
                    <View
                        style={[
                            signUpStyles.inputFormGap,
                            { width: WIDTH * 0.8, height: HEIGHT * 0.08 },
                        ]}>
                        <View style={signUpStyles.labelDiv}>
                            <Text
                                style={[signUpStyles.inputLabel, { fontSize: HEIGHT * 0.018 }]}>
                                Email
                            </Text>
                        </View>
                        <View style={signUpStyles.inputRapDiv}>
                            <TextInput
                                style={[signUpStyles.inputs, { fontSize: HEIGHT * 0.017 }]}
                                placeholderTextColor="#bebebe"
                                placeholder="Enter email id"
                            />
                        </View>
                    </View>
                    <View
                        style={[
                            signUpStyles.inputFormGap,
                            { width: WIDTH * 0.8, height: HEIGHT * 0.08 },
                        ]}>
                        <View style={signUpStyles.labelDiv}>
                            <Text
                                style={[signUpStyles.inputLabel, { fontSize: HEIGHT * 0.018 }]}>
                                Password
                            </Text>
                        </View>
                        <View style={signUpStyles.inputRapDiv}>
                            <TextInput
                                style={[signUpStyles.inputs, { fontSize: HEIGHT * 0.017 }]}
                                placeholderTextColor="#bebebe"
                                placeholder="Enter password"
                                secureTextEntry={!viewPassword}
                            />
                            <TouchableOpacity style={[signUpStyles.viewSvgIconDiv, { top: HEIGHT * 0.015 }]} onPress={() => { setViewPassword(!viewPassword) }}>
                                {
                                    viewPassword===true?<PasswordLookSvg/>:<PasswordHideSvg/>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View
                        style={[
                            signUpStyles.btnDiv,
                            { width: WIDTH * 0.8, height: HEIGHT * 0.07 },
                        ]}>
                        <TouchableOpacity style={[signUpStyles.touchBtn, {}]}>
                            <View style={[signUpStyles.btn]}>
                                <Text
                                    style={[signUpStyles.btnText, { fontSize: HEIGHT * 0.018 }]}>
                                    Log In
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[signUpStyles.OrWith, { height: HEIGHT * 0.13 }]}>
                    <View style={[signUpStyles.orLine]}>
                        <View style={[signUpStyles.orLineLeft]}></View>
                        <Text style={[signUpStyles.orLineText]}>or</Text>
                        <View style={[signUpStyles.orLineRight]}></View>
                    </View>
                    <View style={[signUpStyles.otherOptionLogin]}>
                        <TouchableOpacity style={[signUpStyles.withGoogle, { width: HEIGHT * 0.05, height: HEIGHT * 0.05 }]}>
                            <Image style={signUpStyles.withLogo} source={GOOGLE_LOGO} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[signUpStyles.withFacebook, { width: HEIGHT * 0.05, height: HEIGHT * 0.05 }]}>
                            <Image style={signUpStyles.withLogo} source={FACEBOOK_LOGO} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[signUpStyles.withLinkedIn, { width: HEIGHT * 0.05, height: HEIGHT * 0.05 }]}>
                            <Image style={signUpStyles.withLogo} source={X_LOGO} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[signUpStyles.haveAccount, { paddingTop: HEIGHT * 0.02 }]}>
                    <Text style={{ color: '#717171', fontWeight: `500`, fontSize: HEIGHT * 0.013 }}>Don't have account ? </Text>
                    <TouchableOpacity><Text style={{ color: 'purple', fontWeight: `500`, fontSize: HEIGHT * 0.013 }}>SignUp</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}


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
        gap: 25,
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
        width: '100%',
        height: '40%'
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
        marginTop: 5,
        backgroundColor: 'purple',
        width: '100%',
        minHeight: 35,
        height: '57%',
        borderRadius: 7,
        // elevation:4
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
        // backgroundColor: 'brown',
        width: '100%',
        // height: '16%'
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
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
        // backgroundColor: 'pink',
        width: '94%',
        // height: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    haveAccount: {
        // backgroundColor:'yellow',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 7,
        // paddingTop:5,
    },
    withGoogle: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#d5d5d5',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2.5
    },
    withFacebook: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2.5
    },
    withLinkedIn: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2.5
    },
    withLogo: {
        width: '70%',
        height: '70%'
    },
});

export default Login;