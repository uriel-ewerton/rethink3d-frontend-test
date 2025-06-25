import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingVertical: 16,
    borderBottomWidth: 1, 
    borderBottomColor: '#eee',
  },
  labelIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelContainer: {
    width: "30%",
    alignItems: 'center',
  },
  icon: {
    color: '#555',
    marginRight: 15,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});