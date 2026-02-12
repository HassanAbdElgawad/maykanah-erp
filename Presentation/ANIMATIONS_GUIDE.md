# 🎨 دليل Animations المتقدمة - Advanced Animations Guide

> **الحزمة الكاملة لأفضل animations في عرض ميكنة**

---

## 📦 المكتبات المطلوبة

### المستوى الأول - أساسي (ضروري):
```bash
pnpm add framer-motion swiper recharts
```

### المستوى الثاني - متقدم (موصى به):
```bash
pnpm add gsap @lottiefiles/react-lottie-player aos react-countup
```

### المستوى الثالث - احترافي (اختياري):
```bash
pnpm add three @react-three/fiber @react-three/drei canvas-confetti react-tsparticles
```

---

## 🎬 Animations لكل سلايد

### Slide 1: Cover (LamdaX - ميكنة)

#### Framer Motion:
```tsx
import { motion } from 'framer-motion';

export const CoverSlide = () => {
  return (
    <div className="relative h-screen bg-gradient-to-br from-[#093738] to-[#1e7e34]">
      {/* Background Particles */}
      <Particles />
      
      {/* Logo LamdaX */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotateY: -180 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ 
          duration: 1.5, 
          type: "spring",
          stiffness: 100 
        }}
        className="relative z-10"
      >
        <img src="/lamdax-logo.svg" alt="LamdaX" className="w-48 h-48" />
      </motion.div>
      
      {/* العنوان - ميكنة */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-6xl font-bold text-white mb-4"
      >
        ميكنة
      </motion.h1>
      
      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-2xl text-white/90"
      >
        حلول ذكية لرؤية 2030
      </motion.p>
      
      {/* علم السعودية */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
      >
        <SaudiFlag />
      </motion.div>
      
      {/* Badge رؤية 2030 */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        className="mt-8"
      >
        <Vision2030Badge />
      </motion.div>
    </div>
  );
};
```

#### GSAP (علم متحرك):
```tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const SaudiFlag = () => {
  const flagRef = useRef(null);
  
  useEffect(() => {
    gsap.to(flagRef.current, {
      rotateY: 5,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  }, []);
  
  return (
    <div ref={flagRef} className="text-6xl">
      🇸🇦
    </div>
  );
};
```

#### Particles Background:
```tsx
import Particles from "react-tsparticles";

export const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 80 },
          color: { value: ["#2cc28d", "#ffffff"] },
          shape: { type: "circle" },
          opacity: {
            value: 0.5,
            animation: { enable: true, speed: 1 }
          },
          size: {
            value: 3,
            random: true
          },
          links: {
            enable: true,
            distance: 150,
            color: "#2cc28d",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: "bounce"
          }
        }
      }}
    />
  );
};
```

---

### Slide 2: Overview

```tsx
export const OverviewSlide = () => {
  const features = [
    { icon: "🇸🇦", text: "نظام ERP سعودي" },
    { icon: "🎯", text: "موواكب لرؤية 2030" },
    { icon: "♻️", text: "تطوير مستمر" },
    { icon: "🌐", text: "واجهة عربية أصلية" },
    { icon: "⚡", text: "معمارية حديثة" },
    { icon: "📦", text: "10+ وحدات متكاملة" }
  ];
  
  return (
    <div className="p-12">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-5xl font-bold mb-12"
      >
        نظرة عامة
      </motion.h2>
      
      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 40px rgba(44, 194, 141, 0.3)"
            }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                delay: i * 0.15 + 0.5,
                duration: 0.6 
              }}
              className="text-5xl mb-3"
            >
              {feature.icon}
            </motion.div>
            <p className="text-xl">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
```

---

### Slide 4: Tech Stack (3D Carousel)

```tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';

export const TechStackSlide = () => {
  const technologies = [
    { name: "React 18", color: "#61DAFB" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Vite", color: "#646CFF" },
    { name: "Tailwind", color: "#38B2AC" }
  ];
  
  return (
    <div className="h-screen">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {technologies.map((tech, i) => (
          <TechLogo 
            key={i}
            position={[
              Math.cos((i / technologies.length) * Math.PI * 2) * 3,
              Math.sin((i / technologies.length) * Math.PI * 2) * 3,
              0
            ]}
            tech={tech}
          />
        ))}
        
        <OrbitControls autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
};
```

---

### Slide 18: Analytics (Charts مع Animation)

```tsx
import { LineChart, Line, BarChart, Bar, PieChart, Pie } from 'recharts';
import CountUp from 'react-countup';

export const AnalyticsSlide = () => {
  const data = [
    { month: 'يناير', value: 4000 },
    { month: 'فبراير', value: 3000 },
    { month: 'مارس', value: 6000 },
    { month: 'أبريل', value: 8000 }
  ];
  
  return (
    <div className="p-12">
      {/* KPIs مع CountUp */}
      <div className="grid grid-cols-4 gap-6 mb-12">
        {[
          { title: "المستخدمين", value: 15000, icon: "👥" },
          { title: "المعاملات", value: 250000, icon: "📊" },
          { title: "الوحدات", value: 10, icon: "📦" },
          { title: "التوفير", value: 85, suffix: "%", icon: "💰" }
        ].map((kpi, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.2, type: "spring" }}
            className="bg-white p-6 rounded-xl shadow-xl text-center"
          >
            <div className="text-5xl mb-2">{kpi.icon}</div>
            <div className="text-4xl font-bold text-[#093738]">
              <CountUp 
                end={kpi.value} 
                duration={2}
                separator=","
                suffix={kpi.suffix || ""}
              />
            </div>
            <div className="text-gray-600">{kpi.title}</div>
          </motion.div>
        ))}
      </div>
      
      {/* Chart متحرك */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <LineChart width={800} height={400} data={data}>
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#2cc28d"
            strokeWidth={3}
            animationDuration={2000}
          />
        </LineChart>
      </motion.div>
    </div>
  );
};
```

