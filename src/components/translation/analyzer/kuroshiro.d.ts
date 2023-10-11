type convertType = 'hiragana' | 'katakana' | 'romaji'

type convertMode = "normal" | "spaced" | "okurigana" | "furigana"

type Romanization  = "nippon" | "passport" | "hepburn"

declare interface convertOptions {
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


declare class KuromojiAnalyzer{
    constructor(opt?:{dictPath?:string})
    analyzer:Tokenizer | null
}


interface Tokenizer {
    formatter:Object
    token_info_dictionary:Object
    unknown_dictionary:Object
    viterbi_builder:Object
    viterbi_searcher:Object
    tokenize(input:string):tokenize[]
}

interface tokenize {
    word_id:number
    word_position:number
    word_type:string
    surface_form:string
    reading:string
    pronunciation:string
    pos:string
    pos_detail_1:string
    pos_detail_2:string
    pos_detail_3:string
    basic_form:string
    conjugated_form:string
    conjugated_type:string
}

declare class Kuroshiro {
    constructor();
    init(analyzer:KuromojiAnalyzer):Promise<any>
    // 在这里添加 Kuroshiro 类的其他方法和属性的声明
    convert(kana:string,options:convertOptions):Promise<string> 
    Util: Utils
    _analyzer: KuromojiAnalyzer | null
}