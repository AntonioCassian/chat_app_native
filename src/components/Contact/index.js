import React, { Fragment } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from './styles'
import { useNavigation } from "@react-navigation/native";



export default function Contact({ title, descript }) {
  const navigation = useNavigation();
  
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Chat')}
        style={styles.contact}>
        <View style={styles.image}>
          <FontAwesome name="user-circle-o" size={50} color="black" />
        </View>
        <View style={styles.messageContact}>
          <Text style={styles.nameContact}>{title}</Text>
          {descript && (
            <Text style={styles.nameMessage} ellipsizeMode="tail" numberOfLines={1}>{descript}</Text>
          )}
        </View>
      </TouchableOpacity>

    </View>
  )
}