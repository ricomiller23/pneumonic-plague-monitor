'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { PLAGUE_DATASET } from '@/lib/dataset';
import { Navbar } from '@/components/Navbar';
import { OutbreakStatsStrip } from '@/components/OutbreakStatsStrip';
import { DualModeMapContainer } from '@/components/DualModeMapContainer';
import { PathogenProfileCard } from '@/components/PathogenProfileCard';
import { ExpansionTimeline } from '@/components/ExpansionTimeline';
import { SourceReceiptsLedger } from '@/components/SourceReceiptsLedger';
import { Footer } from '@/components/Footer';
import { AlertTriangle, ShieldAlert } from 'lucide-react';

export default function Home() {
  const [dataset, setDataset] = useState(PLAGUE_DATASET);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastRefreshedAt, setLastRefreshedAt] = useState<string>(new Date().toISOString());
  const lastRefreshTimeRef = useRef<number>(Date.now());

  // Dynamic Refresh Handler (calls /api/refresh)
  const triggerRefresh = useCallback(async (isAuto = false) => {
    // 15-second throttle for automated events to avoid spamming
    const now = Date.now();
    if (isAuto && now - lastRefreshTimeRef.current < 15000) {
      return;
    }

    lastRefreshTimeRef.current = now;
    setIsRefreshing(true);

    try {
      const res = await fetch('/api/refresh', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      if (res.ok) {
        const json = await res.json();
        if (json.dataset) {
          setDataset(json.dataset);
        }
        setLastRefreshedAt(json.refreshedAt || new Date().toISOString());
      }
    } catch (err) {
      console.warn("Telemetry refresh warning:", err);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  // Screen refresh listeners: mount, focus, visibilitychange, pageshow
  useEffect(() => {
    // Immediate initial refresh on mount
    triggerRefresh(true);

    const handleFocus = () => triggerRefresh(true);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        triggerRefresh(true);
      }
    };
    const handlePageShow = () => triggerRefresh(true);

    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, [triggerRefresh]);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* Institutional Top Navbar with 4x/day pulse timer and manual trigger */}
      <Navbar
        onManualRefresh={() => triggerRefresh(false)}
        isRefreshing={isRefreshing}
        lastRefreshedAt={lastRefreshedAt}
      />

      {/* Main Surveillance Console */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex-1 space-y-6">
        {/* Breaking Intelligence & Dual-Source Verification Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-red-950 text-white rounded-xl p-4 border border-red-500/40 shadow-xs relative overflow-hidden">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-red-600/20 border border-red-500/40 text-red-400 shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5 text-red-400 animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-red-600 text-white tracking-wider">
                  BREAKING CASUALTY TELEMETRY · OCT 7, 2026
                </span>
                <span className="text-xs font-mono text-slate-300">
                  Dual-Source Divergence & Diplomatic Inquiry Active
                </span>
              </div>
              <h2 className="text-sm font-bold text-white mt-1.5 leading-snug">
                2 Fatalities Reported Across International Wires (1 Confirmed · 1 Disputed Second Death Under Active WHO Inquiry)
              </h2>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                International press outlets (<em>Daily Mail</em>, <em>Daily Star</em>, <em>United24</em>) reported an alleged second fatality at an Irkutsk district hospital involving acute pulmonary deterioration. Kremlin spokesperson Dmitry Peskov and federal agency Rospotrebnadzor have formally denied the second death, dismissing reports as &quot;untrue information&quot; while classifying cases as &quot;pneumonia of unknown etiology.&quot; The World Health Organization (WHO) has formally intervened with an official request for epidemiological and laboratory dossiers from Moscow, and the U.S. Embassy in Moscow has issued an active regional health advisory.
              </p>
            </div>
          </div>
        </div>

        {/* Outbreak Metrics Strip */}
        <OutbreakStatsStrip metrics={dataset.metrics} />

        {/* Dual Mode Interactive Maps (Tactical Vector + Google Maps) */}
        <DualModeMapContainer
          nodes={dataset.nodes}
          vectors={dataset.vectors}
        />

        {/* Pathogen Taxonomy & Medical Countermeasures */}
        <PathogenProfileCard pathogen={dataset.pathogen} />

        {/* Expansion & Incident Chronology Timeline */}
        <ExpansionTimeline timeline={dataset.timeline} />

        {/* Authoritative Receipts Ledger */}
        <SourceReceiptsLedger receipts={dataset.verifiedSourcesDirectory} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