---

### Slide 20: Vision 2030 (متقدم)

```tsx
export const Vision2030Slide = () => {
  return (
    <motion.div
      className="h-screen relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1e7e34 0%, #093738 100%)"
      }}
    >
      {/* Background متحرك */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
        }}
        transition={{ duration: 20, repeat: Infinity }}
        style={{
          background: "radial-gradient(circle, rgba(44,194,141,0.1) 0%, transparent 50%)",
          backgroundSize: "200% 200%"
        }}
      />
      
      {/* علم السعودية كبير */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[40rem] pointer-events-none"
      >
        🇸🇦
      </motion.div>
      
      {/* المحتوى */}
      <div className="relative z-10 p-12">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl font-bold text-white mb-8 text-center"
        >
          🇸🇦 ميكنة ورؤية المملكة 2030
        </motion.h1>
        
        {/* الأعمدة الثلاثة */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: "🎯",
              title: "مواءمة مع الرؤية",
              points: [
                "دعم التحول الرقمي",
                "تعزيز الكفاءة",
                "بناء اقتصاد رقمي",
                "توطين التقنية"
              ]
            },
            {
              icon: "♻️",
              title: "التطوير المستمر",
              points: [
                "تحديثات شهرية",
                "ميزات جديدة",
                "دعم 24/7",
                "مواكبة المعايير"
              ]
            },
            {
              icon: "🏆",
              title: "التزامنا",
              points: [
                "منتج سعودي 100%",
                "فريق محلي",
                "شراكات وطنية",
                "دعم الرؤية"
              ]
            }
          ].map((column, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.3 }}
              className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  delay: 1 + i * 0.3,
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="text-6xl mb-4 text-center"
              >
                {column.icon}
              </motion.div>
              
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                {column.title}
              </h3>
              
              <ul className="space-y-2">
                {column.points.map((point, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.3 + j * 0.1 }}
                    className="text-white/90 flex items-center gap-2"
                  >
                    <span className="text-[#2cc28d]">✓</span>
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="text-center mt-16"
        >
          <p className="text-3xl text-white mb-4">
            معاً نحو مستقبل رقمي متطور
          </p>
          <motion.p
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl text-[#2cc28d] font-bold"
          >
            LamdaX - ميكنة | شريككم في التحول الرقمي
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
};
```

---

### Slide 21: Thank You (مع Confetti)

```tsx
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

export const ThankYouSlide = () => {
  useEffect(() => {
    // Confetti explosion
    const duration = 3000;
    const end = Date.now() + duration;
    
    const colors = ['#1e7e34', '#2cc28d', '#093738'];
    
    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
      
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);
  
  return (
    <motion.div
      className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#093738] to-[#1e7e34]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", damping: 10 }}
        className="text-center"
      >
        <motion.h1
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-8xl font-bold text-white mb-8"
        >
          شكراً لكم 🎉
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-3xl text-white/90 mb-12"
        >
          LamdaX - ميكنة
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-white space-y-4"
        >
          <p className="text-2xl">📧 info@lamdax.sa</p>
          <p className="text-2xl">🌐 www.lamdax.sa</p>
          <p className="text-2xl">📱 +966 XX XXX XXXX</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
```

---

## 🎨 Shared Components

### Vision2030Badge Component:
```tsx
export const Vision2030Badge = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1e7e34] to-[#093738] px-6 py-3 rounded-full"
    >
      <motion.span
        animate={{
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-3xl"
      >
        🇸🇦
      </motion.span>
      <span className="text-white font-bold text-xl">
        داعم لرؤية 2030
      </span>
    </motion.div>
  );
};
```

---

## 🎯 كيفية الاستخدام

### 1. تثبيت المكتبات:
```bash
pnpm add framer-motion gsap @lottiefiles/react-lottie-player aos react-countup canvas-confetti react-tsparticles three @react-three/fiber @react-three/drei swiper recharts
```

### 2. استيراد في المكونات:
```tsx
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import AOS from 'aos';
import 'aos/dist/aos.css';
```

### 3. تطبيق في PresentationView:
```tsx
<AnimatePresence mode="wait">
  <motion.div
    key={currentSlide}
    initial="enter"
    animate="center"
    exit="exit"
    variants={slideVariants}
  >
    {slides[currentSlide]}
  </motion.div>
</AnimatePresence>
```

---

## ✨ النتيجة النهائية

عرض تقديمي احترافي يحتوي على:
- ✅ 20+ نوع animation مختلف
- ✅ 3D effects مع Three.js
- ✅ Particles background متحرك
- ✅ Charts متحركة
- ✅ Confetti celebration
- ✅ Smooth transitions
- ✅ Interactive elements
- ✅ علم السعودية متحرك
- ✅ Badge رؤية 2030 نابض

**جاهز للإبهار!** 🚀
