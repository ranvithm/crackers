import {
  Page,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import Header from "./header";
import Invoice from "./invoice";
import Table from "./table";
import React from "react";

const styles = StyleSheet.create({
  pageWraper: {
    backgroundColor: "#fff",
    fontSize: 12,
    padding: 16,
  },
  page: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
});

const PdfLayout: React.FC<{ client: any; list: any[] }> = (props) => {
  const { client, list } = props;
  return (
    <PDFViewer>
      <Document>
        <Page size="A4" style={[styles.pageWraper, {}]}>
          <View style={styles.page}>
            <Header />
            <Invoice client={client} />
            <Table list={list} />
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default PdfLayout;
