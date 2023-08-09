import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import { Theme } from '@mui/material'
import LogoutIcon from '@mui/icons-material/LogoutRounded'

import AddressLabel from './AddressLabel'
import { useAccountAbstraction } from '/store/accountAbstractionContext'
// import authLogo from 'src/assets/web3Auth_logo.png'

// TODO: rename this to connected owner?
function ConnectedWalletLabel() {
  const { isAuthenticated, ownerAddress, logoutWeb3Auth } = useAccountAbstraction()

  if (isAuthenticated == "false") {
    // TODO: ADD NO CONNECTED WALLET LABEL
    return null
  }

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={1.5}>
        {/* <StyledImg src={authLogo} alt="connected Wallet logo" height={'50px'} /> */}

        <Typography variant="body2">
          {ownerAddress && <AddressLabel address={ownerAddress} showBlockExplorerLink />}
        </Typography>
      </Stack>

      {/* logout button */}
      <Tooltip title="Logout">
        <div className='border-1 border-gray-300' onClick={logoutWeb3Auth}>
          <LogoutIcon fontSize="small" />
        </div>
      </Tooltip>
    </Stack>
  )
}

export default ConnectedWalletLabel