# PESTIS.MONITOR
## Siberian Pneumonic Plague Outbreak & Global Expansion Surveillance Terminal

An institutional public-health surveillance console monitoring the pneumonic plague (*Yersinia pestis*) incident originating at the Irkutsk Anti-Plague Research Institute of Siberia and Far East, Russia, and tracking international containment cordons, transit corridors, and port screening across the world.

### Operational Invariants
1. **4x Daily Cadence & Live Focus Refresh:** Synchronizes on scheduled 6-hour pulses (`00:00`, `06:00`, `12:00`, `18:00 UTC`), plus dynamically refetches on every page mount, window focus, `visibilitychange`, and `pageshow`.
2. **Strict Case Definition Isolation:** Confirmed cases, suspected/quarantine observations, and fatalities are strictly separated into discrete telemetry channels.
3. **Receipt Traceability:** Every metric, node, timeline event, and vector carries direct receipts with `source_url`, `published_at`, `retrieved_at`, and verbatim excerpts.
4. **Dual-Mode Interactive Cartography:**
   - **Tactical Vector Grid:** Computer-generated interactive vector map with Mercator projection, SVG landmass basemaps, concentric contagion wave rings, vector arcs, and zoom/pan HUD controls.
   - **Google Maps Satellite & Terrain Engine:** High-resolution interactive Google Maps embed with satellite imagery, terrain topography, and coordinate jump presets.
5. **Integrated Newsrooms & Authorities:**
   - *The Indian Express*
   - *Daily Mail*
   - *Daily Star*
   - *The New York Times* (Authenticated ingestion connector for `denvertrad@aol.com`)
   - *The Guardian*
   - *British Medical Journal (BMJ)*
   - *The Moscow Times*
   - *Rospotrebnadzor* (Russian Federal Service for Surveillance on Consumer Rights Protection)
   - *World Health Organization (WHO DON)*

### Build & Test Suite
- `npm run prebuild`: Validates receipt URLs, bounding boxes, and case isolation.
- `npm test`: Vitest suite verifying dataset integrity and countdown calculations.
- `npm run build`: Production Next.js compilation.
