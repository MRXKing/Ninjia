
type FromLanguage = string | "auto"

type ExcludeAuto<T> = T extends "auto" ? never : T;
type ToLanguage = ExcludeAuto<string,"auto">;

type actionNum = 0 | 1

export declare interface BaiduParms {
    q:string; //word,utf-8
    from:FromLanguage;
    to:ToLanguage;
    appid?:string;
    salt?:Number|string;
    sign?:string;
    action?:actionNum
}

interface transResult {
    src:string;
    dst:string;
}

enum TranslationError {
    Success = 52000,
    RequestTimeout = 52001,
    SystemError = 52002,
    UnauthorizedUser = 52003,
    MissingRequiredParams = 54000,
    SignatureError = 54001,
    AccessFrequencyLimited = 54003,
    InsufficientAccountBalance = 54004,
    FrequentLongQuery = 54005,
    InvalidClientIP = 58000,
    UnsupportedTranslationLanguage = 58001,
    ServiceClosed = 58002,
    AuthenticationFailedOrInactive = 90107
}

export declare interface BaiduResult {
    from:FromLanguage;
    to:ToLanguage;
    trans_result:transResult[]
    error_code?:TranslationError
}

