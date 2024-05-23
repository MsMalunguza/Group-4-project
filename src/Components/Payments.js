import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";

const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("airtel_money");
  const [amount, setAmount] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [message, setMessage] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();

    const data = {
      payment_method: paymentMethod,
      amount: amount,
      phone_number: phoneNumber,
      account_number: accountNumber,
    };

    try {
      const response = await axios.post("/pay", data);
      setMessage(`Payment successful: ${response.data.status}`);
    } catch (error) {
      setMessage(`Payment failed: ${error.response.data.error}`);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="max-w-md mx-auto mt-10 align-items-center">
        <h2 className="text-2xl font-bold mb-6">Make a Payment</h2>
        <form
          onSubmit={handlePayment}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg font-bold mb-2"
              htmlFor="paymentMethod"
            >
              Payment Method
            </label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="shadow appearance-none border rounded w-full font-bold py-2 px-3 text-white-500 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="airtel_money">Airtel Money</option>
              <option value="mpamba">Mpamba</option>
              <option value="nbm">National Bank of Malawi</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-lg  font-bold mb-2"
              htmlFor="amount"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          {(paymentMethod === "airtel_money" || paymentMethod === "mpamba") && (
            <div className="mb-4">
              <label
                className="block text-gray-700 text-lg font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          )}

          {paymentMethod === "nbm" && (
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="accountNumber"
              >
                Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          )}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-blue-500 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Pay
            </button>
          </div>
        </form>
        {message && <p className="text-red-500 text-xs italic">{message}</p>}
      </div>
      <Footer></Footer>
    </>
  );
};

export default PaymentForm;
