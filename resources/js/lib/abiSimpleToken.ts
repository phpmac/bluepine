import { parseAbi } from 'viem';

// SimpleToken.sol 关键接口,用于测试网freeMint与常规查询
export const simpleTokenAbi = parseAbi([
    'function freeMint(uint256 _amount) external',
    'function balanceOf(address account) external view returns (uint256)',
    'function decimals() external view returns (uint8)',
]);
