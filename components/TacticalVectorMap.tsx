'use client';

import React, { useState } from 'react';
import { EpicenterNode, TransmissionVector } from '@/lib/definitions';
import { WORLD_LANDMASS_PATH } from './WorldVectorPaths';
import { ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface TacticalVectorMapProps {
  nodes: EpicenterNode[];
  vectors: TransmissionVector[];
  selectedNode: EpicenterNode | null;
  onSelectNode: (node: EpicenterNode) => void;
}

export function TacticalVectorMap({
  nodes,
  vectors,
  selectedNode,
  onSelectNode
}: TacticalVectorMapProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Mercator projection calculation (normalized 0-1000 x 0-500)
  const projectCoords = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 1000;
    const clampedLat = Math.max(-75, Math.min(80, lat));
    const y = ((82 - clampedLat) / 155) * 500;
    return { x, y };
  };

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.35, 4));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.35, 0.75));
  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  const focusRegion = (region: 'global' | 'siberia' | 'central-asia' | 'global-ports') => {
    if (region === 'global') {
      handleResetZoom();
    } else if (region === 'siberia') {
      setZoomLevel(2.8);
      setPanOffset({ x: -480, y: 70 });
    } else if (region === 'central-asia') {
      setZoomLevel(2.2);
      setPanOffset({ x: -400, y: 20 });
    } else if (region === 'global-ports') {
      setZoomLevel(1.4);
      setPanOffset({ x: -100, y: 0 });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panOffset.x, y: e.clientY - panOffset.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPanOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="relative w-full h-[540px] bg-[#0c1427] rounded-xl overflow-hidden border border-slate-700/70 select-none shadow-inner">
      {/* HUD Header Toolbar */}
      <div className="absolute top-3 left-3 z-20 flex items-center gap-2">
        <div className="bg-[#111c38]/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-mono text-slate-200 flex items-center gap-2 shadow">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
          <span className="text-red-400 font-semibold tracking-wider">TACTICAL VECTOR GRID</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">ZOOM: {Math.round(zoomLevel * 100)}%</span>
        </div>

        {/* Region Focus Presets */}
        <div className="hidden md:flex items-center gap-1 bg-[#111c38]/90 backdrop-blur-md p-1 rounded-lg border border-slate-700">
          <button
            onClick={() => focusRegion('global')}
            className="px-2 py-1 text-[11px] font-mono rounded text-slate-300 hover:text-white hover:bg-slate-700/60 transition"
          >
            Global
          </button>
          <button
            onClick={() => focusRegion('siberia')}
            className="px-2 py-1 text-[11px] font-mono rounded bg-red-500/20 text-red-300 border border-red-500/30 hover:bg-red-500/30 transition"
          >
            Siberia Epicenter
          </button>
          <button
            onClick={() => focusRegion('central-asia')}
            className="px-2 py-1 text-[11px] font-mono rounded text-slate-300 hover:text-white hover:bg-slate-700/60 transition"
          >
            Central Asia
          </button>
          <button
            onClick={() => focusRegion('global-ports')}
            className="px-2 py-1 text-[11px] font-mono rounded text-slate-300 hover:text-white hover:bg-slate-700/60 transition"
          >
            Air Hubs
          </button>
        </div>
      </div>

      {/* Floating Zoom & Pan Controls */}
      <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-[#111c38]/90 backdrop-blur-md p-1 rounded-lg border border-slate-700 shadow">
        <button
          onClick={handleZoomIn}
          title="Zoom In"
          className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700/70 rounded transition"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          title="Zoom Out"
          className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700/70 rounded transition"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleResetZoom}
          title="Reset Zoom & Pan"
          className="p-1.5 text-slate-300 hover:text-white hover:bg-slate-700/70 rounded transition"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* Interactive Map SVG Canvas */}
      <div
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full"
          style={{
            transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomLevel})`,
            transformOrigin: '500px 250px',
            transition: isDragging ? 'none' : 'transform 0.25s ease-out'
          }}
        >
          <defs>
            <pattern id="tacticalGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1e293b" strokeWidth="0.5" strokeOpacity="0.6" />
            </pattern>
            <radialGradient id="epicenterGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#dc2626" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#991b1b" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="quarantineGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#d97706" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="portGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Background Grid */}
          <rect width="1000" height="500" fill="#090f1d" />
          <rect width="1000" height="500" fill="url(#tacticalGrid)" />

          {/* Global Vector Landmass Basemap */}
          <path
            d={WORLD_LANDMASS_PATH}
            fill="#162238"
            stroke="#2a3b5c"
            strokeWidth="0.75"
            strokeLinejoin="round"
          />

          {/* Epicenter Concentric Wave Rings */}
          {(() => {
            const origin = projectCoords(52.2896, 104.2806);
            return (
              <g className="pointer-events-none">
                <circle cx={origin.x} cy={origin.y} r="65" fill="none" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.35" />
                <circle cx={origin.x} cy={origin.y} r="130" fill="none" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.25" />
                <circle cx={origin.x} cy={origin.y} r="210" fill="none" stroke="#ef4444" strokeWidth="0.5" strokeDasharray="5 5" opacity="0.15" />
              </g>
            );
          })()}

          {/* Transmission Vectors Arcs */}
          {vectors.map(vector => {
            const originNode = nodes.find(n => n.id === vector.originNodeId);
            const destNode = nodes.find(n => n.id === vector.destinationNodeId);
            if (!originNode || !destNode) return null;

            const p1 = projectCoords(originNode.lat, originNode.lng);
            const p2 = projectCoords(destNode.lat, destNode.lng);

            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const midX = (p1.x + p2.x) / 2;
            const midY = (p1.y + p2.y) / 2 - Math.min(60, Math.sqrt(dx * dx + dy * dy) * 0.18);

            const isRail = vector.vectorMode === 'Rail Transit';
            const isRoad = vector.vectorMode === 'Overland Border';

            return (
              <g key={vector.id} className="cursor-pointer group">
                <path
                  d={`M ${p1.x} ${p1.y} Q ${midX} ${midY} ${p2.x} ${p2.y}`}
                  fill="none"
                  stroke={isRoad ? "#f59e0b" : isRail ? "#ec4899" : "#38bdf8"}
                  strokeWidth={isRoad ? 1.8 : 1.2}
                  strokeDasharray={isRail ? "4 3" : isRoad ? "none" : "3 2"}
                  opacity={0.7}
                  className="transition group-hover:opacity-100 group-hover:stroke-width-2"
                />
              </g>
            );
          })}

          {/* Monitored Nodes Pins */}
          {nodes.map(node => {
            const { x, y } = projectCoords(node.lat, node.lng);
            const isEpicenter = node.category === 'Origin Epicenter';
            const isHospital = node.category === 'Hospital Quarantine';
            const isSelected = selectedNode?.id === node.id;

            return (
              <g
                key={node.id}
                transform={`translate(${x}, ${y})`}
                className="cursor-pointer transition transform hover:scale-125"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectNode(node);
                }}
              >
                {/* Background Radar Glow */}
                <circle
                  r={isEpicenter ? 16 : isHospital ? 13 : 9}
                  fill={isEpicenter ? "url(#epicenterGlow)" : isHospital ? "url(#quarantineGlow)" : "url(#portGlow)"}
                />

                {/* Core Indicator Circle */}
                <circle
                  r={isEpicenter ? 6.5 : isHospital ? 5.5 : 4}
                  fill={isEpicenter ? "#dc2626" : isHospital ? "#d97706" : "#0284c7"}
                  stroke="#ffffff"
                  strokeWidth={isSelected ? 2 : 1}
                />

                {/* Pulsing inner dot for active lockdown */}
                {(isEpicenter || isHospital) && (
                  <circle
                    r="2.5"
                    fill="#ffffff"
                    className="animate-ping opacity-75"
                  />
                )}

                {/* Node Label Text */}
                <text
                  x={x > 800 ? -8 : 9}
                  y={4}
                  fontSize={isEpicenter ? "8.5" : "7.5"}
                  fontWeight="600"
                  fontFamily="monospace"
                  fill={isSelected ? "#38bdf8" : isEpicenter ? "#fca5a5" : "#e2e8f0"}
                  textAnchor={x > 800 ? "end" : "start"}
                  className="pointer-events-none drop-shadow"
                >
                  {node.name.length > 24 ? node.name.slice(0, 24) + '…' : node.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Map Footer Status Bar */}
      <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-wrap items-center justify-between gap-2 bg-[#111c38]/95 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-700 text-xs text-slate-300 font-mono shadow">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-red-400">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span> Origin Epicenter
          </span>
          <span className="flex items-center gap-1.5 text-amber-400">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Hospital Quarantine
          </span>
          <span className="flex items-center gap-1.5 text-sky-400">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span> International Port
          </span>
        </div>
        <div className="text-[11px] text-slate-400">
          Click any node to inspect quarantine telemetry & receipts
        </div>
      </div>
    </div>
  );
}
