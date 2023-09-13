interface Sound {
    Hiragana: string;
    Katakana: string;
    Romaji: string;
    Colspan: number
}


const gojyuon: Array<Array<Sound>> = [
    [
        { Hiragana: "あ", Katakana: "ア", Romaji: "a", Colspan: 1 },
        { Hiragana: "い", Katakana: "イ", Romaji: "i", Colspan: 1 },
        { Hiragana: "う", Katakana: "ウ", Romaji: "u", Colspan: 1 },
        { Hiragana: "え", Katakana: "エ", Romaji: "e", Colspan: 1 },
        { Hiragana: "お", Katakana: "オ", Romaji: "o", Colspan: 1 }
    ],
    [
        { Hiragana: "か", Katakana: "カ", Romaji: "ka", Colspan: 1 },
        { Hiragana: "き", Katakana: "キ", Romaji: "ki", Colspan: 1 },
        { Hiragana: "く", Katakana: "ク", Romaji: "ku", Colspan: 1 },
        { Hiragana: "け", Katakana: "ケ", Romaji: "ke", Colspan: 1 },
        { Hiragana: "こ", Katakana: "コ", Romaji: "ko", Colspan: 1 }
    ],
    [
        { Hiragana: "さ", Katakana: "サ", Romaji: "sa", Colspan: 1 },
        { Hiragana: "し", Katakana: "シ", Romaji: "shi", Colspan: 1 },
        { Hiragana: "す", Katakana: "ス", Romaji: "su", Colspan: 1 },
        { Hiragana: "せ", Katakana: "セ", Romaji: "se", Colspan: 1 },
        { Hiragana: "そ", Katakana: "ソ", Romaji: "so", Colspan: 1 }
    ],
    [
        { Hiragana: "た", Katakana: "タ", Romaji: "ta", Colspan: 1 },
        { Hiragana: "ち", Katakana: "チ", Romaji: "chi", Colspan: 1 },
        { Hiragana: "つ", Katakana: "ツ", Romaji: "tsu", Colspan: 1 },
        { Hiragana: "て", Katakana: "テ", Romaji: "te", Colspan: 1 },
        { Hiragana: "と", Katakana: "ト", Romaji: "to", Colspan: 1 }
    ],
    [
        { Hiragana: "な", Katakana: "ナ", Romaji: "na", Colspan: 1 },
        { Hiragana: "に", Katakana: "ニ", Romaji: "ni", Colspan: 1 },
        { Hiragana: "ぬ", Katakana: "ヌ", Romaji: "nu", Colspan: 1 },
        { Hiragana: "ね", Katakana: "ネ", Romaji: "ne", Colspan: 1 },
        { Hiragana: "の", Katakana: "ノ", Romaji: "no", Colspan: 1 }
    ],
    [
        { Hiragana: "は", Katakana: "ハ", Romaji: "ha", Colspan: 1 },
        { Hiragana: "ひ", Katakana: "ヒ", Romaji: "hi", Colspan: 1 },
        { Hiragana: "ふ", Katakana: "フ", Romaji: "fu", Colspan: 1 },
        { Hiragana: "へ", Katakana: "ヘ", Romaji: "he", Colspan: 1 },
        { Hiragana: "ほ", Katakana: "ホ", Romaji: "ho", Colspan: 1 }
    ],
    [
        { Hiragana: "ま", Katakana: "マ", Romaji: "ma", Colspan: 1 },
        { Hiragana: "み", Katakana: "ミ", Romaji: "mi", Colspan: 1 },
        { Hiragana: "む", Katakana: "ム", Romaji: "mu", Colspan: 1 },
        { Hiragana: "め", Katakana: "メ", Romaji: "me", Colspan: 1 },
        { Hiragana: "も", Katakana: "モ", Romaji: "mo", Colspan: 1 }
    ],
    [
        { Hiragana: "や", Katakana: "ヤ", Romaji: "ya", Colspan: 1 },
        { Hiragana: "", Katakana: "", Romaji: "", Colspan: 1 },
        { Hiragana: "ゆ", Katakana: "ユ", Romaji: "yu", Colspan: 1 },
        { Hiragana: "", Katakana: "", Romaji: "", Colspan: 1 },
        { Hiragana: "よ", Katakana: "ヨ", Romaji: "yo", Colspan: 1 }
    ],
    [
        { Hiragana: "ら", Katakana: "ラ", Romaji: "ra", Colspan: 1 },
        { Hiragana: "り", Katakana: "リ", Romaji: "ri", Colspan: 1 },
        { Hiragana: "る", Katakana: "ル", Romaji: "ru", Colspan: 1 },
        { Hiragana: "れ", Katakana: "レ", Romaji: "re", Colspan: 1 },
        { Hiragana: "ろ", Katakana: "ロ", Romaji: "ro", Colspan: 1 }
    ],
    [
        { Hiragana: "わ", Katakana: "ワ", Romaji: "wa", Colspan: 1 },
        { Hiragana: "を", Katakana: "ヲ", Romaji: "wo", Colspan: 1 },
        { Hiragana: "", Katakana: "", Romaji: "", Colspan: 3 }
    ],
    [
        { Hiragana: "ん", Katakana: "ン", Romaji: "n", Colspan: 1 },
        { Hiragana: "", Katakana: "", Romaji: "", Colspan: 4 }
    ]
]

