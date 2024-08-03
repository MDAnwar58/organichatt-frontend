import React from "react";
import Image from "../common/components/Image";
import { useSelector } from "react-redux";

export default function Banner() {
  const banner = useSelector((state) => state.home.banner);

  return (
    <div className="px-20 py-10">
      <Image
        src={banner.image_url}
        className="sm:h-[65vh] xs:h-[60vh] h-[50vh] w-full rounded-2xl"
        alt="banner"
      />
    </div>
  );
}
