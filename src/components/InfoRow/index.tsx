import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./styles";

type MaterialIconName = keyof typeof MaterialIcons.glyphMap;

type Props = {
    icon: MaterialIconName;
    label: string;
    value: string;
    style?: StyleProp<ViewStyle>;
};

export function InfoRow({ icon, label, value, style }: Props) {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.labelIconContainer}>
                <MaterialIcons name={icon} size={24} style={styles.icon} />
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    );
}
