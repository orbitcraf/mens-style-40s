import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { outfits, seasons, tastes, scenes, itemCategories, pantsTypes, outerTypes, colorChoices } from '../src/data';
import { emptyFilters, filterOutfits } from '../src/filter';
import { estimateBudget } from '../src/style-profile';

test('every original and responsive image exists, original bytes match backup manifest',()=>{
  const manifest=JSON.parse(readFileSync('backups/images-2026-10-11.json','utf8')) as {file:string;sha256:string}[];
  assert.equal(manifest.length,130);
  for(const o of outfits){
    const stem=o.image.slice(o.image.lastIndexOf('/')+1).replace(/\.webp$/,'');
    for(const width of [320,480,640])assert.ok(existsSync(`public/images/responsive/${stem}-${width}.webp`),`${o.id}/${width}`);
    const original=manifest.find(r=>r.file===stem+'.webp');
    if(!original){assert.ok(o.id.startsWith('variety-')||o.id.startsWith('winter-add-'));continue;}
    assert.equal(createHash('sha256').update(readFileSync('public/'+o.image)).digest('hex'),original.sha256);
  }
});

test('30 black/white additions and independent color collections',()=>{
  const added=outfits.filter(o=>o.id.startsWith('mono-'));
  assert.equal(added.length,30);
  assert.ok(added.filter(o=>o.colors.every(c=>c==='黒')).length>=4);
  for(const color of ['ブラック','ホワイト','モノトーン']){
    const result=filterOutfits(outfits,{...emptyFilters(),color});
    assert.ok(result.length>=20);
    if(color==='モノトーン')assert.ok(result.every(o=>o.colors.every(c=>['黒','白','グレー','チャコール','シルバー'].includes(c))));
    else assert.ok(result.every(o=>[o.top,o.pants,o.outer].some(i=>i?.color===(color==='ブラック'?'黒':'白'))));
  }
  assert.ok(filterOutfits(outfits,{...emptyFilters(),color:'モノトーン',season:'冬',outer:'ダウン',pants:'テーパード'}).some(o=>o.id==='mono-26'));
  assert.ok(!filterOutfits(outfits,{...emptyFilters(),color:'モノトーン'}).some(o=>o.id==='mono-29'));
});

