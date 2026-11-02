import React, { useState } from "react";

export default function FleetDashboard() {
  const [selectedVehicle, setSelectedVehicle] = useState<string | null>(null);

  const fleet = [
    { id: "V-101", plate: "TX-8892", driver: "Marcus Vance", status: "Moving", speed: "62 mph", dest: "Dallas, TX" },
    { id: "V-102", plate: "CA-4410", driver: "Elena Rostova", status: "Docked", speed: "0 mph", dest: "Ontario, CA" },
    { id: "V-103", plate: "IL-9102", driver: "David Chen", status: "Inspection", speed: "0 mph", dest: "Chicago, IL" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">RevoFlux Fleet & Dispatch Command</h1>
          <p className="text-sm text-slate-400">Live GPS telematics, driver routing, and electronic Proof of Delivery.</p>
        </div>
        <div className="flex gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            ● 28 Trucks Active on Route
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4 text-white">Active Dispatch Queue</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase text-slate-400 border-b border-slate-700">
                <tr>
                  <th className="pb-3">Unit</th>
                  <th className="pb-3">Driver</th>
                  <th className="pb-3">Status</th>
                  <th className="pb-3">Speed</th>
                  <th className="pb-3">Destination</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {fleet.map((v) => (
                  <tr key={v.id} className="hover:bg-slate-700/30 cursor-pointer">
                    <td className="py-3 font-medium text-white">{v.id} ({v.plate})</td>
                    <td className="py-3 text-slate-300">{v.driver}</td>
                    <td className="py-3">
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {v.status}
                      </span>
                    </td>
                    <td className="py-3 text-slate-300">{v.speed}</td>
                    <td className="py-3 text-slate-300">{v.dest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4 text-white">Telematics Snapshot</h2>
          <div className="space-y-4 text-sm text-slate-300">
            <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700/40">
              <div className="text-xs text-slate-400">Total Fleet Fuel Economy</div>
              <div className="text-xl font-bold text-white mt-1">7.4 MPG (+0.3 avg)</div>
            </div>
            <div className="p-3 bg-slate-900/50 rounded-lg border border-slate-700/40">
              <div className="text-xs text-slate-400">On-Time Delivery Rate</div>
              <div className="text-xl font-bold text-emerald-400 mt-1">98.2% (Last 30 Days)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
