type convertType = 'hiragana' | 'katakana' | 'romaji'

type convertMode = "normal" | "spaced" | "okurigana" | "furigana"

type Romanization  = "nippon" | "passport" | "hepburn"

declare interface convertOption {
    to: convertType;
    mode: convertMode;
    romajiSystem?: Romanization
    delimiter_start?: string
    delimiter_end?: string
}

declare interface Utils {
    isHiragana(kana:char|string):Boolean
    isKatakana(kana:char|string):Boolean
    isKana(kana:char|string):Boolean
    isKanji(kana:char|string):Boolean
    isJapanese(kana:char|string):Boolean
    hasHiragana(kana:string):Boolean
    hasKatakana(kana:string):Boolean
    hasKana(kana:string):Boolean
    hasKanji(kana:string):Boolean
    hasJapanese(kana:string):Boolean
    kanaToHiragna(kana:string):string
    kanaToKatakana(kana:string):string
    kanaToRomaji(kana:string,system:Romanization):string
}


declare class Kuroshiro {
    constructor();
    init(analyzer:KuromojiAnalyzer):Promise<any>
    // 在这里添加 Kuroshiro 类的其他方法和属性的声明
    convert(kana:string,options:convertOptison):Promise<string> 
    Util: Utils
    _analyzer: KuromojiAnalyzer | null
}