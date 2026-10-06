'use client';

import React, { useState, useEffect } from 'react';
import { ShieldAlert, RefreshCw, Clock, Radio, Activity } from 'lucide-react';
import { computeCadenceStatus, CadenceStatus } from '@/lib/freshness';

interface NavbarProps {
  onManualRefresh: () => void;
  isRefreshing: boolean;
  lastRefreshedAt: string;
}

export function Navbar({ onManualRefresh, isRefreshing, lastRefreshedAt }: NavbarProps) {
  const [cadence, setCadence] = useState<CadenceStatus>(computeCadenceStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setCadence(computeCadenceStatus());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Incident Tag */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-sm shadow-red-200">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold text-slate-900 tracking-tight font-sans">
                PESTIS<span className="text-red-600">.MONITOR</span>
              </h1>
              <span className="px-2 py-0.5 text-[10px] font-mono font-semibold uppercase rounded bg-red-100 text-red-800 border border-red-200">
                PNEUMONIC PLAGUE RADAR
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono">
              Irkutsk Siberia Outbreak & International Expansion Surveillance
            </p>
          </div>
        </div>

        {/* 4x Daily Cadence & Refresh Status Controls */}
        <div className="flex items-center gap-3 font-mono text-xs">
          {/* Scheduled Pulse Countdown */}
          <div className="hidden sm:flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span>4x/DAY CADENCE:</span>
            <span className="font-semibold text-slate-900">{cadence.formattedCountdown}</span>
          </div>

          {/* Real-time Status Badge */}
          <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="font-semibold text-[11px]">ACTIVE SYNC</span>
          </div>

          {/* Manual / Refresh Trigger Button */}
          <button
            onClick={onManualRefresh}
            disabled={isRefreshing}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium transition shadow-xs disabled:opacity-50"
            title="Refresh active telemetry across all verified endpoints"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Syncing…' : 'Refresh'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
