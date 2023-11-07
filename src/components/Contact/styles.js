import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
    contact: {
        padding: 5,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: "#000000",
        borderBottomColor: "#5666",
        backgroundColor:'#CBD5E1',
        borderStyle: 'solid',
        width: '100%',
        flexDirection: 'row',
        gap: 15,
      },
      image: {
        height: 50,
      },
      messageContact: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
      },
      nameContact:{
        fontSize: 22,
        fontWeight: '700',
      },
      nameMessage: {
        fontSize: 12,
        width: 160,
        overflow: 'hidden',
      }
})

export default styles;