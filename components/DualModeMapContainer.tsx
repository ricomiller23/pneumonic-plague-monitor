'use client';

import React, { useState } from 'react';
import { EpicenterNode, TransmissionVector } from '@/lib/definitions';
import { TacticalVectorMap } from './TacticalVectorMap';
import { GoogleMapExpansionView } from './GoogleMapExpansionView';
import { Map, Layers, ShieldAlert, Activity, ExternalLink, Pill, AlertTriangle } from 'lucide-react';

interface DualModeMapContainerProps {
  nodes: EpicenterNode[];
  vectors: TransmissionVector[];
}

export function DualModeMapContainer({ nodes, vectors }: DualModeMapContainerProps) {
  const [mapMode, setMapMode] = useState<'tactical' | 'google-maps'>('tactical');
  const [selectedNode, setSelectedNode] = useState<EpicenterNode>(nodes[0]);

  return (
    <div className="space-y-4">
      {/* Top Map Switcher Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-red-50 text-red-600 border border-red-100">
            <ShieldAlert className="w-5 h-5" />
          </span>
          <div>
            <h2 className="text-sm font-semibold text-slate-900 tracking-tight">
              GEOGRAPHIC EXPANSION & CONTAINMENT SURVEILLANCE MAP
            </h2>
            <p className="text-xs text-slate-500 font-mono">
              Real-time vector telemetry anchored to primary quarantine zones & transit corridors
            </p>
          </div>
        </div>

        {/* The Dual Mode Switch Buttons */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setMapMode('tactical')}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition flex items-center gap-2 ${
              mapMode === 'tactical'
                ? 'bg-slate-900 text-white font-semibold shadow'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
            }`}
          >
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Computer Generated Tactical Map</span>
          </button>

          <button
            onClick={() => setMapMode('google-maps')}
            className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition flex items-center gap-2 ${
              mapMode === 'google-maps'
                ? 'bg-slate-900 text-white font-semibold shadow'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70'
            }`}
          >
            <Map className="w-4 h-4 text-emerald-400" />
            <span>Google Maps (Satellite & Terrain)</span>
          </button>
        </div>
      </div>

      {/* Render Active Map Mode */}
      {mapMode === 'tactical' ? (
        <TacticalVectorMap
          nodes={nodes}
          vectors={vectors}
          selectedNode={selectedNode}
          onSelectNode={setSelectedNode}
        />
      ) : (
        <GoogleMapExpansionView
          nodes={nodes}
          selectedNode={selectedNode}
          onSelectNode={setSelectedNode}
        />
      )}

      {/* Selected Node Telemetry & Quarantine Inspector */}
      {selectedNode && (
        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                <h3 className="text-sm font-semibold text-slate-900">{selectedNode.name}</h3>
                <span className="px-2 py-0.5 text-[11px] font-mono rounded bg-slate-100 text-slate-700 border border-slate-200">
                  {selectedNode.category}
                </span>
                <span className={`px-2 py-0.5 text-[11px] font-mono rounded border ${
                  selectedNode.status === 'Active Lockdown'
                    ? 'bg-red-50 text-red-700 border-red-200'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}>
                  {selectedNode.status}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1 font-mono">
                {selectedNode.facility} — {selectedNode.subdivision}, {selectedNode.country} ({selectedNode.lat.toFixed(4)}°N, {selectedNode.lng.toFixed(4)}°E)
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <div className="px-2.5 py-1 bg-red-50 border border-red-100 rounded-lg text-red-800">
                Fatalities: <strong className="font-bold">{selectedNode.fatalitiesCount}</strong>
              </div>
              <div className="px-2.5 py-1 bg-amber-50 border border-amber-100 rounded-lg text-amber-800">
                Isolated / Contacts: <strong className="font-bold">{selectedNode.suspectedOrQuarantinedCount}</strong>
              </div>
              <div className="px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-lg text-blue-800">
                Secondary Confirmed: <strong className="font-bold">{selectedNode.confirmedCount > 1 ? selectedNode.confirmedCount - 1 : 0}</strong>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div>
              <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                Situational Overview
              </h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {selectedNode.description}
              </p>
              <div className="mt-2.5 p-2 bg-slate-50 rounded-lg border border-slate-200/80">
                <span className="text-[11px] font-semibold text-slate-700 flex items-center gap-1.5 font-mono">
                  <Pill className="w-3.5 h-3.5 text-blue-600" /> MEDICAL COUNTERMEASURES / PROPHYLAXIS:
                </span>
                <p className="text-xs text-slate-600 mt-1">
                  {selectedNode.prophylaxisAdministered}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-slate-700 uppercase tracking-wider font-mono">
                Authoritative Receipts for Location ({selectedNode.receipts.length} sourced)
              </h4>
              <div className="space-y-2 mt-1.5 max-h-44 overflow-y-auto pr-1">
                {selectedNode.receipts.map((rc, idx) => (
                  <div key={idx} className="p-2 bg-slate-50 rounded-lg border border-slate-200 text-xs">
                    <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span className="font-semibold text-slate-800">{rc.sourceName}</span>
                      <span>Published: {rc.publishedAt}</span>
                    </div>
                    <p className="text-slate-700 mt-1 italic text-[11.5px]">
                      "{rc.verbatimExcerpt}"
                    </p>
                    <a
                      href={rc.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1 text-[11px] text-blue-600 hover:text-blue-800 hover:underline font-mono"
                    >
                      Inspect Source Record <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
