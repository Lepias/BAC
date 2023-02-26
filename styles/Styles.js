import { StyleSheet } from "react-native";

export default StyleSheet.create({
    bgc:{
       backgroundColor:'#cce9f0' 
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       marginTop: 100
    },
    textInput:{
        padding: 5,
        borderWidth:1,
        marginBottom: 10,
        width:200,
        borderRadius:30,
        backgroundColor:'white'
    },
    label:{
        fontSize: 18,
        fontWeight: "bold",
        color:'#639ba8'
    },
    result:{
        color: 'green',
        fontSize: 68,
        fontWeight: "bold"
    },
    
     switch:{
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    header:{
        fontSize: 40,
        fontWeight:'bold',
        color:'#4992a3'
    },

    radioStyle:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    Button:{
        borderRadius:10,
        padding:10,
        backgroundColor:'#8ee8e8'
     
    },
    BT:{
        fontSize: 40,
        fontWeight:'bold',
        color:'#4992a3'
    }

});