const voicedSound: Array<Array<Sound>> = [
    [
        { Hiragana: "が", Katakana: "ガ", Romaji: "ga" , Colspan:1},
        { Hiragana: "ぎ", Katakana: "ギ", Romaji: "gi" , Colspan:1},
        { Hiragana: "ぐ", Katakana: "グ", Romaji: "gu" , Colspan:1},
        { Hiragana: "げ", Katakana: "ゲ", Romaji: "ge" , Colspan:1},
        { Hiragana: "ご", Katakana: "ゴ", Romaji: "go" , Colspan:1}
    ],
    [
        { Hiragana: "ざ", Katakana: "ザ", Romaji: "za" , Colspan:1},
        { Hiragana: "じ", Katakana: "ジ", Romaji: "ji" , Colspan:1},
        { Hiragana: "ず", Katakana: "ズ", Romaji: "zu" , Colspan:1},
        { Hiragana: "ぜ", Katakana: "ゼ", Romaji: "ze" , Colspan:1},
        { Hiragana: "ぞ", Katakana: "ゾ", Romaji: "zo" , Colspan:1}
    ],
    [
        { Hiragana: "だ", Katakana: "ダ", Romaji: "da" , Colspan:1},
        { Hiragana: "ぢ", Katakana: "ヂ", Romaji: "ji" , Colspan:1},
        { Hiragana: "づ", Katakana: "ヅ", Romaji: "zu" , Colspan:1},
        { Hiragana: "で", Katakana: "デ", Romaji: "de" , Colspan:1},
        { Hiragana: "ど", Katakana: "ド", Romaji: "do" , Colspan:1}
    ],
    [
        { Hiragana: "ば", Katakana: "バ", Romaji: "ba" , Colspan:1},
        { Hiragana: "び", Katakana: "ビ", Romaji: "bi" , Colspan:1},
        { Hiragana: "ぶ", Katakana: "ブ", Romaji: "bu" , Colspan:1},
        { Hiragana: "べ", Katakana: "ベ", Romaji: "be" , Colspan:1},
        { Hiragana: "ぼ", Katakana: "ボ", Romaji: "bo" , Colspan:1}
    ]
];

const semivoicedSound: Array<Array<Sound>> = [
    [
        { Hiragana: "ぱ", Katakana: "パ", Romaji: "pa" , Colspan:1},
        { Hiragana: "ぴ", Katakana: "ピ", Romaji: "pi" , Colspan:1},
        { Hiragana: "ぷ", Katakana: "プ", Romaji: "pu" , Colspan:1},
        { Hiragana: "ぺ", Katakana: "ペ", Romaji: "pe" , Colspan:1},
        { Hiragana: "ぽ", Katakana: "ポ", Romaji: "po" , Colspan:1}
    ]
];

