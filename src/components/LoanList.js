import React,{useEffect,useState} from 'react';
import {db} from '../firebase';
import {getDocs,collection} from 'firebase/firestore';
import PaymentForm from './PaymentForm';

export default function LoanList(){
  const [loans,setLoans]=useState([]);

  const load=async()=>{
    const snap=await getDocs(collection(db,'loans'));
    setLoans(snap.docs.map(d=>({id:d.id,...d.data()})));
  };

  useEffect(()=>{load();},[]);

  return (
    <div>
      {loans.map(l=>(
        <div key={l.id} className="p-4 bg-gray-100 mb-2 rounded">
          <h2 className="font-bold">{l.borrowerName}</h2>
          <p>Principal: {l.principal}</p>
          <PaymentForm loanId={l.id} onPaymentAdded={load}/>
        </div>
      ))}
    </div>
  );
}