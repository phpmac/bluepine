import { parseAbi } from 'viem';

export default parseAbi([
    // 获取系统开关
    'function enable() external view returns (bool)',
    // 获取阶段数量,默认为3个
    'function getStageCount() external view returns (uint256)',
    // 获取阶段信息
    'function getStageInfo(uint256 _index) external view returns (uint256, uint256, uint256, uint256)',
    // 获得当前阶段信息
    'function getCurrentStage() external view returns (uint256 index, uint256 cap, uint256 sold, uint256 available, uint256 priceNumerator, uint256 priceDenominator)',
    // 获取所有阶段信息
    'function getAllStageInfo() external view returns ((uint256 cap, uint256 sold, uint256 priceNumerator, uint256 priceDenominator, address paymentReceiver)[] stageList)',
    // 募资开始时间
    'function ieoStartTime() external view returns (uint256)',
    // 募资结束时间
    'function ieoEndTime() external view returns (uint256)',
    // 用户购买
    'function buy(uint256 _tokenAmount, address _referrer) external',
    // 用户提取
    'function claim() external',
    // 查看可提取数量
    'function getUserClaimableAmount(address _account) external view returns (uint256, uint256)',
    // 查看投资数据
    'function investors(address _account) external view returns (uint256, uint256, uint256, uint256, uint256, uint256)',
    // 是否结束
    'function isEnded() external view returns (bool)',
    // 管理员设置系统开关
    'function setEnable(bool _enable) external',
    // 管理员设置IEO时间
    'function setIeoTime(uint256 _ieoStartTime, uint256 _ieoEndTime) external',
    // 管理员批量添加直推10%奖励地址
    'function batchAddDirectReferralWhiteList(address[] _addresses) external',
    // 管理员批量移除直推10%奖励地址
    'function batchRemoveDirectReferralWhiteList(address[] _addresses) external',
    // 查询地址是否享受10%直推奖励
    'function directReferralWhiteList(address _address) external view returns (bool)',
    // 管理员更改每期收款地址,默认为3个
    'function setStagePaymentReceiver(address[] _paymentReceivers) external',

    // 上次领取/提现时间
    'function lastWithdrawTime() external view returns (uint256)',
    // 管理员提现代币
    'function withdraw(address _token, uint256 _amount) external',
    // 白名单领取代币
    'function claim() external',
]);
