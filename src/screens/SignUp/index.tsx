import React, { useState } from "react";
import {
    View,
    SafeAreaView,
    Alert,
    ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/types";

import { styles } from "./styles";
import { Button } from "../../components/Button";
import { ProfileImagePicker } from "../../components/ProfileImagePicker";
import { FormField } from "../../components/FormField";

type Props = StackScreenProps<RootStackParamList, "SignUp">;

export function SignUp({ navigation, route }: Props) {
    const params = route.params;

    const [imageUri, setImageUri] = useState<string | null>(
        params?.imageUri || null
    );
    const [name, setName] = useState(params?.name || "");
    const [email, setEmail] = useState(params?.email || "");
    const [password, setPassword] = useState(params?.password || "");

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const [isSaving, setIsSaving] = useState(false);

    const handleImagePick = async () => {
        const { status } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
            Alert.alert(
                "Permissão necessária",
                "Precisamos de acesso à sua galeria para selecionar uma foto."
            );
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: "images",
            allowsEditing: true,
            aspect: [1, 1], // Força um corte quadrado
            quality: 1,
        });

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        }
    };

    const handleRegister = async () => {
        const newErrors: { [key: string]: string } = {};

        if (!name.trim()) newErrors.name = "Mandatory field.";
        if (!email.trim()) newErrors.email = "Mandatory field.";
        if (password.length < 8)
            newErrors.password = "Must be at least 8 characters";
        if (!imageUri) newErrors.imageUri = "Profile picture is required";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            if (newErrors.imageUri) Alert.alert("Error", newErrors.imageUri);
            return;
        }

        const userData = { name, email, imageUri, password };

        try {
            setIsSaving(true);
            // Salva os dados no AsyncStorage como uma string JSON
            await AsyncStorage.setItem(
                "@userProfile",
                JSON.stringify(userData)
            );
            navigation.navigate("Profile");
        } catch (error) {
            Alert.alert("Error", "Could not save the profile data.");
            console.error(error);
        } finally{
            setIsSaving(false);
        }
    };

    const clearRegister = async () => {
        setName("");
        setEmail("");
        setPassword("");
        setImageUri(null);
        setErrors({});
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <ProfileImagePicker
                    label="Profile Image"
                    imageUri={imageUri}
                    onPress={handleImagePick}
                />
                <FormField
                    label="Full Name"
                    placeholder="Enter your name"
                    value={name}
                    onChangeText={setName}
                    error={errors.name}
                />
                <FormField
                    label="Email"
                    placeholder="Enter your email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                    error={errors.email}
                />
                <FormField
                    label="Password"
                    placeholder="Create a password"
                    value={password}
                    onChangeText={setPassword}
                    error={errors.password}
                    secureTextEntry={true}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="Cancel"
                        variant="secondary"
                        onPress={clearRegister}
                    />
                    <Button
                        title={isSaving ? "Registering..." : "Register"}
                        variant="primary"
                        disabled={isSaving}
                        onPress={handleRegister}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
