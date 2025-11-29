"use client";

import { useState } from "react";
import ChevronDown from "@/app/icons/ChevronDown";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Что делать, если аккаунт забанили?",
      answer: "",
    },
    {
      question: "Что лучше фармы или агентские аккаунты?",
      answer:
        "Оба варианта рабочие, но под разные задачи.\n\nФармы сильнее для сложных ниш, где нужен высокий естественный траст: они лучше проходят агрессивную модерацию. Мы можем подключать ваш фармы к нашему МСС, таким образом пропадет дневной лимит по расходу, вырастет траст и вы сможете запустить сложный оффер. Такие аккаунты у нас так же есть в продаже, цены уточняйте у менеджера. Агентские аккаунты идеально подходят для средних офферов – быстрый и легкий запуск, unlimited бюджет и стабильная работа без долгого прогрева.",
    },
    {
      question: "Как работает Postpay оплата?",
      answer: "",
    },
    {
      question: "Для чего нужен МСС?",
      answer: "",
    },
    {
      question: "Что нужно для старта?",
      answer: "",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl">
      <div className="border-4 border-white rounded-3xl p-8 shadow-2xl">
        <div className="mb-8 flex flex-row gap-5 items-center">
          <h1 className="text-white text-7xl font-black mb-4">FAQ</h1>

          <p className="text-gray-400 text-sm">
            Остались вопросы или хотите
            <br />
            обсудить индивидуальные условия?
            <br />
            Свяжитесь с нами!
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "bg-red-600 rounded-xl"
                  : "bg-transparent border-b border-gray-700"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 text-lef"
              >
                <h3 className="text-white text-5xl font-bold pr-4 self-start text-left">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`text-white shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={28}
                  strokeWidth={3}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-white text-base leading-relaxed whitespace-pre-line text-[22px]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
