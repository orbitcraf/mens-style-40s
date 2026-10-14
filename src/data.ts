import { outfits as initialOutfits } from './legacy';
import { recipes } from './recipes';
import { monochromeOutfits } from './monochrome';
import { varietyOutfits } from './variety';
import { existingProfile, type StyleProfile } from './style-profile';
export { genres, silhouettes } from './style-profile';

export const seasons = ['春','夏','秋','冬'] as const;
export const tastes = ['きれいめ','カジュアル','大人ストリート','ミリタリー','スポーティ','大人シンプル'] as const;
export const scenes = ['普段着','デート','食事','旅行','買い物','仕事','雨の日'] as const;
export const pantsTypes = ['スラックス','デニム','カーゴ','ワイド','テーパード','チノ'] as const;
export const outerTypes = ['テーラードジャケット','ブルゾン','MA-1','ダウン','チェスターコート','ステンカラーコート','カーディガン','その他','なし'] as const;
export const itemCategories = ['ジャケット','シャツ','Tシャツ','ニット','デニム','カーゴ','ワイドパンツ','アウター','靴','帽子','パンツ','パーカー','スウェット','フリース','アクセサリー'] as const;
export const colorChoices = ['黒','白','グレー','ネイビー','カーキ','ベージュ','ブラウン','ブルー','生成り','チャコール','オリーブ','ボルドー','その他'] as const;
export const colorFilters = ['ブラック','ホワイト','モノトーン',...colorChoices] as const;
export function matchesColor(o: Outfit, color: string): boolean {
  const garments=[o.top,o.pants,o.outer].filter((i):i is OutfitItem=>i!==null);
  if(color==='ブラック')return garments.some(i=>i.color==='黒');
  if(color==='ホワイト')return garments.some(i=>i.color==='白');
  if(color==='モノトーン')return o.colors.every(c=>['黒','白','グレー','チャコール','シルバー'].includes(c));
  if(color==='グレー')return o.colors.some(c=>c==='グレー'||c==='チャコール');
  if(color==='カーキ')return o.colors.some(c=>c==='カーキ'||c==='オリーブ');
  if(color==='その他')return o.colors.some(c=>!['黒','白','グレー','チャコール','ネイビー','ベージュ','シルバー'].includes(c));
  return o.colors.includes(color);
}
export interface OutfitItem { category: string; name: string; color: string; brand: 'UNIQLO'|'GU'; productCategory: string; productUrl?: string; }
export interface Outfit { id: string; name: string; season: typeof seasons[number]; taste: typeof tastes[number]; scenes: (typeof scenes[number])[]; difficulty: 'かんたん'|'ひと工夫'; image: string; imageAlt: string; items: OutfitItem[]; colors: string[]; description: string; avoid: string; top: OutfitItem; pants: OutfitItem; outer: OutfitItem|null; shoes: OutfitItem; hat: OutfitItem|null; pantsType: typeof pantsTypes[number]; outerType: typeof outerTypes[number]; recommended: boolean; imagePrompt?: string; }
export type StyledOutfit=Outfit&StyleProfile;

