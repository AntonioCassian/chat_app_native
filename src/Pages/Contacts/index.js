import { View, FlatList, ScrollView } from "react-native";
import Contact from "../../components/Contact";

export default function Contacts() {
    const DATA = [
        {
            id: '1',
            title: 'First Item',

        },
        {
            id: '2',
            title: 'Second Item',
        },
        {
            id: '4',
            title: 'Third Item',
        },
        {
            id: '5',
            title: 'Third Item',
        },
        {
            id: '6',
            title: 'Third Item',
        },
        {
            id: '7',
            title: 'Third Item',
        },
        {
            id: '8',
            title: 'Third Item',
        },
    ];

    return (
        
            <ScrollView showsVerticalScrollIndicator={false}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Contact title={item.title} />}
                    keyExtractor={item => item.id}
                >
                </FlatList>

            </ScrollView>
      
    )
}