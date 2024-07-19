import { StyleSheet , Dimensions} from "react-native";
const { width: WIDTH, height: HEIGHT } = Dimensions.get("window");

export const signUpStyles = StyleSheet.create({
    main:{
        backgroundColor:'white',
        width:WIDTH,
        height:HEIGHT,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    signUpMain:{
        // backgroundColor:'green',
        width:'85%',
        height:'85%',
        
    },
    scrollSignUpMain:{
        // height:HEIGHT,
        width:'100%',
        
    },
    logoMainDiv:{
        backgroundColor:'white',
        width:'100%',
        height:'12%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    logoDiv:{
        width:'70%',
        height:'100%'
    },
    logo:{
        width:'100%',
        height:'100%'
    },
    welcome:{
        backgroundColor:'white',
        width:'100%',
        height:'9%',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'

    },
    welcomeText:{
        color:'#131314', //black
        fontSize:26,
        fontWeight:`500`
    },
    signUpText:{
        color:'#4a4a4a', //black gray
        fontSize:14
    },
    inputForm:{
        // backgroundColor:'blue',
        width:'100%',
        height:'61%',
        paddingVertical: 15 ,
        display:'flex',
        // justifyContent:'center',
        alignItems:'center',
        gap:30,
        paddingTop:40
    },
    inputFormGap:{
        // backgroundColor:'pink',
        width:'90%',
        gap:10,

    },
    inputs:{
        width:'100%',
        height:45,
        borderWidth:1,
        borderColor:'#a3a3a3',
        fontSize:18,
        paddingHorizontal:10,
        borderRadius:5,
        color:'#333333'
    },
    inputLabel:{
        color:'#2f2f2f',
        fontSize:18,
        fontWeight:`500`
    },
    OrWith:{
        // backgroundColor:'pink',
        width:'100%',
        height:'16%'

    },
    orLine:{
        // backgroundColor:'red',
        width:'100%',
        height:25,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:14
    },
    orLineLeft:{
        width:'39%',
        height:'8%',
        backgroundColor:'#dedede'
    },
    orLineText:{
        color:'#9b9999',
        fontSize:15
    },
    orLineRight:{
        width:'39%',
        height:'8%',
        backgroundColor:'#dedede'

    }
})