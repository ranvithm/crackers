import {
  Font,
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import Header from "./header";
import Invoice from "./invoice";
import Table from "./table";
import React from "react";

Font.register({
  family: "Poppins",
  fonts: [
    {
      src: "https://fonts.gstatic.com/s/poppins/v20/pxiGyp8kv8JHgFVrLPTucXtAKPY.woff2",
      fontStyle: "normal",
      fontWeight: 100,
    },
    {
      src: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLDz8Z11lFc-K.woff2",
      fontStyle: "normal",
      fontWeight: 300,
    },
    {
      src: "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z11lFc-K.woff2",
      fontStyle: "normal",
      fontWeight: 500,
    },
  ],
});

const styles = StyleSheet.create({
  pageWraper: {
    backgroundColor: "#fff",
    fontSize: 12,
    padding: 16,
    fontFamily: "Poppins",
    fontWeight: 500,
  },
  page: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    padding: 2,
    border: "1px solid #cbd5e1",
  },
  quotes: {
    fontSize: 13,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#1e3a8a",
  },
  quoteQueries: {
    fontSize: 11,
    fontWeight: 300,
    padding: 10,
    display: "flex",
    border: "1px solid #cbd5e1",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1e3a8a",
    color: "#fff",
  },
});

const PdfLayout: React.FC<{
  client: any;
  list: any[];
  total: number;
  gst: number;
  subTotal: number;
}> = (props) => {
  const { client, list, total, gst, subTotal } = props;
  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={[styles.pageWraper, {}]}>
          <View style={styles.page}>
            <Header />
            <Invoice client={client} />
            <Table list={list} total={total} gst={gst} subTotal={subTotal} />
            <View style={styles.quotes}>
              <Text>Thanks For Your Business!</Text>
            </View>
            <View style={styles.quoteQueries}>
              <Text>For any enquiries, email us on </Text>
              <Text>ameen@crackers.com</Text>
              <Text> or call us on</Text>
              <Text> 9876543210</Text>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfLayout;
