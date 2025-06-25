import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    imageContainer: {
        width: 80,
        height: 80,
        borderRadius: 40, 
        backgroundColor: "#f0f0f0",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 20,
        overflow: "hidden", 
    },
    image: {
        width: "100%",
        height: "100%",
    },
    placeholder: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e9ecef",
    },
    textContainer: {
        width: "70%",
    },
    label: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#333",
    },
    email: {
        fontSize: 16,
        fontWeight: "400",
        color: "#6f99a7",
    },
});
