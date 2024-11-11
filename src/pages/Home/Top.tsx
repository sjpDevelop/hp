import { motion } from 'framer-motion';

const Top = () => {
  const messages = [
    "大好きな人の",
    "いつもの笑顔が",
    "最高の時間"
  ];

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: index * 1.2,
              ease: "easeOut"
            }}
            className="text-4xl md:text-6xl font-bold mb-4 text-gray-800"
          >
            {message}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Top;
