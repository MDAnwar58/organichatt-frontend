import React from "react";
import { ImageUrl } from "../../../../services/ApiCalling";
import Image from "../../common/components/Image";

export default function OfferItem({ offer }) {
  return (
    <a href="" className="rounded-xl border shadow-md">
      <Image
        src={offer.image_url}
        alt={offer.name}
        className="rounded-xl xl:h-[35vh] lg:h-[45vh] 4md:h-[40vh] sm:h-[35vh] 2xs:h-[45vh] 3xs:h-[40vh] 5xs:h-[35vh] h-[30vh] border-0 w-full"
      />
      <div className="flex justify-between text-gray-500 py-1 px-3">
        <span>End day and time: - </span>
        <span>1d 10: 20: 30</span>
      </div>
    </a>
  );
}
