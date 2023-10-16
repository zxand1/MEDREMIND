
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
        width: 350,
        height: 350
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
        marginBottom: 5,
        marginTop: 15,
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
    },
    formInputError: {
        borderWidth: 2,
        borderColor: "#ff375b",
    },
    errorMsg: {
        color: "#ff375b"
    },
    submitBtn: {
        borderRadius: 18,
        marginTop: 30,
        marginBottom: 20,
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
    botaoSenha: {
        fontSize: 15,
        lineHeight: 20,
        color: "white", 
    },
    botaoCadastrar: {
        fontSize: 15,
        lineHeight: 20,
        color: "white", 
    }
});

export default styles;