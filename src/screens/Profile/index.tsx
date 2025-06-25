import React, { useState, useCallback } from "react";
import { View, Text, SafeAreaView, Alert, ScrollView } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";
import { ProfileImagePicker } from "../../components/ProfileImagePicker";
import { Button } from "../../components/Button";
import { InfoRow } from "../../components/InfoRow";
import { Footer } from "../../components/Footer";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";
import { UserData } from "../../navigation/types";

type Props = StackScreenProps<RootStackParamList, "Profile">;

export function Profile({ navigation }: Props) {
    const [userData, setUserData] = useState<UserData | null>(null);

    const handleEdit = () => {
        if (userData) {
            navigation.navigate("SignUp", userData);
        }
    };

    const handleLogOut = async () => {
        try {
            await AsyncStorage.removeItem("@userProfile");

            navigation.reset({
                index: 0,
                routes: [{ name: "SignUp" }],
            });
        } catch (error) {
            Alert.alert("Error", "Could not logout"); // Seria hilário
        }
    };

    useFocusEffect(
        useCallback(() => {
            const loadProfileData = async () => {
                try {
                    const data = await AsyncStorage.getItem("@userProfile");
                    if (data) {
                        setUserData(JSON.parse(data));
                    }
                } catch (error) {
                    Alert.alert(
                        "Loading error",
                        "Could not load the profile data."
                    );
                    console.error(error);
                }
            };

            loadProfileData();
        }, [])
    );

    if (!userData) {
        return <SafeAreaView style={styles.container} />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ProfileImagePicker
                    label={userData.name}
                    imageUri={userData.imageUri}
                    email={userData.email}
                />
                <Text style={styles.title}>Account Information</Text>
                <View style={styles.detailsContainer}>
                    <InfoRow
                        icon="email"
                        label="Email"
                        value={userData.email}
                    />
                    <InfoRow icon="lock" label="Password" value="********" />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Log Out"
                        variant="secondary"
                        onPress={handleLogOut}
                    />
                    <Button
                        title="Edit Profile"
                        variant="primary"
                        onPress={handleEdit}
                    />
                </View>
            </ScrollView>
            <Footer />
        </SafeAreaView>
    );
}
