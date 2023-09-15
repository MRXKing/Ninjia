

declare class KuromojiAnalyzer{
    constructor(opt?:{dictPath?:string})
    _analyzer:Tokenizer | null
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
    surface_from:string
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