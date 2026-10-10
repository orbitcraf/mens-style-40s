export const seasons = ['春','夏','秋','冬'] as const;
export const tastes = ['きれいめ','カジュアル','大人ストリート'] as const;
export const scenes = ['普段着','デート','食事','旅行'] as const;
export const itemCategories = ['ジャケット','シャツ','Tシャツ','ニット','デニム','カーゴ','ワイドパンツ','アウター','靴','帽子','パンツ','パーカー'] as const;
export interface OutfitItem { category: typeof itemCategories[number]; name: string; color: string; brand: 'UNIQLO' | 'GU'; productUrl?: string; }
export interface Outfit { id: string; name: string; season: typeof seasons[number]; taste: typeof tastes[number]; scenes: (typeof scenes[number])[]; difficulty: 'かんたん'|'ひと工夫'; image: string; imageAlt: string; items: OutfitItem[]; colors: string[]; description: string; avoid: string; }
export const outfits: Outfit[] = [
  {
    "id": "spring-01",
    "name": "ネイビージャケットの正解",
    "season": "春",
    "taste": "きれいめ",
    "scenes": [
      "デート"
    ],
    "difficulty": "かんたん",
    "image": "images/spring-01.webp",
    "imageAlt": "ネイビーネイビージャケット、白クルーネックT、ベージュストレートチノ、黒ローファーを着た40代男性の全身見本",
    "items": [
      {
        "category": "ジャケット",
        "name": "テーラードジャケット",
        "color": "ネイビー",
        "brand": "UNIQLO"
      },
      {
        "category": "Tシャツ",
        "name": "クルーネックT",
        "color": "白",
        "brand": "UNIQLO"
      },
      {
        "category": "パンツ",
        "name": "ストレートチノ",
        "color": "ベージュ",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "ローファー",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "ネイビー",
      "白",
      "ベージュ",
      "黒"
    ],
    "description": "ジャケットを白Tで軽く。肩が落ちすぎないサイズを選び、チノの裾を靴に軽く触れる長さにすると、頑張りすぎないきれいめに。",
    "avoid": "大きなロゴTと派手なスニーカーを同時に足すと、ジャケットの落ち着きが薄れます。"
  },
  {
    "id": "spring-02",
    "name": "白シャツで、軽やかに",
    "season": "春",
    "taste": "きれいめ",
    "scenes": [
      "食事"
    ],
    "difficulty": "かんたん",
    "image": "images/spring-02.webp",
    "imageAlt": "白ボタンダウンシャツ、ネイビーテーパードパンツ、黒ローファーを着た40代男性の全身見本",
    "items": [
      {
        "category": "シャツ",
        "name": "ボタンダウンシャツ",
        "color": "白",
        "brand": "UNIQLO"
      },
      {
        "category": "パンツ",
        "name": "テーパードパンツ",
        "color": "ネイビー",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "ローファー",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "白",
      "ネイビー",
      "黒"
    ],
    "description": "白シャツは襟と袖を整えるだけで清潔感が出ます。ネイビーのパンツを合わせ、裾が長ければ前だけ軽く入れてバランスを調整。",
    "avoid": "透けやすい濃色インナーや、しわの目立つシャツは避け、肌になじむインナーを選びましょう。"
  },
  {
    "id": "spring-03",
    "name": "休日のオリーブ",
    "season": "春",
    "taste": "カジュアル",
    "scenes": [
      "普段着"
    ],
    "difficulty": "かんたん",
    "image": "images/spring-03.webp",
    "imageAlt": "生成りクルーネックニット、オリーブカーゴパンツ、黒スニーカーを着た40代男性の全身見本",
    "items": [
      {
        "category": "ニット",
        "name": "クルーネックニット",
        "color": "生成り",
        "brand": "UNIQLO"
      },
      {
        "category": "カーゴ",
        "name": "カーゴパンツ",
        "color": "オリーブ",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "スニーカー",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "生成り",
      "オリーブ",
      "黒"
    ],
    "description": "やわらかな生成りニットで、カーゴの無骨さを和らげます。ポケットが膨らまないシルエットとシンプルな黒スニーカーがポイント。",
    "avoid": "迷彩柄やアウトドア小物を重ねすぎると、普段着としては重たく見えます。"
  },
  {
    "id": "spring-04",
    "name": "ボーダーと街歩き",
    "season": "春",
    "taste": "カジュアル",
    "scenes": [
      "旅行"
    ],
    "difficulty": "かんたん",
    "image": "images/spring-04.webp",
    "imageAlt": "ネイビーカーディガン、白ボーダーT、グレーストレートパンツ、黒ローファーを着た40代男性の全身見本",
    "items": [
      {
        "category": "ニット",
        "name": "カーディガン",
        "color": "ネイビー",
        "brand": "UNIQLO"
      },
      {
        "category": "Tシャツ",
        "name": "ボーダーT",
        "color": "白",
        "brand": "UNIQLO"
      },
      {
        "category": "パンツ",
        "name": "ストレートパンツ",
        "color": "グレー",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "ローファー",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "ネイビー",
      "白",
      "グレー",
      "黒"
    ],
    "description": "ボーダーを一つだけアクセントに。ネイビーカーディガンとグレーパンツで色を抑え、ローファーで足元を整えます。",
    "avoid": "柄パンツや柄の帽子も加えると視線が散ります。柄はボーダーだけに。"
  },
  {
    "id": "spring-05",
    "name": "大人のデニムレイヤード",
    "season": "春",
    "taste": "大人ストリート",
    "scenes": [
      "普段着"
    ],
    "difficulty": "ひと工夫",
    "image": "images/spring-05.webp",
    "imageAlt": "ブルーデニムジャケット、白クルーネックT、黒ワイドパンツ、白スニーカー、黒キャップを着た40代男性の全身見本",
    "items": [
      {
        "category": "ジャケット",
        "name": "デニムジャケット",
        "color": "ブルー",
        "brand": "GU"
      },
      {
        "category": "Tシャツ",
        "name": "クルーネックT",
        "color": "白",
        "brand": "UNIQLO"
      },
      {
        "category": "ワイドパンツ",
        "name": "ワイドパンツ",
        "color": "黒",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "スニーカー",
        "color": "白",
        "brand": "GU"
      },
      {
        "category": "帽子",
        "name": "キャップ",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "ブルー",
      "白",
      "黒"
    ],
    "description": "デニムジャケットの丈を短めにし、黒ワイドパンツで下半身をすっきり見せます。白Tと白スニーカーで軽さをつなぎます。",
    "avoid": "上下とも極端に大きいサイズは輪郭がぼやけます。羽織りは肩幅に合うものを。"
  },
  {
    "id": "summer-01",
    "name": "白Tを、上品に",
    "season": "夏",
    "taste": "きれいめ",
    "scenes": [
      "普段着"
    ],
    "difficulty": "かんたん",
    "image": "images/summer-01.webp",
    "imageAlt": "白クルーネックT、チャコールワイドパンツ、黒ローファーを着た40代男性の全身見本",
    "items": [
      {
        "category": "Tシャツ",
        "name": "クルーネックT",
        "color": "白",
        "brand": "UNIQLO"
      },
      {
        "category": "ワイドパンツ",
        "name": "ワイドパンツ",
        "color": "チャコール",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "ローファー",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "白",
      "チャコール",
      "黒"
    ],
    "description": "白Tは首元がよれず、ほどよく厚みのあるものを。チャコールのパンツと革靴風の足元を合わせると、Tシャツ一枚でも整います。",
    "avoid": "薄く透けるTシャツと部屋着風パンツの組み合わせは避けましょう。"
  },
  {
    "id": "summer-02",
    "name": "リネンシャツの休日",
    "season": "夏",
    "taste": "カジュアル",
    "scenes": [
      "旅行"
    ],
    "difficulty": "かんたん",
    "image": "images/summer-02.webp",
    "imageAlt": "ベージュ半袖リネン風シャツ、白クルーネックT、ネイビーストレートパンツ、白スニーカーを着た40代男性の全身見本",
    "items": [
      {
        "category": "シャツ",
        "name": "半袖リネン風シャツ",
        "color": "ベージュ",
        "brand": "UNIQLO"
      },
      {
        "category": "Tシャツ",
        "name": "クルーネックT",
        "color": "白",
        "brand": "UNIQLO"
      },
      {
        "category": "パンツ",
        "name": "ストレートパンツ",
        "color": "ネイビー",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "スニーカー",
        "color": "白",
        "brand": "GU"
      }
    ],
    "colors": [
      "ベージュ",
      "白",
      "ネイビー"
    ],
    "description": "ベージュのシャツを開けて羽織り、白Tを見せて涼しげに。歩きやすい白スニーカーと濃色パンツで旅行にも使いやすく。",
    "avoid": "シャツもインナーも長すぎると重ね着がもたつきます。裾の差は控えめに。"
  },
  {
    "id": "summer-03",
    "name": "黒ポロで夜の食事へ",
    "season": "夏",
    "taste": "きれいめ",
    "scenes": [
      "食事"
    ],
    "difficulty": "かんたん",
    "image": "images/summer-03.webp",
    "imageAlt": "黒半袖ニットポロ、ベージュテーパードパンツ、黒ローファーを着た40代男性の全身見本",
    "items": [
      {
        "category": "ニット",
        "name": "半袖ニットポロ",
        "color": "黒",
        "brand": "UNIQLO"
      },
      {
        "category": "パンツ",
        "name": "テーパードパンツ",
        "color": "ベージュ",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "ローファー",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "黒",
      "ベージュ"
    ],
    "description": "黒のニットポロは襟があるので食事にも取り入れやすい一枚。ベージュパンツで暑苦しさを抑え、靴は黒で統一します。",
    "avoid": "黒の厚手トップスに重い黒パンツまで合わせると、夏には重い印象になります。"
  },
  {
    "id": "summer-04",
    "name": "涼しげなブルーシャツ",
    "season": "夏",
    "taste": "きれいめ",
    "scenes": [
      "デート"
    ],
    "difficulty": "かんたん",
    "image": "images/summer-04.webp",
    "imageAlt": "ブルー半袖シャツ、白ストレートパンツ、ブラウンローファーを着た40代男性の全身見本",
    "items": [
      {
        "category": "シャツ",
        "name": "半袖シャツ",
        "color": "ブルー",
        "brand": "UNIQLO"
      },
      {
        "category": "パンツ",
        "name": "ストレートパンツ",
        "color": "白",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "ローファー",
        "color": "ブラウン",
        "brand": "GU"
      }
    ],
    "colors": [
      "ブルー",
      "白",
      "ブラウン"
    ],
    "description": "淡いブルーと白で、涼しげな配色に。白パンツは透けにくい生地を選び、茶色の靴で全体をやさしく引き締めます。",
    "avoid": "鮮やかな色のベルトや帽子を追加すると配色が散るので、小物も茶系に。"
  },
  {
    "id": "summer-05",
    "name": "白とカーキのストリート",
    "season": "夏",
    "taste": "大人ストリート",
    "scenes": [
      "旅行"
    ],
    "difficulty": "ひと工夫",
    "image": "images/summer-05.webp",
    "imageAlt": "白リラックスT、オリーブカーゴパンツ、黒スニーカー、黒バケットハットを着た40代男性の全身見本",
    "items": [
      {
        "category": "Tシャツ",
        "name": "リラックスT",
        "color": "白",
        "brand": "UNIQLO"
      },
      {
        "category": "カーゴ",
        "name": "カーゴパンツ",
        "color": "オリーブ",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "スニーカー",
        "color": "黒",
        "brand": "GU"
      },
      {
        "category": "帽子",
        "name": "バケットハット",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "白",
      "オリーブ",
      "黒"
    ],
    "description": "ゆとりのある白Tにカーゴを合わせ、黒の帽子と靴でまとまりを作ります。裾は引きずらず、足首付近で収まる長さに。",
    "avoid": "ビッグTと極太カーゴを両方選ぶと大きく見えすぎます。どちらかのゆとりを控えめに。"
  },
  {
    "id": "autumn-01",
    "name": "秋色ジャケットの余裕",
    "season": "秋",
    "taste": "きれいめ",
    "scenes": [
      "食事"
    ],
    "difficulty": "かんたん",
    "image": "images/autumn-01.webp",
    "imageAlt": "ブラウンテーラードジャケット、白クルーネックT、チャコールストレートパンツ、黒ローファーを着た40代男性の全身見本",
    "items": [
      {
        "category": "ジャケット",
        "name": "テーラードジャケット",
        "color": "ブラウン",
        "brand": "UNIQLO"
      },
      {
        "category": "Tシャツ",
        "name": "クルーネックT",
        "color": "白",
        "brand": "UNIQLO"
      },
      {
        "category": "パンツ",
        "name": "ストレートパンツ",
        "color": "チャコール",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "ローファー",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "ブラウン",
      "白",
      "チャコール",
      "黒"
    ],
    "description": "ブラウンのジャケットを主役に、白とチャコールで落ち着かせます。インナーを無地にすると、秋らしい色が引き立ちます。",
    "avoid": "ブラウン・オレンジ・赤を一度に重ねると強い配色に。暖色はジャケット中心で。"
  },
  {
    "id": "autumn-02",
    "name": "ネイビーカーディガンの定番",
    "season": "秋",
    "taste": "カジュアル",
    "scenes": [
      "普段着"
    ],
    "difficulty": "かんたん",
    "image": "images/autumn-02.webp",
    "imageAlt": "ネイビーカーディガン、白ボーダーT、チャコールテーパードパンツ、黒ローファーを着た40代男性の全身見本",
    "items": [
      {
        "category": "ニット",
        "name": "カーディガン",
        "color": "ネイビー",
        "brand": "UNIQLO"
      },
      {
        "category": "Tシャツ",
        "name": "ボーダーT",
        "color": "白",
        "brand": "UNIQLO"
      },
      {
        "category": "パンツ",
        "name": "テーパードパンツ",
        "color": "チャコール",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "ローファー",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "ネイビー",
      "白",
      "チャコール",
      "黒"
    ],
    "description": "ネイビーとチャコールの間に白いボーダーを挟む定番。カーディガンのボタンは全部留めず、首元に抜けを作ります。",
    "avoid": "柄の多いマフラーを足すとボーダーと競合します。追加するなら無地に。"
  },
  {
    "id": "autumn-03",
    "name": "パーカーと濃紺デニム",
    "season": "秋",
    "taste": "カジュアル",
    "scenes": [
      "旅行"
    ],
    "difficulty": "かんたん",
    "image": "images/autumn-03.webp",
    "imageAlt": "チャコールジップパーカー、白クルーネックT、ネイビーストレートジーンズ、白スニーカーを着た40代男性の全身見本",
    "items": [
      {
        "category": "パーカー",
        "name": "ジップパーカー",
        "color": "チャコール",
        "brand": "UNIQLO"
      },
      {
        "category": "Tシャツ",
        "name": "クルーネックT",
        "color": "白",
        "brand": "UNIQLO"
      },
      {
        "category": "デニム",
        "name": "ストレートジーンズ",
        "color": "ネイビー",
        "brand": "UNIQLO"
      },
      {
        "category": "靴",
        "name": "スニーカー",
        "color": "白",
        "brand": "GU"
      }
    ],
    "colors": [
      "チャコール",
      "白",
      "ネイビー"
    ],
    "description": "パーカーを開けて白Tを見せると、顔周りが明るく。濃紺デニムは加工の少ないものを選び、カジュアルでも落ち着いた印象に。",
    "avoid": "色落ちやダメージの強いデニムと大きなロゴの組み合わせは避けましょう。"
  },
  {
    "id": "autumn-04",
    "name": "黒ワイドで整える",
    "season": "秋",
    "taste": "大人ストリート",
    "scenes": [
      "普段着"
    ],
    "difficulty": "ひと工夫",
    "image": "images/autumn-04.webp",
    "imageAlt": "オリーブシャツジャケット、白クルーネックT、黒ワイドパンツ、黒スニーカーを着た40代男性の全身見本",
    "items": [
      {
        "category": "ジャケット",
        "name": "シャツジャケット",
        "color": "オリーブ",
        "brand": "GU"
      },
      {
        "category": "Tシャツ",
        "name": "クルーネックT",
        "color": "白",
        "brand": "UNIQLO"
      },
      {
        "category": "ワイドパンツ",
        "name": "ワイドパンツ",
        "color": "黒",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "スニーカー",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "オリーブ",
      "白",
      "黒"
    ],
    "description": "オリーブのシャツジャケットに黒ワイドを合わせる都会的な配色。白Tを少し見せ、黒い靴につなぐと脚のラインが整います。",
    "avoid": "厚手のインナーを何枚も重ねるともたつきます。羽織りの中は薄手を基本に。"
  },
  {
    "id": "autumn-05",
    "name": "ベージュニットでやさしく",
    "season": "秋",
    "taste": "きれいめ",
    "scenes": [
      "デート"
    ],
    "difficulty": "かんたん",
    "image": "images/autumn-05.webp",
    "imageAlt": "ベージュクルーネックニット、ネイビーテーパードパンツ、ブラウンローファーを着た40代男性の全身見本",
    "items": [
      {
        "category": "ニット",
        "name": "クルーネックニット",
        "color": "ベージュ",
        "brand": "UNIQLO"
      },
      {
        "category": "パンツ",
        "name": "テーパードパンツ",
        "color": "ネイビー",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "ローファー",
        "color": "ブラウン",
        "brand": "GU"
      }
    ],
    "colors": [
      "ベージュ",
      "ネイビー",
      "ブラウン"
    ],
    "description": "ベージュニットとネイビーのパンツは、柔らかさと清潔感を両立する配色。袖と裾が余りすぎないニットを選びます。",
    "avoid": "ニットの毛玉や伸びた袖口は目立ちます。着る前に表面を整えましょう。"
  },
  {
    "id": "winter-01",
    "name": "チェスターコートで食事へ",
    "season": "冬",
    "taste": "きれいめ",
    "scenes": [
      "食事"
    ],
    "difficulty": "かんたん",
    "image": "images/winter-01.webp",
    "imageAlt": "チャコールチェスターコート、ブルーシャツ、黒テーパードパンツ、黒レースアップシューズを着た40代男性の全身見本",
    "items": [
      {
        "category": "アウター",
        "name": "チェスターコート",
        "color": "チャコール",
        "brand": "UNIQLO"
      },
      {
        "category": "シャツ",
        "name": "シャツ",
        "color": "ブルー",
        "brand": "UNIQLO"
      },
      {
        "category": "パンツ",
        "name": "テーパードパンツ",
        "color": "黒",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "レースアップシューズ",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "チャコール",
      "ブルー",
      "黒"
    ],
    "description": "長めのチャコールコートを主役に、明るいシャツで顔周りを軽く。黒のパンツと靴をつなげると縦のラインがすっきりします。",
    "avoid": "コートの下に厚いパーカーを入れると襟が混雑します。シャツの襟をきれいに見せて。"
  },
  {
    "id": "winter-02",
    "name": "冬の街歩き、黒ダウン",
    "season": "冬",
    "taste": "カジュアル",
    "scenes": [
      "旅行"
    ],
    "difficulty": "かんたん",
    "image": "images/winter-02.webp",
    "imageAlt": "黒中綿・ダウンジャケット、グレークルーネックニット、ネイビーストレートパンツ、白スニーカー、チャコールニット帽を着た40代男性の全身見本",
    "items": [
      {
        "category": "アウター",
        "name": "中綿・ダウンジャケット",
        "color": "黒",
        "brand": "UNIQLO"
      },
      {
        "category": "ニット",
        "name": "クルーネックニット",
        "color": "グレー",
        "brand": "UNIQLO"
      },
      {
        "category": "パンツ",
        "name": "ストレートパンツ",
        "color": "ネイビー",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "スニーカー",
        "color": "白",
        "brand": "GU"
      },
      {
        "category": "帽子",
        "name": "ニット帽",
        "color": "チャコール",
        "brand": "GU"
      }
    ],
    "colors": [
      "黒",
      "グレー",
      "ネイビー",
      "白",
      "チャコール"
    ],
    "description": "黒ダウンとグレーニットを、白スニーカーで軽く。ボリュームのあるアウターには、ほどよい太さのパンツが合わせやすいです。",
    "avoid": "極端に細いパンツは上半身の大きさを強調しがち。足元まで自然な太さに。"
  },
  {
    "id": "winter-03",
    "name": "ネイビーコートの清潔感",
    "season": "冬",
    "taste": "きれいめ",
    "scenes": [
      "デート"
    ],
    "difficulty": "かんたん",
    "image": "images/winter-03.webp",
    "imageAlt": "ネイビーウール調コート、生成りタートルネックニット、グレーストレートパンツ、黒ローファーを着た40代男性の全身見本",
    "items": [
      {
        "category": "アウター",
        "name": "ウール調コート",
        "color": "ネイビー",
        "brand": "UNIQLO"
      },
      {
        "category": "ニット",
        "name": "タートルネックニット",
        "color": "生成り",
        "brand": "UNIQLO"
      },
      {
        "category": "パンツ",
        "name": "ストレートパンツ",
        "color": "グレー",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "ローファー",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "ネイビー",
      "生成り",
      "グレー",
      "黒"
    ],
    "description": "ネイビーのコートに生成りタートルを合わせ、冬でも明るい顔周りに。グレーのパンツと黒の靴で、静かなきれいめを作ります。",
    "avoid": "首元に厚手マフラーを何重にも巻くと窮屈な印象に。防寒は薄手から調整を。"
  },
  {
    "id": "winter-04",
    "name": "オリーブアウターと白ニット",
    "season": "冬",
    "taste": "カジュアル",
    "scenes": [
      "普段着"
    ],
    "difficulty": "かんたん",
    "image": "images/winter-04.webp",
    "imageAlt": "オリーブ中綿ジャケット、生成りクルーネックニット、ネイビーストレートジーンズ、黒スニーカーを着た40代男性の全身見本",
    "items": [
      {
        "category": "アウター",
        "name": "中綿ジャケット",
        "color": "オリーブ",
        "brand": "GU"
      },
      {
        "category": "ニット",
        "name": "クルーネックニット",
        "color": "生成り",
        "brand": "UNIQLO"
      },
      {
        "category": "デニム",
        "name": "ストレートジーンズ",
        "color": "ネイビー",
        "brand": "UNIQLO"
      },
      {
        "category": "靴",
        "name": "スニーカー",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "オリーブ",
      "生成り",
      "ネイビー",
      "黒"
    ],
    "description": "オリーブアウターに生成りニットを合わせるやさしい休日服。濃紺デニムと黒スニーカーなら、散歩や買い物にも自然です。",
    "avoid": "カーゴや迷彩も重ねるとミリタリー感が強くなります。パンツはシンプルなデニムに。"
  },
  {
    "id": "winter-05",
    "name": "モノトーンの大人ストリート",
    "season": "冬",
    "taste": "大人ストリート",
    "scenes": [
      "普段着"
    ],
    "difficulty": "ひと工夫",
    "image": "images/winter-05.webp",
    "imageAlt": "黒ショート中綿ジャケット、グレースウェットパーカー、チャコールワイドパンツ、黒スニーカー、黒ニット帽を着た40代男性の全身見本",
    "items": [
      {
        "category": "アウター",
        "name": "ショート中綿ジャケット",
        "color": "黒",
        "brand": "GU"
      },
      {
        "category": "パーカー",
        "name": "スウェットパーカー",
        "color": "グレー",
        "brand": "UNIQLO"
      },
      {
        "category": "ワイドパンツ",
        "name": "ワイドパンツ",
        "color": "チャコール",
        "brand": "GU"
      },
      {
        "category": "靴",
        "name": "スニーカー",
        "color": "黒",
        "brand": "GU"
      },
      {
        "category": "帽子",
        "name": "ニット帽",
        "color": "黒",
        "brand": "GU"
      }
    ],
    "colors": [
      "黒",
      "グレー",
      "チャコール"
    ],
    "description": "黒・グレー・チャコールの濃淡でまとめます。短めアウターとワイドパンツでメリハリを作り、帽子も無地にすると大人らしく。",
    "avoid": "全部を真っ黒にして大きなサイズで揃えると輪郭が見えにくくなります。グレーを挟んで。"
  }
];
