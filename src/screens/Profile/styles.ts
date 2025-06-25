import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    title: {
        fontSize: 22,
        flexDirection: "row",
        fontWeight: "bold",
        textAlign: 'justify',
        marginBottom: 30,
        color: "#333",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 15,
        padding: 5,
        height: 60,
        gap: 10,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    detailsContainer: {
      marginTop: -40,
    }
});
