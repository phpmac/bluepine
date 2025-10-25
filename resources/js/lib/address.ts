const isTestnet = import.meta.env.VITE_APP_ENV === 'local';

export const config = {
    buy: isTestnet ? '0x5dEcA3635EF91Bd364d944a01bBcEE7733cE7924' : '0x6b95e5c538fb82a60F2a84fBEC5c8C4cCE511f1B',
    usdt: isTestnet ? '0x38C53640bCd51569C8fa8E40b001Da79A8b02f93' : '0x55d398326f99059ff775485246999027b3197955',
    aesc: isTestnet ? '0x69037ed77329a8953D311Ef3caD38c5DeB5DE7da' : '0xc90917e7425ae429a04b0f283ae9a0a0b7dd5184',
};
