import type { Outfit, OutfitItem, StyledOutfit } from './data';
import { makeProfile, type Genre, type Silhouette } from './style-profile';

// 追加分だけを管理。全商品はコーデを組むための参考商品で、色・在庫・画像の再現を保証しません。
// 公式確認内容と価格根拠: PRODUCT_REFERENCES_2026-11-13.md
type Definition=[string,string,'UNIQLO'|'GU',number,string,string?];
type Pick=[string,string];
interface AdditionDefinition {name:string;season:Outfit['season'];genre:Genre;taste:Outfit['taste'];silhouette:Silhouette;top:Pick;pants:Pick;outer:Pick|null;shoes:Pick;point:string;layers:Pick[];}
const catalog:Record<string,Definition>={
  "ox": [
    "シャツ",
    "オックスフォードシャツ",
    "UNIQLO",
    3990,
    "long-sleeve Oxford button-down shirt",
    "https://www.uniqlo.com/jp/ja/products/E484928-000/00"
  ],
  "vest": [
    "ニット",
    "Vネックニットベスト",
    "GU",
    1990,
    "sleeveless V-neck fine-knit sweater vest"
  ],
  "polo": [
    "ニット",
    "半袖ニットポロシャツ",
    "GU",
    1990,
    "short-sleeve fine-knit polo with collar"
  ],
  "coach": [
    "アウター",
    "ライトコーチジャケット",
    "GU",
    3990,
    "lightweight collared coach jacket with snap front"
  ],
  "tee": [
    "Tシャツ",
    "エアリズムコットンオーバーサイズTシャツ/5分袖",
    "UNIQLO",
    1990,
    "plain half-sleeve oversized cotton T-shirt"
  ],
  "utility": [
    "アウター",
    "ユーティリティシャツジャケット",
    "GU",
    3990,
    "cotton utility overshirt with two flat chest pockets"
  ],
  "stripe": [
    "Tシャツ",
    "ボーダークルーネックTシャツ",
    "UNIQLO",
    1990,
    "navy and white narrow-striped cotton crewneck T-shirt"
  ],
  "zip": [
    "アウター",
    "ジップアップブルゾン",
    "GU",
    3990,
    "simple hip-length zip-up blouson"
  ],
  "henley": [
    "Tシャツ",
    "長袖ヘンリーネックTシャツ",
    "UNIQLO",
    1990,
    "long-sleeve cotton henley shirt with three buttons"
  ],
  "card": [
    "ニット",
    "Vネックカーディガン",
    "UNIQLO",
    3990,
    "fine-knit V-neck button cardigan"
  ],
  "band": [
    "シャツ",
    "バンドカラーシャツ",
    "UNIQLO",
    2990,
    "long-sleeve band-collar shirt"
  ],
  "tailored": [
    "ジャケット",
    "ウォッシャブルテーラードジャケット",
    "GU",
    3990,
    "unstructured tailored two-button blazer"
  ],
  "milano": [
    "ニット",
    "ウォッシャブルミラノリブクルーネックセーター",
    "UNIQLO",
    3990,
    "fine Milano rib-knit crewneck sweater",
    "https://www.uniqlo.com/jp/ja/products/E453754-000/00"
  ],
  "longtee": [
    "Tシャツ",
    "長袖スムースクルーネックTシャツ",
    "UNIQLO",
    1990,
    "plain smooth cotton long-sleeve crewneck shirt"
  ],
  "gilet": [
    "アウター",
    "ライトユーティリティベスト",
    "GU",
    2990,
    "lightweight utility gilet with minimal flat pockets"
  ],
  "shortshirt": [
    "シャツ",
    "半袖ストライプシャツ",
    "UNIQLO",
    2990,
    "short-sleeve light-blue and white narrow vertical striped camp shirt"
  ],
  "mesh": [
    "ニット",
    "メッシュクルーネックセーター",
    "GU",
    1990,
    "short-sleeve fine open-mesh sweater, opaque plain same-color tank beneath"
  ],
  "tank": [
    "Tシャツ",
    "リブタンクトップ",
    "GU",
    990,
    "plain ribbed tank top"
  ],
  "open": [
    "シャツ",
    "半袖オープンカラーシャツ",
    "GU",
    1990,
    "short-sleeve camp-collar shirt worn open"
  ],
  "linen": [
    "シャツ",
    "リネンブレンド半袖シャツ",
    "UNIQLO",
    2990,
    "short-sleeve linen-texture button shirt"
  ],
  "ma1": [
    "アウター",
    "パデッドMA-1ブルゾン",
    "GU",
    4990,
    "restrained padded MA-1 bomber jacket"
  ],
  "knitpolo": [
    "ニット",
    "長袖ニットポロシャツ",
    "GU",
    2990,
    "long-sleeve fine-knit polo shirt"
  ],
  "check": [
    "シャツ",
    "フランネルチェックシャツ",
    "UNIQLO",
    3990,
    "dark-brown and cream small-check flannel overshirt worn open"
  ],
  "mock": [
    "ニット",
    "ハイゲージモックネックセーター",
    "UNIQLO",
    3990,
    "fine-gauge mock-neck knit"
  ],
  "denimj": [
    "ジャケット",
    "デニムワークジャケット",
    "GU",
    3990,
    "simple denim work jacket with flat chest pockets"
  ],
  "suede": [
    "アウター",
    "スエード調ジップブルゾン",
    "GU",
    4990,
    "matte suede-effect zip-up blouson"
  ],
  "standcoat": [
    "アウター",
    "スタンドカラーウール調コート",
    "GU",
    7990,
    "knee-length wool-effect stand-collar overcoat"
  ],
  "turtle": [
    "ニット",
    "メリノタートルネックセーター",
    "UNIQLO",
    3990,
    "fine-gauge merino turtleneck sweater"
  ],
  "padded": [
    "アウター",
    "ウォームパデッドスタンドブルゾン",
    "GU",
    5990,
    "padded stand-collar winter jacket"
  ],
  "thermal": [
    "Tシャツ",
    "ワッフルクルーネックTシャツ",
    "UNIQLO",
    1990,
    "thick long-sleeve waffle-knit cotton crewneck"
  ],
  "peacoat": [
    "アウター",
    "メルトン調ピーコート",
    "GU",
    7990,
    "double-breasted hip-length wool-effect peacoat"
  ],
  "liner": [
    "アウター",
    "中わたライナージャケット",
    "GU",
    4990,
    "quilted collarless padded liner jacket"
  ],
  "hoodcoat": [
    "アウター",
    "フード付きロングコート",
    "GU",
    7990,
    "minimal knee-length hooded winter coat"
  ],
  "halfzip": [
    "ニット",
    "ハーフジップセーター",
    "UNIQLO",
    3990,
    "thick rib-knit half-zip sweater"
  ],
  "fleecej": [
    "アウター",
    "フリースユーティリティジャケット",
    "GU",
    4990,
    "fleece-lined cotton utility jacket with fold-down collar"
  ],
  "flannel": [
    "シャツ",
    "無地フランネルシャツ",
    "UNIQLO",
    3990,
    "plain brushed flannel button shirt"
  ],
  "longcoat": [
    "アウター",
    "ロングバルマカーンコート",
    "GU",
    7990,
    "long wool-effect balmacaan coat with regular fold-down collar"
  ],
  "shawl": [
    "ニット",
    "ショールカラーニット",
    "GU",
    2990,
    "shawl-collar thick knit pullover"
  ],
  "chino": [
    "パンツ",
    "チノワイドストレートパンツ",
    "GU",
    2990,
    "wide straight-leg chino trousers",
    "https://www.gu-global.com/jp/ja/products/E360423-000/00"
  ],
  "slacks": [
    "ワイドパンツ",
    "ワイドストレートスラックス",
    "GU",
    2990,
    "wide straight-leg tailored slacks",
    "https://www.gu-global.com/jp/ja/products/E360400-000/00"
  ],
  "barrel": [
    "デニム",
    "3Dバレルジーンズ",
    "GU",
    2990,
    "curved barrel-leg denim jeans",
    "https://www.gu-global.com/jp/ja/products/E361123-000/00"
  ],
  "taper": [
    "パンツ",
    "タックテーパードパンツ",
    "GU",
    2990,
    "pleated tapered tailored trousers",
    "https://www.gu-global.com/jp/ja/products/E360402-000/00"
  ],
  "creamdenim": [
    "デニム",
    "ワイドストレートジーンズ",
    "GU",
    2990,
    "wide straight denim jeans"
  ],
  "shorts": [
    "パンツ",
    "タックショートパンツ",
    "GU",
    1990,
    "knee-length pleated cotton shorts"
  ],
  "cargo": [
    "カーゴ",
    "ワイドカーゴパンツ",
    "GU",
    3990,
    "wide cargo trousers with flat side flap pockets",
    "https://www.gu-global.com/jp/ja/products/E360420-000/00"
  ],
  "cord": [
    "パンツ",
    "コーデュロイスーパーワイドパンツ",
    "GU",
    2990,
    "super-wide corduroy trousers with visible fine ridges",
    "https://www.gu-global.com/jp/ja/products/E360524-000/00"
  ],
  "tweed": [
    "パンツ",
    "タックテーパードパンツ/ツイーディー",
    "GU",
    2990,
    "tweed-texture pleated tapered trousers"
  ],
  "sweatpants": [
    "パンツ",
    "スムーススウェット3Dバレルパンツ",
    "GU",
    2990,
    "structured smooth-sweat barrel-leg trousers"
  ],
  "straight": [
    "デニム",
    "ストレートジーンズ",
    "GU",
    2990,
    "clean straight-leg denim jeans"
  ],
  "woolpants": [
    "ワイドパンツ",
    "ウール調ワイドパンツ",
    "GU",
    3990,
    "wide wool-effect tailored trousers"
  ],
  "canvas": [
    "靴",
    "カラーキャンバススニーカー",
    "GU",
    1990,
    "low-top canvas sneakers with flat rubber soles"
  ],
  "retro": [
    "靴",
    "ナイロンコンビネーションフラットソールスニーカー",
    "GU",
    2990,
    "nylon-and-suede retro sneakers with thin flat soles",
    "https://www.gu-global.com/jp/ja/products/E361081-000/00"
  ],
  "leather": [
    "靴",
    "フェイクレザースニーカー",
    "GU",
    2990,
    "minimal faux-leather low-top sneakers"
  ],
  "derby": [
    "靴",
    "プレーントウシューズ",
    "GU",
    3990,
    "plain-toe leather-effect derby shoes"
  ],
  "loaf": [
    "靴",
    "コインローファー",
    "GU",
    2990,
    "leather-effect penny loafers"
  ],
  "suedeLoaf": [
    "靴",
    "スエード調ローファー",
    "GU",
    2990,
    "suede-effect loafers"
  ],
  "sandals": [
    "靴",
    "ストラップサンダル",
    "GU",
    1990,
    "flat sandals with two broad secure straps"
  ],
  "slides": [
    "靴",
    "スライドサンダル",
    "GU",
    1990,
    "minimal broad-strap slide sandals"
  ],
  "work": [
    "靴",
    "ワークシューズ",
    "GU",
    3990,
    "rounded-toe work shoes with rugged soles"
  ],
  "hightop": [
    "靴",
    "ハイカットスニーカー",
    "GU",
    3990,
    "canvas high-top sneakers with rubber toe caps"
  ],
  "chelsea": [
    "靴",
    "サイドゴアブーツ",
    "GU",
    4990,
    "smooth leather-effect Chelsea boots"
  ],
  "trail": [
    "靴",
    "トレイル調スニーカー",
    "GU",
    3990,
    "trail-style sneakers with grippy soles"
  ],
  "boots": [
    "靴",
    "レースアップワークブーツ",
    "GU",
    4990,
    "nubuck-effect lace-up work boots"
  ]
};
const definitions:AdditionDefinition[]=[
  {
    "name": "春のベスト、ブルーとブラウン",
    "season": "春",
    "genre": "きれいめ",
    "taste": "きれいめ",
    "silhouette": "普通",
    "top": [
      "ox",
      "ブルー"
    ],
    "pants": [
      "chino",
      "ブラウン"
    ],
    "outer": [
      "vest",
      "生成り"
    ],
    "shoes": [
      "canvas",
      "白"
    ],
    "point": "オックスの襟とベストのVを重ね、ブラウンのパンツで穏やかに。白い靴を見せる丈に整えます。",
    "layers": []
  },
  {
    "name": "ネイビーポロとオリーブの春散歩",
    "season": "春",
    "genre": "リラックス",
    "taste": "大人シンプル",
    "silhouette": "ワイド",
    "top": [
      "polo",
      "ネイビー"
    ],
    "pants": [
      "slacks",
      "オリーブ"
    ],
    "outer": null,
    "shoes": [
      "derby",
      "ブラウン"
    ],
    "point": "襟のあるニットを一枚で着て、幅のあるパンツと端正な靴を合わせます。袖は肘より少し上で止めます。",
    "layers": []
  },
  {
    "name": "生成りコーチとラベンダーの休日",
    "season": "春",
    "genre": "大人ストリート",
    "taste": "大人ストリート",
    "silhouette": "ワイド",
    "top": [
      "tee",
      "その他"
    ],
    "pants": [
      "barrel",
      "黒"
    ],
    "outer": [
      "coach",
      "生成り"
    ],
    "shoes": [
      "retro",
      "グレー"
    ],
    "point": "淡いラベンダーを差し色に。丸いデニムと薄いソールの対比で、力の抜けたストリートに。",
    "layers": []
  },
  {
    "name": "春のユーティリティと細ボーダー",
    "season": "春",
    "genre": "ミリタリー",
    "taste": "ミリタリー",
    "silhouette": "普通",
    "top": [
      "stripe",
      "ネイビー"
    ],
    "pants": [
      "taper",
      "ベージュ"
    ],
    "outer": [
      "utility",
      "オリーブ"
    ],
    "shoes": [
      "canvas",
      "黒"
    ],
    "point": "無地の羽織りから細いボーダーを少し見せます。テーパードと小ぶりのキャンバス靴で軽快に。",
    "layers": []
  },
  {
    "name": "グレージップとブルーヘンリー",
    "season": "春",
    "genre": "韓国・都会系",
    "taste": "カジュアル",
    "silhouette": "ワイド",
    "top": [
      "henley",
      "ブルー"
    ],
    "pants": [
      "chino",
      "ネイビー"
    ],
    "outer": [
      "zip",
      "グレー"
    ],
    "shoes": [
      "leather",
      "白"
    ],
    "point": "短いブルゾンとワイドチノの腰位置をそろえます。青いヘンリーネックで首元に柔らかい変化を。",
    "layers": []
  },
  {
    "name": "青カーディガンのバレルデニム",
    "season": "春",
    "genre": "アメカジ",
    "taste": "カジュアル",
    "silhouette": "普通",
    "top": [
      "band",
      "白"
    ],
    "pants": [
      "barrel",
      "ブラウン"
    ],
    "outer": [
      "card",
      "ブルー"
    ],
    "shoes": [
      "loaf",
      "黒"
    ],
    "point": "バンドカラーをカーディガンで挟み、ブラウンデニムに黒ローファーを。袖と裾を余らせないのがコツ。",
    "layers": []
  },
  {
    "name": "春ジャケットはグレーとベージュで",
    "season": "春",
    "genre": "きれいめ",
    "taste": "きれいめ",
    "silhouette": "上細め＋下ワイド",
    "top": [
      "milano",
      "グレー"
    ],
    "pants": [
      "slacks",
      "黒"
    ],
    "outer": [
      "tailored",
      "ベージュ"
    ],
    "shoes": [
      "suedeLoaf",
      "ブラウン"
    ],
    "point": "細かな編み目と軽いジャケットを重ねます。黒のワイドパンツをスエード調の靴で和らげます。",
    "layers": []
  },
  {
    "name": "ネイビーベストと生成りデニム",
    "season": "春",
    "genre": "大人ストリート",
    "taste": "大人ストリート",
    "silhouette": "ワイド",
    "top": [
      "longtee",
      "黒"
    ],
    "pants": [
      "creamdenim",
      "生成り"
    ],
    "outer": [
      "gilet",
      "ネイビー"
    ],
    "shoes": [
      "leather",
      "白"
    ],
    "point": "ベストのポケットを主役にして、インナーは無地に。明るいデニムの太さを白い靴へつなげます。",
    "layers": []
  },
  {
    "name": "テラコッタTで夏の短パンを大人に",
    "season": "夏",
    "genre": "リラックス",
    "taste": "カジュアル",
    "silhouette": "普通",
    "top": [
      "tee",
      "ブラウン"
    ],
    "pants": [
      "shorts",
      "ネイビー"
    ],
    "outer": null,
    "shoes": [
      "sandals",
      "ブラウン"
    ],
    "point": "赤みのあるブラウンとネイビーで短パンを落ち着かせます。膝にかかる丈と固定感のあるサンダルを選びます。",
    "layers": []
  },
  {
    "name": "ネイビーのニットポロで夏ミニマル",
    "season": "夏",
    "genre": "きれいめ",
    "taste": "大人シンプル",
    "silhouette": "上細め＋下ワイド",
    "top": [
      "polo",
      "ネイビー"
    ],
    "pants": [
      "slacks",
      "グレー"
    ],
    "outer": null,
    "shoes": [
      "canvas",
      "白"
    ],
    "point": "ニットの落ち感とスラックスの直線を合わせ、白いキャンバスで軽さを。裾をためず足元を見せます。",
    "layers": []
  },
  {
    "name": "青ストライプと夏のカーゴ",
    "season": "夏",
    "genre": "大人ストリート",
    "taste": "大人ストリート",
    "silhouette": "上下ゆったり",
    "top": [
      "shortshirt",
      "ブルー"
    ],
    "pants": [
      "cargo",
      "オリーブ"
    ],
    "outer": null,
    "shoes": [
      "sandals",
      "ベージュ"
    ],
    "point": "縦ストライプでカーゴの横幅を整えます。半袖は肘付近、パンツはサンダルに触れない丈に。",
    "layers": []
  },
  {
    "name": "ブラウンメッシュの涼しい休日",
    "season": "夏",
    "genre": "リラックス",
    "taste": "大人シンプル",
    "silhouette": "上下ゆったり",
    "top": [
      "mesh",
      "ブラウン"
    ],
    "pants": [
      "chino",
      "生成り"
    ],
    "outer": null,
    "shoes": [
      "slides",
      "黒"
    ],
    "point": "メッシュには同色のタンクトップを重ねて透けを抑えます。生成りチノと黒いサンダルで輪郭を整えます。",
    "layers": [
      [
        "tank",
        "ブラウン"
      ]
    ]
  },
  {
    "name": "グレーの開襟、青デニムの夏",
    "season": "夏",
    "genre": "韓国・都会系",
    "taste": "大人ストリート",
    "silhouette": "上下ゆったり",
    "top": [
      "tank",
      "黒"
    ],
    "pants": [
      "barrel",
      "ブルー"
    ],
    "outer": [
      "open",
      "グレー"
    ],
    "shoes": [
      "canvas",
      "黒"
    ],
    "point": "開襟シャツから黒タンクを少しだけ見せます。デニムの丸みを小さなキャンバス靴で受け止めます。",
    "layers": []
  },
  {
    "name": "ベージュリネンと黒ショーツ",
    "season": "夏",
    "genre": "きれいめ",
    "taste": "きれいめ",
    "silhouette": "普通",
    "top": [
      "linen",
      "ベージュ"
    ],
    "pants": [
      "shorts",
      "黒"
    ],
    "outer": null,
    "shoes": [
      "sandals",
      "ブラウン"
    ],
    "point": "リネン調の襟と膝丈ショーツで清潔に。シャツは大きすぎず、足元の茶色で肌と服を自然につなぎます。",
    "layers": []
  },
  {
    "name": "くすみブルーとブラウンの夏配色",
    "season": "夏",
    "genre": "リラックス",
    "taste": "カジュアル",
    "silhouette": "上下ゆったり",
    "top": [
      "tee",
      "ブルー"
    ],
    "pants": [
      "chino",
      "ブラウン"
    ],
    "outer": null,
    "shoes": [
      "leather",
      "白"
    ],
    "point": "冷たい青と暖かな茶色を、白スニーカーでつなぎます。Tシャツは腰が隠れすぎない長さに。",
    "layers": []
  },
  {
    "name": "白デニムと紺ボーダーの海辺",
    "season": "夏",
    "genre": "アメカジ",
    "taste": "カジュアル",
    "silhouette": "普通",
    "top": [
      "stripe",
      "ネイビー"
    ],
    "pants": [
      "straight",
      "白"
    ],
    "outer": null,
    "shoes": [
      "canvas",
      "ネイビー"
    ],
    "point": "ボーダーと白デニムを紺の靴で引き締めます。デニムはまっすぐな形で、過度なロールアップを控えます。",
    "layers": []
  },
  {
    "name": "ボルドーカーディガンで秋の街へ",
    "season": "秋",
    "genre": "アメカジ",
    "taste": "カジュアル",
    "silhouette": "普通",
    "top": [
      "henley",
      "グレー"
    ],
    "pants": [
      "barrel",
      "ブルー"
    ],
    "outer": [
      "card",
      "ボルドー"
    ],
    "shoes": [
      "work",
      "ブラウン"
    ],
    "point": "落ち着いた赤と杢グレーを重ね、青いデニムに茶色のワーク靴を。カーディガンは一つだけ留めても自然です。",
    "layers": []
  },
  {
    "name": "MA-1とブラウンコーデュロイ",
    "season": "秋",
    "genre": "ミリタリー",
    "taste": "ミリタリー",
    "silhouette": "上下ゆったり",
    "top": [
      "knitpolo",
      "白"
    ],
    "pants": [
      "cord",
      "ブラウン"
    ],
    "outer": [
      "ma1",
      "オリーブ"
    ],
    "shoes": [
      "retro",
      "グレー"
    ],
    "point": "ナイロンと畝のある生地の違いを楽しみます。白いポロ襟で顔周りを明るくし、無骨さを調整。",
    "layers": []
  },
  {
    "name": "小柄チェックとネイビーの秋",
    "season": "秋",
    "genre": "アメカジ",
    "taste": "カジュアル",
    "silhouette": "普通",
    "top": [
      "tee",
      "ネイビー"
    ],
    "pants": [
      "taper",
      "黒"
    ],
    "outer": [
      "check",
      "ブラウン"
    ],
    "shoes": [
      "derby",
      "ブラウン"
    ],
    "point": "細かなチェックを主役に、インナーとパンツは濃い無地で。革靴の面をきれいに保つと街着らしく整います。",
    "layers": []
  },
  {
    "name": "シャツベストとオリーブスラックス",
    "season": "秋",
    "genre": "きれいめ",
    "taste": "きれいめ",
    "silhouette": "ワイド",
    "top": [
      "ox",
      "白"
    ],
    "pants": [
      "slacks",
      "オリーブ"
    ],
    "outer": [
      "vest",
      "ネイビー"
    ],
    "shoes": [
      "loaf",
      "黒"
    ],
    "point": "白シャツと紺ベストの定番に、オリーブの幅広パンツを。黒ローファーで制服っぽくならず端正に。",
    "layers": []
  },
  {
    "name": "グレーデニムを生成りの足元で",
    "season": "秋",
    "genre": "大人ストリート",
    "taste": "大人ストリート",
    "silhouette": "ワイド",
    "top": [
      "mock",
      "黒"
    ],
    "pants": [
      "chino",
      "ベージュ"
    ],
    "outer": [
      "denimj",
      "グレー"
    ],
    "shoes": [
      "hightop",
      "生成り"
    ],
    "point": "デニムジャケットの短い丈にワイドチノを合わせます。ハイカットは裾で隠しきらず、ゴムのつま先を見せます。",
    "layers": []
  },
  {
    "name": "スエード調ブルゾンの秋カフェ",
    "season": "秋",
    "genre": "デート",
    "taste": "きれいめ",
    "silhouette": "普通",
    "top": [
      "knitpolo",
      "ネイビー"
    ],
    "pants": [
      "tweed",
      "グレー"
    ],
    "outer": [
      "suede",
      "ベージュ"
    ],
    "shoes": [
      "chelsea",
      "ブラウン"
    ],
    "point": "つやを抑えたブルゾンとツイーディーなパンツで秋の質感を。茶色のブーツで縦のラインをつくります。",
    "layers": []
  },
  {
    "name": "黒ジャケットとボルドー、青デニム",
    "season": "秋",
    "genre": "モード",
    "taste": "きれいめ",
    "silhouette": "上細め＋下ワイド",
    "top": [
      "milano",
      "ボルドー"
    ],
    "pants": [
      "barrel",
      "ブルー"
    ],
    "outer": [
      "tailored",
      "黒"
    ],
    "shoes": [
      "derby",
      "黒"
    ],
    "point": "黒ジャケットをデニムで日常に引き寄せます。深い赤のニットだけを差し色にして、装飾は控えめに。",
    "layers": []
  },
  {
    "name": "立ち襟コートと冬のオリーブ",
    "season": "冬",
    "genre": "モード",
    "taste": "大人シンプル",
    "silhouette": "ワイド",
    "top": [
      "turtle",
      "ネイビー"
    ],
    "pants": [
      "cargo",
      "オリーブ"
    ],
    "outer": [
      "standcoat",
      "グレー"
    ],
    "shoes": [
      "chelsea",
      "ブラウン"
    ],
    "point": "立ち襟とタートルを重ね、カーゴのポケットは平らに。深い茶色のブーツで冬の配色をまとめます。",
    "layers": []
  },
  {
    "name": "ベージュ中わたと黒バレルの冬",
    "season": "冬",
    "genre": "大人ストリート",
    "taste": "大人ストリート",
    "silhouette": "ワイド",
    "top": [
      "thermal",
      "ブラウン"
    ],
    "pants": [
      "barrel",
      "黒"
    ],
    "outer": [
      "padded",
      "ベージュ"
    ],
    "shoes": [
      "retro",
      "白"
    ],
    "point": "淡い中わたの内側に濃いブラウンを。丸い黒デニムと薄めの白スニーカーで重さを分散します。",
    "layers": []
  },
  {
    "name": "ピーコートと冬のニットポロ",
    "season": "冬",
    "genre": "きれいめ",
    "taste": "きれいめ",
    "silhouette": "ワイド",
    "top": [
      "knitpolo",
      "生成り"
    ],
    "pants": [
      "cord",
      "グレー"
    ],
    "outer": [
      "peacoat",
      "ネイビー"
    ],
    "shoes": [
      "loaf",
      "ブラウン"
    ],
    "point": "紺のピーコートから生成りの襟を見せます。コーデュロイと靴下で足元まで冬仕様に。",
    "layers": []
  },
  {
    "name": "キルトライナーとシャツの冬散歩",
    "season": "冬",
    "genre": "スポーツMIX",
    "taste": "スポーティ",
    "silhouette": "上下ゆったり",
    "top": [
      "ox",
      "ブルー"
    ],
    "pants": [
      "sweatpants",
      "ネイビー"
    ],
    "outer": [
      "liner",
      "オリーブ"
    ],
    "shoes": [
      "trail",
      "グレー"
    ],
    "point": "キルトの表情とシャツの襟でスウェットを街着に。冷える日は見えにくい保温インナーを重ねます。",
    "layers": []
  },
  {
    "name": "黒フードコートにブラウンの余白",
    "season": "冬",
    "genre": "モード",
    "taste": "大人シンプル",
    "silhouette": "上下ゆったり",
    "top": [
      "halfzip",
      "グレー"
    ],
    "pants": [
      "woolpants",
      "ブラウン"
    ],
    "outer": [
      "hoodcoat",
      "黒"
    ],
    "shoes": [
      "chelsea",
      "黒"
    ],
    "point": "黒いコートの下に灰色と茶色を入れ、重さを分けます。ハーフジップは少し閉め、首元を暖かく。",
    "layers": []
  },
  {
    "name": "ブラウンフリースと冬の白シャツ",
    "season": "冬",
    "genre": "アメカジ",
    "taste": "カジュアル",
    "silhouette": "普通",
    "top": [
      "flannel",
      "白"
    ],
    "pants": [
      "straight",
      "ブルー"
    ],
    "outer": [
      "fleecej",
      "ブラウン"
    ],
    "shoes": [
      "boots",
      "ベージュ"
    ],
    "point": "裏地の暖かさと起毛シャツを重ね、まっすぐなデニムに。小麦色のブーツで柔らかいワークスタイルへ。",
    "layers": []
  },
  {
    "name": "チャコールコートと深い赤のニット",
    "season": "冬",
    "genre": "リラックス",
    "taste": "大人シンプル",
    "silhouette": "普通",
    "top": [
      "shawl",
      "ボルドー"
    ],
    "pants": [
      "taper",
      "黒"
    ],
    "outer": [
      "longcoat",
      "チャコール"
    ],
    "shoes": [
      "leather",
      "ブラウン"
    ],
    "point": "ショール襟の厚手ニットで胸元に奥行きを。黒パンツと茶色のレザー調スニーカーで歩きやすく整えます。",
    "layers": []
  }
];
interface ReferenceItem extends OutfitItem {referencePrice:number;referenceKind:'参考商品';priceKind:'参考価格';}
export type SeasonalAddition=StyledOutfit&{referencePricing:{items:{name:string;brand:OutfitItem['brand'];yen:number}[];total:number;checkedOn:string;label:'参考価格';};};
const referenceItem=([key,color]:Pick):ReferenceItem=>{
  const [category,name,brand,referencePrice,,productUrl]=catalog[key];
  return {category,name,color,brand,productCategory:category,referencePrice,referenceKind:'参考商品',priceKind:'参考価格',...(productUrl?{productUrl}:{})};
};
export const seasonalAdditions:SeasonalAddition[]=definitions.map((d,index)=>{
  const top=referenceItem(d.top),pants=referenceItem(d.pants),outer=d.outer?referenceItem(d.outer):null,shoes=referenceItem(d.shoes);
  const layers=d.layers.map(referenceItem),items=[...(outer?[outer]:[]),top,...layers,pants,shoes];
  const total=items.reduce((sum,i)=>sum+i.referencePrice,0);
  const id='season-add-'+String(index+1).padStart(2,'0');
  const scenes:Outfit['scenes']=d.genre==='きれいめ'||d.genre==='デート'?['デート','食事']:d.genre==='ミリタリー'||d.genre==='スポーツMIX'?['普段着','旅行']:['普段着','買い物'];
  const pantsType:Outfit['pantsType']=['barrel','creamdenim','straight'].includes(d.pants[0])?'デニム':d.pants[0]==='cargo'?'カーゴ':d.pants[0]==='taper'||d.pants[0]==='tweed'?'テーパード':['slacks','cord','woolpants','sweatpants'].includes(d.pants[0])?'ワイド':'チノ';
  const outerType:Outfit['outerType']=!outer?'なし':d.outer![0]==='tailored'?'テーラードジャケット':d.outer![0]==='card'?'カーディガン':d.outer![0]==='ma1'?'MA-1':d.outer![0]==='longcoat'?'ステンカラーコート':['standcoat','hoodcoat','peacoat','vest','gilet','check','open','utility'].includes(d.outer![0])?'その他':'ブルゾン';
  const priceLines=items.map(i=>i.brand+' '+i.color+'の'+i.name+'：参考価格'+i.referencePrice.toLocaleString('ja-JP')+'円').join(' ／ ');
  const outfit:Outfit={id,name:d.name,season:d.season,taste:d.taste,scenes,difficulty:['上下ゆったり','上細め＋下ワイド'].includes(d.silhouette)?'ひと工夫':'かんたん',image:'images/'+id+'.webp',imageAlt:items.map(i=>i.color+'の'+i.name).join('、')+'を合わせた架空の40代日本人男性の全身AI見本。20〜40代向けの参考コーデ。',items,colors:[...new Set(items.map(i=>i.color))],description:d.point+' 参考商品・参考価格（税込）：'+priceLines+'。参考合計：'+total.toLocaleString('ja-JP')+'円。2026年11月13日の公式掲載情報と類似カテゴリの予算を参考にした目安です。未確認の色・仕様は参考提案で、現在の販売や在庫を保証しません。画像は実商品の再現ではありません。',avoid:d.season==='夏'?'透けるトップスの単独着用や、長すぎる裾で足元を隠す合わせ方は控えます。':d.genre==='ミリタリー'?'大きな迷彩柄や軍装小物を重ねず、襟・裾・靴をきれいに整えます。':'袖と裾を余らせすぎたり、強い加工や大きなロゴを重ねすぎたりしないように。',top,pants,outer,shoes,hat:null,pantsType,outerType,recommended:false};
  return {...outfit,...makeProfile(outfit,d.genre,d.silhouette),ageReason:'20〜40代で取り入れやすい無地や控えめな柄を、整った丈と清潔な足元で仕上げる着こなしです。',budget:[Math.floor(total/1000)*1000,Math.ceil(total/1000)*1000],referencePricing:{items:items.map(i=>({name:i.name,brand:i.brand,yen:i.referencePrice})),total,checkedOn:'2026-11-13',label:'参考価格'}};
});

