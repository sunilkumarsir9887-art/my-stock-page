"use client";

import { trackSubscribe } from "@/lib/fpixel";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const telegramAppLink = "tg://join?invite=xnUvVHd3rddmMTM1";
  const telegramWebLink = "https://t.me/+xnUvVHd3rddmMTM1";
  const [time, setTime] = useState(5); 
  const [subscribed, setSubscribed] = useState(false); // ✅ new state

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleTelegramClick();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Fire only once
  const handleButtonClick = () => {
    if (!subscribed) {
      trackSubscribe();
      setSubscribed(true);
    }
  };

  const handleTelegramClick = () => {
    handleButtonClick(); // ensure tracking done
    window.location.href = telegramAppLink;

    // fallback web open
    setTimeout(() => {
      window.open(telegramWebLink, "_blank");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-gray-800 p-6">
      <Image
        className="logo-image"
        src="/stock-market-logo.jpg"
        alt="Image"
        width={200}
        height={200}
      />
      
      <h1 className="card-shadow text-3xl md:text-4xl font-bold text-white text-center mb-4">
        Crypto With Sunil
      </h1>
      <p className="text-center text-2x1 text-white mb-8 card-shadow">
        ✅SEBI-Registered Expert Guidance for Safe & Profitable Trading!
        <br /><br />
        📈Stock Market Protection & Expert Tips for Success!
        <br /><br />
        Avoid Losses, Maximize Gains - Trade Safely!
        <br /><br />
        Protect your capital & grow your profits with Sunil!
        <br /><br />
        Join now for safe & profitable stock market trading!✅
      </p>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <motion.a
          onClick={handleTelegramClick}
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
          onClick={handleTelegramClick}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="bg-green-500 text-white text-center py-3 rounded-2xl font-semibold shadow-md"
        >
          ✅ Get Tips Today
        </motion.a>

        <motion.a
          onClick={handleTelegramClick}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="bg-yellow-400 text-gray-800 text-center py-3 rounded-2xl font-semibold shadow-md"
        >
          📊 See Predictions
        </motion.a>
      </div>

      {/* Copy Link */}
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
