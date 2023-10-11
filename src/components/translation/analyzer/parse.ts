const dictPath = "./dict"
const kuroshiro = new Kuroshiro()
const kuromojiAnalyzer = new KuromojiAnalyzer({
    dictPath
})

const defaultAnalyzerOption: convertOptions = {
    to: "romaji",
    mode: "furigana",
    romajiSystem: "hepburn",
    delimiter_start: "{",
    delimiter_end: "}"
}

async function getAnalyzer() {

    if (kuroshiro._analyzer) {
        return kuroshiro._analyzer
    }

    await kuroshiro.init(kuromojiAnalyzer)
    return kuroshiro._analyzer
}

async function getKuroshiro() {
    if (kuroshiro._analyzer) {
        return kuroshiro
    }
    await kuroshiro.init(kuromojiAnalyzer)
    return kuroshiro
}

async function convert(kana: string, options?: convertOptions) {
    let kuro = await getKuroshiro()
    let concatOptions = {
        ...defaultAnalyzerOption,
        ...options
    }
    return await kuro.convert(kana, concatOptions)
}

async function tokenize(input: string) {
    let analyzer = await getAnalyzer()
    return analyzer?.analyzer?.tokenize(input)
}


export { convert, tokenize }

