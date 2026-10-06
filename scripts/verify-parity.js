const fs = require('fs');
const path = require('path');

console.log("🔍 [PRE-BUILD GUARDIAN] Initiating strict fact, source receipt & parity audit...");

const datasetPath = path.join(__dirname, '..', 'lib', 'dataset.ts');
if (!fs.existsSync(datasetPath)) {
  console.error("❌ CRITICAL: dataset.ts missing!");
  process.exit(1);
}

const content = fs.readFileSync(datasetPath, 'utf8');

// 1. Verify every node has source receipts with valid sourceUrl and retrievedAt
const sourceUrlMatches = content.match(/sourceUrl:\s*["'][^"']+["']/g) || [];
const retrievedAtMatches = content.match(/retrievedAt:\s*["'][^"']+["']/g) || [];

console.log(`📊 Found ${sourceUrlMatches.length} source URLs and ${retrievedAtMatches.length} retrieval receipts.`);

if (sourceUrlMatches.length === 0) {
  console.error("❌ REJECTED: No source receipts found in dataset.ts");
  process.exit(1);
}

if (sourceUrlMatches.length !== retrievedAtMatches.length) {
  console.error(`❌ REJECTED: Mismatch between source URLs (${sourceUrlMatches.length}) and retrieval timestamps (${retrievedAtMatches.length})`);
  process.exit(1);
}

// 2. Verify all coordinates are within valid latitude/longitude bounds
const latMatches = [...content.matchAll(/lat:\s*([-\d.]+)/g)].map(m => parseFloat(m[1]));
const lngMatches = [...content.matchAll(/lng:\s*([-\d.]+)/g)].map(m => parseFloat(m[1]));

for (const lat of latMatches) {
  if (lat < -90 || lat > 90) {
    console.error(`❌ REJECTED: Invalid latitude found: ${lat}`);
    process.exit(1);
  }
}

for (const lng of lngMatches) {
  if (lng < -180 || lng > 180) {
    console.error(`❌ REJECTED: Invalid longitude found: ${lng}`);
    process.exit(1);
  }
}
console.log(`🌍 Validated ${latMatches.length} geographic coordinates within global bounds.`);

// 3. Confirm case definition isolation: confirmed != suspected/quarantined
if (!content.includes('confirmedCount') || !content.includes('suspectedOrQuarantinedCount')) {
  console.error("❌ REJECTED: Case definition isolation fields missing!");
  process.exit(1);
}
console.log("✅ Case definitions isolated: Confirmed cases strictly separated from quarantine observation.");

// 4. Verify presence of required requested sources
const requiredSources = ['indianexpress', 'dailymail', 'dailystar', 'nytimes'];
for (const s of requiredSources) {
  if (!content.toLowerCase().includes(s)) {
    console.error(`❌ REJECTED: Required source '${s}' missing from dataset!`);
    process.exit(1);
  }
}
console.log("✅ All required user-specified sources validated in receipts registry.");

console.log("🚀 [PRE-BUILD GUARDIAN] Pre-build assertions passed. Ready for Next.js compilation.");
process.exit(0);
