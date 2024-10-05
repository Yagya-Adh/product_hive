"use client";

interface IPillButtonProps {
  text: string;
}
const ButtonPills = ({ text }: IPillButtonProps) => {
  return <div className="rounded-full px-2 py-1 bg-buttonColor">{text}</div>;
};

export default ButtonPills;
