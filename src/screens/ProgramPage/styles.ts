
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingHorizontal: 12,
        paddingVertical: 60,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
    },
    imageMedical: {
        height:'0%',
        width:'50%',
        right: 100,
        top:20,
        position:'absolute',
        
    },
    logoTitle: {
        marginBottom: 1,
    },
    logoImage:{
        left:90,
        top:-345,
        position:'absolute',
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
        backgroundColor: "#ffffff",
        padding: 20,
        borderRadius: 20,
        maxWidth: 'auto',
        marginVertical: 25,
        height: 550,
        
    },
 
    submitBtn: {
        borderRadius: 18,
        marginTop: 20,
        marginBottom: 12,
        
    },
    submitBtnBackground: {
        width: 325,
        height : 60,
        borderRadius:25,
        padding: 5,
    },
    submitText: {
        color: "white",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 20,
        position:'relative',
    },
    submitText2: {
        color: "white",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 15,
        position:'relative',
    },
    icon:{
        textAlign:'center',
        justifyContent:'center',
        position:'absolute',
        padding: 8,
    }
        
});

export default styles;