import { diversify, matchesColor, type StyledOutfit } from './data';
export interface Filters { season: string; taste: string; scene: string; item: string; color: string; pants: string; outer: string; genre: string; silhouette: string; recommended: boolean; }
export const emptyFilters = (): Filters => ({season:'',taste:'',scene:'',item:'',color:'',pants:'',outer:'',genre:'',silhouette:'',recommended:false});
export function filterOutfits(outfits: StyledOutfit[], filters: Filters): StyledOutfit[] {
  const matches=outfits.filter(o => (!filters.season || o.season === filters.season) && (!filters.taste || o.taste === filters.taste) && (!filters.scene || [...o.scenes,...o.occasionDetails].includes(filters.scene)) && (!filters.item || o.items.some(i => i.category === filters.item)) && (!filters.color || matchesColor(o,filters.color)) && (!filters.pants || o.pantsType===filters.pants) && (!filters.outer || o.outerType===filters.outer) && (!filters.genre || o.genreTags.some(g=>g===filters.genre)) && (!filters.silhouette || o.silhouette===filters.silhouette) && (!filters.recommended || o.recommended));
  // 既存の絞り込み順を保ち、新規冬コーデだけ末尾に追加。
  return [...diversify(matches.filter(o=>!o.id.startsWith('winter-add-'))),...matches.filter(o=>o.id.startsWith('winter-add-'))] as StyledOutfit[];
}
