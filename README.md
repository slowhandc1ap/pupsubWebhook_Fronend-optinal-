# Pub/Sub to Webhook Service - Frontend

ส่วน Frontend ของระบบ Pub/Sub (Publisher/Subscriber) แบบเรียลไทม์ที่ให้ผู้ใช้สามารถทดสอบ API Endpoints และดูประวัติ Webhook ผ่านอินเทอร์เฟซที่ใช้งานง่าย รองรับการโต้ตอบกับ Backend ผ่าน HTTP และ WebSocket
![Screenshot 2025-06-23 113547](https://github.com/user-attachments/assets/85c56e6a-b064-445e-970c-7cc14fe40358)
![Screenshot 2025-06-23 113346](https://github.com/user-attachments/assets/2b4a5e75-44e5-4d62-924f-be442b47fc51)
![Screenshot 2025-06-23 113426](https://github.com/user-attachments/assets/3107ee5f-a14a-4b46-b4cc-e3a61237f6dc)
![Screenshot 2025-06-23 113505](https://github.com/user-attachments/assets/ee289a45-b530-4d9a-b50c-6cc442a26446)

## 📦 คุณสมบัติหลัก
- **หน้าหลัก**:
  - ฟอร์มสำหรับใช้งาน 4 API Endpoints:
    - `POST /api/subscribe`: ลงทะเบียน URL เพื่อรับ Webhook
    - `POST /api/unsubscribe`: ยกเลิกการรับ Webhook
    - `POST /api/provide_data`: บันทึกข้อความลงฐานข้อมูล
    - `POST /api/ask`: ดึงข้อความและส่งไปยัง Subscriber ผ่าน Webhook
  - แสดงผลลัพธ์ในรูปแบบ JSON
  
- **อนิเมชัน**: ใช้ Framer Motion เพื่อเพิ่มความสวยงามให้กับ UI
- **การออกแบบ**: ใช้ Tailwind CSS และ DaisyUI เพื่อสร้างอินเทอร์เฟซที่ทันสมัยและตอบสนองได้ดี

## 🔧 เทคโนโลยีที่ใช้
- **React**: เฟรมเวิร์กสำหรับสร้าง UI
- **TypeScript**: ภาษาโปรแกรมหลักเพื่อความปลอดภัยของประเภทข้อมูล
- **Vite**: เครื่องมือสำหรับพัฒนาและบิลด์โปรเจกต์
- **Axios**: ไคลเอนต์ HTTP สำหรับเรียก API
- **Framer Motion**: ไลบรารีสำหรับอนิเมชัน
- **Tailwind CSS + DaisyUI**: การออกแบบ UI ที่สวยงามและปรับแต่งได้
- **ESLint**: เครื่องมือสำหรับตรวจสอบและรักษาคุณภาพโค้ด

## 🗂️ โครงสร้างโฟลเดอร์
```
src/
├── App.css                   # สไตล์สำหรับคอมโพเนนต์ App
├── App.tsx                   # คอมโพเนนต์หลักของแอปพลิเคชัน
├── assets/
│   └── react.svg             # รูปภาพหรือไอคอนที่ใช้ในโปรเจกต์
├── components/
│   ├── Card.tsx              # คอมโพเนนต์สำหรับแสดงการ์ดของฟอร์ม
│   ├── Layout.tsx            # คอมโพเนนต์เลย์เอาท์หลัก
│   └── Navbar.tsx            # คอมโพเนนต์แถบนำทาง
├── index.css                 # สไตล์ระดับแอปพลิเคชัน (รวม Tailwind CSS)
├── main.tsx                  # จุดเริ่มต้นของ React
├── pages/
│   ├── AskForm.tsx           # ฟอร์มสำหรับ Endpoint Ask
│   ├── ProvideDataForm.tsx   # ฟอร์มสำหรับ Endpoint Provide Data
│   ├── ServiceMenu.tsx       # เมนูสำหรับเลือกบริการ
│   ├── SubscribeForm.tsx     # ฟอร์มสำหรับ Endpoint Subscribe
│   └── UnSubForm.tsx         # ฟอร์มสำหรับ Endpoint Unsubscribe
└── vite-env.d.ts             # การกำหนดประเภทสำหรับ Vite
```

## 🛠️ การติดตั้งและเริ่มต้น
1. **ติดตั้ง Dependencies**:
   ```bash
   npm install
   ```

2. **เริ่ม Development Server**:
   ```bash
   npm run dev
   ```
   เซิร์ฟเวอร์จะรันที่ `http://localhost:5173` (หรือพอร์ตที่กำหนดโดย Vite)

3. **บิลด์โปรเจกต์สำหรับ Production**:
   ```bash
   npm run build
   ```

4. **ดูตัวอย่างโปรเจกต์ที่บิลด์แล้ว**:
   ```bash
   npm run preview
   ```

5. **รัน ESLint เพื่อตรวจสอบโค้ด**:
   ```bash
   npm run lint
   ```

## ⚙️ การกำหนดค่า
- **ไฟล์ `.env`** (ถ้ามี): สามารถกำหนดตัวแปรสภาพแวดล้อมสำหรับ Vite ได้ เช่น URL ของ Backend API หรือ WebSocket ตอนนี้เกำหนดตรงๆเพื่อทดสอบ
  ```env
  VITE_API_URL=http://localhost:3000
  VITE_WEBSOCKET_URL=ws://localhost:8000
  ```
- ตรวจสอบว่า Backend และ Webhook Receiver Server รันอยู่ที่พอร์ตที่ถูกต้อง (เช่น `3000` สำหรับ Backend และ `8000` สำหรับ Webhook Receiver)

## 🖥️ การใช้งาน Frontend
- **หน้าหลัก (`/`)**:
  - แสดงการ์ดสำหรับแต่ละ Endpoint (`Subscribe`, `Unsubscribe`, `Provide Data`, `Ask for Data`)
  - ผู้ใช้สามารถกรอกข้อมูลในฟอร์มเพื่อทดสอบ API และดูผลลัพธ์ในรูปแบบ JSON

- **การโต้ตอบ**:
  - ใช้ Axios สำหรับส่งคำขอ HTTP ไปยัง Backend
 

## 📚 การกำหนด Dependencies
รายละเอียดจาก `package.json`:
- **Dependencies**:
  - `react`, `react-dom`: สำหรับสร้างและจัดการ UI
  - `axios`: สำหรับเรียก API
  - `framer-motion`: สำหรับอนิเมชัน
  - `tailwindcss`, `daisyui`, `@tailwindcss/vite`: สำหรับสไตล์
- **DevDependencies**:
  - `vite`, `@vitejs/plugin-react`: สำหรับพัฒนาและบิลด์
  - `typescript`: สำหรับการพิมพ์แบบคงที่
  - `eslint`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`: สำหรับรักษาคุณภาพโค้ด
  - `@types/react`, `@types/react-dom`, `@types/axios`: สำหรับการพิมพ์ TypeScript

## 📝 หมายเหตุ
- ตรวจสอบว่า Backend (`http://localhost:3000`) และ Webhook Receiver (`http://localhost:8000`) รันอยู่อย่างถูกต้องก่อนเริ่ม Frontend
- หากต้องการปรับแต่งสไตล์เพิ่มเติม สามารถแก้ไข `index.css` หรือ `App.css` โดยใช้ Tailwind CSS หรือ DaisyUI

