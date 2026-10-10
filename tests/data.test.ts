import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { outfits, seasons, tastes, scenes, itemCategories, pantsTypes, outerTypes, colorChoices } from '../src/data';
import { emptyFilters, filterOutfits } from '../src/filter';

test('at least 100 complete outfits with unique IDs, names, structural combinations and local images',()=>{
  assert.ok(outfits.length>=100);
  assert.equal(new Set(outfits.map(o=>o.id)).size,outfits.length);
  assert.equal(new Set(outfits.map(o=>o.name)).size,outfits.length);
  const structural=outfits.map(o=>[o.top.name,o.pants.name,o.outer?.name||'なし',o.shoes.name,o.hat?.name||'なし'].join('|'));
  assert.equal(new Set(structural).size,outfits.length,'color-only duplicates are not allowed');
  assert.deepEqual(outfits.filter(o=>!existsSync('public/'+o.image)).map(o=>o.id),[]);
  for(const o of outfits){
    assert.ok(o.name&&o.imageAlt&&o.description&&o.avoid);
    assert.ok(o.items.length>=3&&o.colors.length>=2);
    assert.ok(o.top&&o.pants&&o.shoes); assert.ok(seasons.includes(o.season)&&tastes.includes(o.taste)&&o.scenes.every(s=>scenes.includes(s))); assert.ok(pantsTypes.includes(o.pantsType)&&outerTypes.includes(o.outerType));
    assert.ok(o.hat===null||o.hat.category==='帽子');
    assert.equal(o.outerType==='なし',o.outer===null);
    for(const item of o.items){assert.ok(item.productCategory);assert.ok(item.brand==='UNIQLO'||item.brand==='GU');if(item.productUrl)assert.ok(/^https:\/\/(www\.uniqlo\.com|www\.gu-global\.com)\//.test(item.productUrl));}
  }
});
test('at least 25 per season, all 6 tastes and 7 scenes, pants/outer/color axes covered',()=>{
  for(const season of seasons){assert.ok(outfits.filter(o=>o.season===season).length>=25);for(const taste of tastes)assert.ok(outfits.some(o=>o.season===season&&o.taste===taste));}
  for(const s of scenes)assert.ok(outfits.some(o=>o.scenes.includes(s)));
  for(const c of itemCategories)assert.ok(outfits.some(o=>o.items.some(i=>i.category===c)),c);
  for(const p of pantsTypes)assert.ok(outfits.some(o=>o.pantsType===p),p);
  for(const outer of outerTypes)assert.ok(outfits.some(o=>o.outerType===outer),outer);
  for(const color of colorChoices.slice(0,7))assert.ok(outfits.filter(o=>o.colors.includes(color)).length>=10,color);
  assert.ok(outfits.filter(o=>o.outer?.color==='黒'&&o.pants.color==='黒').length<10);
});
test('adjacent outfits vary in taste and do not repeat pants and outer forms together',()=>{
  for(let i=1;i<outfits.length;i++){assert.notEqual(outfits[i].taste,outfits[i-1].taste);assert.ok(outfits[i].pantsType!==outfits[i-1].pantsType||outfits[i].outerType!==outfits[i-1].outerType);}
});
test('all 8 filters combine, recommended and no-outer work, reset returns 100',()=>{
  assert.equal(filterOutfits(outfits,emptyFilters()).length,outfits.length);
  assert.ok(filterOutfits(outfits,{...emptyFilters(),season:'春'}).length>=25);
  const matches=filterOutfits(outfits,{...emptyFilters(),season:'春',taste:'カジュアル',scene:'普段着',item:'カーゴ',color:'カーキ'}); assert.ok(matches.some(o=>o.id==='spring-03')); assert.ok(matches.every(o=>o.season==='春'&&o.taste==='カジュアル'&&o.scenes.includes('普段着')&&o.items.some(i=>i.category==='カーゴ')&&o.colors.includes('カーキ')));
  assert.equal(filterOutfits(outfits,{...emptyFilters(),season:'夏',outer:'ダウン'}).length,0);
  const recommended=filterOutfits(outfits,{...emptyFilters(),recommended:true});assert.ok(recommended.length>=20);assert.ok(recommended.every(o=>o.recommended));
  const work=filterOutfits(outfits,{...emptyFilters(),scene:'仕事',pants:'スラックス',outer:'テーラードジャケット'});assert.ok(work.length);assert.ok(work.every(o=>o.scenes.includes('仕事')&&o.pantsType==='スラックス'&&o.outerType==='テーラードジャケット'));
  const bare=filterOutfits(outfits,{...emptyFilters(),outer:'なし'});assert.ok(bare.length);assert.ok(bare.every(o=>o.outer===null));
  assert.equal(filterOutfits(outfits,emptyFilters()).length,outfits.length);
});
