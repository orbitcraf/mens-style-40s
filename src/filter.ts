import type { Outfit } from './data';
export interface Filters { season: string; taste: string; scene: string; item: string; color: string; }
export const emptyFilters = (): Filters => ({season:'',taste:'',scene:'',item:'',color:''});
export function filterOutfits(outfits: Outfit[], filters: Filters): Outfit[] {
  return outfits.filter(o => (!filters.season || o.season === filters.season) && (!filters.taste || o.taste === filters.taste) && (!filters.scene || o.scenes.includes(filters.scene as Outfit['scenes'][number])) && (!filters.item || o.items.some(i => i.category === filters.item)) && (!filters.color || o.colors.includes(filters.color)));
}
