import { Font, Text, View, StyleSheet } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  views: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 150,
    padding: 10,
    fontWeight: 100,
  },
  panel: {
    display: "flex",
    gap: 10,
    flex: 1,
  },
  panelTitle: {
    color: "#1e3a8a",
    fontWeight: 500
  },
  panelBody: {
    paddingLeft: 10,
    display: "flex",
    gap: 5,
  },
  panelText: {
    fontSize: 11,
    fontWeight: 100,
  },
});
const Invoice: React.FC<{ client: any }> = (props) => {
  const {
    client: { firstName, lastName, email, address, city, pinCode, state },
  } = props;
  return (
    <View style={styles.views}>
      <View style={styles.panel}>
        <View style={styles.panelTitle}>
          <Text>INVOICE TO:</Text>
        </View>
        <View style={[styles.panelBody, styles.panelText]}>
          <Text>{`${firstName} ${lastName}`}</Text>
          <Text>{address}</Text>
          <Text>{city}</Text>
          <Text>
            {state} - {pinCode}
          </Text>
          <Text>9876543210</Text>
          <Text>{email}</Text>
        </View>
      </View>
      <View style={styles.panel}>
        <View style={styles.panelTitle}>
          <Text>INVOICE FROM:</Text>
        </View>
        <View style={[styles.panelBody, styles.panelText]}>
          <Text>INDHIRAN CRACKERS</Text>
          <Text>Maraneri, Sivakasi</Text>
          <Text>Virudhunagar</Text>
          <Text>TamilNadu - 626124</Text>
          <Text>9876543210</Text>
          <Text>ameen@crackers.com</Text>
        </View>
      </View>
    </View>
  );
};

export default Invoice;
