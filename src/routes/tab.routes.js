import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Fontisto } from '@expo/vector-icons';

import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: '#334155',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#fff',
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#3B82F6',

          flexDirection: 'row',
          justifyContent: 'space-between',
          alignContent: 'space-between',

          paddingHorizontal: 20,
          paddingBottom: 10,
          paddingTop: 10,

          height: 70,
          elevation: 0,

          borderTopRightRadius: 20,
          borderTopLeftRadius: 20
        }
      }
      }>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color, focused }) => {
            if (focused) {
              <MaterialCommunityIcons name="message-processing" size={35} color='white' />
            }

            return <MaterialCommunityIcons name="message-processing-outline" size={size} color='white' />
          },
          tabBarLabel: 'Conversas',
          tabBarLabelStyle: {
            fontSize: 14,
          },

        }}
      />

      <Tab.Screen
        name="contacts"
        component={Contacts}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              <Fontisto name="persons" size={25} />
            }
            return <Fontisto name="persons" size={25} color='#fff' />
          },
          tabBarLabel: 'Contatos',
          tabBarLabelStyle: {
            fontSize: 14,
          }
        }}
      />
    </Tab.Navigator>
  )
}
