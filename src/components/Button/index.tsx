import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { getVariantStyles } from "./styles";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    variant?: ButtonVariant; 
}

export function Button({ title, variant = "primary", ...rest }: ButtonProps) {
    const { containerStyle, titleStyle } = getVariantStyles(
        variant,
        rest.disabled
    );

    return (
        <TouchableOpacity style={containerStyle} {...rest}>
            <Text style={titleStyle}>{title}</Text>
        </TouchableOpacity>
    );
}
