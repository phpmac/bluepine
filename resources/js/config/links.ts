// 白皮书链接 (根据语言返回不同文件)
export const getWhitepaperUrl = (isEnglish: boolean) => {
    return isEnglish
        ? 'https://github.com/bluepinefoundation/token/blob/main/AESC%20Whitepaper.pdf'
        : 'https://github.com/bluepinefoundation/token/blob/main/AESC%E7%99%BD%E7%9A%AE%E4%B9%A6%EF%BC%88%E4%B8%AD%E6%96%87%E7%89%88%EF%BC%89.pdf';
};

// 审计报告链接
export const auditReportUrl = 'https://github.com/bluepinefoundation/token/blob/main/REP-AESC__final-20251020T011921Z.pdf';

// 品牌资产链接 (根据语言返回不同文件)
export const getBrandAssetsUrl = (isEnglish: boolean) => {
    return isEnglish ? '/files/Bluepine VI.pdf' : '/files/基金会品牌资产.pdf';
};