// 各定義: 商品カテゴリ / 名前 / 色 / 探すブランド / 画像生成用の服装指定。
type Definition = [string,string,string,'UNIQLO'|'GU',string];
const tops: Record<string,Definition> = {
  oxford:['シャツ','オックスフォードシャツ','ブルー','UNIQLO','light blue long-sleeve Oxford button-down shirt'],
  sweat:['スウェット','クルーネックスウェット','グレー','UNIQLO','gray plain crewneck sweatshirt'],
  standShirt:['シャツ','スタンドカラーシャツ','白','GU','white long-sleeve stand-collar shirt'],
  waffle:['Tシャツ','ワッフル長袖T','白','UNIQLO','white long-sleeve waffle-texture T-shirt'],
  dryLong:['Tシャツ','ドライ長袖T','ネイビー','UNIQLO','navy long-sleeve technical jersey T-shirt'],
  whiteBand:['シャツ','バンドカラーシャツ','白','UNIQLO','white long-sleeve band-collar cotton shirt'],
  thinCrew:['ニット','薄手クルーネックニット','ベージュ','UNIQLO','beige fine-gauge crewneck knit sweater'],
  stripeLong:['Tシャツ','長袖ボーダーT','白','UNIQLO','white and navy narrow striped long-sleeve T-shirt'],
  longPolo:['ニット','長袖ニットポロ','ネイビー','UNIQLO','navy long-sleeve knitted polo shirt'],
  hoodie:['パーカー','プルオーバーパーカー','グレー','GU','gray plain pullover hoodie'],
  whiteT:['Tシャツ','クルーネックT','白','UNIQLO','plain white short-sleeve crewneck T-shirt'],
  blackShirt:['シャツ','レギュラーカラーシャツ','黒','GU','black long-sleeve regular-collar cotton shirt'],
  zipPolo:['Tシャツ','ジップポロ','白','GU','white short-sleeve zip-neck polo shirt'],
  piquePolo:['Tシャツ','鹿の子ポロシャツ','ネイビー','UNIQLO','navy short-sleeve pique polo shirt'],
  campShirt:['シャツ','半袖開襟シャツ','ブラウン','GU','brown short-sleeve open-collar camp shirt'],
  shortBand:['シャツ','半袖バンドカラーシャツ','白','GU','white short-sleeve band-collar shirt'],
  henley:['Tシャツ','ヘンリーネックT','白','UNIQLO','white long-sleeve henley shirt with three-button placket'],
  dryPolo:['Tシャツ','ドライポロシャツ','白','UNIQLO','white short-sleeve technical sport polo shirt'],
  knitT:['ニット','半袖ニットT','ベージュ','UNIQLO','beige fine-gauge short-sleeve crewneck knit T-shirt'],
  seersucker:['シャツ','半袖シアサッカーシャツ','ブルー','UNIQLO','light blue short-sleeve seersucker button-up shirt'],
  pocketT:['Tシャツ','ポケットT','グレー','GU','gray short-sleeve T-shirt with single chest pocket'],
  meshT:['Tシャツ','通気性ドライT','ネイビー','UNIQLO','navy short-sleeve breathable sports T-shirt, opaque fine mesh fabric'],
  navyT:['Tシャツ','スムースT','ネイビー','UNIQLO','navy plain short-sleeve smooth cotton T-shirt'],
  shortOxford:['シャツ','半袖オックスフォードシャツ','白','UNIQLO','white short-sleeve Oxford button-down shirt'],
  graphicT:['Tシャツ','小さなプリントT','白','GU','white short-sleeve T-shirt with small subtle abstract gray graphic, no text'],
  utilityShirt:['シャツ','半袖ユーティリティシャツ','カーキ','GU','olive khaki short-sleeve utility shirt with two chest pockets'],
  linenLong:['シャツ','長袖リネン風シャツ','ベージュ','UNIQLO','beige long-sleeve linen-texture shirt, sleeves rolled to forearms'],
  stripePolo:['Tシャツ','細ボーダーポロ','白','UNIQLO','white short-sleeve polo with narrow navy horizontal stripes'],
  brownPolo:['ニット','長袖リブニットポロ','ブラウン','UNIQLO','brown long-sleeve rib-knit polo shirt'],
  flannel:['シャツ','フランネルチェックシャツ','ブラウン','UNIQLO','brown and beige small-check long-sleeve flannel shirt'],
  mock:['ニット','モックネックニット','生成り','GU','cream mock-neck fine knit sweater'],
  woolShirt:['シャツ','ウール調シャツ','グレー','GU','gray wool-texture long-sleeve shirt with chest pocket'],
  charcoalCrew:['ニット','クルーネックニット','グレー','UNIQLO','charcoal gray crewneck knit sweater'],
  thinTurtle:['ニット','薄手タートルニット','ベージュ','UNIQLO','beige fine-gauge turtleneck sweater'],
  merino:['ニット','ハイゲージニット','ブラウン','UNIQLO','brown smooth fine-gauge merino-style crewneck sweater'],
  cable:['ニット','ケーブルニット','生成り','GU','cream cable-knit crewneck sweater'],
  fleeceTop:['フリース','薄手フリーストップス','グレー','UNIQLO','gray thin fleece zip-neck top'],
  blackTurtle:['ニット','タートルネックニット','黒','UNIQLO','black turtleneck knit sweater'],
  whiteCrew:['ニット','クルーネックニット','白','UNIQLO','off-white medium-gauge crewneck knit sweater']
};
const pants: Record<string,Definition> = {
  graySlacks:['パンツ','センタープレススラックス','グレー','GU','gray tailored straight slacks with pressed center creases'],
  navySlacks:['パンツ','ウール調スラックス','ネイビー','UNIQLO','navy straight wool-texture tailored slacks'],
  brownSlacks:['パンツ','ツイルスラックス','ブラウン','GU','brown straight twill tailored slacks'],
  whiteSlacks:['パンツ','サマースラックス','白','GU','opaque off-white lightweight straight tailored slacks'],
  navyDenim:['デニム','ストレートデニム','ネイビー','UNIQLO','dark indigo straight denim jeans, no distressing'],
  whiteDenim:['デニム','ストレートデニム','白','UNIQLO','opaque off-white straight denim jeans'],
  wideDenim:['デニム','ワイドデニム','ネイビー','GU','indigo wide-leg denim jeans'],
  khakiCargo:['カーゴ','ストレートカーゴ','カーキ','GU','olive khaki straight cargo trousers with flat side pockets'],
  grayCargo:['カーゴ','テーパードカーゴ','グレー','GU','charcoal gray tapered cargo trousers with side pockets'],
  beigeCargo:['カーゴ','イージーカーゴ','ベージュ','GU','beige relaxed cargo trousers with flat side pockets'],
  grayWide:['ワイドパンツ','タックワイドパンツ','グレー','GU','charcoal gray pleated wide trousers'],
  beigeWide:['ワイドパンツ','ワイドチノ','ベージュ','GU','beige wide-leg chino trousers'],
  navyWide:['ワイドパンツ','ワイドスラックス','ネイビー','GU','navy pleated wide-leg slacks'],
  grayTapered:['パンツ','イージーテーパードパンツ','グレー','UNIQLO','gray tapered ankle-length easy trousers'],
  beigeTapered:['パンツ','テーパードパンツ','ベージュ','GU','beige tapered cotton trousers'],
  navyTapered:['パンツ','ストレッチテーパードパンツ','ネイビー','UNIQLO','navy stretch tapered trousers'],
  beigeChino:['パンツ','ストレートチノ','ベージュ','UNIQLO','beige straight chino trousers'],
  navyChino:['パンツ','スリムチノ','ネイビー','UNIQLO','navy slim straight chino trousers'],
  brownChino:['パンツ','コーデュロイチノ','ブラウン','GU','brown straight corduroy chino trousers']
};
const outers: Record<string,Definition> = {
  navyTailored:['ジャケット','テーラードジャケット','ネイビー','UNIQLO','navy tailored blazer worn open'],
  linenTailored:['ジャケット','リネン混ジャケット','ベージュ','UNIQLO','beige linen-texture tailored blazer worn open'],
  summerTailored:['ジャケット','軽量サマージャケット','ネイビー','UNIQLO','navy unlined lightweight summer blazer worn open'],
  cordTailored:['ジャケット','コーデュロイジャケット','ブラウン','GU','brown corduroy tailored blazer worn open'],
  tweedTailored:['ジャケット','ツイード調ジャケット','ブラウン','GU','brown subtly textured tweed tailored blazer worn open'],
  beigeBlouson:['アウター','軽量ジップブルゾン','ベージュ','GU','beige lightweight zip blouson worn open'],
  navyBlouson:['アウター','ジップブルゾン','ネイビー','GU','navy zip-front short blouson worn open'],
  linedBlouson:['アウター','裏地付きブルゾン','カーキ','GU','olive khaki lined short blouson worn open'],
  woolBlouson:['アウター','ウール調ブルゾン','グレー','GU','gray wool-texture short blouson worn open'],
  denimJacket:['ジャケット','デニムジャケット','ネイビー','GU','dark indigo denim jacket worn open'],
  coach:['アウター','コーチジャケット','ベージュ','GU','beige nylon coach jacket with shirt collar worn open'],
  khakiMA1:['アウター','MA-1ブルゾン','カーキ','GU','olive khaki MA-1 bomber jacket with ribbed collar worn open'],
  winterMA1:['アウター','中綿MA-1','ネイビー','GU','navy padded MA-1 bomber with ribbed collar worn open'],
  field:['アウター','フィールドジャケット','カーキ','GU','olive khaki cotton field jacket with four flap pockets worn open'],
  winterField:['アウター','中綿フィールドコート','カーキ','GU','olive khaki padded thigh-length field coat with flap pockets worn open'],
  shell:['アウター','軽量フードパーカー','ベージュ','UNIQLO','beige lightweight hooded nylon shell jacket worn open'],
  lightShell:['アウター','薄手フードブルゾン','ネイビー','UNIQLO','navy very thin lightweight hooded nylon shell worn open'],
  winterShell:['アウター','フード付きシェル','ネイビー','UNIQLO','navy hooded winter nylon shell jacket worn open'],
  beigeSoutien:['アウター','ステンカラーコート','ベージュ','UNIQLO','beige knee-length straight balmacaan coat with simple collar worn open'],
  navySoutien:['アウター','ステンカラーコート','ネイビー','UNIQLO','navy knee-length straight balmacaan coat with simple collar worn open'],
  winterSoutien:['アウター','ウール調ステンカラー','ベージュ','UNIQLO','beige knee-length wool balmacaan winter coat with simple collar worn open'],
  graySoutien:['アウター','ウール調ステンカラー','グレー','UNIQLO','gray knee-length wool balmacaan coat with simple collar worn open'],
  brownChester:['アウター','チェスターコート','ブラウン','UNIQLO','brown knee-length wool Chesterfield overcoat with notch lapels worn open'],
  grayChester:['アウター','チェスターコート','グレー','UNIQLO','charcoal gray knee-length wool Chesterfield overcoat with notch lapels worn open'],
  brownCardigan:['ニット','Vネックカーディガン','ブラウン','UNIQLO','brown V-neck button cardigan worn open'],
  grayCardigan:['ニット','ハイゲージカーディガン','グレー','UNIQLO','gray fine-gauge V-neck cardigan worn open'],
  summerCardigan:['ニット','薄手カーディガン','ベージュ','UNIQLO','beige very lightweight summer cardigan worn open'],
  shawlCardigan:['ニット','ショールカーディガン','ブラウン','GU','brown thick shawl-collar cardigan worn open'],
  utilityVest:['アウター','ユーティリティベスト','カーキ','GU','olive khaki utility vest with patch pockets worn open'],
  linenVest:['アウター','リネン風ベスト','カーキ','GU','olive khaki lightweight linen utility vest worn open'],
  fleeceVest:['アウター','フリースベスト','ベージュ','UNIQLO','beige fleece vest worn open'],
  paddedVest:['アウター','中綿ベスト','ブラウン','GU','brown quilted padded utility vest worn open'],
  downVest:['アウター','ダウンベスト','ネイビー','UNIQLO','navy quilted puffer vest worn open'],
  lightDown:['アウター','軽量ダウン','ベージュ','UNIQLO','beige lightweight short quilted puffer jacket worn open'],
  longDown:['アウター','ロングダウン','グレー','UNIQLO','charcoal gray thigh-length quilted puffer coat worn open'],
  navyDown:['アウター','フードダウン','ネイビー','UNIQLO','navy hooded short puffer jacket worn open'],
  track:['アウター','トラックジャケット','ネイビー','GU','navy zip track jacket with subtle cream sleeve stripes worn open'],
  winterTrack:['アウター','裏地付きトラックジャケット','カーキ','GU','olive khaki lined zip track jacket with subtle cream sleeve stripes worn open'],
  denimShirt:['シャツ','デニムシャツ羽織り','ネイビー','UNIQLO','indigo denim button-up overshirt worn open'],
  whiteLinenOvershirt:['シャツ','リネン風シャツ羽織り','白','UNIQLO','white lightweight long-sleeve linen overshirt worn open'],
  checkOvershirt:['シャツ','チェックシャツ羽織り','ブラウン','UNIQLO','brown and beige checked flannel overshirt worn open']
};
const shoes: Record<string,Definition> = {
  derby:['靴','レースアップシューズ','黒','GU','black plain-toe leather derby shoes'],
  brownLoafer:['靴','ローファー','ブラウン','GU','brown leather penny loafers'],
  whiteSneaker:['靴','シンプルスニーカー','白','GU','plain white low-top sneakers'],
  blackSneaker:['靴','シンプルスニーカー','黒','GU','plain black low-top sneakers'],
  canvas:['靴','キャンバススニーカー','白','GU','off-white canvas lace-up sneakers'],
  retroSneaker:['靴','レトロスニーカー','グレー','GU','gray retro low-top suede sneakers'],
  running:['靴','軽量スニーカー','グレー','GU','gray lightweight running sneakers'],
  rainSneaker:['靴','雨用スニーカー','黒','GU','black smooth closed-toe low-top sneakers with rubber soles'],
  boots:['靴','レースアップブーツ','ブラウン','GU','brown leather lace-up ankle boots']
};
const hats: Record<string,Definition> = {
  blackCap:['帽子','無地キャップ','黒','GU','plain black baseball cap'],
  sportCap:['帽子','軽量キャップ','ネイビー','UNIQLO','plain navy lightweight sports cap'],
  bucket:['帽子','バケットハット','ベージュ','GU','plain beige bucket hat'],
  beanie:['帽子','ニット帽','グレー','GU','plain gray knit beanie']
};
function makeItem(d: Definition): OutfitItem { return {category:d[0],name:d[1],color:d[2],brand:d[3],productCategory:d[0]==='ニット'?'ニット・カーディガン':d[0]==='パンツ'?'パンツ・スラックス':d[0]==='ワイドパンツ'?'ワイドパンツ':d[0]}; }
function pantsType(key: string): Outfit['pantsType'] { return key.includes('Cargo')?'カーゴ':key.includes('Wide')?'ワイド':key.includes('Denim')?'デニム':key.includes('Slacks')?'スラックス':key.includes('Tapered')?'テーパード':'チノ'; }
function outerType(key: string): Outfit['outerType'] { return key==='none'?'なし':key.toLowerCase().includes('tailored')?'テーラードジャケット':key.includes('MA1')?'MA-1':key.includes('Soutien')?'ステンカラーコート':key.includes('Chester')?'チェスターコート':key.includes('Cardigan')?'カーディガン':key.includes('Down')||key==='downVest'?'ダウン':key.includes('Blouson')||key==='denimJacket'||key==='coach'||key==='track'||key==='winterTrack'?'ブルゾン':'その他'; }
const pantsAdvice: Record<Outfit['pantsType'],[string,string]> = {
  スラックス:['センタープレスを整え、裾は靴に軽く触れる程度に。','スラックスの裾を何段も折り返すと、きちんとした印象が弱まります。'],
  デニム:['加工の少ないデニムを選び、裾のたまりを控えめに。','強いダメージ加工と主張の強い小物を同時に足すのは避けて。'],
  カーゴ:['サイドポケットを膨らませず、脚のラインを自然に見せます。','迷彩柄や大きなミリタリー小物まで重ねると、無骨さが強くなりすぎます。'],
  ワイド:['パンツの幅を生かし、トップスは長すぎない丈で。','上下とも極端なオーバーサイズにすると、体の輪郭がぼやけます。'],
  テーパード:['腰周りは余裕を残し、裾は引きずらない長さに。','ふくらはぎが張るほど細いサイズは、座る動作も窮屈に見えます。'],
  チノ:['チノはしわと裾の長さを整えると、普段着でも品よくまとまります。','チノに汚れた靴やよれた首元を合わせると、部屋着のように見えがちです。']
};
const sceneAdvice: Record<typeof scenes[number],[string,string]> = {
  普段着:['肩の力を抜き、洗濯しやすい素材や動きやすい身幅を目安に。','楽さだけで丈の余りや毛玉をそのままにしないように。'],
  デート:['顔周りと袖口を整え、小物の主張は控えめに。','香りの強さや大きなロゴで服以上に主張しないように。'],
  食事:['座ったときに腹部がきつくないサイズで、襟や首元をきれいに。','袖が長すぎると食事中にもたつくので、手首で収まる長さを。'],
  旅行:['長く歩ける靴と、脱ぎ着しやすい重ね方を優先します。','旅行当日に履き慣れない靴を初めて使うのは避けましょう。'],
  買い物:['試着や歩き回る時間を考え、着脱しやすい靴と羽織りに。','厚いインナーを重ねすぎると、店内や試着で暑くなりがちです。'],
  仕事:['私服・ビジネスカジュアルが許される職場向け。襟元と靴を整えます。','スーツ必須の職場ではこの服装を流用せず、職場のドレスコードを優先してください。'],
  雨の日:['裾を短めに整え、実際に買う服や靴の撥水・防水性能を公式表示で確認します。','雨用の見本であっても防水性能は保証しません。スエード靴や裾を引きずる丈は避けて。']
};
const topAdvice: Record<string,string> = {
  oxford:'シャツの襟を羽織りの内側に収め、前裾を軽く入れて腰位置を整えます。',
  sweat:'スウェットは首元が詰まった無地を選ぶと、ラフでも清潔に。',
  standShirt:'小さな襟のシャツを主役に、首元のボタンを一つだけ開けて。',
  waffle:'凹凸のあるワッフル生地が、無地の服に自然な立体感を足します。',
  dryLong:'スポーツ素材のロンTは無地を選び、普段着のパンツとなじませます。',
  whiteBand:'白バンドカラーは襟を立てすぎず、胸元のしわを整えて。',
  thinCrew:'薄手ニットは肩幅が合うサイズなら、羽織りの中でももたつきません。',
  stripeLong:'ボーダーを唯一の柄として、周りのアイテムは無地でまとめます。',
  longPolo:'ニットポロの襟を整えると、カーゴでも落ち着いた雰囲気に。',
  hoodie:'フードが首元でつぶれないように整え、裾は腰周りで収めます。',
  whiteT:'白Tは透けにくい生地を選び、よれのない首元を見せます。',
  blackShirt:'黒シャツはボタンを一つ開け、暗い色の中に肌の抜けを作ります。',
  zipPolo:'ジップの開きは浅めにして、スポーティさを控えめに。',
  piquePolo:'鹿の子ポロは襟と袖口を整え、シャツほど堅くないきちんと感を。',
  campShirt:'開襟シャツの裾を出し、胸元を開けすぎずに涼しげに。',
  shortBand:'半袖バンドカラーの袖は肘より上で収まり、清潔な輪郭に。',
  henley:'ヘンリーネックのボタンは一つだけ開け、さりげない変化を。',
  dryPolo:'ドライポロは大きなスポーツロゴを避け、街になじむ無地で。',
  knitT:'半袖ニットの柔らかな表面で、Tシャツより落ち着いた印象に。',
  seersucker:'シアサッカーの凹凸を生かし、袖を折りすぎず自然に。',
  pocketT:'胸ポケットを小さなアクセントに、ほかの柄やロゴは控えます。',
  meshT:'通気性素材も透けにくいものを選び、インナーが見えないか確認を。',
  navyT:'濃紺Tは色あせの少ないものを選ぶと、シンプルでもきれいに。',
  shortOxford:'半袖シャツの襟と前立てを整え、裾を軽く入れて通勤向けに。',
  graphicT:'小さな抽象柄だけをアクセントにし、帽子やパンツは無地に。',
  utilityShirt:'シャツの胸ポケットが膨らまないサイズで、ワーク感を控えめに。',
  linenLong:'リネン風シャツは前腕まで袖を上げ、手元に軽さを作ります。',
  stripePolo:'細いボーダーを選ぶと、襟付きでも硬すぎず食事に使いやすく。',
  brownPolo:'リブニットの縦ラインを生かし、裾は長く余らせずに。',
  flannel:'チェックは小さめを選び、柄の色をパンツや靴に一色つなげます。',
  mock:'モックネックの低い襟を整え、首元にボリュームを足しすぎません。',
  woolShirt:'ウール調シャツの柔らかな質感で、カーゴの硬さを和らげます。',
  charcoalCrew:'グレーニットの毛玉を整え、明るいパンツとの濃淡を見せます。',
  thinTurtle:'薄手タートルは襟を一度だけ折り、コートの中をすっきり。',
  merino:'滑らかなハイゲージニットで、デニムやチノにきれいめを足します。',
  cable:'ケーブル柄を主役に、パンツや羽織りは無地の表面で。',
  fleeceTop:'フリースは厚すぎないものを選び、シェルの下で動ける余裕を。',
  blackTurtle:'黒タートルで首元を引き締め、羽織りの色や質感を引き立てます。',
  whiteCrew:'白ニットを顔周りに置くと、冬のコートも明るい印象に。'
};
function buildRecipes(): Outfit[] {
  return seasons.flatMap((season,s)=>recipes[season].map((r,i)=>{
    const [name,taste,scene,topKey,pantsKey,outerKey,shoeKey,hatKey] = r;
    const top=makeItem(tops[topKey]), pant=makeItem(pants[pantsKey]), outer=outerKey==='none'?null:makeItem(outers[outerKey]), shoe=makeItem(shoes[shoeKey]), hat=hatKey==='none'?null:makeItem(hats[hatKey]);
    const items=[outer,top,pant,shoe,hat].filter((x):x is OutfitItem=>x!==null);
    const pType=pantsType(pantsKey), oType=outerType(outerKey), sceneKey=scene as typeof scenes[number];
    const id=`${['spring','summer','autumn','winter'][s]}-${String(i+6).padStart(2,'0')}`;
    const english=[outerKey==='none'?null:outers[outerKey][4],tops[topKey][4],pants[pantsKey][4],shoes[shoeKey][4],hatKey==='none'?null:hats[hatKey][4]].filter(Boolean).join('; ');
    const seasonalTop=season==='夏'&&topKey==='henley'?'夏は薄手の長袖を選び、袖を前腕まで上げて。':'';
    return {id,name,season,taste:taste as Outfit['taste'],scenes:[sceneKey],difficulty:taste==='大人ストリート'||taste==='ミリタリー'?'ひと工夫':'かんたん',image:`images/${id}.webp`,imageAlt:items.map(x=>`${x.color}の${x.name}`).join('、')+'を着た40代男性の全身見本',items,colors:[...new Set(items.map(x=>x.color))],top,pants:pant,outer,shoes:shoe,hat,pantsType:pType,outerType:oType,recommended:i<6,description:`${topAdvice[topKey]}${seasonalTop}${pantsAdvice[pType][0]}${sceneAdvice[sceneKey][0]}`,avoid:`${pantsAdvice[pType][1]}${sceneAdvice[sceneKey][1]}`,imagePrompt:english};
  }));
}
function normalizeInitial(): Outfit[] {
  return initialOutfits.map(o=>{
    const items=o.items.map(i=>({...i,color:i.color==='オリーブ'?'カーキ':i.color==='チャコール'?'グレー':i.color,productCategory:i.category}));
    const pant=items.find(i=>['パンツ','デニム','カーゴ','ワイドパンツ'].includes(i.category))!;
    const outer=items.find(i=>['アウター','ジャケット'].includes(i.category)||i.name.includes('カーディガン')||(i.category==='パーカー'&&items.some(x=>x.category==='Tシャツ')))||null;
    const top=items.find(i=>i!==outer&&i!==pant&&!['帽子','靴'].includes(i.category))!;
    const shoe=items.find(i=>i.category==='靴')!,hat=items.find(i=>i.category==='帽子')||null;
    const pType:Outfit['pantsType']=pant.category==='カーゴ'?'カーゴ':pant.category==='デニム'?'デニム':pant.category==='ワイドパンツ'?'ワイド':pant.name.includes('チノ')?'チノ':pant.name.includes('テーパード')?'テーパード':'スラックス';
    const oType:Outfit['outerType']=!outer?'なし':outer.name.includes('カーディガン')?'カーディガン':outer.name.includes('チェスター')?'チェスターコート':outer.name.includes('コート')?'チェスターコート':outer.name.includes('ダウン')||outer.name.includes('中綿')?'ダウン':outer.name.includes('テーラード')?'テーラードジャケット':outer.name.includes('ジャケット')?'ブルゾン':'その他';
    return {...o,items,top,pants:pant,outer,shoes:shoe,hat,pantsType:pType,outerType:oType,colors:[...new Set(items.map(i=>i.color))],imageAlt:items.map(x=>`${x.color}の${x.name}`).join('、')+'を着た40代男性の全身見本',recommended:['spring-01','autumn-01','autumn-03','autumn-05'].includes(o.id)};
  });
}
// 前のコーデとテイスト・季節・形が離れたものを優先する、再現可能な並び順。
export function diversify(list: Outfit[]): Outfit[] {
  const pool=[...list],result:Outfit[]=[];
  while(pool.length){const previous=result.at(-1);let best=0,bestScore=-Infinity;pool.forEach((o,i)=>{const score=previous?(o.taste!==previous.taste?8:0)+(o.season!==previous.season?6:0)+(o.pantsType!==previous.pantsType?4:0)+(o.outerType!==previous.outerType?3:0)+(o.top.name!==previous.top.name?3:0)+(o.scenes[0]!==previous.scenes[0]?2:0)+(o.pants.color!==previous.pants.color?1:0):0;if(score>bestScore){best=i;bestScore=score;}});result.push(pool.splice(best,1)[0]);}
  return result;
}
const archivedOutfits=[...normalizeInitial(),...buildRecipes(),...monochromeOutfits].map(o=>({...o,...existingProfile(o)}));
const mixed:StyledOutfit[]=[];
for(let i=0;i<Math.max(archivedOutfits.length,varietyOutfits.length);i++){
  if(varietyOutfits[i])mixed.push(varietyOutfits[i]);
  if(archivedOutfits[i])mixed.push(archivedOutfits[i]);
}
export const outfits:StyledOutfit[]=diversify(mixed) as StyledOutfit[];
