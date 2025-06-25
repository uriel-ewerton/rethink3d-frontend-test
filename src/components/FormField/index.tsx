import React from 'react';
import { View, Text, TextInput, TextInputProps, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

interface FormFieldProps extends TextInputProps {
  label: string;
  error?: string | null;
  style?: StyleProp<ViewStyle>;
}

export function FormField({ label, error, ...rest }: FormFieldProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, error && styles.inputError]} 
        placeholderTextColor="#999"
        {...rest} 
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}