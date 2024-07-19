import React from "react";
import Image from "next/image";
import prof from "../../../public/images/prof.jpg";
import AnimatedText from "./AnimatedText";
import Time from "./time";
import Info from "./Info";

export default function Tutor() {
  return (
    <section className="w-full h-screen">
      
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4">
          <AnimatedText
            text="Personal and Online Classes Available"
            className="!text-3xl !text-left xl:!text-4xl lg:!text-4xl !font-semibold md:!text-4xl sm:!text-3xl"
          />

<hr className=" h-px mt-4 bg-gray-200 border-0 dark:bg-gray-700"/>
        </div>

        
      </div>

      <Info/>
    </section>
  );
}

// You can take your lessons in person or remotely from the convenience of your own home or workplace, at your own pace and time.