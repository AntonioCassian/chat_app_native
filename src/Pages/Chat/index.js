import React, { Fragment } from "react";
import { TextInput, View, Text, ScrollView, Animated } from "react-native";
import styles from "./styles";
import { Entypo } from '@expo/vector-icons';

export default function Chat() {
    return (
        <Fragment>
            <View style={styles.container}>
                <ScrollView
                showsVerticalScrollIndicator={false}
                >
                    <View style={styles.article}>
                        <View style={styles.containerRight}>
                            <View style={styles.message}>
                                <Text>LoremSit ad aute occaecat in. Sit excepteur voluptate nulla reprehenderit.</Text>
                            </View>
                        </View>
                        <View style={styles.containerLeft}>
                            <View style={styles.messaget}>
                                <Text>LoremSit ad aute occaecat in. Sit excepteur voluptate nulla reprehenderit.</Text>
                            </View>
                        </View>
                        <View style={styles.containerLeft}>
                            <View style={styles.messaget}>
                                <Text>LoremSit ad aute occaecat in. Sit excepteur voluptate nulla reprehenderit.</Text>
                            </View>
                        </View>
                        <View style={styles.containerLeft}>
                            <View style={styles.messaget}>
                                <Text>LoremSit ad aute occaecat in. Sit excepteur voluptate nulla reprehenderit.</Text>
                            </View>
                        </View>
                        <View style={styles.containerRight}>
                            <View style={styles.message}>
                                <Text>LoremSit ad aute occaecat in. Sit excepteur voluptate nulla reprehenderit.</Text>
                            </View>
                        </View>
                        <View style={styles.containerRight}>
                            <View style={styles.message}>
                                <Text>LoremSit ad aute occaecat in. Sit excepteur voluptate nulla reprehenderit.</Text>
                            </View>
                        </View>
                        <View style={styles.containerRight}>
                            <View style={styles.message}>
                                <Text>LoremSit ad aute occaecat in. Sit excepteur voluptate nulla reprehenderit.</Text>
                            </View>
                        </View>
                        <View style={styles.containerRight}>
                            <View style={styles.message}>
                                <Text>LoremSit ad aute occaecat in. Sit excepteur voluptate nulla reprehenderit.</Text>
                            </View>
                        </View>
                        <View style={styles.containerRight}>
                            <View style={styles.message}>
                                <Text>LoremSit ad aute occaecat in. Sit excepteur voluptate nulla reprehenderit.</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.area_input}>
                    <View style={styles.ic_input}>
                        <TextInput
                            style={styles.input}
                            placeholder="type your message"
                        />
                        <Entypo style={styles.ic} name="direction" size={30} color="black" />
                    </View>
                </View>
            </View>
        </Fragment>
    )
}