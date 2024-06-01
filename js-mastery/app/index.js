import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World!</Text>
      <Text style={styles.text}>Learning things</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },
  text: {
    color: '#fff',
  }
})

export default Home