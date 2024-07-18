import react from 'react'
import { SafeAreaView , View, Text } from 'react-native';
import { signUpStyles } from './SignUp_Style';

const SignUp = ()=>{
    return (
        <SafeAreaView style={signUpStyles.main}>
            <View>
                <Text>
                    We are done with initialized project on github
                </Text>
            </View>
        </SafeAreaView>
    )
}
export default SignUp;