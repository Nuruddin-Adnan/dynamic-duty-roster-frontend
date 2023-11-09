"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { AiOutlinePrinter } from "react-icons/ai";
import PrintRosterTable from "./components/PrintRosterTable";

export default function PrintRosterPage() {

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


  return (
    <div className="container mx-auto">
      <div className="rounded overflow-hidden shadow-lg">
        <div className="bg-gray-200 py-2 px-4 flex items-center justify-between">
          <span className="text-gray-700 font-bold text-xl">
            Dynamic Dury Roster
          </span>
          <div className="flex">
            <button
              onClick={handlePrint}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center me-4"
            >
              <span className="text-lg me-2">
                <AiOutlinePrinter />
              </span>
              Print
            </button>
          </div>
        </div>
        <div className="bg-white py-10" ref={componentRef}>
          <div className="text-center text-2xl font-bold font-serif">Duty Roster</div>
          <div className="text-center text-2xl font-bold font-serif">Department of Neuropathology</div>
          <PrintRosterTable />
        </div>
      </div>
    </div>
  );
}
