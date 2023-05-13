import { Text, View, StyleSheet } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  views: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 100,
    padding: 10,
    fontWeight: 100,
  },
  panel: {
    display: "flex",
    gap: 10,
    flex: 1,
  },
  panelTitle: {
    color: "#1976d2",
  },
  panelBody: {
    paddingLeft: 10,
    display: "flex",
    gap: 5,
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
        <View style={styles.panelBody}>
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
        <View style={styles.panelBody}>
          <Text>INDHIRAN CRACKERS</Text>
          <Text>MARANERI – 626124</Text>
          <Text>9876543210</Text>
          <Text>ameen@crackers.com</Text>
        </View>
      </View>
    </View>
  );
};

export default Invoice;
