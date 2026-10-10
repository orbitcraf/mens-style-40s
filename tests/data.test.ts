import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { outfits, seasons, tastes, scenes, itemCategories } from '../src/data';
import { emptyFilters, filterOutfits } from '../src/filter';
test('20 complete outfits with unique IDs and local images', () => {
  assert.equal(outfits.length,20);
  assert.equal(new Set(outfits.map(o=>o.id)).size,20);
  for (const o of outfits) {
    assert.ok(o.name && o.imageAlt && o.description && o.avoid);
    assert.ok(o.items.length>=3 && o.colors.length>=2);
    assert.ok(existsSync(`public/${o.image}`),o.image);
    for(const item of o.items) if(item.productUrl) assert.ok(/^https:\/\/(www\.uniqlo\.com|www\.gu-global\.com)\//.test(item.productUrl));
  }
});
test('five per season and all required classifications represented',()=>{
  for(const s of seasons) assert.equal(outfits.filter(o=>o.season===s).length,5);
  for(const t of tastes) assert.ok(outfits.some(o=>o.taste===t));
  for(const s of scenes) assert.ok(outfits.some(o=>o.scenes.includes(s)));
  for(const c of itemCategories) assert.ok(outfits.some(o=>o.items.some(i=>i.category===c)),c);
});
test('all filters combine with AND; empty and reset behave correctly',()=>{
  assert.equal(filterOutfits(outfits,emptyFilters()).length,20);
  assert.equal(filterOutfits(outfits,{...emptyFilters(),season:'春'}).length,5);
  assert.deepEqual(filterOutfits(outfits,{season:'春',taste:'カジュアル',scene:'普段着',item:'カーゴ',color:'オリーブ'}).map(o=>o.id),['spring-03']);
  assert.equal(filterOutfits(outfits,{...emptyFilters(),season:'夏',item:'アウター'}).length,0);
  assert.equal(filterOutfits(outfits,emptyFilters()).length,20);
});
