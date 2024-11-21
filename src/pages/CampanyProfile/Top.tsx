import { motion } from 'framer-motion';

const Top = () => {
  const messages1 = [
    "日本を知り",
    "日本を愛し",
    "日本を伝える"
  ];

  const messages2 = [
    "世界中を美しく",
    "世界中に魅力を"
  ];


  return (
    <div className="h-screen relative bg-white">
      {/* messages1: 左上 */}
      <div className="absolute top-32 left-32">
        <div className="text-left">
          {messages1.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: index * 1.2,
                ease: "easeOut"
              }}
              className="text-xl md:text-3xl font-bold mb-4 text-gray-800"
            >
              {message}
            </motion.div>
          ))}
        </div>
      </div>

      {/* messages2: 右下 */}
      <div className="absolute bottom-32 right-32">
        <div className="text-right">
          {messages2.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                delay: index * 1.2 + 3.6, // messages1の後に表示
                ease: "easeOut"
              }}
              className="text-xl md:text-3xl font-bold mb-4 text-gray-800"
            >
              {message}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Top;
