import { parseAbi } from 'viem';

// Buy.sol 读取与写入接口
export const buyAbi = parseAbi([
    // 视图/读取
    'function getStageCount() external view returns (uint256)',
    'function getStageInfo(uint256 _index) external view returns (uint256, uint256, uint256, uint256)',
    'function getCurrentStage() external view returns (uint256 index, uint256 cap, uint256 sold, uint256 available, uint256 priceNumerator, uint256 priceDenominator)',
    'function getUserClaimableAmount(address _account) external view returns (uint256, uint256)',
    'function isEnded() external view returns (bool)',
    'function ieoStartTime() external view returns (uint256)',
    'function ieoEndTime() external view returns (uint256)',

    // 写入/管理员
    'function setEnable(bool _enable) external',
    'function setIeoTime(uint256 _ieoStartTime, uint256 _ieoEndTime) external',
    'function buy(uint256 _tokenAmount, address _referrer) external',
    'function claim() external',
]);
