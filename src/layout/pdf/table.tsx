import valueInWords from "@/utils/to-words";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import React from "react";

const styles = StyleSheet.create({
  table: {
    display: "flex",
    padding: 2,
    margin: 10,
    gap: 2,
    border: "1px solid #cbd5e1",
  },
  tableRow: {
    height: 40,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: 2,
  },
  colNum: {
    flex: "0 0 50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  colItem: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    paddingLeft: 10,
  },
  colPrice: {
    flex: "0 0 150px",
    display: "flex",
    justifyContent: "center",
    paddingLeft: 10,
    alignItems: "center",
  },
  colTotal: {
    flex: "0 0 100px",
    display: "flex",
    justifyContent: "center",
    paddingLeft: 10,
    alignItems: "center",
  },
  colBorder: {
    border: "1px solid #cbd5e1",
    height: "100%",
  },
  colHeader: {
    backgroundColor: "#1e3a8a",
    color: "#fff",
  },
});

const Table: React.FC<{
  list: any[];
  total: number;
  gst: number;
  subTotal: number;
}> = (props) => {
  const { list, total, gst, subTotal } = props;
  return (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        <View
          style={[
            styles.colNum,
            styles.colBorder,
            styles.colHeader,
            { alignItems: "center" },
          ]}
        >
          <Text>#</Text>
        </View>
        <View style={[styles.colItem, styles.colBorder, styles.colHeader]}>
          <Text>Particulars</Text>
        </View>
        <View style={[styles.colPrice, styles.colBorder, styles.colHeader]}>
          <Text>Price</Text>
        </View>
        <View style={[styles.colTotal, styles.colBorder, styles.colHeader]}>
          <Text>Quantity</Text>
        </View>
        <View style={[styles.colTotal, styles.colBorder, styles.colHeader]}>
          <Text>Total</Text>
        </View>
      </View>
      {list.map((li, i) => (
        <View key={`list-item${i}`} style={styles.tableRow}>
          <View style={[styles.colNum, styles.colBorder]}>
            <Text>1</Text>
          </View>
          <View style={[styles.colItem, styles.colBorder]}>
            <Text>{li.productName}</Text>
          </View>
          <View style={[styles.colPrice, styles.colBorder]}>
            <Text>{li.amount}</Text>
          </View>
          <View style={[styles.colTotal, styles.colBorder]}>
            <Text>{li.quantity}</Text>
          </View>
          <View style={[styles.colTotal, styles.colBorder]}>
            <Text>{li.total}</Text>
          </View>
        </View>
      ))}
      <View style={styles.tableRow}>
        <View
          style={[
            styles.colItem,
            styles.colBorder,
            { alignItems: "flex-end", paddingRight: 10 },
          ]}
        >
          <Text>Sub Total</Text>
        </View>
        <View style={[styles.colTotal, styles.colBorder]}>
          <Text>{subTotal}</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View
          style={[
            styles.colItem,
            styles.colBorder,
            { alignItems: "flex-end", paddingRight: 10 },
          ]}
        >
          <Text>GST (18%)</Text>
        </View>
        <View style={[styles.colTotal, styles.colBorder]}>
          <Text>{gst}</Text>
        </View>
      </View>
      <View style={styles.tableRow}>
        <View
          style={[styles.colItem, styles.colBorder, { alignItems: "center" }]}
        >
          <Text> {valueInWords(total)} rupees only </Text>
        </View>
        <View style={[styles.colTotal, styles.colBorder]}>
          <Text>Total</Text>
        </View>
        <View style={[styles.colTotal, styles.colBorder]}>
          <Text>{total}</Text>
        </View>
      </View>
    </View>
  );
};

export default Table;
