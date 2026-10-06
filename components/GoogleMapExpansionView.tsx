'use client';

import React, { useState } from 'react';
import { EpicenterNode } from '@/lib/definitions';
import { MapPin, Globe, Satellite, Compass, ExternalLink, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface GoogleMapExpansionViewProps {
  nodes: EpicenterNode[];
  selectedNode: EpicenterNode | null;
  onSelectNode: (node: EpicenterNode) => void;
}

export function GoogleMapExpansionView({
  nodes,
  selectedNode,
  onSelectNode
}: GoogleMapExpansionViewProps) {
  const [mapType, setMapType] = useState<'satellite' | 'terrain' | 'roadmap'>('satellite');
  const [zoomLevel, setZoomLevel] = useState<number>(13);

  const activeNode = selectedNode || nodes[0];

  // Google Maps embed URL with dynamic map type (satellite = k, terrain = p, roadmap = m)
  const mapTypeParam = mapType === 'satellite' ? 'k' : mapType === 'terrain' ? 'p' : 'm';
  const embedUrl = `https://maps.google.com/maps?q=${activeNode.lat},${activeNode.lng}&hl=en&z=${zoomLevel}&t=${mapTypeParam}&output=embed`;
  const externalGoogleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${activeNode.lat},${activeNode.lng}`;

  return (
    <div className="flex flex-col w-full h-[540px] bg-slate-900 rounded-xl overflow-hidden border border-slate-700/80 shadow">
      {/* Top Controls Bar */}
      <div className="bg-[#0f172a] px-4 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2.5 z-10">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-sky-500/20 text-sky-400">
            <Globe className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
              GOOGLE MAPS SATELLITE & TERRAIN ENGINE
            </span>
            <span className="ml-2 px-2 py-0.5 text-[10px] font-mono rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              LIVE GEOLOCATION
            </span>
          </div>
        </div>

        {/* Layer Mode Switch */}
        <div className="flex items-center gap-1 bg-slate-800/80 p-0.5 rounded-lg border border-slate-700">
          <button
            onClick={() => setMapType('satellite')}
            className={`px-2.5 py-1 text-xs font-mono rounded transition flex items-center gap-1.5 ${
              mapType === 'satellite'
                ? 'bg-sky-600 text-white font-medium shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Satellite className="w-3.5 h-3.5" /> Satellite
          </button>
          <button
            onClick={() => setMapType('terrain')}
            className={`px-2.5 py-1 text-xs font-mono rounded transition flex items-center gap-1.5 ${
              mapType === 'terrain'
                ? 'bg-sky-600 text-white font-medium shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5" /> Terrain
          </button>
          <button
            onClick={() => setMapType('roadmap')}
            className={`px-2.5 py-1 text-xs font-mono rounded transition flex items-center gap-1.5 ${
              mapType === 'roadmap'
                ? 'bg-sky-600 text-white font-medium shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" /> Road
          </button>
        </div>
      </div>

      {/* Target Location Quick-Jump Pills */}
      <div className="bg-[#1e293b]/70 border-b border-slate-800 px-3 py-2 overflow-x-auto flex items-center gap-1.5 scrollbar-thin">
        <span className="text-[11px] font-mono text-slate-400 shrink-0 mr-1">EPICENTERS & PORTS:</span>
        {nodes.map(n => {
          const isSelected = activeNode.id === n.id;
          return (
            <button
              key={n.id}
              onClick={() => {
                onSelectNode(n);
                setZoomLevel(n.category === 'Origin Epicenter' || n.category === 'Hospital Quarantine' ? 14 : 11);
              }}
              className={`px-2.5 py-1 text-xs rounded-full whitespace-nowrap transition border flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-sky-500/20 text-sky-200 border-sky-400 font-medium'
                  : 'bg-slate-800/90 text-slate-300 border-slate-700 hover:border-slate-500 hover:text-white'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  n.category === 'Origin Epicenter'
                    ? 'bg-red-500'
                    : n.category === 'Hospital Quarantine'
                    ? 'bg-amber-500'
                    : 'bg-sky-400'
                }`}
              />
              {n.name}
            </button>
          );
        })}
      </div>

      {/* Google Maps Interactive Embed Frame */}
      <div className="relative flex-1 w-full bg-slate-950">
        <iframe
          key={`${activeNode.id}-${mapType}-${zoomLevel}`}
          title={`Google Maps View for ${activeNode.name}`}
          src={embedUrl}
          className="w-full h-full border-0"
          loading="lazy"
          allowFullScreen
        />

        {/* Floating Telemetry Badge Overlay */}
        <div className="absolute bottom-3 left-3 bg-[#0f172a]/90 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700/80 text-xs font-mono text-slate-200 shadow-lg pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="text-sky-400 font-semibold">{activeNode.name}</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">{activeNode.lat.toFixed(4)}°N, {activeNode.lng.toFixed(4)}°E</span>
          </div>
          <p className="text-[11px] text-slate-400 mt-0.5">{activeNode.facility}</p>
        </div>

        {/* Direct Link to Google Maps */}
        <a
          href={externalGoogleMapsUrl}
          target="_blank"
          rel="noreferrer"
          className="absolute bottom-3 right-3 bg-[#0f172a]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 hover:border-sky-400 text-xs font-mono text-slate-200 hover:text-sky-300 transition shadow-lg flex items-center gap-1.5"
        >
          Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
