import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import Texto from '../../../components/Texto'
export default function Detalhes({ name, logoFarm, nameFarm, description, price, button, pegarDadosFilho }) {

  return (
    <>
      <Texto style={styles.name}>{ name }</Texto>
      <View style={styles.farm}>
        <Image source={logoFarm} style={styles.logoFarm} />
        <Texto style={styles.nameFarm}>{nameFarm}</Texto>
      </View>
      <Texto style={styles.description}>{ description }</Texto>
      <Texto style={styles.price}>{price}</Texto>
      <TouchableOpacity style={styles.button} onPress={() => {
        pegarDadosFilho('Manoel')
      }}>
        <Texto style={styles.textButton}>{button}</Texto>
      </TouchableOpacity>
    </>
  )
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
  name: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  farm: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12
  },
  logoFarm: {
    width: 32,
    height: 32
  },
  nameFarm: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: 'Inter'
  },
  description: {
    color: "#a3a3a3",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'normal'
  },
  price: {
    color: "#2a9f85",
    fontSize: 26,
    lineHeight: 26,
    fontWeight: "bold",
    marginTop: 8
  },
  button: {
    marginTop: 16,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textButton: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  }

})