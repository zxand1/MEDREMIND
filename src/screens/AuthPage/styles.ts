import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 150,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
    },
    imageMedical: {
        height:'0%',
        width:'50%',
        top:20,
        position:'absolute',
        
    },
    submiticon:{
        left:25,
        top:10,
    },
    submiticon2:{
        left:270,
        top:15
    },
    logoTitle: {
        marginBottom: 1,
    },
    logoImage:{
        left:30,
        top:-400,
        position:'absolute',
    },
    logoText: {
        fontSize: 35,
        lineHeight: 35,
        fontWeight: "600",
        color: "white",
        textAlign: 'center',
        top: 70,
        position: 'relative',
        width: '100%',
        
    },
    title: {
        fontSize: 30,
        lineHeight: 20,
        color: "black",
        fontWeight: "800",
    },
    form: {
        backgroundColor: "#E6E6FA",
        padding: 20,
        borderRadius: 20,
        maxWidth: 'auto',
        marginVertical: 25,
        height: 550,
        
    },
    icon:{
        width:40,
        height:40,
        position: "absolute",
      },
    submitBtnBackground: {
        width: '100%',
        height : 60,
        borderRadius:25,
        padding: 5,
        marginBottom: 10,
        marginVertical: 5,
    },
    submitText: {
        color: "white",
        textAlign: "center",
        fontWeight: "800",
        fontSize: 20,
        
    }, 
    textBtn: {
        color: "blue",
        textAlign: "center",
        fontWeight: "800",
        fontSize: 20,

    },    
    buttonContainer: {
        backgroundColor: 'white',
        paddingTop: 1,
        height: 60,
        width: "80%",
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: "center",
        top: "600%",
        left: "10%"
    }
});