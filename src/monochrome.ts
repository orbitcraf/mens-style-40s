import type { Outfit, OutfitItem } from './data';

// 個別編集する黒白特集。色だけでなく素材・形・重ね着を変える。
type Garment = [string,string,string,string]; // カテゴリ、名称、色、画像指定
const g: Record<string,Garment> = {
  bt:['Tシャツ','厚手クルーネックT','黒','black heavyweight cotton short-sleeve crewneck T-shirt'],
  wt:['Tシャツ','厚手クルーネックT','白','white opaque heavyweight cotton short-sleeve crewneck T-shirt'],
  ws:['シャツ','ブロードシャツ','白','white crisp long-sleeve broadcloth regular-collar shirt'],
  wl:['シャツ','リネン半袖シャツ','白','white short-sleeve linen-texture shirt'],
  bs:['シャツ','ドレープ開襟シャツ','黒','black short-sleeve draped open-collar shirt'],
  bp:['ニット','鹿の子ニットポロ','黒','black short-sleeve textured knit polo'],
  wp:['ニット','半袖リブニット','白','white short-sleeve ribbed knit crewneck'],
  wk:['ニット','ハイゲージクルーニット','白','white fine-gauge crewneck sweater'],
  wc:['ニット','畦編みクルーニット','白','white chunky fisherman rib-knit crewneck sweater'],
  bk:['ニット','ハイゲージモックニット','黒','black fine-gauge mock-neck sweater'],
  br:['ニット','リブタートルニット','黒','black ribbed turtleneck sweater'],
  waffle:['Tシャツ','長袖ワッフルT','白','white long-sleeve waffle-texture shirt'],
  gray:['スウェット','コンパクトスウェット','グレー','gray plain crewneck sweatshirt with compact regular fit'],
  navy:['ニット','ハイゲージニットポロ','ネイビー','navy fine-gauge long-sleeve knitted polo'],
  slim:['パンツ','スリムストレッチスラックス','黒','black slim tailored slacks, not skin tight'],
  straight:['パンツ','ストレートツイルスラックス','黒','black straight twill tailored slacks with pressed creases'],
  wide:['ワイドパンツ','2タックワイドスラックス','黒','black wide-leg double-pleated tailored slacks'],
  taper:['パンツ','アンクルテーパードパンツ','黒','black ankle-length tapered trousers with room at hips'],
  cargo:['カーゴ','フラットポケットカーゴ','黒','black straight cargo trousers with flat side pockets'],
  denim:['デニム','ブラックストレートデニム','黒','black straight denim jeans with no distressing'],
  wdenim:['デニム','ブラックワイドデニム','黒','black wide-leg denim jeans with no distressing'],
  chino:['パンツ','細身ストレートチノ','黒','black slim straight chino trousers'],
  white:['パンツ','白ストレートチノ','白','opaque white straight chino trousers'],
  grayP:['パンツ','グレーテーパードスラックス','グレー','gray tapered tailored slacks'],
  navyP:['パンツ','ネイビーストレートスラックス','ネイビー','navy straight tailored slacks'],
  jacket:['ジャケット','マットテーラードジャケット','黒','black matte tailored blazer worn open'],
  linen:['ジャケット','リネン混サマージャケット','黒','black unlined linen-texture summer blazer worn open'],
  zip:['アウター','短丈ジップブルゾン','黒','black short cotton zip-front blouson worn open'],
  ma:['アウター','マットMA-1ブルゾン','黒','black matte nylon MA-1 bomber worn open'],
  coat:['アウター','ウールチェスターコート','黒','black knee-length wool Chesterfield coat worn open'],
  soutien:['アウター','コットンステンカラーコート','黒','black knee-length cotton balmacaan coat worn open'],
  down:['アウター','ショートダウンジャケット','黒','black short quilted down puffer jacket worn open'],
  hood:['パーカー','ジップパーカー','黒','black cotton zip hoodie worn open with white T-shirt clearly visible'],
  card:['ニット','ミラノリブカーディガン','黒','black structured Milano rib button cardigan worn open'],
  shell:['アウター','軽量フードシェル','黒','black lightweight hooded nylon shell jacket worn open'],
  grayJ:['アウター','グレーウールブルゾン','グレー','gray wool-texture short zip blouson worn open'],
  navyJ:['ジャケット','ネイビーテーラードジャケット','ネイビー','navy tailored blazer worn open'],
  wover:['シャツ','白オックスフォード羽織り','白','white Oxford long-sleeve overshirt worn open'],
  shoe:['靴','プレーントゥ革靴','黒','black plain-toe leather derby shoes'],
  loafer:['靴','レザーペニーローファー','黒','black leather penny loafers'],
  sneaker:['靴','レザースニーカー','白','plain white low-top leather sneakers'],
  blackshoe:['靴','ミニマルスニーカー','黒','plain all-black low-top sneakers'],
  boot:['靴','サイドゴアブーツ','黒','black leather Chelsea ankle boots'],
  cap:['帽子','無地コットンキャップ','黒','plain black cotton baseball cap'],
};
type Row=[string,Outfit['season'],Outfit['taste'],Outfit['scenes'][number],string,string,string,string,string,string];
const rows: Row[] = [
  ['マットジャケットのオールブラック','春','きれいめ','食事','bk','slim','jacket','shoe','none','滑らかなニットとマットなジャケットの差を見せ、細身でも胸と腰には余裕を。'],
  ['白シャツと黒ワイドの春散歩','春','大人シンプル','普段着','ws','wide','none','loafer','none','白シャツの前裾だけを入れ、タックの立体感と軽い首元を見せます。'],
  ['黒ブルゾンと白Tのカーゴ休日','春','ミリタリー','買い物','wt','cargo','zip','blackshoe','none','短い羽織りと平らなカーゴポケットで輪郭を整え、白Tは腰で収めます。'],
  ['黒ジャケットに白シャツの通勤服','春','きれいめ','仕事','ws','straight','jacket','loafer','none','襟とセンタープレスを整え、職場の服装規定に合わせてジャケットの身幅を選びます。'],
  ['黒フーディーに白をのぞかせて','春','カジュアル','旅行','wt','denim','hood','sneaker','none','フードを立体的に整え、ジップの間から白Tを縦に見せます。'],
  ['黒シェルと白ワッフルの小雨服','春','スポーティ','雨の日','waffle','taper','shell','blackshoe','cap','凹凸のある白インナーと滑らかなシェルを対比。裾を短くし、撥水性能は購入時に確認を。'],
  ['グレーを挟む黒白ジャケット','春','大人シンプル','デート','wt','grayP','jacket','shoe','none','白を顔周りに、グレーをパンツに置いて強いコントラストを和らげます。'],
  ['白ニットと黒チノの気軽な食事','春','カジュアル','食事','wk','chino','card','sneaker','none','薄手ニットと厚みのあるカーディガンを重ね、袖口をすっきり整えます。'],
  ['黒ニットポロの夏オールブラック','夏','大人シンプル','食事','bp','taper','none','loafer','none','鹿の子の細かな凹凸を主役に、足首を少し見せて黒一色に軽さを。'],
  ['白リネンと黒チノの夏旅','夏','カジュアル','旅行','wl','chino','none','sneaker','none','リネンの柔らかな表面を生かし、半袖は肘より上、裾は長く余らせません。'],
  ['白Tを黒スラックスで引き締める','夏','大人シンプル','普段着','wt','straight','none','loafer','none','透けにくい白Tの首元を整え、センタープレスでシンプルな服に品を足します。'],
  ['黒開襟シャツと白チノの涼感','夏','カジュアル','デート','bs','white','none','blackshoe','none','柔らかな黒シャツに白パンツの直線を合わせ、胸元を開けすぎず涼しげに。'],
  ['白リブニットと黒ワイドデニム','夏','大人ストリート','買い物','wp','wdenim','none','sneaker','cap','リブの縦線と広いデニムの輪郭を対比。帽子は無地にして小物を静かに。'],
  ['白シャツの黒カーゴ通勤MIX','夏','ミリタリー','仕事','ws','cargo','none','shoe','none','平らなポケットと革靴でカーゴを整え、袖は前腕まで一度だけ折って。カジュアル可の職場向け。'],
  ['夏の黒リネンジャケットと白T','夏','きれいめ','食事','wt','slim','linen','loafer','none','裏地の少ない羽織りと厚すぎない白Tで重ね、細身パンツにも腰の余裕を。'],
  ['白オックス羽織りの黒白街歩き','夏','大人ストリート','旅行','bt','wide','wover','blackshoe','none','白シャツを開けて縦のラインを作り、黒Tの丈はワイドの腰付近で収めます。'],
  ['リブタートルと黒カーゴの秋','秋','ミリタリー','普段着','br','cargo','none','boot','none','縦リブとカーゴの平らなポケットに変化をつけ、黒一色でも素材の違いを見せます。'],
  ['白ニットと黒スラックスの秋デート','秋','きれいめ','デート','wk','straight','none','shoe','none','薄手の白ニットは肩が合うサイズを。黒の直線的なパンツで柔らかな上半身を整えます。'],
  ['黒MA-1と白シャツの大人ストリート','秋','大人ストリート','買い物','ws','wdenim','ma','blackshoe','none','シャツの襟をリブ襟の内側へ収め、ナイロンとデニムの質感を対比します。'],
  ['グレースウェットで黒白に濃淡を','秋','スポーティ','旅行','gray','cargo','zip','sneaker','cap','グレーのスウェットと白い足元で黒を分散し、短丈ブルゾンで全体を整えます。'],
  ['ネイビーと白の黒パンツ通勤','秋','きれいめ','仕事','ws','taper','navyJ','shoe','none','白い襟を明るい接点にして、ネイビーと黒の違いが分かる生地を選びます。'],
  ['黒カーディガンと白リブの食事服','秋','大人シンプル','食事','wp','grayP','card','loafer','none','ミラノリブの形を生かし、白リブとグレーパンツで硬すぎない三色に。'],
  ['ステンカラーと白シャツの小雨','秋','カジュアル','雨の日','ws','denim','soutien','blackshoe','none','シャツの襟をコートの内側に収め、デニムの裾を引きずらない丈に。防水性能は別途確認します。'],
  ['黒ウールコートの静かな一色','冬','大人シンプル','食事','bk','wide','coat','boot','none','コートの毛足と滑らかなニットを対比し、ワイドは靴に軽く触れる丈で。'],
  ['黒コートと白畦ニットの冬デート','冬','きれいめ','デート','wc','slim','coat','shoe','none','畦編みの白を顔周りへ。厚手ニットの上でも肩が動くコートを選びます。'],
  ['黒ダウンと白ニットの街歩き','冬','スポーティ','旅行','wk','taper','down','sneaker','none','ダウンの横キルトと細い裾でバランスを取り、白いニットと靴をつなげます。'],
  ['黒ブルゾンと白ニットの冬カーゴ','冬','ミリタリー','買い物','wc','cargo','zip','boot','cap','ニットの立体感を中心に、短い羽織りと平らなポケットで無骨さを控えます。'],
  ['グレーウールと黒白の冬休日','冬','カジュアル','普段着','wk','wdenim','grayJ','blackshoe','none','グレーの毛足と白ニット、黒デニムで質感を三段に。裾の余りを控えめに。'],
  ['ネイビーニットを黒白で囲む','冬','大人シンプル','食事','navy','white','coat','loafer','none','濃紺の襟付きニットに白パンツの明るさを。黒コートを開けて三色を縦につなぎます。'],
  ['白ニットと濃紺スラックスの黒ダウン','冬','大人ストリート','旅行','wc','navyP','down','blackshoe','none','白の編み地を見せ、濃紺のセンタープレスでダウンのボリュームを整えます。'],
];
const item=(key:string):OutfitItem=>{const d=g[key];return {category:d[0],name:d[1],color:d[2],brand:['靴','帽子','カーゴ','ワイドパンツ','アウター'].includes(d[0])?'GU':'UNIQLO',productCategory:d[0]};};
export const monochromeOutfits:Outfit[]=rows.map(([name,season,taste,scene,t,p,o,s,h,point],i)=>{
  const top=item(t),pants=item(p),outer=o==='none'?null:item(o),shoes=item(s),hat=h==='none'?null:item(h);
  const items=[outer,top,pants,shoes,hat].filter((x):x is OutfitItem=>x!==null);
  const id=`mono-${String(i+1).padStart(2,'0')}`;
  const pantsType:Outfit['pantsType']=p==='cargo'?'カーゴ':['denim','wdenim'].includes(p)?'デニム':p==='wide'?'ワイド':['taper','grayP'].includes(p)?'テーパード':['chino','white'].includes(p)?'チノ':'スラックス';
  const outerType:Outfit['outerType']=o==='none'?'なし':['jacket','linen','navyJ'].includes(o)?'テーラードジャケット':o==='coat'?'チェスターコート':o==='soutien'?'ステンカラーコート':o==='down'?'ダウン':o==='card'?'カーディガン':o==='ma'?'MA-1':['zip','grayJ'].includes(o)?'ブルゾン':'その他';
  return {id,name,season,taste,scenes:[scene],difficulty:'かんたん',image:`images/${id}.webp`,imageAlt:items.map(x=>x.color+'の'+x.name).join('、')+'を着た40代男性の全身見本',items,colors:[...new Set(items.map(x=>x.color))],top,pants,outer,shoes,hat,pantsType,outerType,recommended:[0,2,8,17,24,28].includes(i),description:point,avoid:'黒い生地の色あせ・ほこり、白い生地の透け・黄ばみは整えて。'+(pantsType==='ワイド'||p==='wdenim'?'上下とも極端に大きい服や、地面に付く裾は避けます。':'体に張り付く細さや、裾が何段もたまる丈は避けます。')+'大きなロゴや光るアクセサリーを重ねすぎないように。',imagePrompt:[o,t,p,s,h].filter(k=>k!=='none').map(k=>g[k][3]).join('; ')};
});
