import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { SignUp } from "./src/screens/SignUp";
import { Profile } from "./src/screens/Profile";
import { RootStackParamList } from "./src/navigation/types";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
    const [initialRoute, setInitialRoute] = useState<keyof RootStackParamList | null>(null);

    useEffect(() => {
        const checkUserProfile = async () => {
            try {
                const userData = await AsyncStorage.getItem("@userProfile");
                if (userData !== null) {
                    // Usuário já existe, a rota inicial será o Perfil
                    setInitialRoute("Profile");
                } else {
                    // Usuário não existe, a rota inicial será o Cadastro
                    setInitialRoute("SignUp");
                }
            } catch (e) {
                console.error("Failed to fetch user profile.", e);
                setInitialRoute("SignUp");
            }
        };

        checkUserProfile();
    }, []);

    if (initialRoute === null) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <>
            <StatusBar style="auto" />
            <NavigationContainer>
                <Stack.Navigator initialRouteName={initialRoute}>
                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                        options={{
                            title: "Create Account",
                            headerTitleAlign: "center",
                        }}
                    />
                    <Stack.Screen
                        name="Profile"
                        component={Profile}
                        options={{
                            title: "Profile",
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
