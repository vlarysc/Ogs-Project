/*import { StatusBar } from 'expo-status-bar';*/
import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/views/Cesta'
import mock from './src/mocks/cesta'
export default function App() {
  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta {...mock} />      
    </SafeAreaView>
  );
}


