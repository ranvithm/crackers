import React, { useState } from "react";
import ClientInfo from "@/layout/client";
import ProductList from "@/layout/prodList";
import Modal from "@/layout/modal";

const Home: React.FC = () => {
  const [view, setView] = useState<string>("client");
  const [items, setItems] = useState<any[]>([]);
  const [showModal, setModal] = useState<boolean>(false);

  const onSubmitClient = (data: any) => {
    setView("list");
  };

  const onSubmitItem = (data: any) => {
    setItems([...items, data]);
    setModal(!1);
  };

  const toggleModal = (val: boolean) => {
    setModal(val);
  };

  return (
    <main className="flex min-h-screen flex-col items-center w-3/4 m-auto">
      {view === "client" && <ClientInfo onSubmitClient={onSubmitClient} />};
      {view === "list" && (
        <ProductList
          toggleModal={toggleModal}
          list={items}
          onSubmitData={() => setView("pdf")}
        />
      )}
      {showModal && <Modal onSubmitItem={onSubmitItem} />}
    </main>
  );
};

export default Home;
