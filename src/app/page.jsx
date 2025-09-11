"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  // 🔗 Single variable for Telegram link
  const telegramLink = "https://t.me/+xnUvVHd3rddmMTM1";
  const [time, setTime] = useState(15); // start from 30 sec

  useEffect(() => {
    // Countdown interval
    const interval = setInterval(() => {
      setTime((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = telegramLink; // redirect
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white text-gray-800 p-6">
      <Image
      className="logo-image"
      src="/stock-market-logo.jpg"
      alt="Image"
      width={200}
      height={200}/>
      {/* Headline */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Crypto With Sunil
      </h1>
      <p className="text-center text-lg text-gray-600 mb-8">
        ✅SEBI-Registered Expert Guidance for Safe & Profitable Trading!
        <br/>
        📈Stock Market Protection & Expert Tips for Success!
        <br/>
        Avoid Losses, Maximize Gains - Trade Safely!
        <br/>
        Protect your capital & grow your profits with Sunil!
        <br/>
        Join now for safe & profitable stock market trading!✅
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <motion.a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          animate={{ x: [0, -5, 5, -5, 5, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 3 }}
          className="bg-blue-500 text-white text-center py-3 rounded-2xl font-semibold shadow-md"
        >
          🚀 Join Free Telegram Now
        </motion.a>

        <motion.a
          href={telegramLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          className="bg-green-500 text-white text-center py-3 rounded-2xl font-semibold shadow-md"
        >
          ✅ Get Free Tips Today
        </motion.a>

        <motion.a
          href={telegramLink}
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
        onClick={() => navigator.clipboard.writeText(telegramLink)}
        className="mt-8 text-sm text-gray-500 text-center cursor-pointer hover:underline"
      >
        👉 Click here to copy our Telegram link
      </p>

      {/* Footer */}
      <p className="mt-6 text-xs text-gray-400 text-center">
        *You will be redirected automatically in {time} seconds
      </p>
    </div>
  );
}
