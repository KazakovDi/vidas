import Link from "next/link";
import React from "react";

const Slogan = () => {
  return (
    <div className="flex flex-col self-start justify-self-end">
      <p className="text-white text-6xl">
        Мы открываем аккаунты -
        <span className="text-red-600"> вы закрываете рынок</span>
      </p>
      <p className="text-base text-white">
        Забудьте о бесконечном тесте агентских аккаунтов, потере времени и
        бюджета. С нами вы концентрируетесь на стратегии и масштабировании -
        вопрос с аккаунтами закрыт раз и навсегда. Вы получаете белые трастовые
        аккаунты, качественный сервис и стабильные результаты заливов.
      </p>

      <Link
        className={`px-6 py-3 mt-5 rounded-full text-center items-center justify-center flex grow text-lg font-medium transition-all cursor-pointer bg-red-600 text-white shadow-lg`}
        href={"#"}
      >
        Оставить заявку
      </Link>
    </div>
  );
};

export default Slogan;
