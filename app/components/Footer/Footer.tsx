import Image from "next/image";
import Link from "next/link";
import RoundButton from "../RoundButton/RoundButton";

const Footer = () => {
  return (
    <footer className="pt-12 flex justify-between">
      <div className="grow">
        <Image width={190} height={53} alt="logo" src={"/logo.png"} />
      </div>

      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-[30px]">
          <p className="text-base text-[#5E5E5E] font-medium">Навигация</p>

          <ul className="flex flex-col gap-6">
            <Link className="text-2xl font-medium" href="#">
              Главная
            </Link>

            <Link className="text-2xl font-medium" href="#">
              Условия
            </Link>

            <Link className="text-2xl font-medium" href="#">
              Отзывы
            </Link>

            <Link className="text-2xl font-medium" href="#">
              С чего начать
            </Link>

            <Link className="text-2xl font-medium" href="#">
              Ниши
            </Link>

            <Link className="text-2xl font-medium" href="#">
              FAQ
            </Link>
          </ul>
        </div>

        <div>
          <div>
            <p className="text-base text-[#5E5E5E] font-medium">
              Рабочее время:
            </p>

            <div className="mt-7">
              <p className="text-2xl font-medium">Будни: 9:00–21:00 (GMT+2)</p>
              <p className="text-2xl font-medium">
                Выходные: 11:00–18:00 (GMT+2)
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-12 gap-2">
            <p className="text-base text-[#5E5E5E] font-medium">Контакты:</p>

            <div className="flex flex-row gap-4">
              <RoundButton href="#">
                <Image
                  className="margin-auto"
                  width={34}
                  height={34}
                  alt="whatsapp"
                  src={"/whatsapp.png"}
                />
              </RoundButton>

              <RoundButton href="#">
                <Image width={34} height={34} alt="whatsapp" src={"/tg.png"} />
              </RoundButton>

              <RoundButton href="#">
                <Image
                  width={34}
                  height={34}
                  alt="whatsapp"
                  src={"/insta.png"}
                />
              </RoundButton>
            </div>
          </div>
        </div>

        <div>
          <div>
            <p className="text-base text-[#5E5E5E] font-medium">Адрес:</p>

            <div className="mt-7">
              <p className="text-2xl font-medium">106 Alwen Ave,</p>
              <p className="text-2xl font-medium">
                East Stroudsburg, PA 18301, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
