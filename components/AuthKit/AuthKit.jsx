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
    <main className='text-white'>
      <Typography variant="h2" component="h1">
        The Auth Kit
      </Typography>

      <Typography marginTop="16px">
        Generate or authenticate a blockchain account using an email address, social media account,
        or traditional crypto wallets like Metamask.
      </Typography>

      <Typography marginTop="24px" marginBottom="8px">
        Find more info at:
      </Typography>

      <Stack direction="row" alignItems="center" spacing={2}>
        <Link
          href="https://github.com/safe-global/safe-core-sdk/tree/main/packages/auth-kit"
          target="_blank"
        >
          Github
        </Link>

        <Link
          href="https://docs.safe.global/learn/safe-core-account-abstraction-sdk/auth-kit"
          target="_blank"
        >
          Documentation
        </Link>
      </Stack>

      <Divider style={{ margin: '32px 0 28px 0' }} />

      <Typography variant="h4" component="h2" fontWeight="700" marginBottom="16px">
        Interactive demo
      </Typography>
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

      <Typography variant="h3" component="h2" fontWeight="700" marginBottom="16px">
        How to use it
      </Typography>

      {/* TODO: create a component for this? */}
      {/* <CodeContainer>
        <CodeBlock
          text={code}
          language={'javascript'}
          showLineNumbers
          startingLineNumber={96}
          theme={atomOneDark}
        />
      </CodeContainer> */}
    </main>
  )
}