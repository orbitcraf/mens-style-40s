import type { Outfit, OutfitItem, StyledOutfit } from './data';
import { makeProfile, type Genre, type Silhouette } from './style-profile';

// 新規追加分のみ。ブランドは近いカテゴリを探す目安で、実商品の販売情報ではありません。
type Piece = [string, string, string, 'UNIQLO'|'GU'];
interface WinterDefinition {
  name:string; genre:Genre; taste:Outfit['taste']; silhouette:Silhouette;
  scenes:Outfit['scenes']; occasions:string[]; pantsType:Outfit['pantsType']; outerType:Outfit['outerType'];
  top:Piece; pants:Piece; outer:Piece; shoes:Piece; description:string; avoid:string;
}
const definitions:WinterDefinition[]=[
  {name:'冬のボリューム・ストリート',genre:'大人ストリート',taste:'大人ストリート',silhouette:'上下ゆったり',scenes:['普段着','買い物'],occasions:['買い物','街歩き'],pantsType:'ワイド',outerType:'ダウン',
    top:['スウェット','チャコールのクルースウェット','チャコール','UNIQLO'],pants:['ワイドパンツ','グレーのウール調ワイドパンツ','グレー','GU'],outer:['アウター','黒のヒップ丈ダウンジャケット','黒','UNIQLO'],shoes:['靴','ライトグレー配色のボリュームランニングスニーカー','白','GU'],
    description:'ダウンの丸みとワイドパンツの落ち感をつなぎ、白い立体ソールで軽さを。裾は靴の甲に軽く触れる長さに整えます。',avoid:'長すぎる裾と大きなロゴを重ねると、足元が埋もれて幼く見えがち。'},
  {name:'ロングチェスターの冬モード',genre:'モード',taste:'大人シンプル',silhouette:'上細め＋下ワイド',scenes:['デート','食事'],occasions:['夜デート','レストラン'],pantsType:'ワイド',outerType:'チェスターコート',
    top:['ニット','黒のフィットタートルネック','黒','UNIQLO'],pants:['ワイドパンツ','チャコールのワイドスラックス','チャコール','GU'],outer:['アウター','チャコールのロングチェスターコート','チャコール','GU'],shoes:['靴','黒のスムースレザー調サイドゴアブーツ','黒','GU'],
    description:'細い首元と縦に落ちるロングコートに、幅のあるスラックスを合わせます。サイドゴアのすっきりした甲で、冬の重ね着を端正に。',avoid:'極端に厚いソールや裾のたまりを足すと、縦のラインが途切れます。'},
  {name:'白ニットとウールジャケットの休日',genre:'きれいめ',taste:'きれいめ',silhouette:'普通',scenes:['デート','食事'],occasions:['昼デート','カフェ'],pantsType:'テーパード',outerType:'テーラードジャケット',
    top:['ニット','白の凹凸クルーネックニット','白','UNIQLO'],pants:['パンツ','グレーのセンタープレステーパード','グレー','GU'],outer:['ジャケット','ネイビーのウール調ジャケット','ネイビー','GU'],shoes:['靴','ブラウンのペニーローファー','ブラウン','GU'],
    description:'白いニットで顔周りを明るくし、ネイビーの起毛感で冬らしさを。ブラウンのローファーにはグレーの靴下を合わせ、素足を出さずにまとめます。',avoid:'薄すぎるインナーや素足見せは冬の素材感と合いにくいので控えめに。'},
  {name:'ボルドーの足元で夜を歩く',genre:'ホスト・色気系',taste:'きれいめ',silhouette:'細身',scenes:['デート','食事'],occasions:['夜デート','バー'],pantsType:'スラックス',outerType:'チェスターコート',
    top:['シャツ','黒の控えめな艶シャツ','黒','GU'],pants:['パンツ','黒のスリムノータックスラックス','黒','GU'],outer:['アウター','黒の細身ロングウール調コート','黒','GU'],shoes:['靴','ダークボルドーのキューバンヒールブーツ','ボルドー','GU'],
    description:'胸元は開けすぎず、コートとパンツの縦線で静かな色気を。約4cmのヒールと深いボルドーを足元の一点に使います。寒い日は見えにくい保温インナーを。',avoid:'深い胸元、強い光沢、大ぶりの装飾を同時に足すと衣装のように見えます。'},
  {name:'短丈ダウンと冬のワイドデニム',genre:'韓国・都会系',taste:'大人ストリート',silhouette:'ワイド',scenes:['買い物','普段着'],occasions:['ショッピング','映画'],pantsType:'デニム',outerType:'ダウン',
    top:['ニット','ライトグレーのシンプルニット','グレー','UNIQLO'],pants:['デニム','ブルーのワイドストレートデニム','ブルー','GU'],outer:['アウター','ネイビーのショート丈ダウン','ネイビー','UNIQLO'],shoes:['靴','白の厚底プラットフォームコートスニーカー','白','GU'],
    description:'腰位置で止まるダウンと、まっすぐ落ちるデニムで重心を上へ。白い平らな厚底を見せる丈にして、ボリュームを整理します。',avoid:'ダメージ加工と極端なオーバーサイズを重ねると、落ち着きが薄れます。'},
  {name:'ボアデニムで楽しむ冬のアメカジ',genre:'アメカジ',taste:'カジュアル',silhouette:'普通',scenes:['普段着','旅行'],occasions:['休日','旅行'],pantsType:'チノ',outerType:'ブルゾン',
    top:['パーカー','グレーのプルオーバーパーカー','グレー','UNIQLO'],pants:['パンツ','ベージュのストレートチノ','ベージュ','UNIQLO'],outer:['ジャケット','ブルーのボア裏地デニムジャケット','ブルー','GU'],shoes:['靴','ウィートのヌバック調ワークブーツ','ベージュ','GU'],
    description:'ボアの襟とパーカーで首元を暖かく。チノと小麦色のワークブーツをつなげ、デニムの青を主役にします。裾は一折り程度ですっきり。',avoid:'大きな色落ちや破れ、何重ものロールアップは清潔感を損ないがち。'},
  {name:'ベージュコートの上品な冬ミニマル',genre:'きれいめ',taste:'大人シンプル',silhouette:'普通',scenes:['仕事','食事'],occasions:['通勤','食事'],pantsType:'スラックス',outerType:'ステンカラーコート',
    top:['ニット','ダークネイビーのクルーネックニット','ネイビー','UNIQLO'],pants:['パンツ','黒のストレートスラックス','黒','GU'],outer:['アウター','ベージュの比翼ステンカラーウール調コート','ベージュ','GU'],shoes:['靴','ダークブラウンのプレーントウダービー','ブラウン','GU'],
    description:'比翼のすっきりしたコートに、濃いニットと黒パンツを合わせます。外羽根の革靴で気取りすぎず、暖かい素材と端正な輪郭を両立。',avoid:'大柄のマフラーや派手な靴を加えると、ミニマルなまとまりが散ります。'},
  {name:'モッズコートで冬のミリタリー',genre:'ミリタリー',taste:'ミリタリー',silhouette:'ワイド',scenes:['普段着','旅行'],occasions:['街歩き','旅行'],pantsType:'カーゴ',outerType:'その他',
    top:['ニット','黒の暖かなクルーネックニット','黒','UNIQLO'],pants:['カーゴ','チャコールのストレートカーゴ','チャコール','GU'],outer:['アウター','カーキのロングモッズコート','カーキ','GU'],shoes:['靴','オリーブのハイレースミリタリーブーツ','オリーブ','GU'],
    description:'長いモッズコートに、膨らみを抑えたカーゴを。足元もオリーブでつなぎ、黒ニットで全体を引き締めます。裏地や保温インナーで防寒を補います。',avoid:'迷彩柄や大きな軍装小物を重ねず、無地と清潔なブーツで街着に。'},
  {name:'グレーニットで和らげる冬のロック',genre:'ライブ・音楽',taste:'カジュアル',silhouette:'細身',scenes:['普段着','食事'],occasions:['ライブ','食事'],pantsType:'デニム',outerType:'ブルゾン',
    top:['ニット','グレーのあたたかクルーネック','グレー','UNIQLO'],pants:['デニム','黒のスリムストレッチデニム','黒','UNIQLO'],outer:['ジャケット','黒の控えめ金具レザー調ライダース','黒','GU'],shoes:['靴','黒の細底レースアップアンクルブーツ','黒','GU'],
    description:'レザー調の硬さをグレーニットで和らげ、細いソールの編み上げブーツで軽快に。屋外では保温インナーを重ね、小さなチェーンだけをアクセントに。',avoid:'鋲やチェーンを何点も足したり、極端なダメージデニムを合わせたりしない。'},
  {name:'コーデュロイとスエードの冬休み',genre:'リラックス',taste:'大人シンプル',silhouette:'上下ゆったり',scenes:['普段着','買い物'],occasions:['休日','カフェ'],pantsType:'チノ',outerType:'チェスターコート',
    top:['ニット','生成りの厚手ケーブルニット','生成り','UNIQLO'],pants:['パンツ','ダークブラウンのワイドコーデュロイ','ブラウン','GU'],outer:['アウター','ブラウンのオーバーサイズウール調コート','ブラウン','GU'],shoes:['靴','ベージュのローカットスエード調スニーカー','ベージュ','GU'],
    description:'厚手ニット、畝のあるパンツ、スエード調の靴で冬の触感を楽しみます。上下はゆったりでも袖と裾を余らせず、生成りを顔周りに。',avoid:'ニットの毛玉や引きずる裾は、柔らかな素材をだらしなく見せます。'},
];
const item=([category,name,color,brand]:Piece):OutfitItem=>({category,name:name.startsWith(color+'の')?name.slice(color.length+1):name,color,brand,productCategory:category});
export const winterAdditions:StyledOutfit[]=definitions.map((d,index)=>{
  const top=item(d.top),pants=item(d.pants),outer=item(d.outer),shoes=item(d.shoes);
  const accessories:OutfitItem[]=[3,8].includes(index)?[{category:'アクセサリー',name:'小さなシルバーチェーン',color:'シルバー',brand:'GU',productCategory:'アクセサリー'}]:[];
  const items=[outer,top,pants,shoes,...accessories];
  const id=`winter-add-${String(index+1).padStart(2,'0')}`;
  const outfit:Outfit={id,name:d.name,season:'冬',taste:d.taste,scenes:d.scenes,difficulty:['細身','上細め＋下ワイド'].includes(d.silhouette)?'ひと工夫':'かんたん',image:`images/${id}.webp`,imageAlt:items.map(i=>`${i.color}の${i.name}`).join('、')+'を着た架空の40代日本人男性の全身見本',items,colors:[...new Set(items.map(i=>i.color))],description:d.description,avoid:d.avoid,top,pants,outer,shoes,hat:null,pantsType:d.pantsType,outerType:d.outerType,recommended:false};
  return {...outfit,...makeProfile(outfit,d.genre,d.silhouette,accessories,d.occasions)};
});
