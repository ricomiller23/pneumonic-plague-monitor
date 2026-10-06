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
