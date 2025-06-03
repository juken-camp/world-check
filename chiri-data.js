// chiri-data.js
const CHIRI_DATA = {
    // アジア州カテゴリ
    asia: {
        title: "アジア州",
        description: "アジア各国の特徴を覚えよう",
        emoji: "🌏",
        terms: [
            { term: "インド", description: "人口第1位の人口を誇り、IT産業が急成長" },
            { term: "中国", description: "世界2位の人口で、製造業が盛ん" },
            { term: "インドネシア", description: "東南アジア最大の島国でイスラム教徒が多い" },
            { term: "パキスタン", description: "イスラム教国で農業が主要産業" },
            { term: "バングラデシュ", description: "縫製業が盛んで人口密度が高い" },
            { term: "日本", description: "技術力が高く自動車・電機産業が世界的" },
            { term: "フィリピン", description: "多島国で英語が公用語の一つ" },
            { term: "ベトナム", description: "経済成長が著しく米の輸出が盛ん" },
            { term: "トルコ", description: "アジアとヨーロッパの架け橋として位置" },
            { term: "イラン", description: "石油産出国でペルシャ文化の影響が大きい" },
            { term: "タイ", description: "観光業が盛んで「微笑みの国」として知られる" },
            { term: "韓国", description: "IT製品や自動車輸出で急成長した国" },
            { term: "イラク", description: "石油埋蔵量が豊富で中東の重要国" },
            { term: "サウジアラビア", description: "イスラム教の聖地メッカがある" },
            { term: "ネパール", description: "ヒマラヤ山脈があり観光業が主要産業" },
            { term: "スリランカ", description: "紅茶の生産が盛んで「インド洋の真珠」" },
            { term: "カザフスタン", description: "資源が豊富で中央アジア最大の国土" },
            { term: "ミャンマー", description: "天然ガス資源が豊富な東南アジアの国" },
            { term: "シンガポール", description: "東南アジアの貿易拠点で金融業が発展" },
            { term: "マレーシア", description: "ゴムやパーム油の生産が盛んな多民族国家" }
        ]
    },
    // アフリカ州カテゴリ
    africa: {
        title: "アフリカ州",
        description: "アフリカ各国の特徴を覚えよう",
        emoji: "🌍",
        terms: [
            { term: "ナイジェリア", description: "アフリカ最大の人口で石油資源が豊富" },
            { term: "エチオピア", description: "独立を維持した歴史を持ちコーヒー発祥地" },
            { term: "エジプト", description: "ナイル川文明が栄えた歴史的な国" },
            { term: "コンゴ民主共和国", description: "鉱物資源が豊富で第二次コンゴ戦争の舞台" },
            { term: "タンザニア", description: "キリマンジャロ山やサファリ観光で有名" },
            { term: "南アフリカ", description: "アフリカ最大の経済大国で金鉱が有名" },
            { term: "ケニア", description: "サファリ観光とコーヒー生産が主要産業" },
            { term: "アルジェリア", description: "アフリカ最大の国土面積を持つ" },
            { term: "スーダン", description: "ナイル川沿いに農業が盛んな国" },
            { term: "モロッコ", description: "イスラム文化が色濃く観光が主要産業" },
            { term: "アンゴラ", description: "石油・ダイヤモンドが主要輸出品" },
            { term: "ガーナ", description: "カカオ生産が盛んな西アフリカの国" },
            { term: "モザンビーク", description: "インド洋に面した天然ガス産出国" },
            { term: "コートジボワール", description: "カカオの生産量が世界一" },
            { term: "チュニジア", description: "観光業が盛んで地中海沿岸に位置" },
            { term: "セネガル", description: "漁業が盛んでフランス語圏の国" }
        ]
    },
    // ヨーロッパ州カテゴリ
    europe: {
        title: "ヨーロッパ州",
        description: "ヨーロッパ各国の特徴を覚えよう",
        emoji: "🇪🇺",
        terms: [
            { term: "ロシア", description: "世界最大の面積を持ち資源が豊富" },
            { term: "ドイツ", description: "ヨーロッパ最大の経済大国で自動車産業が盛ん" },
            { term: "イギリス", description: "産業革命発祥の地で金融業が主要産業" },
            { term: "フランス", description: "ワインやファッションで世界的に有名" },
            { term: "イタリア", description: "古代ローマの遺跡とピザで有名" },
            { term: "スペイン", description: "観光業が主要でフラメンコの本場" },
            { term: "ウクライナ", description: "穀倉地帯として知られる東欧の国" },
            { term: "ポーランド", description: "EU加盟国で製造業が発展" },
            { term: "ルーマニア", description: "ドラキュラ伝説や多様な文化を持つ国" },
            { term: "オランダ", description: "チューリップや風車が象徴の貿易立国" },
            { term: "ベルギー", description: "EUの本部がありチョコレートが有名" },
            { term: "ギリシャ", description: "古代文明発祥の地で観光が盛ん" },
            { term: "スウェーデン", description: "福祉国家として有名で高い生活水準" },
            { term: "ハンガリー", description: "温泉が多く音楽文化が豊か" },
            { term: "スイス", description: "金融業が盛んでアルプスの山々が有名" },
            { term: "オーストリア", description: "音楽と美しい景観で知られる国" },
            { term: "フィンランド", description: "教育水準が高く自然が豊か" },
            { term: "デンマーク", description: "幸福度が高く風力発電が進んだ国" }
        ]
    },
    // 北アメリカ州カテゴリ
    northamerica: {
        title: "北アメリカ州",
        description: "北アメリカ各国の特徴を覚えよう",
        emoji: "🗽",
        terms: [
            { term: "アメリカ合衆国", description: "世界最大の経済力と軍事力を持つ国" },
            { term: "メキシコ", description: "観光地やマヤ文明の遺跡が有名" },
            { term: "カナダ", description: "広大な自然と資源が豊富な北米の国" },
            { term: "グアテマラ", description: "マヤ文明の遺跡が点在する国" },
            { term: "キューバ", description: "砂糖と葉巻で知られるカリブの国" },
            { term: "ドミニカ共和国", description: "観光業と野球が盛んな国" },
            { term: "ハイチ", description: "西半球初の黒人共和国でフランス語圏" },
            { term: "ホンジュラス", description: "バナナ輸出が主要な中米の国" },
            { term: "エルサルバドル", description: "中米で最も面積が小さい国" },
            { term: "コスタリカ", description: "自然保護と観光が盛んな国" },
            { term: "パナマ", description: "運河を有する国際貿易の要所" },
            { term: "ベリーズ", description: "サンゴ礁が美しく観光業が発展" },
            { term: "ジャマイカ", description: "レゲエ音楽とコーヒーが有名" },
            { term: "トリニダード・トバゴ", description: "カリブ地域の石油産出国" }
        ]
    },
    // 南アメリカ州カテゴリ
    southamerica: {
        title: "南アメリカ州",
        description: "南アメリカ各国の特徴を覚えよう",
        emoji: "🦙",
        terms: [
            { term: "ブラジル", description: "アマゾン川やサッカーで有名な国" },
            { term: "コロンビア", description: "コーヒー生産とエメラルドが有名" },
            { term: "アルゼンチン", description: "タンゴと牧畜業が盛んな国" },
            { term: "ペルー", description: "インカ帝国の遺跡マチュピチュがある" },
            { term: "ベネズエラ", description: "石油埋蔵量が多い南米の国" },
            { term: "チリ", description: "銅の生産量が世界一で南北に細長い国" },
            { term: "エクアドル", description: "赤道直下に位置しガラパゴス諸島がある" },
            { term: "ボリビア", description: "アンデス山脈の内陸国で資源が豊富" },
            { term: "パラグアイ", description: "内陸国で水力発電が主要産業" },
            { term: "ウルグアイ", description: "南米で最も安定した国の一つ" },
            { term: "ガイアナ", description: "英語を公用語とする南米の国" },
            { term: "スリナム", description: "多民族国家で鉱物資源が豊富" }
        ]
    },
    // オセアニア州カテゴリ
    oceania: {
        title: "オセアニア州",
        description: "オセアニア各国の特徴を覚えよう",
        emoji: "🏝️",
        terms: [
            { term: "オーストラリア", description: "広大な自然と資源が豊富な国" },
            { term: "パプアニューギニア", description: "多くの民族と独特の文化がある国" },
            { term: "ニュージーランド", description: "羊やキウイで有名な島国" },
            { term: "フィジー", description: "観光業が主要で美しいビーチがある" },
            { term: "ソロモン諸島", description: "第二次大戦で激戦地となった島々" },
            { term: "サモア", description: "伝統文化と美しい自然が特徴" },
            { term: "トンガ", description: "ポリネシア唯一の王国として知られる" },
            { term: "バヌアツ", description: "火山と観光業が盛んな国" },
            { term: "ミクロネシア", description: "多くの島々が連なる太平洋の国" },
            { term: "パラオ", description: "美しい海と観光業が主産業" },
            { term: "キリバス", description: "海面上昇の影響を受ける小国" },
            { term: "ツバル", description: "地球温暖化で注目される島国" },
            { term: "ナウル", description: "リン鉱石で一時的に繁栄した国" },
            { term: "クック諸島", description: "ニュージーランドとの連携が深い島々" }
        ]
    }
};

// データ利用用の便利関数
const ChiriDataUtils = {
    // 全カテゴリ取得
    getAllCategories: () => Object.keys(CHIRI_DATA),
    // 指定カテゴリのデータ取得
    getCategoryData: (category) => CHIRI_DATA[category],
    // ランダムな問題セット生成
    generateRandomSet: (category, count = 8) => {
        const data = CHIRI_DATA[category];
        if (!data) return [];
        let allTerms = [];
        if (data.terms) {
            allTerms = [...data.terms];
        } else if (data.subcategories) {
            Object.values(data.subcategories).forEach(sub => {
                allTerms = allTerms.concat(sub.terms);
            });
        }
        // シャッフルして指定数取得
        for (let i = allTerms.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allTerms[i], allTerms[j]] = [allTerms[j], allTerms[i]];
        }
        return allTerms.slice(0, count);
    }
};