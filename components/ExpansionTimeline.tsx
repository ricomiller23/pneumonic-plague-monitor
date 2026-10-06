'use client';

import React from 'react';
import { TimelineMilestone } from '@/lib/definitions';
import { Clock, MapPin, ExternalLink, ShieldAlert, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface ExpansionTimelineProps {
  timeline: TimelineMilestone[];
}

export function ExpansionTimeline({ timeline }: ExpansionTimelineProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
      <div className="flex items-center gap-2.5 border-b border-slate-100 pb-3 mb-4">
        <div className="p-2 bg-red-50 text-red-600 rounded-lg border border-red-100">
          <Clock className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">
            INCIDENT CHRONOLOGY & EXPANSION TIMELINE
          </h3>
          <p className="text-xs text-slate-500 font-mono">
            Minute-by-minute outbreak development from laboratory exposure to international containment alerts
          </p>
        </div>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-6">
        {timeline.map((event, idx) => {
          const isFatal = event.classification === 'Fatal';
          const isIsolation = event.classification === 'Suspected / Medical Isolation';
          const isAlert = event.classification === 'International Alert';

          return (
            <div key={idx} className="relative group">
              {/* Timeline Pin Icon */}
              <div
                className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-white shadow-xs ${
                  isFatal
                    ? 'bg-red-600 ring-4 ring-red-100'
                    : isIsolation
                    ? 'bg-amber-500 ring-4 ring-amber-100'
                    : isAlert
                    ? 'bg-sky-600 ring-4 ring-sky-100'
                    : 'bg-slate-500 ring-4 ring-slate-100'
                }`}
              />

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 transition">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-900 bg-slate-200/80 px-2 py-0.5 rounded">
                      {event.date} {event.timeUtc ? `· ${event.timeUtc} UTC` : ''}
                    </span>
                    <span className={`px-2 py-0.5 text-[10px] font-mono rounded border ${
                      isFatal
                        ? 'bg-red-100 text-red-800 border-red-200'
                        : isIsolation
                        ? 'bg-amber-100 text-amber-800 border-amber-200'
                        : isAlert
                        ? 'bg-sky-100 text-sky-800 border-sky-200'
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {event.classification}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {event.location}
                  </span>
                </div>

                <h4 className="text-sm font-semibold text-slate-900 mt-2">
                  {event.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {event.details}
                </p>

                {/* Inline receipts */}
                {event.receipts.length > 0 && (
                  <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex flex-wrap items-center gap-3 text-[11px] font-mono">
                    <span className="text-slate-400">Sources:</span>
                    {event.receipts.map((rc, rIdx) => (
                      <a
                        key={rIdx}
                        href={rc.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline"
                      >
                        {rc.sourceName} <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
