import './App.css';
import { Layout } from './components/Layout';
import { SubscribeForm } from './pages/SubscribeForm';
import { UnsubscribeForm } from './pages/UnSubForm';
import { ProvideDataForm } from './pages/ProvideDataForm';
import { AskForm } from './pages/AskForm';
import { motion } from 'framer-motion';
import Card from './components/Card';
function App() {
  const cards = [
    { title: "Subscribe", icon: "🎯", color: "bg-purple-600", form: <SubscribeForm /> },
    { title: "Unsubscribe", icon: "💣", color: "bg-red-500", form: <UnsubscribeForm /> },
    { title: "Provide Data", svg: "upload", color: "bg-green-600", form: <ProvideDataForm /> },
    { title: "Ask for Data", svg: "chat", color: "bg-blue-500", form: <AskForm /> },
  ];

  return (
    <Layout>
      <motion.div
        className="py-12 px-4 max-w-6xl mx-auto font-[Kanit]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-center mb-10"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl font-extrabold text-purple-700 drop-shadow-sm">🎮 Pub/Sub Webhook System</h1>
          <p className="text-lg text-gray-600 mt-2">
            ระบบ Subscribe , พร้อมส่ง Public Webhook และ JWT 🔐
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5, ease: "easeOut" }}
            >
              <Card title={card.title} icon={card.icon} svg={card.svg as any} color={card.color}>
                {card.form}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}

export default App;