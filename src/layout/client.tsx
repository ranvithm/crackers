import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  pinCode: Yup.number()
    .required("Postal code is required")
    .min(100000, "Must be exactly 6 characters")
    .max(999999, "Must be exactly 6 characters")
    .label("Zip Code"),
});

const ClientInfo: React.FC<{ onSubmitClient: (_0: any) => void }> = (props) => {
  const { onSubmitClient } = props;
  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data: any) {
    onSubmitClient(data);
    reset();
  }

  const properties = {
    firstName: {
      type: "text",
      required: true,
      className: `bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900 ${
        errors.firstName ? "border-red-500 bg-white" : ""
      }`,
    },
    lastName: {
      type: "text",
      required: true,
      className: `bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900 ${
        errors.lastName ? "border-red-500 bg-white" : ""
      }`,
    },
    email: {
      type: "text",
      required: true,
      className: `bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900 ${
        errors.email ? "border-red-500 bg-white" : ""
      }`,
    },
    address: {
      type: "text",
      required: true,
      className: `bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900 ${
        errors.address ? "border-red-500 bg-white" : ""
      }`,
    },
    city: {
      type: "text",
      required: true,
      className: `bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900 ${
        errors.city ? "border-red-500 bg-white" : ""
      }`,
    },
    state: {
      type: "text",
      required: true,
      className: `bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900 ${
        errors.state ? "border-red-500 bg-white" : ""
      }`,
    },
    pinCode: {
      type: "text",
      required: true,
      className: `bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-900 ${
        errors.pinCode ? "border-red-500 bg-white" : ""
      }`,
    },
  };

  return (
    <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Client Information
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  {...register("firstName")}
                  autoComplete="first-name"
                  {...properties["firstName"]}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs italic">
                    {errors.firstName?.message?.toString()}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  {...properties["lastName"]}
                  {...register("lastName")}
                  id="last-name"
                  autoComplete="family-name"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs italic">
                    {errors.lastName?.message?.toString()}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...register("email")}
                  {...properties["email"]}
                  id="email"
                  type="email"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">
                    {errors.email?.message?.toString()}
                  </p>
                )}
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address
              </label>
              <div className="mt-2">
                <input
                  {...register("address")}
                  {...properties["address"]}
                  id="street-address"
                  autoComplete="street-address"
                />
                {errors.address && (
                  <p className="text-red-500 text-xs italic">
                    {errors.address?.message?.toString()}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  {...properties["city"]}
                  {...register("city")}
                  id="city"
                  autoComplete="address-level2"
                />
                {errors.city && (
                  <p className="text-red-500 text-xs italic">
                    {errors.city?.message?.toString()}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State
              </label>
              <div className="mt-2">
                <input
                  {...properties["state"]}
                  {...register("state")}
                  id="region"
                  autoComplete="address-level1"
                />
                {errors.state && (
                  <p className="text-red-500 text-xs italic">
                    {errors.state?.message?.toString()}
                  </p>
                )}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Postal code
              </label>
              <div className="mt-2">
                <input
                  {...properties["pinCode"]}
                  {...register("pinCode")}
                  id="pin-code"
                  autoComplete="postal-code"
                />
                {errors.pinCode && (
                  <p className="text-red-500 text-xs italic">
                    {errors.pinCode?.message?.toString()}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          className="rounded-md shadow bg-blue-900 py-2 px-8 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
        >
          Next
        </button>
      </div>
    </form>
  );
};

export default ClientInfo;
