import { parseAbi } from 'viem';

// 释放合约ABI
export const releaseAbi = parseAbi([
    // 上次领取/提现时间
    'function lastWithdrawTime() external view returns (uint256)',
    // 管理员提现代币
    'function withdraw(address _token, uint256 _amount) external',
    // 白名单领取代币
    'function claim() external',
]);