const contractedSound: Array<Array<Sound>> = [
    [
        { Hiragana: "きゃ", Katakana: "キャ", Romaji: "kya" , Colspan:1},
        { Hiragana: "きゅ", Katakana: "キュ", Romaji: "kyu" , Colspan:1},
        { Hiragana: "きょ", Katakana: "キョ", Romaji: "kyo" , Colspan:1}
    ],
    [
        { Hiragana: "しゃ", Katakana: "シャ", Romaji: "sha" , Colspan:1},
        { Hiragana: "しゅ", Katakana: "シュ", Romaji: "shu" , Colspan:1},
        { Hiragana: "しょ", Katakana: "ショ", Romaji: "sho" , Colspan:1}
    ],
    [
        { Hiragana: "ちゃ", Katakana: "チャ", Romaji: "cha" , Colspan:1},
        { Hiragana: "ちゅ", Katakana: "チュ", Romaji: "chu" , Colspan:1},
        { Hiragana: "ちょ", Katakana: "チョ", Romaji: "cho" , Colspan:1}
    ],
    [
        { Hiragana: "にゃ", Katakana: "ニャ", Romaji: "nya" , Colspan:1},
        { Hiragana: "にゅ", Katakana: "ニュ", Romaji: "nyu" , Colspan:1},
        { Hiragana: "にょ", Katakana: "ニョ", Romaji: "nyo" , Colspan:1}
    ],
    [
        { Hiragana: "ひゃ", Katakana: "ヒャ", Romaji: "hya" , Colspan:1},
        { Hiragana: "ひゅ", Katakana: "ヒュ", Romaji: "hyu" , Colspan:1},
        { Hiragana: "ひょ", Katakana: "ヒョ", Romaji: "hyo" , Colspan:1}
    ],
    [
        { Hiragana: "みゃ", Katakana: "ミャ", Romaji: "mya" , Colspan:1},
        { Hiragana: "みゅ", Katakana: "ミュ", Romaji: "myu" , Colspan:1},
        { Hiragana: "みょ", Katakana: "ミョ", Romaji: "myo" , Colspan:1}
    ],
    [
        { Hiragana: "りゃ", Katakana: "リャ", Romaji: "rya" , Colspan:1},
        { Hiragana: "りゅ", Katakana: "リュ", Romaji: "ryu" , Colspan:1},
        { Hiragana: "りょ", Katakana: "リョ", Romaji: "ryo" , Colspan:1}
    ],
    [
        { Hiragana: "ぎゃ", Katakana: "ギャ", Romaji: "gya" , Colspan:1},
        { Hiragana: "ぎゅ", Katakana: "ギュ", Romaji: "gyu" , Colspan:1},
        { Hiragana: "ぎょ", Katakana: "ギョ", Romaji: "gyo" , Colspan:1}
    ],
    [
        { Hiragana: "じゃ", Katakana: "ジャ", Romaji: "ja" , Colspan:1},
        { Hiragana: "じゅ", Katakana: "ジュ", Romaji: "ju" , Colspan:1},
        { Hiragana: "じょ", Katakana: "ジョ", Romaji: "jo" , Colspan:1}
    ],
    [
        { Hiragana: "びゃ", Katakana: "ビャ", Romaji: "bya" , Colspan:1},
        { Hiragana: "びゅ", Katakana: "ビュ", Romaji: "byu" , Colspan:1},
        { Hiragana: "びょ", Katakana: "ビョ", Romaji: "byo" , Colspan:1}
    ],
    [
        { Hiragana: "ぴゃ", Katakana: "ピャ", Romaji: "pya" , Colspan:1},
        { Hiragana: "ぴゅ", Katakana: "ピュ", Romaji: "pyu" , Colspan:1},
        { Hiragana: "ぴょ", Katakana: "ピョ", Romaji: "pyo" , Colspan:1}
    ]
];

export {
    gojyuon,
    voicedSound,
    semivoicedSound,
    contractedSound,
}  

export default Sound
