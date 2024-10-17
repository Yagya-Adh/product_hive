"use client";

interface IPillButtonProps {
  text: string;
  variant?:
    | string
    | "button-default"
    | "button-outline"
    | "button-outline-white";
  padding?: string;
}
const ButtonPills = ({ text, variant, padding }: IPillButtonProps) => {
  return (
    <>
      {variant === "button-outline-white" ? (
        <button
          className={` relative rounded-full ${padding ? padding : ""} 
          text-productHives-buttonColor hover:text-productHives-TextSecondary
          mx-2 border border-productHives-buttonColor bg-white  hover:bg-productHives-buttonColor items-center text-2xl font-bold cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out group`}
        >
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
      ) : variant === "button-outline" ? (
        <button
          className={`relative rounded-full ${padding ? padding : ""} 
          text-productHives-buttonColor hover:text-productHives-TextSecondary
          mx-2 border border-productHives-buttonColor bg-transparent  hover:bg-productHives-buttonColor items-center text-2xl font-bold cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out group`}
        >
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
      ) : variant === "button-default" ? (
        <button
          className={`relative rounded-full ${
            padding ? padding : ""
          }   bg-productHives-buttonColor items-center text-2xl font-bold cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out group`}
        >
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
      ) : (
        <button
          className={`relative rounded-full ${
            padding ? padding : ""
          }   px-2 mx-2 bg-productHives-buttonColor items-center text-2xl font-bold cursor-pointer overflow-hidden transition-transform duration-300 ease-in-out group`}
        >
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
      )}
    </>
  );
};

export default ButtonPills;
