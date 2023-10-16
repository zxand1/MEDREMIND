
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    imageBackground: {
        flex: 1,
        resizeMode: "cover",
    },
    logo: {
        marginBottom: 50,
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
        marginBottom: 10,
    },
    form: {
        backgroundColor: "#ffffff55",
        padding: 30,
        borderRadius: 18,
        maxWidth: 720,
    },
    formInput: {
        textAlign: "center",
        backgroundColor: "white",
        fontSize: 18,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 18,
        marginTop: 10,
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
});

export default styles;