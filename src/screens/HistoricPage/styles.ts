
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
        height: 550,
    },
    submitBtn: {
        borderRadius: 18,
        marginBottom: 15,
        paddingTop: 10,
        width:"100%",
        height:70,
    },
    submitBtnBackground: {
        width: '100%',
        height : 70,
        borderRadius: 25,
        top: 5,
        padding: 2
    },
    text1: {
        color: "white",
        fontWeight: "800",
        fontSize: 18,
        lineHeight: 20,
        left:15,
        bottom: 5,
    },
    text2: {
        color: "white",
        fontWeight: "600",
        fontSize: 13,
        lineHeight: 20,
        left:15,
        bottom: 7
    },
    submiticon2:{
        left:'85%',
        bottom: 8,
        position:'absolute',
    },
    button: {
        width: '100%',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;