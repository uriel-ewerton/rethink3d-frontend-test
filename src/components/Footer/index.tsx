import React from "react";
import { View, Text, TouchableOpacity, Linking, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";

import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type FooterNavigationProp = StackNavigationProp<RootStackParamList>;

export function Footer() {
    const navigation = useNavigation<FooterNavigationProp>();

    return (
        <View style={styles.footerContainer}>
            <View style={styles.socialContainer}>
                <TouchableOpacity
                    style={styles.iconButton}
                    onPress={() => {
                        if (navigation.canGoBack()){
                            navigation.goBack();
                        }
                    }}
                >
                    <MaterialIcons name="home" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.footerText}>Home</Text>
            </View>
            <View style={styles.socialContainer}>
                <TouchableOpacity
                    style={styles.iconButton}
                >
                    <MaterialIcons name="web-stories" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.footerText}>Posts</Text>
            </View>
            <View style={styles.socialContainer}>
                <TouchableOpacity
                    style={styles.iconButton}
                >
                    <MaterialIcons name="settings" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.footerText}>Settings</Text>
            </View>
        </View>
    );
}
