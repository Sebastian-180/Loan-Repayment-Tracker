import React, { useState } from "react";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/";

export default function PaymentForm({ loanId, onPaymentAdded }) {
  const [amount, setAmount] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "payments"), {
      loanId,
      amount: Number(amount),
      createdAt: serverTimestamp(),
    });
    setAmount("");
    if (onPaymentAdded) onPaymentAdded();
  };

  return (
    <form onSubmit={submit} className="mt-2">
      <input
        className="p-1 mr-2 border"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="p-1 text-white bg-green-600 rounded">Pay</button>
    </form>
  );
}
