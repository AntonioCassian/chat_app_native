import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
  form: {
    alignItems: 'center',
    textAlign: 'center'
  },
    input: {
      width: '100%',
      borderRadius: 5,
      paddingVertical: 19,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      marginBottom: 20
    },
    button: {
      borderRadius: 5,
      backgroundColor: '#4F52D7',
      paddingVertical: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      justifyContent: "center",
      width: 132
    },
    textButton: {
      color: '#fff',
      fontSize: 20,
      fontWeight: '500'
    },
    link: {
      marginTop: 40,
      color: '#4F52D7',
      fontSize: 12
    }
})

export default styles;