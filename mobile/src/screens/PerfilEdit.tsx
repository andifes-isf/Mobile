import { StyleSheet, Text, View } from 'react-native';

export default function PerfilEdit() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PerfilEdit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 22,
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});
