// Verify the reviewed native snapshot without claiming an official OpenAPI export.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {ALL_TOOLS} from '../dist/tools/index.js';
const source=new URL('../src/tools/operations.json',import.meta.url);
const bytes=fs.readFileSync(source);
const operations=JSON.parse(bytes);
const provenance=JSON.parse(fs.readFileSync(new URL('../src/tools/provenance.json',import.meta.url)));
assert.equal(createHash('sha256').update(bytes).digest('hex'),provenance.sanitizedSnapshotSha256);
assert.equal(operations.length,7);
assert.equal(provenance.endpoints,7);
assert.equal(provenance.source,'https://support.senja.io/rest-api-wbnz4');
assert(provenance.schemaType.includes('not an official OpenAPI'));
assert.equal(ALL_TOOLS.length,12);
assert.equal(ALL_TOOLS.filter(t=>t.risk==='read').length,6);
for(const name of ['list_testimonials','get_testimonial','create_testimonial'])assert(operations.some(o=>o.name===name));
console.log(JSON.stringify({native:7,shared:12,reads:6,snapshotVerified:true,schemaType:provenance.schemaType,checked:provenance.checked,providerNetworkCalls:0}));
