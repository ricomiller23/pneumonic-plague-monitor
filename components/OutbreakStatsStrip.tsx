'use client';

import React from 'react';
import { PlagueOutbreakDataset } from '@/lib/definitions';
import { Skull, Users, ShieldCheck, Building2, Plane, AlertOctagon } from 'lucide-react';

interface OutbreakStatsStripProps {
  metrics: PlagueOutbreakDataset['metrics'];
}

export function OutbreakStatsStrip({ metrics }: OutbreakStatsStripProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {/* Primary Fatalities */}
      <div className="bg-white p-3.5 rounded-xl border border-red-200/90 shadow-xs">
        <div className="flex items-center justify-between text-xs font-mono text-red-700">
          <span>FATALITIES</span>
          <Skull className="w-4 h-4 text-red-600" />
        </div>
        <p className="text-2xl font-bold font-mono text-red-600 mt-1">
          {metrics.primaryFatalities}
        </p>
        <span className="text-[11px] text-slate-500 block mt-0.5">
          Primary Lab Technician (28yo)
        </span>
      </div>

      {/* Contacts Under Quarantine */}
      <div className="bg-white p-3.5 rounded-xl border border-amber-200/90 shadow-xs">
        <div className="flex items-center justify-between text-xs font-mono text-amber-700">
          <span>UNDER QUARANTINE</span>
          <Users className="w-4 h-4 text-amber-600" />
        </div>
        <p className="text-2xl font-bold font-mono text-amber-600 mt-1">
          {metrics.contactsUnderQuarantine}
        </p>
        <span className="text-[11px] text-slate-500 block mt-0.5">
          Hospital & Institute Contacts
        </span>
      </div>

      {/* Confirmed Secondary Transmission */}
      <div className="bg-white p-3.5 rounded-xl border border-emerald-200/90 shadow-xs">
        <div className="flex items-center justify-between text-xs font-mono text-emerald-700">
          <span>SECONDARY SPREAD</span>
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
        </div>
        <p className="text-2xl font-bold font-mono text-emerald-600 mt-1">
          {metrics.confirmedSecondaryCases}
        </p>
        <span className="text-[11px] text-slate-500 block mt-0.5">
          No secondary cases confirmed
        </span>
      </div>

      {/* Quarantined Facilities */}
      <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between text-xs font-mono text-slate-600">
          <span>FACILITIES CORDONED</span>
          <Building2 className="w-4 h-4 text-slate-600" />
        </div>
        <p className="text-2xl font-bold font-mono text-slate-900 mt-1">
          {metrics.quarantinedFacilities}
        </p>
        <span className="text-[11px] text-slate-500 block mt-0.5">
          Institute Lab & Hospital Ward
        </span>
      </div>

      {/* International Screening Ports */}
      <div className="bg-white p-3.5 rounded-xl border border-sky-200/90 shadow-xs">
        <div className="flex items-center justify-between text-xs font-mono text-sky-700">
          <span>SCREENING PORTS</span>
          <Plane className="w-4 h-4 text-sky-600" />
        </div>
        <p className="text-2xl font-bold font-mono text-sky-600 mt-1">
          {metrics.internationalScreeningPorts}
        </p>
        <span className="text-[11px] text-slate-500 block mt-0.5">
          Airports & Border Crossings
        </span>
      </div>

      {/* Natural Foci Surveillance */}
      <div className="bg-white p-3.5 rounded-xl border border-purple-200/90 shadow-xs">
        <div className="flex items-center justify-between text-xs font-mono text-purple-700">
          <span>NATURAL FOCI ZONES</span>
          <AlertOctagon className="w-4 h-4 text-purple-600" />
        </div>
        <p className="text-2xl font-bold font-mono text-purple-600 mt-1">
          {metrics.naturalFociActiveSurveillance}
        </p>
        <span className="text-[11px] text-slate-500 block mt-0.5">
          Baikal / Steppe Rodent Reservoirs
        </span>
      </div>
    </div>
  );
}
