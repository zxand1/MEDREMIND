
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 30,
        paddingVertical: 40,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
    },
    logoTitle: {
        marginBottom: 40,
    },
    logoImage:{
        flex: 1,
        alignItems: 'center',
        justifyContent:"center",
        width: 370,
        height: 370,
    },
    logoText: {
        fontSize: 45,
        lineHeight: 45,
        fontWeight: "600",
        color: "white",
        textAlign: "center",
    },
    title: {
        fontSize: 20,
        lineHeight: 20,
        color: "white",
    },
    form: {
        backgroundColor: "#ffffff21",
        padding: 20,
        borderRadius: 18,
        maxWidth: 720,
        marginVertical: 35,
    },
    formInput: {
        textAlign: "center",
        backgroundColor: "#ffffff55",
        fontSize: 18,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 18,
        marginTop: 15,
        color: 'white'
    },
    formInputError: {
        borderWidth: 2,
        borderColor: "#ff375b",
    },
    errorMsg: {
        color: "#ff375b",
    },
    submitBtn: {
        borderRadius: 18,
        marginTop: 30,
        marginBottom: 15,
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
    btnCadastrar: {
        lineHeight: 20,
        color: "white",
    },
    btnEsqueci:{ 
        width: 125,
        height: 20,
    },
    btnCadastro:{
        width: 240,
        height: 20,
    }
});

export default styles;