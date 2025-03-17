import { motion } from "framer-motion";

const services = [
  { name: "caring", emoji: "🤱" }, // การดูแล (เช่น ผู้สูงอายุ, เด็ก)
  { name: "cleaning", emoji: "🧼" }, // งานทำความสะอาด
  { name: "laundry", emoji: "🧺" }, // ซักรีด
  { name: "transport", emoji: "🚗" }, // ขนส่ง
  { name: "fixing", emoji: "🛠️" }, // ซ่อมแซม
  { name: "pet-care", emoji: "🐶" }, // ดูแลสัตว์เลี้ยง
  { name: "gardening", emoji: "🪴" }, // งานสวน
];


const ServiceCard = ({ name, emoji }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="flex items-center justify-center p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-white"
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-3xl">{emoji}</span>
        <p className="text-lg font-medium">{name}</p>
      </div>
    </motion.div>
  );
};

const Categories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 ">
      {services.map((service) => (
        <ServiceCard key={service.name} name={service.name} emoji={service.emoji} />
      ))}
    </div>
  );
};

export default Categories;
