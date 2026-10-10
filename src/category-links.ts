import type { OutfitItem } from './data';
// 2026-10-10に公式メンズページから辿って確認したカテゴリURL。
// 特定商品や在庫を保証するリンクではありません。
export function categoryUrl(item: OutfitItem): string {
  const kind=['パンツ','ワイドパンツ','デニム','カーゴ'].includes(item.category)?'pants':item.category==='帽子'?'goods':item.category==='靴'?'shoes':item.category==='ニット'?'knit':item.category==='シャツ'||item.name.includes('ポロ')?'shirts':['アウター','ジャケット'].includes(item.category)?'outer':'tops';
  const paths:Record<OutfitItem['brand'],Record<string,string>>={
    UNIQLO:{pants:'bottoms',goods:'accessories',shoes:'accessories',knit:'sweaters',shirts:'shirts-and-polo-shirts',outer:'outerwear',tops:'tops'},
    GU:{pants:'pants',goods:'goods',shoes:'shoes',knit:'knit-and-cardigan',shirts:'shirts-and-polo-shirts',outer:'outer',tops:'tops'}
  };
  return (item.brand==='UNIQLO'?'https://www.uniqlo.com/jp/ja/men/':'https://www.gu-global.com/jp/ja/men/')+paths[item.brand][kind];
}
