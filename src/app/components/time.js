import React from "react";

export default function Time() {
  return (
    <>
      <div className=" custom-img bg-fixed bg-center bg-no-repeat bg-cover min-h-[200px]">
        
        <div className="absolute inset-0 bg-gradient-to-r from-black from-2%" />
      </div>
      
      <div className="flex w-full justify-center items-center p-8 h-auto">
        <table class="table-auto border-separate border-spacing-2 border border-slate-500 w-fit">
          <thead>
            <tr>
              <th>
                <button class="group flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-10 py-4 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-sky-900 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
                  Time Slots
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" font-semibold">
              <td className="border border-slate-700 P-3 hover:bg-slate-200">
                Session One
              </td>
              <td className="border border-slate-700 p-3 hover:bg-slate-200">
                Session Two
              </td>
              <td className="border border-slate-700 p-3 hover:bg-slate-200">
                Session Three
              </td>
              <td className="border border-slate-700 p-3 hover:bg-slate-200">
                Session Four
              </td>
            </tr>
            <tr>
              <td>9:00AM – 11:00AM</td>
              <td>11:30AM – 01:30PM</td>
              <td>02:00PM – 04:30PM</td>
              <td>05:00AM – 07:30PM</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td className="border border-slate-700 p-3 bg-black text-white font-medium capitalize hover:bg-slate-700 transition duration-500">
                {" "}
                Register
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
