import { View, Text, StyleSheet } from 'react-native';
import Header from '@/components/Header';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Header title="Detail List"/>
      <Text>Details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#FFF7F7'
  },
});
