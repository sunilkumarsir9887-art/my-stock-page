"use client";

import { trackAddToCart, trackPurchase } from "@/lib/fpixel";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  // const telegramLink = "https://t.me/+xnUvVHd3rddmMTM1";
  // const telegramAppLink = "tg://resolve?domain=MALIKMUMBAI_IPLL_MATCH";
  const telegramAppLink = "tg://join?invite=xnUvVHd3rddmMTM1";
  const telegramWebLink = "https://t.me/+xnUvVHd3rddmMTM1";
  const [time, setTime] = useState(15); // start from 30 sec

  useEffect(() => {
    // Countdown interval
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleAddToCart();
          handleTelegramClick();
          // window.location.href = telegramWebLink; // redirect
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = () => {
    trackAddToCart({
      id: "Telegram Join",
      name: "Telegram Join",
      price: 0,
    });
  };

  const handleTelegramClick = () => {
  window.location.href = telegramAppLink;

  // Fallback agar app nahi mila to 1 sec baad web link open
  setTimeout(() => {
    window.open(telegramWebLink, "_blank");
  }, 1000);
};

  return (
    <div className="min-h-screen flex flex-col justify-center items-center  text-gray-800 p-6">
      <Image
        className="logo-image"
        src="/stock-market-logo.jpg"
        alt="Image"
        width={200}
        height={200} />
      {/* Headline */}
      <h1 className="card-shadow text-3xl md:text-4xl font-bold text-white text-center mb-4">
        Crypto With Sunil
      </h1>
      <p className="text-center text-2x1 text-white mb-8 card-shadow">
        ✅SEBI-Registered Expert Guidance for Safe & Profitable Trading!
        <br />
        <br />
        📈Stock Market Protection & Expert Tips for Success!
        <br />
        <br />
        Avoid Losses, Maximize Gains - Trade Safely!
        <br />
        <br />
        Protect your capital & grow your profits with Sunil!
        <br />
        <br />
        Join now for safe & profitable stock market trading!✅
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <motion.a
          // onClick={handleAddToCart}
          // href={telegramLink}
          onClick={()=>{handleAddToCart(); handleTelegramClick();}}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          animate={{ x: [0, -5, 5, -5, 5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
          className="bg-blue-500 text-white text-center py-3 rounded-2xl font-semibold shadow-md"
        >
          🚀 Join Telegram Now
        </motion.a>

        <motion.a
          // onClick={handleAddToCart}
          // href={telegramLink}
          onClick={()=>{handleAddToCart(); handleTelegramClick();}}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="bg-green-500 text-white text-center py-3 rounded-2xl font-semibold shadow-md"
        >
          ✅ Get Tips Today
        </motion.a>

        <motion.a
          // onClick={handleAddToCart}
          // href={telegramLink}
          onClick={()=>{handleAddToCart(); handleTelegramClick();}}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-400 text-gray-800 text-center py-3 rounded-2xl font-semibold shadow-md"
        >
          📊 See Predictions
        </motion.a>
      </div>

      {/* Copywriting Section */}
      <p
        onClick={() => navigator.clipboard.writeText(telegramWebLink)}
        className="mt-8 text-sm text-white text-center cursor-pointer hover:underline"
      >
        👉 Click here to copy our Telegram link
      </p>

      {/* Footer */}
      <p className="mt-6 text-xs text-yellow-500 text-center">
        *You will be redirected automatically in {time} seconds
      </p>
    </div>
  );
}


// const handlePurchase = () => {
//   trackPurchase({
//     total: 149.99,
//     items: [
//       { id: "Telegram Join", quantity: 1, price: 49.99 },
//     ],
//   });
// };

