// rekishi-data.js
const REKISHI_DATA = {
    // 北海道地方カテゴリ
    hokkaido: {
        title: "北海道地方",
        description: "北海道地方の都道府県を覚えよう",
        emoji: "🗾",
        terms: [
            { term: "北海道 札幌市", description: "日本最大の面積を持ち、酪農や漁業が盛んで、観光地として札幌や富良野が有名" }
        ]
    },
    
    // 東北地方カテゴリ
    tohoku: {
        title: "東北地方",
        description: "東北地方の都道府県を覚えよう",
        emoji: "🗾",
        terms: [
            { term: "青森県 青森市", description: "りんごの生産量が日本一。ねぶた祭りや十和田湖など観光資源が豊富" },
            { term: "岩手県 盛岡市", description: "広大な面積を持ち、平泉の中尊寺が世界遺産に登録。三陸海岸も魅力的" },
            { term: "宮城県 仙台市", description: "仙台七夕祭りで有名。松島は日本三景の一つで観光地として人気" },
            { term: "秋田県 秋田市", description: "秋田美人の地で知られ、米や酒の生産が盛ん。大曲の花火大会が有名" },
            { term: "山形県 山形市", description: "さくらんぼや米沢牛が名産。蔵王連峰や銀山温泉など自然観光地が多い" },
            { term: "福島県 福島市", description: "果物や会津漆器が有名。東日本大震災後の復興が進む地方でもある" }
        ]
    },
    
    // 関東地方カテゴリ
    kanto: {
        title: "関東地方",
        description: "関東地方の都道府県を覚えよう",
        emoji: "🗾",
        terms: [
            { term: "茨城県 水戸市", description: "筑波研究学園都市が先端技術の拠点。霞ヶ浦など自然も豊か" },
            { term: "栃木県 宇都宮市", description: "日光東照宮や華厳滝が世界遺産。いちごの生産も全国有数" },
            { term: "群馬県 前橋市", description: "草津温泉や富岡製糸場が観光名所。こんにゃくの生産が日本一" },
            { term: "埼玉県 さいたま市", description: "首都圏の住宅地として発展。長瀞の渓谷や秩父夜祭も人気" },
            { term: "千葉県 千葉市", description: "成田空港や東京ディズニーリゾートがある。農業も盛んな地域" },
            { term: "東京都 新宿区", description: "日本の政治・経済・文化の中心。観光地として浅草や新宿も有名" },
            { term: "神奈川県 横浜市", description: "横浜中華街や鎌倉大仏など観光地多数。港町としても歴史が深い" }
        ]
    },
    
    // 中部地方カテゴリ
    chubu: {
        title: "中部地方",
        description: "中部地方の都道府県を覚えよう",
        emoji: "🗾",
        terms: [
            { term: "新潟県 新潟市", description: "米どころとして有名で、魚沼産コシヒカリが特に評価が高い" },
            { term: "富山県 富山市", description: "黒部ダムや立山連峰が観光地。薬売りの伝統も続いている" },
            { term: "石川県 金沢市", description: "金沢の兼六園や伝統工芸が有名。能登半島も観光地として人気" },
            { term: "福井県 福井市", description: "恐竜博物館が人気で、越前ガニや眼鏡の生産地としても有名" },
            { term: "山梨県 甲府市", description: "富士山や富士五湖が観光名所。ぶどうやワインの産地として知られる" },
            { term: "長野県 長野市", description: "軽井沢や上高地など自然観光地が豊富で、そばの生産が盛ん" },
            { term: "岐阜県 岐阜市", description: "白川郷の合掌造りが世界遺産。飛騨牛や高山祭も有名" },
            { term: "静岡県 静岡市", description: "お茶の生産量が全国一。富士山や熱海温泉など観光資源が多い" },
            { term: "愛知県 名古屋市", description: "トヨタ自動車の拠点があり、名古屋城や味噌文化が特徴的" }
        ]
    },
    
    // 近畿地方カテゴリ
    kinki: {
        title: "近畿地方",
        description: "近畿地方の都道府県を覚えよう",
        emoji: "🗾",
        terms: [
            { term: "三重県 津市", description: "伊勢神宮が観光の中心。松阪牛や真珠養殖が世界的に有名" },
            { term: "滋賀県 大津市", description: "琵琶湖を有し、近江牛や彦根城などの観光地も魅力的" },
            { term: "京都府 京都市", description: "清水寺や金閣寺などの文化財が多く、和食の文化も深い" },
            { term: "大阪府 大阪市", description: "「食い倒れの街」と呼ばれ、USJや通天閣など観光地も多い" },
            { term: "兵庫県 神戸市", description: "神戸牛や姫路城で有名。淡路島などの自然観光地もある" },
            { term: "奈良県 奈良市", description: "東大寺や薬師寺など古代日本の文化が色濃く残る地域" },
            { term: "和歌山県 和歌山市", description: "熊野古道が世界遺産。梅や高野山も観光名所として人気" }
        ]
    },
    
    // 中国地方カテゴリ
    chugoku: {
        title: "中国地方",
        description: "中国地方の都道府県を覚えよう",
        emoji: "🗾",
        terms: [
            { term: "鳥取県 鳥取市", description: "鳥取砂丘が有名。二十世紀梨の産地で、人口は全国最少" },
            { term: "島根県 松江市", description: "出雲大社や松江城など歴史的観光地が豊富" },
            { term: "岡山県 岡山市", description: "桃太郎伝説の地で、後楽園や倉敷美観地区が観光の目玉" },
            { term: "広島県 広島市", description: "平和記念公園と原爆ドームが世界遺産。宮島の厳島神社も有名" },
            { term: "山口県 山口市", description: "萩焼やフグ料理が特産。関門海峡を挟んで九州と接する" }
        ]
    },
    
    // 四国地方カテゴリ
    shikoku: {
        title: "四国地方",
        description: "四国地方の都道府県を覚えよう",
        emoji: "🗾",
        terms: [
            { term: "徳島県 徳島市", description: "阿波踊りが観光名所。鳴門海峡の渦潮も有名" },
            { term: "香川県 高松市", description: "讃岐うどんの本場で、小豆島など観光資源が豊富" },
            { term: "愛媛県 松山市", description: "道後温泉やみかんの生産で知られる" },
            { term: "高知県 高知市", description: "坂本龍馬の出身地で、カツオのたたきが名物" }
        ]
    },
    
    // 九州地方カテゴリ
    kyushu: {
        title: "九州地方",
        description: "九州地方の都道府県を覚えよう",
        emoji: "🗾",
        terms: [
            { term: "福岡県 福岡市", description: "博多ラーメンや太宰府天満宮が有名。九州の経済中心地" },
            { term: "佐賀県 佐賀市", description: "有田焼や伊万里焼が国際的に評価されている" },
            { term: "長崎県 長崎市", description: "異国文化が融合した街並みと原爆資料館が観光地" },
            { term: "熊本県 熊本市", description: "熊本城や阿蘇山が観光名所。馬刺しも名物料理" },
            { term: "大分県 大分市", description: "別府温泉や湯布院など全国屈指の温泉地帯" },
            { term: "宮崎県 宮崎市", description: "高千穂峡やマンゴーの特産で観光が盛ん" },
            { term: "鹿児島県 鹿児島市", description: "桜島や焼酎文化が特徴。西郷隆盛の出身地" },
            { term: "沖縄県 那覇市", description: "美しい海や琉球文化が魅力。世界遺産の首里城も有名" }
        ]
    }
};

// データ利用用の便利関数
const RekishiDataUtils = {
    // 全カテゴリ取得
    getAllCategories: () => Object.keys(REKISHI_DATA),
    
    // 指定カテゴリのデータ取得
    getCategoryData: (category) => REKISHI_DATA[category],
    
    // ランダムな問題セット生成
    generateRandomSet: (category, count = 8) => {
        const data = REKISHI_DATA[category];
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