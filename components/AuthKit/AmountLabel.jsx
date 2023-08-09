import Tooltip from '@mui/material/Tooltip'

import useMemoizedAmountLabel from '/hooks/useMemoizedAmountLabel'

function AmountLabel({ amount, tokenSymbol, decimalsDisplayed }) {
  const amountLabel = useMemoizedAmountLabel(amount, tokenSymbol, decimalsDisplayed)

  return (
    <Tooltip title={`${amount} ${tokenSymbol}`}>
      <span>{amountLabel}</span>
    </Tooltip>
  )
}

export default AmountLabel