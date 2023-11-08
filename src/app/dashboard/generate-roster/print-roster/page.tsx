"use client";

import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PrintRosterTable from "./components/PrintRosterTable";
import { AiOutlinePrinter } from "react-icons/ai";

export default function PrintRoster() {
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
        {/* <PrintRosterTable ref={componentRef} /> */}
        <PrintRosterTable />
      </div>
    </div>
  );
}
