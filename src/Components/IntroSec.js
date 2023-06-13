import landingDesk from "../assets/image-hero-desktop.png";
import landingMob from "../assets/image-hero-mobile.png";
import client1 from "../assets/client-audiophile.svg";
import client2 from "../assets/client-databiz.svg";
import client3 from "../assets/client-maker.svg";
import client4 from "../assets/client-meet.svg";
import MediaQuery from "react-responsive";
import { useRef } from "react";
export default function IntroSec() {
  const ImgRef = useRef(null);
  function showImg() {
    ImgRef.current.classList.add("animate-showContent");
  }
  return (
    <section className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-10 gap-y-8">
      <MediaQuery minWidth={1224}>
        <img
          src={landingDesk}
          alt=""
          className="order-1 h-3/4"
          onLoad={showImg}
          ref={ImgRef}
        />
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <img src={landingMob} alt="" className="" />
      </MediaQuery>
      <div className=" flex flex-col  xl:self-center xl:gap-y-8 ">
        <h3 className=" text-5xl font-bold">Make Remote Work</h3>
        <p className="text-xl xl:text-2xl text-gray-900/80">
          Get your team in sync, no matter your location . Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="px-4 py-2  bg-black text-white rounded-xl mx-auto my-2 xl:mx-0 w-fit">
          Learn More
        </button>
        <div className="w-full flex justify-between">
          <img src={client1} alt="" />
          <img src={client2} alt="" />
          <img src={client3} alt="" />
          <img src={client4} alt="" />
        </div>
      </div>
    </section>
  );
}
