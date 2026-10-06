import { NextResponse } from 'next/server';
import { PLAGUE_DATASET } from '@/lib/dataset';
import { computeCadenceStatus } from '@/lib/freshness';

export const dynamic = 'force-dynamic';

export async function GET() {
  const cadence = computeCadenceStatus(new Date());
  return NextResponse.json({
    success: true,
    data: PLAGUE_DATASET,
    cadence,
    refreshedAt: new Date().toISOString()
  });
}
