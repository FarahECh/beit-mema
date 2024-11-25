"use client";
import React from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-100 animate-pulse flex items-center justify-center">
      Loading map...
    </div>
  ),
});

export default function LocationsSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-4">
      <div className="h-[400px] lg:h-auto w-full lg:flex-1 rounded-xl overflow-hidden border border-black">
        <Map />
      </div>
      <div className="w-full lg:w-[30%] flex flex-col gap-4 px-4 lg:px-0 lg:pl-4">
        <div className="bg-main/20 rounded-lg p-6 flex-1">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <h3 className="font-metropolis-medium text-lg">Landmarks</h3>
            <ul className="font-metropolis-regular">
              <li>• Saint Rafqa</li>
              <li>• Saint Hardini</li>
              <li>• Kfifen Monastery</li>
            </ul>
          </div>
        </div>

        <div className="bg-main/20 rounded-lg p-6 flex-1">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <h3 className="font-metropolis-medium text-lg">Vineyards</h3>
            <ul className="font-metropolis-regular">
              <li>• Ixsir Winery | 15 min</li>
              <li>• Atibaia Winery | 19 min</li>
            </ul>
          </div>
        </div>

        <div className="bg-main/20 rounded-lg p-6 flex-1">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <h3 className="font-metropolis-medium text-lg">Attractions</h3>
            <ul className="font-metropolis-regular">
              <li>• Batroun Old Souk | 19 km</li>
              <li>• Phoenician Wall | 18.8 km</li>
              <li>• Nabu Museum | 27 km</li>
            </ul>
          </div>
        </div>

        <div className="bg-main/20 rounded-lg p-6 flex-1">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4">
            <h3 className="font-metropolis-medium text-lg">Restuarants</h3>
            <ul className="font-metropolis-regular">
              <li>• Nabi' Al Joz, Mayfouq</li>
              <li>• Day3etna restaurant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
