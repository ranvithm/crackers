import React, { useEffect, useState } from "react";
import ClientInfo from "@/layout/client";
import ProductList from "@/layout/prodList";
import Modal from "@/layout/modal";
import dynamic from "next/dynamic";

const PDF = dynamic(import("@/layout/pdf/pdf"), { ssr: false });

const Home: React.FC = () => {
  const [view, setView] = useState<string>("client");
  const [client, setClient] = useState<any>();
  const [items, setItems] = useState<any[]>([]);
  const [showModal, setModal] = useState<boolean>(false);
  const [total, setTotal] = useState<number>(0);
  const [gst, setGST] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(0);

  useEffect(() => {
    if (items?.length > 0) {
      const _total = items.reduce((t, a) => (t = t + a.total), 0);
      setSubTotal(_total);
      setGST(_total * 0.18);
      setTotal(_total * 0.18 + _total);
    } else {
      setTotal(0);
      setSubTotal(0);
    }
  }, [items]);

  const onSubmitClient = (data: any) => {
    setView("list");
    setClient(data);
  };

  const onSubmitItem = (data: any) => {
    setItems([...items, data]);
    setModal(!1);
  };

  const toggleModal = (val: boolean) => {
    setModal(val);
  };

  return (
    <main className="flex min-h-screen flex-col items-center m-auto pdf-view">
      {view === "client" && <ClientInfo onSubmitClient={onSubmitClient} />}
      {view === "list" && (
        <ProductList
          toggleModal={toggleModal}
          list={items}
          total={total}
          gst={gst}
          subTotal={subTotal}
          onSubmitData={() => setView("pdf")}
        />
      )}
      {showModal && <Modal onSubmitItem={onSubmitItem} />}
      {view === "pdf" && (
        <PDF
          client={client}
          list={items}
          total={total}
          gst={gst}
          subTotal={subTotal}
        />
      )}
    </main>
  );
};

export default Home;
