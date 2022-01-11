import { useCallback } from 'react';

import { useStakeFarm } from '@/hooks/farms/useStakeFarm';
import { getContract } from '@/services/web3/contractHelpers';
import { clog } from '@/utils/logger';
// import { useMasterchef } from 'hooks/useContract'

const useStakeFarms = (pid: number): any => {
  const masterRefineryContract = getContract('MASTER_REFINER');
  const { stakeFarm } = useStakeFarm(masterRefineryContract);

  const handleStake = useCallback(
    async (amount: string) => {
      const txHash = await stakeFarm(pid, amount);
      clog(txHash);
    },
    [pid, stakeFarm],
  );

  return { onStake: handleStake };
};

export default useStakeFarms;
