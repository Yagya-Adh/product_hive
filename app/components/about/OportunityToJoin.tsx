import CustomTextBanner from "../banner/CustomTextBanner";
import opportunityData from "@/opportunityList.json";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import Revenue from "../home/Revenue";

interface IopportunityData {
  id: number;
  location: string;
  position: string;
  duration: string;
}
const listOpportunity: IopportunityData[] = opportunityData;

const OportunityToJoin = () => {
  return (
    <>
      <section className="bg-productHives-colorGrey">
        <div className="mx-auto px-10 max-w-screen-2xl py-10">
          <div className="flex flex-col">
            <div>
              <CustomTextBanner
                preText="Opportunities to"
                highlightText=" join our awesome team"
                textColor="dark-green"
              />
            </div>
            <div className="bg-productHives-colorGrey p-10">
              {listOpportunity?.map((opportunity) => (
                <div
                  className="flex md:flex-row flex-col lg:justify-between items-center my-4 text-productHives-mainBackground bg-white hover:bg-productHives-buttonColor rounded-2xl py-10 px-4"
                  key={opportunity.id}
                >
                  <h1 className="text-4xl font-bold">{opportunity.position}</h1>
                  <div className="flex items-center">
                    <h2 className="flex items-center font-bold mx-4">
                      <span>
                        <MapPinIcon className="size-6 text-black" />
                      </span>
                      {opportunity.location}
                    </h2>
                    <div className="flex  md:flex-row  flex-col  lg:justify-between items-center">
                      <h3 className="flex items-center font-bold mx-4">
                        <ClockIcon className="size-6  text-black" />
                        {opportunity.duration}
                      </h3>
                      <button
                        onClick={() => alert("clicke here..")}
                        className="text-2xl font-bold flex items-center px-4"
                      >
                        Apply Now{" "}
                        <ArrowRightCircleIcon className="size-8 hover:text-white text-productHives-buttonColor translate-x-0 hover:translate-x-2 duration-200 ease-in-out" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-productHives-mainBackground py-10 my-60">
          <Revenue topCardShow="show" />
        </div>
      </section>
    </>
  );
};

export default OportunityToJoin;
