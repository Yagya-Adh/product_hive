"use client";

interface IPillButtonProps {
  text: string;
}
const ButtonPills = ({ text }: IPillButtonProps) => {
  return (
    <button className="relative rounded-full px-2 py-4 bg-productHives-buttonColor items-center text-2xl font-bold   cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out group">
      {text}
    </button>
  );
};

export default ButtonPills;
