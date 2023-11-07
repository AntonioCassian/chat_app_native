import { StyleSheet } from "react-native";

const styles =  StyleSheet.create({
  container: {
    paddingHorizontal: 10, 
  },
  article: {
    position: 'relative',
    height: '100%'
  },
  containerRight: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 10
  },
  message: {
    padding: 10,
    width: '50%',
    borderRadius: 5,
    textAlignVertical: 'center',
    backgroundColor: '#f2f2ff',
  },
  containerLeft: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10
  },
  messaget: {
    padding: 10,
    width: '50%',
    borderRadius: 5,
    textAlignVertical: 'center',
    backgroundColor: '#0CCDE7',
  },
  area_input: {
    padding: 5,
    backgroundColor: '#C7E4E4',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: 'auto',
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 25
  },
  ic_input: {
    flexDirection: 'row',
    gap: 15,
    justifyContent: 'space-between'
  },
  ic: {
    position:'absolute',
    top: 5,
    bottom: 5,
    right: 2
  }
})

export default styles;