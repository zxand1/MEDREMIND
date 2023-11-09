
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
        position:'relative',
        
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
        backgroundColor: "#E6E6FA",
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
        paddingTop: 18
        
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
        marginTop: 10
    },
    icon:{
        textAlign:'center',
        justifyContent:'center',
        position:'absolute',
        padding: 8,
    },
    EditBtnBackground:{
        textAlign: 'right',
        
    },

    button:{
        width:'100%',
        height:25,
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
      },

      submiticon:{
        position:'absolute',
        left:30,
    },
        
});

export default styles;