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
                description: "北海道 自然の宝庫 手つかずの地（手つかずの自然が残る、生態系の宝庫）"
            },
            {
                term: "白神山地", 
                description: "青森 秋田 広大な森と ブナの林（世界最大級の広大なブナ原生林）"
            },
            {
                term: "縄文遺跡群",
                description: "北海道 青森 岩手 秋田 縄文文化の遺産（縄文文化を示す貴重な遺跡群）"
            },
            {
                term: "平泉",
                description: "岩手 浄土の思想が 花開いた（浄土思想を表現した仏教建築と庭園）"
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
                description: "栃木 徳川将軍の 永遠の眠り（徳川家康を祀る、豪華絢爛な神社仏閣）"
            },
            {
                term: "富士山",
                description: "静岡 山梨 日本の象徴 美しき山（信仰と芸術の対象、日本の象徴的な山）"
            },
            {
                term: "富岡製糸場",
                description: "群馬 日本の近代化 織りなす歴史（日本近代化の象徴、初の機械製糸工場）"
            },
            {
                term: "佐渡島の金山",
                description: "新潟 高度な手工業 採鉱と技術（江戸時代の金採掘技術と歴史を伝える地）"
            },
            {
                term: "小笠原諸島",
                description: "東京 豊かな生態系の宝庫（固有種が多い、世界的に重要な生態系）"
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
                description: "五箇山 岐阜 富山 合掌造りの 村の景色（豪雪地帯の知恵が詰まった合掌造り集落）"
            },
            {
                term: "加賀百万石文化の道",
                description: "石川 歴史と伝統が 息づく地（武家文化と伝統工芸が栄えた地域）"
            },
            {
                term: "姫路城",
                description: "兵庫 戦のない 美しき城（白鷺城の愛称、美しい天守閣を持つ名城）"
            },
            {
                term: "古都京都",
                description: "京都 千年の文化 花咲く都（千年にわたり日本文化を育んだ都）"
            },
            {
                term: "古都奈良",
                description: "奈良 仏教文化の 栄えし地（仏教文化が栄え、国際交流の要所）"
            },
            {
                term: "紀伊山地",
                description: "和歌山 奈良 三重 聖地の巡礼 信仰の道（巡礼の道と自然信仰の融合地）"
            },
            {
                term: "法隆寺",
                description: "奈良 世界最古の 木造建築（世界最古の木造建築、仏教文化の遺産）"
            },
            {
                term: "厳島神社",
                description: "広島 海に浮かぶ 赤い大鳥居（海上に建つ社殿と赤い大鳥居が象徴）"
            },
            {
                term: "石見銀山",
                description: "島根 銀の歴史 栄光の証（江戸時代、日本の経済を支えた銀鉱山）"
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
                description: "長崎 鹿児島 山口 明治の近代化 支えた地（近代化を推進した工場と港湾施設）"
            },
            {
                term: "原爆ドーム",
                description: "広島 平和の象徴 忘れぬため（原爆の悲劇を伝える平和の象徴）"
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
                description: "福岡 海と神々の聖地（古代祭祀の舞台、海の聖地）"
            },
            {
                term: "長崎の教会群とキリシタン関連遺産",
                description: "長崎 信仰の力 残る地（信仰を守ったキリシタンの歴史的遺産）"
            },
            {
                term: "潜伏キリシタン関連遺産",
                description: "長崎 熊本 信仰の証 残された記憶（弾圧下で信仰を続けた隠れキリシタンの証）"
            },
            {
                term: "屋久島",
                description: "鹿児島 千年の木々が 息づく地（樹齢千年を超える屋久杉が茂る自然遺産）"
            },
            {
                term: "奄美大島",
                description: "沖縄 徳之島 鹿児島 生物多様性の宝庫（生物多様性が豊かな亜熱帯の楽園）"
            },
            {
                term: "琉球王国",
                description: "沖縄 独自の文化 城と遺跡（琉球独自の城（グスク）と文化遺跡）"
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