import React,{useState} from 'react';
import {db} from '../firebase';
import {addDoc,collection,serverTimestamp} from 'firebase/firestore';

export default function LoanForm(){
  const [borrower,setBorrower]=useState('');
  const [principal,setPrincipal]=useState('');

  const submit=async(e)=>{
    e.preventDefault();
    await addDoc(collection(db,'loans'),{
      borrowerName:borrower,
      principal:Number(principal),
      createdAt:serverTimestamp()
    });
    setBorrower(''); setPrincipal('');
  };

  return (
    <form onSubmit={submit} className="p-4 bg-white shadow rounded mb-4">
      <input className="border p-2 mr-2" placeholder="Borrower" value={borrower} onChange={e=>setBorrower(e.target.value)}/>
      <input className="border p-2 mr-2" placeholder="Principal" value={principal} onChange={e=>setPrincipal(e.target.value)}/>
      <button className="bg-blue-600 text-white p-2 rounded">Add Loan</button>
    </form>
  );
}