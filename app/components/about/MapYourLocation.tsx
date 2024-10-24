import Image from "next/image";
import worldMap from "@/app/assets/images/map/worldmap.png";
import ButtonPills from "../button/ButtonPills";
const MapYourLocation = () => {
  return (
    <div className="bg-productHives-colorGrey border-b border-t">
      <div className="mx-auto max-w-screen-2xl px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col p-10">
            <h4 className="font-bold">Our Location</h4>
            <h1 className="font-bold text-6xl text-productHives-mainBackground  py-4">
              <span className="text-productHives-buttonColor">We’re based</span>{" "}
              in New York, USA
            </h1>
            <p className="p-1 py-4">4905 Lake Forest Drive New York, USA</p>
            <div>
              <ButtonPills text="Get Google Map" variant="default" />
            </div>
          </div>

          <div>
            <Image src={worldMap} alt="world_map_" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapYourLocation;
