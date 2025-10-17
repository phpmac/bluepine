import { parseAbi } from 'viem';

export default parseAbi([
    // 获取阶段数量
    'function getStageCount() external view returns (uint256)',
    // 获取阶段信息
    'function getStageInfo(uint256 _index) external view returns (uint256, uint256, uint256, uint256)',
    // 获得当前阶段信息
    'function getCurrentStage() external view returns (uint256 index, uint256 cap, uint256 sold, uint256 available, uint256 priceNumerator, uint256 priceDenominator)',
    // 用户购买
    'function buy(uint256 _tokenAmount, address _referrer) external',
    // 用户提取
    'function claim() external',
    // 查看可提取数量
    'function pendingAmount(address _account) external view returns (uint256, uint256)',
    // 是否结束
    'function isEnded() external view returns (bool)',
    // 管理员设置系统开关
    'function setEnable(bool _enable) external',
    // 管理员设置IEO时间
    'function setIeoTime(uint256 _ieoStartTime, uint256 _ieoEndTime) external',
]);
