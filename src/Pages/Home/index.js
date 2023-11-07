import React from "react";
import { TextInput, TouchableOpacity, View, Text, FlatList } from "react-native";
import styles from "./styles";

import Contact from "../../components/Contact";
const DATA = [
    {
        id: '1',
        title: 'First Item',
        
    },
    {
        id: '2',
        title: 'Second Item',
        descript: 'lorem inpsun tralálá'
    },
    {
        id: '3',
        title: 'Third Item',
        descript: 'lorem inpsun tralálá'
    },
];
export default function Home() {   

    return (

        <FlatList
            data={DATA}
            renderItem={({ item }) => <Contact title={item.title}  descript={item.descript} />}
            keyExtractor={item => item.id}>
        </FlatList>
    )
}