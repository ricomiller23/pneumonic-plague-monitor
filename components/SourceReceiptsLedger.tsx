'use client';

import React, { useState } from 'react';
import { SourceReceipt } from '@/lib/definitions';
import { Newspaper, ExternalLink, ShieldCheck, Search, KeyRound, CheckCircle2 } from 'lucide-react';

interface SourceReceiptsLedgerProps {
  receipts: SourceReceipt[];
}

export function SourceReceiptsLedger({ receipts }: SourceReceiptsLedgerProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTier, setSelectedTier] = useState<string>('all');

  const filteredReceipts = receipts.filter(r => {
    const matchesSearch =
      r.sourceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.verbatimExcerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTier = selectedTier === 'all' || r.tier === selectedTier;
    return matchesSearch && matchesTier;
  });

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="p-2 bg-blue-50 text-blue-600 rounded-lg border border-blue-100">
            <Newspaper className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">
              AUTHORITATIVE SOURCE RECEIPTS LEDGER
            </h3>
            <p className="text-xs text-slate-500 font-mono">
              Direct primary quotes with publication & retrieval receipts for every rendered metric
            </p>
          </div>
        </div>

        {/* NYTimes Account Connection Indicator */}
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-mono">
          <KeyRound className="w-3.5 h-3.5 text-blue-600" />
          <span className="text-slate-600">NYTIMES FEED:</span>
          <span className="text-emerald-700 font-semibold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            denvertrad@aol.com
          </span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 my-4">
        <div className="relative flex-1 min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search source receipts, quotes, or keywords…"
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 font-mono"
          />
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono">
          <span className="text-slate-500 mr-1">TIER:</span>
          {['all', 'Primary Authority', 'National Wire', 'Investigative Press'].map(tier => (
            <button
              key={tier}
              onClick={() => setSelectedTier(tier)}
              className={`px-2.5 py-1 rounded-lg transition ${
                selectedTier === tier
                  ? 'bg-slate-900 text-white font-medium'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tier === 'all' ? 'All Sources' : tier}
            </button>
          ))}
        </div>
      </div>

      {/* Source Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredReceipts.map((rc, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 transition bg-slate-50/50 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className="font-semibold text-xs text-slate-900 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  {rc.sourceName}
                </span>
                <span className={`px-2 py-0.5 text-[10px] font-mono rounded border ${
                  rc.tier === 'Primary Authority'
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : rc.tier === 'National Wire'
                    ? 'bg-blue-50 text-blue-800 border-blue-200'
                    : 'bg-slate-100 text-slate-700 border-slate-200'
                }`}>
                  {rc.tier}
                </span>
              </div>

              <blockquote className="text-xs text-slate-700 italic border-l-2 border-slate-300 pl-2.5 my-2 leading-relaxed">
                "{rc.verbatimExcerpt}"
              </blockquote>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-2 border-t border-slate-200/60 mt-2">
              <div>
                <span>Pub: {rc.publishedAt}</span>
                <span className="mx-1.5">·</span>
                <span>Retrieved: {rc.retrievedAt.slice(0, 10)}</span>
              </div>
              <a
                href={rc.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 hover:underline font-semibold"
              >
                Inspect Receipt <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
