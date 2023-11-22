
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
    formInput: {
        backgroundColor: "white",
        fontSize: 18,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 18,
        marginTop: 5,
        color: 'black'
    },
    select:{
        height:40,
        borderRadius: 18,
        textAlign:'center',
        top:5,
        backgroundColor : "#fff",
        alignItems      : "center",
        justifyContent  : "center",
        position:'relative',
    },
    text:{
        color:'black',
        marginTop:10,
        fontSize:16,
        fontWeight: "600",

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
        textAlign:'center'
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
    datePickerButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: 10,
        borderRadius: 18,
        alignItems:'center',
        marginBottom: 20,
        top:15
      },
      placeholder:{
        textAlign:'center'
    },
      errorMsg: {
        color: "#ff375b",
    }, 

      formInputError: {
        borderWidth: 2,
        borderColor: "#ff375b",
    },
    button:{
        width:'100%',
        height:'auto',

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