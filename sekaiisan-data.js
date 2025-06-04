// sekaiisan-data.js
const SEKAIISAN_DATA = {
    // 北海道と東北
    hokkaido_tohoku: {
        title: "北海道と東北",
        description: "北海道と東北地方の世界遺産",
        emoji: "🏔️",
        terms: [
            {
                term: "知床",
                description: "手つかずの自然が残る、生態系の宝庫"
            },
            {
                term: "白神山地", 
                description: "世界最大級の広大なブナ原生林"
            },
            {
                term: "縄文遺跡群",
                description: "縄文文化を示す貴重な遺跡群"
            },
            {
                term: "平泉",
                description: "浄土思想を表現した仏教建築と庭園"
            }
        ]
    },

    // 東日本の遺産
    higashi_nihon: {
        title: "東日本の遺産",
        description: "東日本地方の世界遺産",
        emoji: "🗾",
        terms: [
            {
                term: "日光の社寺",
                description: "徳川家康を祀る、豪華絢爛な神社仏閣"
            },
            {
                term: "富士山",
                description: "信仰と芸術の対象、日本の象徴的な山"
            },
            {
                term: "富岡製糸場",
                description: "日本近代化の象徴、初の機械製糸工場"
            },
            {
                term: "佐渡島の金山",
                description: "江戸時代の金採掘技術と歴史を伝える地"
            },
            {
                term: "小笠原諸島",
                description: "固有種が多い、世界的に重要な生態系"
            }
        ]
    },

    // 関西と中部
    kansai_chubu: {
        title: "関西と中部",
        description: "関西と中部地方の世界遺産",
        emoji: "🏯",
        terms: [
            {
                term: "白川郷",
                description: "豪雪地帯の知恵が詰まった合掌造り集落"
            },
            {
                term: "加賀百万石文化の道",
                description: "武家文化と伝統工芸が栄えた地域"
            },
            {
                term: "姫路城",
                description: "白鷺城の愛称、美しい天守閣を持つ名城"
            },
            {
                term: "古都京都",
                description: "千年にわたり日本文化を育んだ都"
            },
            {
                term: "古都奈良",
                description: "仏教文化が栄え、国際交流の要所"
            },
            {
                term: "紀伊山地",
                description: "巡礼の道と自然信仰の融合地"
            },
            {
                term: "法隆寺",
                description: "世界最古の木造建築、仏教文化の遺産"
            },
            {
                term: "厳島神社",
                description: "海上に建つ社殿と赤い大鳥居が象徴"
            },
            {
                term: "石見銀山",
                description: "江戸時代、日本の経済を支えた銀鉱山"
            }
        ]
    },

    // 西日本の遺産
    nishi_nihon: {
        title: "西日本の遺産",
        description: "西日本地方の世界遺産",
        emoji: "🏭",
        terms: [
            {
                term: "産業革命遺産",
                description: "近代化を推進した工場と港湾施設"
            },
            {
                term: "原爆ドーム",
                description: "原爆の悲劇を伝える平和の象徴"
            }
        ]
    },

    // 九州と沖縄
    kyushu_okinawa: {
        title: "九州と沖縄",
        description: "九州と沖縄地方の世界遺産",
        emoji: "🌺",
        terms: [
            {
                term: "沖ノ島",
                description: "古代祭祀の舞台、海の聖地"
            },
            {
                term: "長崎の教会群とキリシタン関連遺産",
                description: "信仰を守ったキリシタンの歴史的遺産"
            },
            {
                term: "潜伏キリシタン関連遺産",
                description: "弾圧下で信仰を続けた隠れキリシタンの証"
            },
            {
                term: "屋久島",
                description: "樹齢千年を超える屋久杉が茂る自然遺産"
            },
            {
                term: "奄美大島",
                description: "生物多様性が豊かな亜熱帯の楽園"
            },
            {
                term: "琉球王国",
                description: "琉球独自の城（グスク）と文化遺跡"
            }
        ]
    }
};

// データ利用用の便利関数
const SekaiisanDataUtils = {
    // 全カテゴリ取得
    getAllCategories: () => Object.keys(SEKAIISAN_DATA),
    
    // 指定カテゴリのデータ取得
    getCategoryData: (category) => SEKAIISAN_DATA[category],
    
    // ランダムな問題セット生成
    generateRandomSet: (category, count = 8) => {
        const data = SEKAIISAN_DATA[category];
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
    },
    
    // 全世界遺産から検索
    searchAllTerms: (searchTerm) => {
        let results = [];
        Object.values(SEKAIISAN_DATA).forEach(category => {
            if (category.terms) {
                const found = category.terms.filter(term => 
                    term.term.includes(searchTerm) || term.description.includes(searchTerm)
                );
                results = results.concat(found);
            }
        });
        return results;
    }
};