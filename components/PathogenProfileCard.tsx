'use client';

import React from 'react';
import { PlagueOutbreakDataset } from '@/lib/definitions';
import { Activity, ShieldAlert, Pill, AlertTriangle, FileText } from 'lucide-react';

interface PathogenProfileCardProps {
  pathogen: PlagueOutbreakDataset['pathogen'];
}

export function PathogenProfileCard({ pathogen }: PathogenProfileCardProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
      <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3 mb-4">
        <div className="p-2 bg-amber-50 text-amber-700 rounded-lg border border-amber-200">
          <Activity className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">
            PATHOGEN TAXONOMY & CLINICAL PROFILE
          </h3>
          <p className="text-xs text-slate-500 font-mono">
            Etiology, transmission dynamics, and first-line antimicrobial stockpiles
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
          <span className="font-mono text-slate-500 block uppercase">Pathogen Agent</span>
          <p className="text-sm font-bold text-slate-900 mt-0.5 italic">
            {pathogen.scientificName}
          </p>
          <span className="text-[11px] text-slate-600 block mt-1">
            Gram-negative rod / facultative anaerobe
          </span>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
          <span className="font-mono text-slate-500 block uppercase">Clinical Syndrome</span>
          <p className="text-sm font-bold text-slate-900 mt-0.5">
            {pathogen.clinicalSyndrome}
          </p>
          <span className="text-[11px] text-slate-600 block mt-1">
            High mortality if untreated within 24h
          </span>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
          <span className="font-mono text-slate-500 block uppercase">Incubation Period</span>
          <p className="text-sm font-bold text-amber-700 mt-0.5">
            {pathogen.incubationPeriodHours}
          </p>
          <span className="text-[11px] text-slate-600 block mt-1">
            Active 7-day observation window
          </span>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
          <span className="font-mono text-slate-500 block uppercase">Untreated Case Fatality</span>
          <p className="text-sm font-bold text-red-600 mt-0.5">
            ~{pathogen.caseFatalityUntreatedPercent}% (Untreated)
          </p>
          <span className="text-[11px] text-slate-600 block mt-1">
            Drop to &lt;15% with prompt aminoglycosides
          </span>
        </div>
      </div>

      <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200">
        <span className="font-mono text-xs font-semibold text-slate-800 flex items-center gap-1.5 mb-2">
          <Pill className="w-4 h-4 text-blue-600" />
          RECOMMENDED ANTIMICROBIAL REGIMENS & POST-EXPOSURE PROPHYLAXIS:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {pathogen.firstLineAntibiotics.map((abx, idx) => (
            <div key={idx} className="p-2 bg-white rounded-lg border border-slate-200 text-xs font-mono text-slate-700">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 inline-block mr-1.5"></span>
              {abx}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
