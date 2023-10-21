
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 80,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
    },
    logoTitle: {
        marginBottom: 1,
    },
    logoImage:{
        left:90,
        top:-345,
        position:'absolute'
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
        color: "white",
        fontWeight: "600",
    },
    form: {
        backgroundColor: "#ffffff21",
        padding: 20,
        borderRadius: 18,
        maxWidth: 700,
        marginVertical: 15,
    },
 
    submitBtn: {
        borderRadius: 18,
        marginTop: 30,
        marginBottom: 12,
    },
    submitBtnBackground: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 18,
    },
    submitBtnText: {
        color: "white",
        textAlign: "center",
        fontWeight: "600",
        fontSize: 20,
    },
    btnSenha: {
        lineHeight: 20,
        color: "white", 
    },

});

export default styles;