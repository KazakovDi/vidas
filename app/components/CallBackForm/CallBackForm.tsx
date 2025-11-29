"use client";
import React, { useState } from "react";

interface IFormState {
  name: string;
  messenger: string;
  phone: string;
  niche: string[];
  budget: string;
}

const CallBackForm = () => {
  const [formData, setFormData] = useState<IFormState>({
    name: "",
    messenger: "",
    phone: "",
    niche: [],
    budget: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const niches = [
    "iGaming",
    "Dating",
    "Nutra",
    "Finance",
    "E-Commerce",
    "Mobile Apps",
    "Ed-Tech",
    "Crypto",
  ];
  const budgets = ["$10k-$50k", "$50k-$100k", "$100k-$300k", "$300k+"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleMultipleSelection = (value: string) => {
    console.log(formData);
    const stateFilteredNiches = formData.niche.filter((item) => item !== value);

    if (formData.niche.length === stateFilteredNiches.length)
      stateFilteredNiches.push(value);

    setFormData((prev) => ({ ...prev, niche: stateFilteredNiches }));
  };

  const handleSelection = (value) => {
    setFormData((prev) => ({
      ...prev,
      budget: prev.budget === value ? "" : value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Введите ваше имя";
    }

    if (!formData.messenger.trim()) {
      newErrors.messenger = "Введите Telegram или WhatsApp";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона";
    } else if (!/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Некорректный номер телефона";
    }

    if (!formData.niche) {
      newErrors.niche = "Выберите нишу";
    }

    if (!formData.budget) {
      newErrors.budget = "Выберите бюджет";
    }

    return newErrors;
  };

  const handleSubmit = async () => {
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: "", messenger: "", phone: "", niche: "", budget: "" });
    setErrors({});
  };

  if (submitted) {
    return (
      <div className=" bg-gray-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Заявка отправлена!
          </h2>
          <p className="text-gray-600 mb-6">
            Мы свяжемся с вами в ближайшее время
          </p>
          <button
            onClick={handleReset}
            className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
          >
            Отправить еще одну заявку
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
      <h1 className="text-4xl md:text-6xl font-black text-center mb-8 uppercase tracking-tight text-[#111]">
        Оставляй заявку
      </h1>

      <div className="space-y-6">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Введите ваше имя*"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border-b-2 text-[#111] placeholder:text-[#111] ${
              errors.name ? "border-red-500" : "border-[#111]"
            } bg-transparent focus:outline-none text-lg`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              name="messenger"
              placeholder="Ваш Telegram / WhatsApp*"
              value={formData.messenger}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border-b-2 text-[#111] placeholder:text-[#111] ${
                errors.messenger ? "border-red-500" : "border-[#111]"
              } bg-transparent focus:outline-none text-lg`}
            />
            {errors.messenger && (
              <p className="text-red-500 text-sm mt-1">{errors.messenger}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Введите номер телефона"
              value={formData.phone}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border-b-2 text-[#111] placeholder:text-[#111] ${
                errors.phone ? "border-red-500" : "border-[#111]"
              } bg-transparent focus:outline-none text-lg`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="flex flex-row justify-between grow gap-10">
          <div className="flex flex-col">
            <p className="block text-xl font-semibold mb-4 text-[#111]">
              Какие у вас ниши:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {niches.map((niche) => (
                <button
                  key={niche}
                  type="button"
                  onClick={() => handleMultipleSelection(niche)}
                  className={`px-6 py-3 rounded-full text-centera items-center justify-center flex grow text-lg font-medium transition-all cursor-pointer ${
                    formData.niche.includes(niche)
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {niche}
                </button>
              ))}
            </div>
            {errors.niche && (
              <p className="text-red-500 text-sm mt-2">{errors.niche}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="block text-xl font-semibold mb-4 text-[#111]">
              Какой у вас бюджет:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {budgets.map((budget) => (
                <button
                  key={budget}
                  type="button"
                  onClick={() => handleSelection(budget)}
                  className={`px-6 py-3 flex align-center justify-center text-center rounded-full text-lg font-medium transition-all cursor-pointer ${
                    formData.budget === budget
                      ? "bg-red-600 text-white shadow-lg"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {budget}
                </button>
              ))}
            </div>
            {errors.budget && (
              <p className="text-red-500 text-sm mt-2">{errors.budget}</p>
            )}
          </div>
        </div>

        <div className="text-center pt-4">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting || (!formData.name && !formData.messenger)}
            className={`px-12 py-4 rounded-full text-xl font-bold uppercase  transition-all shadow-lg hover:shadow-xl disabled:opacity-50 ${
              formData.name && formData.messenger
                ? "bg-red-600 text-white hover:bg-red-700 cursor-pointer "
                : "bg-gray-200 text-[#111]"
            }`}
          >
            {isSubmitting ? "Отправка..." : "Оставить заявку"}
          </button>
          <p className="text-gray-500 text-sm mt-4">
            *обязательные поля для заполнения
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallBackForm;
