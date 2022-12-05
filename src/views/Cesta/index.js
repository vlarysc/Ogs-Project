import React from 'react';
import { ScrollView, StyleSheet, View, FlatList } from 'react-native';
import { useFonts, Inter_900Black, Inter_400Regular } from '@expo-google-fonts/inter';
import Topo from './components/Topo'
import Detalhes from './components/Detalhes'
import AppLoading from 'expo-app-loading'
import Item from './components/Item'
import Texto from '../../components/Texto'

export default function Cesta({ top, details, itens }) {
  let [fontsLoaded] = useFonts({
    "Inter":Inter_900Black,
    "InterRegular": Inter_400Regular,
  });
  function pegarDadosFilho(nome) {
    console.log(nome)
  }
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <>
    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => {
        return <>
          <Topo {...top} />
          <View style={styles.cesta}>
            <Detalhes {...details} pegarDadosFilho={pegarDadosFilho} />
        <Texto style={styles.title}>{itens.titulo}</Texto>
            {/*  <Item {...itens} />*/}
          </View>
        </>
      }}
    />    
    
  </>


}

const styles = StyleSheet.create({
  title: {
    color: "#464646",
    fontWeight: "bold",
    paddingBottom: 8,
    marginTop: 32,
    lineHeight: 32,
    fontSize: 20,
  },

    cesta: {
      paddingVertical: 8,
      paddingHorizontal: 16
  },
})