import React, { useState } from 'react';
import axios from 'axios';

export const SubscribeForm = () => {
  const [url, setUrl] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://localhost:3000/api/subscribe', { url });
      setResponse(JSON.stringify(res.data, null, 2));
    } catch (err: any) {
      if (err.response) {
        // Server responded with status other than 2xx
        setResponse(`Error: ${err.response.status} - ${JSON.stringify(err.response.data, null, 2)}`);
      } else if (err.request) {
        // No response received
        setResponse('Error: No response from server');
      } else {
        // Something happened in setting up the request
        setResponse('Error: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Subscribe</h2>
      <input
        type="text"
        placeholder="localhost:8000/receive"
        defaultValue={'http://localhost:8000/receive'}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="input input-bordered w-full"
        required
      />
      <button type="submit" className="btn btn-primary w-full" disabled={loading}>
        {loading ? <span className="loading loading-spinner"></span> : 'Subscribe'}
      </button>
      {response && <pre className="bg-base-300 p-2 rounded mt-2">{response}</pre>}
    </form>
  );
};