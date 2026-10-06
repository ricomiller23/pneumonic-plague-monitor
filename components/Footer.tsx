'use client';

import React from 'react';
import { ShieldCheck, ExternalLink, Globe } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-12 py-8 text-xs text-slate-500 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-slate-800">
            PESTIS.MONITOR — Siberian Pneumonic Plague Outbreak Surveillance Terminal
          </p>
          <p className="mt-0.5 text-slate-500">
            Automated 4x/day scheduled pulse (00:00, 06:00, 12:00, 18:00 UTC) with dynamic screen refresh on focus.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-[11px]">
          <span className="flex items-center gap-1.5 text-slate-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Case Definitions Strictly Isolated
          </span>
          <span className="text-slate-300">|</span>
          <a
            href="https://github.com/ricomiller23"
            target="_blank"
            rel="noreferrer"
            className="text-slate-600 hover:text-slate-900 transition flex items-center gap-1"
          >
            GitHub Repository <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
