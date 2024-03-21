
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingHorizontal: 12,
        paddingVertical: 30,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
    },
    imageMedical: {
        height: '0%',
        width: '50%',
        right: 100,
        top: 20,
        position: 'relative',
    },
    logoTitle: {
        marginBottom: 1,
    },
    logoImage: {
        left: 90,
        top: -345,
        position: 'absolute',
    },
    logoText: {
        fontSize: 35,
        lineHeight: 35,
        fontWeight: "600",
        color: "white",
        textAlign: 'center',
        right: 90,
    },
    title: {
        fontSize: 20,
        lineHeight: 20,
        color: "black",
        fontWeight: "600",
    },
    form: {
        backgroundColor: "#E6E6FA",
        padding: 20,
        borderRadius: 20,
        maxWidth: 'auto',
        marginVertical: 25,
        height: "90%",
    },
    
    submitBtnBackground: {
        width: '100%',
        height: 'auto',
        borderRadius: 25,
        top: 5,
        padding: 2,
        marginBottom: 10
    },
    text1: {
        color: "white",
        fontWeight: "500",
        top:5,
        fontSize: 15,
        lineHeight: 15,
        maxWidth:"75%",
        left: 15,
        bottom: 5,
        marginBottom:5
    },
    text2: {
        color: "white",
        fontWeight: "600",
        fontSize: 13,
        lineHeight: 20,
        left: 15,
        bottom: 7,
        top:5,
    },
    text3: {
        color: "white",
        fontWeight: "600",
        fontSize: 13,
        lineHeight: 20,
        left: 15,
        top:5,
        bottom: 11,
    },
    
    submiticon2: {
        left: '85%',
        position: 'absolute',
        bottom:"100%"
    },
    
    submitBtn:{
        borderRadius: 18,
        textAlign:'center',
        padding:5,
        
          
    },
    submitText: {
        color: "white",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 20,
        marginTop: 10,
        bottom:5
    },
    button:{
        width:'100%',
        height:'auto',

        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
      },
      submitBtn2: {
        borderRadius: 18,
        marginTop: "20%",  
    },
});

export default styles;