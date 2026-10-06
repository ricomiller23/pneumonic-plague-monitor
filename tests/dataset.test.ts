import { describe, it, expect } from 'vitest';
import { PLAGUE_DATASET } from '../lib/dataset';
import { computeCadenceStatus } from '../lib/freshness';

describe('Plague Outbreak Dataset Integrity', () => {
  it('isolates case definitions without conflating confirmed vs quarantined', () => {
    expect(PLAGUE_DATASET.metrics.primaryFatalities).toBe(1);
    expect(PLAGUE_DATASET.metrics.contactsUnderQuarantine).toBe(197);
    expect(PLAGUE_DATASET.metrics.confirmedSecondaryCases).toBe(0);
    expect(PLAGUE_DATASET.metrics.confirmedSecondaryCases).not.toBe(PLAGUE_DATASET.metrics.contactsUnderQuarantine);
  });

  it('validates all node coordinates within global lat/lng boundaries', () => {
    expect(PLAGUE_DATASET.nodes.length).toBeGreaterThan(0);
    for (const node of PLAGUE_DATASET.nodes) {
      expect(node.lat).toBeGreaterThanOrEqual(-90);
      expect(node.lat).toBeLessThanOrEqual(90);
      expect(node.lng).toBeGreaterThanOrEqual(-180);
      expect(node.lng).toBeLessThanOrEqual(180);
    }
  });

  it('verifies each node carries authoritative source receipts with non-empty URLs', () => {
    for (const node of PLAGUE_DATASET.nodes) {
      expect(node.receipts.length).toBeGreaterThan(0);
      for (const rc of node.receipts) {
        expect(rc.sourceUrl).toMatch(/^https?:\/\//);
        expect(rc.retrievedAt).toBeDefined();
        expect(rc.verbatimExcerpt.length).toBeGreaterThan(10);
      }
    }
  });

  it('verifies cadence schedule is configured for 4 times daily', () => {
    expect(PLAGUE_DATASET.cadenceSchedule.timesPerDay).toBe(4);
    expect(PLAGUE_DATASET.cadenceSchedule.syncHoursUtc).toEqual([0, 6, 12, 18]);
  });

  it('computes countdown timer string matching HH:MM:SS format', () => {
    const status = computeCadenceStatus(new Date());
    expect(status.formattedCountdown).toMatch(/^\d{2}:\d{2}:\d{2}$/);
    expect(status.secondsUntilNextPulse).toBeGreaterThanOrEqual(0);
  });
});
