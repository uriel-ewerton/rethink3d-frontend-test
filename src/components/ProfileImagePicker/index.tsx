import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { styles } from './styles';

type Props = {
  imageUri?: string | null;
  label: string;
  onPress?: () => void;
  email?: string | null;
};

export function ProfileImagePicker({ imageUri, label, email, onPress }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={onPress} disabled={!onPress}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <MaterialIcons name="person" size={40} color="#ccc" />
          </View>
        )}
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
}