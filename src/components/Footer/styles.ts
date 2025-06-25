import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'column',
    marginTop: 10,
  },
  iconButton: {
    marginHorizontal: 15,
  },
});