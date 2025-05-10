import { StyleSheet, Text, View, Image } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image
      source={require('../../assets/images/phtome.jpg')}
      style={styles.avatar}
        />


      <Text style={styles.name}>Усик Никита Анатольевич</Text>
      <Text style={styles.group}>Группа: CS-202(c)</Text>
      <Text style={styles.email}>Email: dupeebasic@gmail.com</Text>
      <Text style={styles.info}>Хобби: Работа, автомобиль, игры</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  group: {
    fontSize: 18,
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    fontStyle: 'italic',
    marginBottom: 10,
    textAlign: 'center',
  },
  quote: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});
