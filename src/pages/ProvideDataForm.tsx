import React, { useState } from 'react';
import axios from 'axios';

export const ProvideDataForm = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const presets:string[] = [
    'ลด 50% สำหรับผู้เล่นเท่านั้น!',
    'โปรโมชั่นใหม่ประจำเดือนนี้',
    'ตัวละครใหม่เข้าแล้ว',
    'เติมเพชรฟรี 100 เพชร',
    'ซื้อ 1 แถม 1',
  ];

  const handlePresetSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value;
    if (selected !== '') {
      setMessage(selected);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3000/api/provide_data', {
        message,
      });

      setResponse(JSON.stringify(res.data, null, 2));
    } catch (err) {
      setResponse('Error: ' + err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Provide Data</h2>

      {/* Preset Selector */}
      <div className="form-control">
        <label className="label font-medium">เลือกข้อความที่ใช้บ่อย (ถ้ามี)</label>
        <select className="select select-bordered w-full" onChange={handlePresetSelect}>
          <option value="">-- เลือกข้อความแนะนำ --</option>
          {presets.map((text, idx) => (
            <option key={idx} value={text}>
              {text}
            </option>
          ))}
        </select>
      </div>

      {/* Message Input */}
      <textarea
        placeholder="กรอกข้อความ หรือเลือกจากด้านบน"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="textarea textarea-bordered w-full"
        required
      />

      {/* Submit */}
      <button type="submit" className="btn btn-success w-full">
        ส่งข้อความ
      </button>

      {/* Response */}
      {response && (
        <pre className="bg-base-300 p-2 rounded mt-2 overflow-x-auto text-sm">
          {response}
        </pre>
      )}
    </form>
  );
};
