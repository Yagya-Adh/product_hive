"use client";

interface IPillButtonProps {
  text: string;
}
const ButtonPills = ({ text }: IPillButtonProps) => {
  return (
    <button className="relative rounded-full bg-productHives-buttonColor items-center text-2xl font-bold cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out group">
      <div className="overflow-hidden flex flex-col items-center group">
        <div
          className={`px-2  translate-y-4 transform group-hover:-translate-y-16 ease-in-out transition-all duration-200 `}
        >
          {text}
        </div>

        <div
          className={`px-2  translate-y-10 transform group-hover:-translate-y-4 ease-in-out transition-all duration-200 `}
        >
          {text}
        </div>
      </div>
    </button>
  );
};

export default ButtonPills;
