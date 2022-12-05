import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Texto({ children, style }) {
  let styleText = styles.text;
  if (style?.fontWeight === 'normal') {
    styleText = styles.textNegrit
  }
  return (
    <Text style={[style, styleText]}>{ children }</Text>
  )
}
const styles = StyleSheet.create({
  text: {
    fontFamily: "Inter",
    fontWeight: 'normal'
  },
  textNegrit: {
    fontFamily: "InterRegular",
    fontWeight: 'normal'
  }
})