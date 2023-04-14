import valueInWords from "@/utils/to-words";
import React, { useEffect, useState } from "react";

const ProductList: React.FC<{
  list: any[];
  toggleModal: (_0: boolean) => void;
  onSubmitData: () => void;
}> = (props) => {
  const { list, toggleModal, onSubmitData } = props;
  const [total, setTotal] = useState<number>(0);
  const [gst, setGST] = useState<number>(0);
  const [subTotal, setSubTotal] = useState<number>(0);

  useEffect(() => {
    if (list?.length > 0) {
      const _total = list.reduce((t, a) => (t = t + a.total), 0);
      setSubTotal(_total);
      setGST(_total * 0.18);
      setTotal(_total * 0.18 + _total);
    } else {
      setTotal(0);
      setSubTotal(0);
    }
  }, [list]);

  return (
    <div className="min-w-full relative rounded-xl overflow-auto">
      <div className="p-2 flex justify-end">
        <button
          onClick={() => toggleModal(!0)}
          className="rounded-md shadow bg-blue-900 py-2 px-8 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
        >
          Add
        </button>
      </div>
      <div className="px-4 pb-8 pt-4 ">
        <table className="border-separate w-full border border-blue-400  bg-white  text-base shadow-sm">
          <thead className="bg-slate-50 ">
            <tr className="text-lg">
              <th className="w-1 border border-slate-300 bg-blue-900  font-semibold p-4 text-white  text-center">
                #
              </th>
              <th className="w-2/3 border border-slate-300 bg-blue-900  font-semibold p-4 text-white  text-left">
                PARTICULARS
              </th>
              <th className="w-1/3 border border-slate-300 bg-blue-900  font-semibold p-4 text-white  text-left">
                Price
              </th>
              <th className="w-1/3 border border-slate-300 bg-blue-900  font-semibold p-4 text-white  text-left">
                Quantity.
              </th>
              <th className="w-1/3 border border-slate-300 bg-blue-900  font-semibold p-4 text-white  text-left">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((li, i) => (
              <tr key={`items-${i}`}>
                <td className="border border-slate-300  p-4 text-slate-500 ">
                  {i}
                </td>
                <td className="border border-slate-300  p-4 text-slate-500 ">
                  {li.productName}
                </td>
                <td className="border border-slate-300  p-4 text-slate-500 ">
                  {li.amount}
                </td>
                <td className="border border-slate-300  p-4 text-slate-500 ">
                  {li.quantity}
                </td>
                <td className="border border-slate-300  p-4 text-slate-500 ">
                  {li.total}
                </td>
              </tr>
            ))}
            <tr>
              <td
                colSpan={4}
                className="border border-slate-300 text-right p-4 text-slate-500"
              >
                Sub Total
              </td>
              <td className="border border-slate-300  p-4 text-slate-500">
                {subTotal}
              </td>
            </tr>
            <tr>
              <td
                colSpan={4}
                className="border border-slate-300 text-right p-4 text-slate-500"
              >
                GST (18%)
              </td>
              <td className="border border-slate-300  p-4 text-slate-500">
                {gst}
              </td>
            </tr>
            <tr>
              <td
                colSpan={3}
                className="border border-slate-300 text-center text-lg font-medium p-4 text-slate-500 capitalize"
              >
                {valueInWords(total)} rupees only
              </td>
              <td className="border border-slate-300 text-right p-4 text-slate-500">
                Total
              </td>
              <td className="border border-slate-300  p-4 text-slate-500">
                {total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-2 flex justify-end">
        <button
          onClick={onSubmitData}
          className="rounded-md shadow bg-green-900 py-2 px-8 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProductList;
