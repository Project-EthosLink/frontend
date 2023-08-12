import styled from '@emotion/styled'
import { Theme } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
// import { CodeBlock, atomOneDark } from 'react-code-blocks'

import ConnectedWalletLabel from './ConnectWalletLabel'
import SafeInfo from './SafeInfo'
import { useAccountAbstraction } from '/store/accountAbstractionContext'
import { useEffect } from 'react'

const ConnectedContainer = styled(Box) < {
  theme: Theme
} > (
    ({ theme }) => `
  
  border-radius: 10px;
  border: 1px solid ${theme.palette.border.light};
  padding: 40px 32px;
`
  )

export default function AuthKit() {
  const { loginWeb3Auth, isAuthenticated, safeSelected, chainId } = useAccountAbstraction()

  return (
    <main className="text-white rounded-3xl bg-white/[0.05] w-fit" style={{ visibility: "visible", }}>
      {isAuthenticated == "true"
        ? (
          <Box display="flex" gap={3}>

            <div className="px-10 py-8 rounded-xl border-1 border-gray-300">
              <Typography fontWeight="700">Safe Account</Typography>

              <Typography fontSize="14px" marginTop="8px" marginBottom="32px">
                Your Safe account (Smart Contract) holds and protects your assets.
              </Typography>


              {safeSelected && <SafeInfo safeAddress={safeSelected} chainId={chainId} />}
            </div >

          
            <div className="px-10 py-8 rounded-xl border-1 border-gray-300">
              <Typography fontWeight="700">Owner ID</Typography>

              <Typography fontSize="14px" marginTop="8px" marginBottom="32px">
                Your Owner account signs transactions to unlock your assets.
              </Typography>

              <ConnectedWalletLabel />
            </div>
          </Box>
        )
        : (
          <div className="flex flex-col items-center gap-2 rounded-xl border-1 border-gray-500 p-12" >
            <Typography variant="h4" component="h3" fontWeight="700">
              Create a safe using the Auth Kit
            </Typography>
            <Button variant="contained" onClick={() => loginWeb3Auth()}>
              Connect
            </Button>
          </div>
        )
      }
      <Divider style={{ margin: '40px 0 30px 0' }} />
    </main>
  )
}