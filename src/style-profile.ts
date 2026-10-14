import type { Outfit, OutfitItem } from './data';
export const genres=['きれいめ','ホスト・色気系','大人ストリート','モード','韓国・都会系','アメカジ','ミリタリー','スポーツMIX','リラックス','デート','ライブ・音楽','個性派'] as const;
export type Genre=typeof genres[number];
export const silhouettes=['細身','普通','ワイド','上下ゆったり','上細め＋下ワイド','上ゆったり＋下細め'] as const;
export type Silhouette=typeof silhouettes[number];
export interface StyleProfile {genre:Genre;genreTags:Genre[];silhouette:Silhouette;bodyTypes:string[];bodyAdvice:string;colorAlternative:string;ageReason:string;accessories:OutfitItem[];budget:[number,number];occasionDetails:string[];}
const body:Record<Silhouette,[string[],string]>={
  細身:[['細身体型','標準体型'],'肩と腰に指が入る余裕を残し、体に張り付くサイズを避けます。'],
  普通:[['標準体型','がっちり体型'],'肩線と着丈を合わせ、胸やお腹が引っ張られない身幅を選びます。'],
  ワイド:[['標準体型','下半身がしっかりした体型'],'腰周りに余裕を残し、裾を靴に軽く触れる長さに整えます。'],
  上下ゆったり:[['がっちり体型','お腹周りが気になる体型'],'身幅にゆとりを取っても、袖と裾の長さは余らせすぎないように。'],
  '上細め＋下ワイド':[['細身体型','上半身がすっきりした体型'],'上はタイトにしすぎず、短めの着丈でパンツのタックを見せます。'],
  '上ゆったり＋下細め':[['肩幅が広い体型','標準体型'],'上の身幅を生かし、下は膝やふくらはぎが突っ張らない細さに。'],
};
export const genreReasons:Record<Genre,string>={
  きれいめ:'肩と裾を整えた直線的な服が、40代の落ち着きと清潔感を自然に引き立てます。',
  'ホスト・色気系':'首元の控えめな抜けと異素材の光沢で、40代の余裕を表現。細さや装飾を誇張しません。',
  大人ストリート:'ゆとりのある輪郭を無地と落ち着いた足元で整え、40代でも気負わず遊べるストリートに。',
  モード:'色数を抑えて丈と幅に変化をつけることで、年齢を問わず都会的な個性を楽しめます。',
  '韓国・都会系':'短い羽織りと整ったワイドの対比が新鮮。装飾を控えると40代にも取り入れやすいバランスです。',
  アメカジ:'デニムやワークの質感を、加工の少なさと整った丈で選ぶと、大人の休日らしい味わいに。',
  ミリタリー:'平らなポケットと清潔な足元で無骨さを調整。40代の落ち着きに程よい力強さを足します。',
  スポーツMIX:'機能素材に街着のパンツや端正な形を合わせ、動きやすさと大人のきちんと感を両立します。',
  リラックス:'柔らかな生地と余裕のある身幅を、整った首元・袖・靴で締めると、だらしなく見えません。',
  デート:'顔周りの明るさと、少しだけ艶のある質感を合わせて、40代の自然な親しみやすさと色気に。',
  'ライブ・音楽':'音楽好きの遊び心を質感と一点の小物で表現。大きなロゴや衣装風の装飾に頼りません。',
  個性派:'柄・レザー調・アクセサリーの主役を絞ると、40代でも街で自然に楽しめる個性になります。',
};
// 公式カテゴリの価格帯を参考にした予算設定。特定商品の現在価格ではありません。
export function estimateBudget(items:OutfitItem[]):[number,number]{
  const values:Record<string,number>={'Tシャツ':1500,'シャツ':3000,'ニット':3500,'パーカー':3000,'スウェット':3000,'フリース':3000,'パンツ':3500,'デニム':4000,'カーゴ':3500,'ワイドパンツ':3500,'ジャケット':6500,'アウター':7000,'靴':3000,'帽子':1500,'アクセサリー':1000};
  const total=items.reduce((n,i)=>n+(['アウター','ジャケット'].includes(i.category)&&(i.name.includes('コート')||i.name.includes('ダウン'))?10000:values[i.category]||2000),0);
  return [Math.floor(total*.8/1000)*1000,Math.ceil(total*1.2/1000)*1000];
}
export function makeProfile(o:Outfit,genre:Genre,silhouette:Silhouette,accessories:OutfitItem[]=[],occasions:string[]=o.scenes,colorAlternative?:string):StyleProfile{
  const tags:Genre[]=[genre];
  if(o.scenes.includes('デート')||occasions.some(s=>s.includes('デート')||s==='映画'))tags.push('デート');
  if(o.taste==='スポーティ')tags.push('スポーツMIX');
  if(occasions.includes('ライブ'))tags.push('ライブ・音楽');
  return {genre,genreTags:[...new Set(tags)],silhouette,bodyTypes:body[silhouette][0],bodyAdvice:body[silhouette][1],accessories,budget:estimateBudget(o.items),occasionDetails:occasions,colorAlternative:colorAlternative||`${o.top.color}のトップスを${o.top.color==='黒'?'ボルドー':o.top.color==='白'?'ブルー':'白'}に。パンツと靴はそのままにして、主役を一色だけ変えます。`,ageReason:genreReasons[genre]};
}
export function existingProfile(o:Outfit):StyleProfile{
  const urban=['spring-14','spring-22','autumn-16','winter-11','mono-07','mono-19','mono-21','mono-28'];
  const sensual=['spring-20','mono-01','mono-04','mono-09','mono-15'];
  const mode=['mono-02','mono-16','mono-24','winter-08','winter-20','autumn-20'];
  let genre:Genre=o.taste==='きれいめ'?'きれいめ':o.taste==='大人ストリート'?'大人ストリート':o.taste==='ミリタリー'?'ミリタリー':o.taste==='スポーティ'?'スポーツMIX':o.taste==='大人シンプル'?'リラックス':/デニム|ネル|チェック|ボーダー|チノ/.test(o.name)?'アメカジ':'リラックス';
  if(urban.includes(o.id))genre='韓国・都会系';if(sensual.includes(o.id))genre='ホスト・色気系';if(mode.includes(o.id))genre='モード';
  const streetMix=['spring-21','summer-09','summer-15','autumn-09','winter-09','winter-21','mono-03','spring-13','spring-19','summer-13','autumn-19','autumn-25','mono-12','spring-16','autumn-10','mono-20','spring-25','summer-25','mono-05'];
  if(streetMix.includes(o.id))genre='大人ストリート';
  if(['autumn-11','spring-17','winter-23','mono-11'].includes(o.id))genre='きれいめ';
  if(o.id==='mono-29')genre='ホスト・色気系';
  if(o.id==='mono-22')genre='モード';
  if(o.scenes.includes('デート')&&genre==='リラックス')genre='デート';
  const isWide=o.pantsType==='ワイド'||o.pants.name.includes('ワイド');
  const silhouette:Silhouette=isWide?(o.top.category==='ニット'?'上細め＋下ワイド':o.top.category==='パーカー'?'上下ゆったり':'ワイド'):o.pants.name.includes('スリム')||o.pants.name.includes('細身')?'細身':o.pantsType==='テーパード'&&(o.top.category==='スウェット'||o.outer?.category==='パーカー')?'上ゆったり＋下細め':'普通';
  const profile=makeProfile(o,genre,silhouette);
  if(streetMix.includes(o.id)&&o.taste==='ミリタリー')profile.genreTags.push('ミリタリー');
  if(streetMix.includes(o.id)&&/デニム|チェック|ボーダー/.test(o.name))profile.genreTags.push('アメカジ');
  return profile;
}
