import React, { ChangeEvent, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object().shape({
  productName: Yup.string().required("Product Name is required"),
  amount: Yup.number().required("Amount is required"),
  quantity: Yup.number().required("Quantity is required"),
});

const Modal: React.FC<{ onSubmitItem: (_0: any) => void }> = (props) => {
  const { onSubmitItem } = props;
  const [total, setTotal] = useState<number>(0);
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState, getValues } =
    useForm(formOptions);
  const { errors } = formState;

  const onSubmit = (data: any) => {
    onSubmitItem({ ...data, total: total });
    reset();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [amount, qty] = getValues(["amount", "quantity"]);
    setTotal(amount * qty);
  };

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-opacity-50 bg-gray-500 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-1/2 p-4"
          >
            <div className="bg-white px-4 pb-4 pt-5 flex flex-col gap-10 min-w-full text-gray-500 font-medium text-xl">
              Add Item
            </div>
            <div className="bg-white px-4 pb-4 pt-5 flex flex-col gap-10 min-w-full">
              <div className="flex w-full flex-col ">
                <label
                  htmlFor="product-name"
                  className="block text-sm font-medium leading-6 text-gray-900 text-gray-500"
                >
                  Product Name
                </label>
                <div className="mt-2">
                  <input
                    id="product-name"
                    autoComplete="name"
                    {...register("productName")}
                    name="productName"
                    className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900 ${
                      errors.productName ? "border-red-500 bg-white" : ""
                    }`}
                  />
                  {errors.productName && (
                    <p className="text-red-500 text-xs italic">
                      {errors.productName.message?.toString()}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-10">
                <div className="flex flex-col ">
                  <label
                    htmlFor="product-name"
                    className="block text-sm font-medium leading-6 text-gray-900 text-gray-500"
                  >
                    Amount
                  </label>
                  <div className="mt-2">
                    <input
                      id="product-name"
                      autoComplete="name"
                      {...register("amount", {
                        onChange: onChange,
                        onBlur: onChange,
                      })}
                      name="amount"
                      className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900 ${
                        errors.amount ? "border-red-500 bg-white" : ""
                      }`}
                    />
                    {errors.amount && (
                      <p className="text-red-500 text-xs italic">
                        {errors.amount.message?.toString()}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex  flex-col ">
                  <label
                    htmlFor="product-name"
                    className="block text-sm font-medium leading-6 text-gray-900 text-gray-500"
                  >
                    Quantity
                  </label>
                  <div className="mt-2">
                    <input
                      id="product-name"
                      autoComplete="name"
                      {...register("quantity", {
                        onChange: onChange,
                        onBlur: onChange,
                      })}
                      name="quantity"
                      className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900 ${
                        errors.quantity ? "border-red-500 bg-white" : ""
                      }`}
                    />
                    {errors.quantity && (
                      <p className="text-red-500 text-xs italic">
                        {errors.quantity.message?.toString()}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex  flex-col ">
                <label
                  htmlFor="total"
                  className="block text-sm font-medium leading-6 text-gray-900 text-gray-500"
                >
                  Total
                </label>
                <div className="mt-2">
                  <p className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900">
                    {total}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 justify-end flex gap-10">
              <button
                type="button"
                className="inline-flex justify-center rounded-md bg-white px-8 py-1  font-semibold text-gray-500 shadow-sm "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border-2 border-gray-200  bg-green-800   hover:bg-green-900 px-8 py-1 font-semibold  text-white shadow-sm"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