test('at least 190 complete outfits with unique IDs, names, structural combinations and local images',()=>{
  assert.ok(outfits.length>=190);
  assert.equal(new Set(outfits.map(o=>o.id)).size,outfits.length);
  assert.equal(new Set(outfits.map(o=>o.name)).size,outfits.length);
  const structural=outfits.map(o=>[o.top.name,o.pants.name,o.outer?.name||'なし',o.shoes.name,o.hat?.name||'なし'].join('|'));
  assert.equal(new Set(structural).size,outfits.length,'color-only duplicates are not allowed');
  assert.deepEqual(outfits.filter(o=>!existsSync('public/'+o.image)).map(o=>o.id),[]);
  for(const o of outfits){
    assert.ok(o.name&&o.imageAlt&&o.description&&o.avoid);
    assert.ok(o.items.length>=3&&o.colors.length>=1);
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
  assert.ok(outfits.filter(o=>!o.id.startsWith('mono-')&&!o.id.startsWith('variety-')&&o.outer?.color==='黒'&&o.pants.color==='黒').length<10);
});
test('adjacent outfits vary in taste and do not repeat pants and outer forms together',()=>{
  for(let i=1;i<190;i++){assert.notEqual(outfits[i].taste,outfits[i-1].taste);assert.ok(outfits[i].pantsType!==outfits[i-1].pantsType||outfits[i].outerType!==outfits[i-1].outerType);}
});
test('all 8 filters combine, recommended and no-outer work, reset returns all outfits',()=>{
  assert.equal(filterOutfits(outfits,emptyFilters()).length,outfits.length);
  assert.ok(filterOutfits(outfits,{...emptyFilters(),season:'春'}).length>=25);
  const matches=filterOutfits(outfits,{...emptyFilters(),season:'春',taste:'カジュアル',scene:'普段着',item:'カーゴ',color:'カーキ'}); assert.ok(matches.some(o=>o.id==='spring-03')); assert.ok(matches.every(o=>o.season==='春'&&o.taste==='カジュアル'&&o.scenes.includes('普段着')&&o.items.some(i=>i.category==='カーゴ')&&o.colors.includes('カーキ')));
  assert.equal(filterOutfits(outfits,{...emptyFilters(),season:'夏',outer:'ダウン'}).length,0);
  const recommended=filterOutfits(outfits,{...emptyFilters(),recommended:true});assert.ok(recommended.length>=20);assert.ok(recommended.every(o=>o.recommended));
  const work=filterOutfits(outfits,{...emptyFilters(),scene:'仕事',pants:'スラックス',outer:'テーラードジャケット'});assert.ok(work.length);assert.ok(work.every(o=>o.scenes.includes('仕事')&&o.pantsType==='スラックス'&&o.outerType==='テーラードジャケット'));
  const bare=filterOutfits(outfits,{...emptyFilters(),outer:'なし'});assert.ok(bare.length);assert.ok(bare.every(o=>o.outer===null));
  assert.equal(filterOutfits(outfits,emptyFilters()).length,outfits.length);
});

test('200 outfits provide all 12 genres and six silhouettes with complete style guidance',()=>{
  assert.equal(outfits.length,200);
  for(const genre of ['きれいめ','ホスト・色気系','大人ストリート','モード','韓国・都会系','アメカジ','ミリタリー','スポーツMIX','リラックス','デート','ライブ・音楽','個性派']){
    const results=filterOutfits(outfits,{...emptyFilters(),genre});
    assert.ok(results.length>=4,genre);
    assert.ok(results.every(o=>o.genreTags.some(g=>g===genre)));
  }
  for(const silhouette of ['細身','普通','ワイド','上下ゆったり','上細め＋下ワイド','上ゆったり＋下細め']){
    assert.ok(filterOutfits(outfits,{...emptyFilters(),silhouette}).length,silhouette);
  }
  for(const o of outfits){
    assert.ok(o.ageReason&&o.bodyAdvice&&o.colorAlternative&&o.bodyTypes.length&&o.occasionDetails.length);
    assert.ok(o.budget[0]>0&&o.budget[1]>=o.budget[0]&&o.budget[1]<=40000);
  }
  const nights=filterOutfits(outfits,{...emptyFilters(),genre:'ホスト・色気系',scene:'夜デート',season:'春',silhouette:'細身'});
  assert.ok(nights.some(o=>o.id==='variety-03'));
  const other=filterOutfits(outfits,{...emptyFilters(),color:'その他',genre:'ライブ・音楽'});
  assert.ok(other.some(o=>o.id==='variety-54'));
});

test('court sneakers use shoe pricing rather than coat pricing',()=>{assert.deepEqual(estimateBudget([{category:'靴',name:'コートスニーカー',color:'黒',brand:'GU',productCategory:'靴'}]),[2000,4000]);});


test('winter addition preserves all 190 existing outfits, images, UI files and filtered order',()=>{
  const baseline=JSON.parse(readFileSync('backups/winter-additions-2026-10-23/outfits.json','utf8')) as typeof outfits;
  assert.deepEqual(outfits.slice(0,190),baseline);
  const files=JSON.parse(readFileSync('backups/winter-additions-2026-10-23/files.json','utf8')) as Record<string,string>;
  for(const [file,hash] of Object.entries(files)){
    if(file.startsWith('public/')||['src/main.ts','src/style.css','src/images.ts','index.html'].includes(file)){
      assert.equal(createHash('sha256').update(readFileSync(file)).digest('hex'),hash,file);
    }
  }
  assert.deepEqual(filterOutfits(outfits,emptyFilters()).slice(0,190).map(o=>o.id),JSON.parse(readFileSync('backups/winter-additions-2026-10-23/order.json','utf8')));
  for(const [key,values] of Object.entries({season:seasons,taste:tastes,scene:scenes,item:itemCategories,color:colorChoices,pants:pantsTypes,outer:outerTypes})){
    for(const value of values){
      const filters={...emptyFilters(),[key]:value};
      assert.deepEqual(filterOutfits(outfits,filters).filter(o=>!o.id.startsWith('winter-add-')),filterOutfits(baseline,filters));
    }
  }
  const added=outfits.slice(190);
  assert.equal(added.length,10);assert.ok(added.every(o=>o.season==='冬'&&o.id.startsWith('winter-add-')));
  assert.equal(new Set(added.map(o=>o.shoes.name)).size,10);
  assert.ok(new Set(added.map(o=>o.shoes.color)).size>=5);
  assert.ok(added.every(o=>o.outer&&o.items.every(i=>!i.productUrl)));
});
