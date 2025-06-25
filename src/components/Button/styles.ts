import { StyleSheet } from "react-native";

// Estilos base 
const baseContainer = {
    width: "50%",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
} as const; 

const baseTitle = {
    fontSize: 16,
    fontWeight: "bold",
} as const;

// Estilos específicos para cada variante
export const styles = StyleSheet.create({
    containerPrimary: {
        ...baseContainer,
        backgroundColor: "black",
    },
    titlePrimary: {
        ...baseTitle,
        color: "#FFFFFF",
    },
    containerSecondary: {
        ...baseContainer,
        backgroundColor: "#F8F9FA", 
        borderWidth: 1,
        borderColor: "#6C757D",
    },
    titleSecondary: {
        ...baseTitle,
        color: "#6C757D", 
    },
    containerDisabled: {
        ...baseContainer,
        backgroundColor: "#E9ECEF", 
        borderColor: "#CED4DA",
        borderWidth: 1,
    },
    titleDisabled: {
        ...baseTitle,
        color: "#ADB5BD",
    },
});

// Função que retorna o conjunto de estilos correto
export function getVariantStyles(
    variant: "primary" | "secondary",
    disabled?: boolean | null
) {
    if (disabled) {
        return {
            containerStyle: styles.containerDisabled,
            titleStyle: styles.titleDisabled,
        };
    }

    switch (variant) {
        case "primary":
            return {
                containerStyle: styles.containerPrimary,
                titleStyle: styles.titlePrimary,
            };
        case "secondary":
            return {
                containerStyle: styles.containerSecondary,
                titleStyle: styles.titleSecondary,
            };
        default:
            return {
                containerStyle: styles.containerPrimary,
                titleStyle: styles.titlePrimary,
            };
    }
}
