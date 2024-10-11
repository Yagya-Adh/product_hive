"use clinet";
interface IPageTextHeading {
  variant: string | "our-service" | "our-process";
  preText?: string;
  higlightText: string;
  postText?: string;
  title?: string;
}
const PageTextHeading = ({
  variant,
  preText,
  higlightText,
  postText,
  title,
}: IPageTextHeading) =>
  variant === "our-process" ? (
    <div className="flex flex-col items-center text-white overflow-hidden relative">
      <p className="font-bold text-xl ">{title && title}</p>
      <h1 className="text-6xl max-w-screen-xl font-semibold   text-center py-10 px-10 mx-auto">
        {preText && preText}{" "}
        <span className="text-productHives-buttonColor  ">
          {higlightText && higlightText}{" "}
        </span>{" "}
        {postText && postText}
      </h1>
    </div>
  ) : variant === "our-service" ? (
    <div className="flex flex-col items-center">
      <p className="font-bold text-xl ">{title && title}</p>
      <h1 className="text-6xl max-w-screen-xl font-semibold capitalize text-center py-10 px-10 mx-auto">
        {preText && preText}
        <span className="text-productHives-buttonColor capitalize">
          {higlightText && higlightText}{" "}
        </span>
        {postText && postText}
      </h1>
    </div>
  ) : null;

export default PageTextHeading;
