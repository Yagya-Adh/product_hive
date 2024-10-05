"use client";
import { XMarkIcon } from "@heroicons/react/24/outline";
interface IModalProps {
  handlePopUp: () => void;
}
const Modal = ({ handlePopUp }: IModalProps) => {
  return (
    <>
      <div
        className="h-full w-full bg-black opacity-70 p-20"
        onClick={handlePopUp}
      ></div>

      <div className="absolute top-0 right-0 overflow-hidden bg-white to-black w-1/3  h-full">
        <div className="flex justify-between border py-4 px-4 text-4xl">
          <h1>Your Cart</h1>
          <button onClick={handlePopUp}>
            <XMarkIcon className="size-10" />
          </button>
        </div>
        <div className="flex justify-center items-center h-full">
          <p className="font-bold font-sans">No items found.</p>
        </div>
      </div>
    </>
  );
};

export default Modal;
