import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    height: "80px",
    backgroundColor: "#1e3a8a",
    color: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  logMenu: {
    flex: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#000",
    paddingLeft: 20,
    gap: "10",
    borderRadius: 0,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100,
  },
  invoice: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    height: "100%",
    gap: 5,
    justifyContent: "center",
  },
  image: {
    height: 70,
    width: 200,
  },
});

const Header = () => (
  <View style={styles.header}>
    <View style={styles.logMenu}>
      <Image style={styles.image} src="logo.png" />
    </View>
    <View style={styles.invoice}>
      <Text>INVOICE</Text>
      <Text>Invoice Number: #001</Text>
      <Text>Invoice Date: 08-APR-2023</Text>
    </View>
  </View>
);

export default Header;
