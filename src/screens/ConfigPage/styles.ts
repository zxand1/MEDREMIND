
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
        borderRadius: 10,
        maxWidth: 'auto',
        marginVertical: 25,
        height: 550,
        
    },
    submiticon:{
        position:'absolute',
        left:25
    },

    text:{
        color:'black',
        fontSize:18,
        
      },

    button:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
      },
      
 
    submitBtn: {
        borderRadius: 18,
        marginTop: 40,
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