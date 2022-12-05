import React from 'react';
import { Image, StyleSheet, Dimensions } from 'react-native';
import topo from '../../../../assets/topo.png'
import Texto from '../../../components/Texto'
const width = Dimensions.get('screen').width
export default function Topo({title}) {

  return (
    <>
      <Image source={topo} style={styles.topo} />
      <Texto style={styles.title}> {title} </Texto>
    </>
  )
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578 / 768 * width,
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    color: "white",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
    padding: 16
  },
})