import React, { useState } from 'react';
import axios from 'axios';
export const AskForm = () => {
  const [txId, setTxId] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/ask', {
        tx_id: Number(txId),
      });
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (err) {
      setResponse('Error: ' + err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Ask for Data</h2>
      <input
        type="number"
        placeholder="Tx ID"
        value={txId}
        onChange={(e) => setTxId(e.target.value)}
        className="input input-bordered w-full"
        required
      />
      <button type="submit" className="btn btn-info w-full">Get Message</button>
      {response && <pre className="bg-base-300 p-2 rounded mt-2">{response}</pre>}
    </form>
  );
};