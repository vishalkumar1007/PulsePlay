import react from 'react'
import { SafeAreaView , View, Text } from 'react-native';
import { signUpStyles } from './SignUp_Style';

const SignUp = ()=>{
    return (
        <SafeAreaView style={signUpStyles.main}>
            <View>
                <Text>
                    This is SignUp page wireless
                </Text>
            </View>
        </SafeAreaView>
    )
}
export default SignUp;