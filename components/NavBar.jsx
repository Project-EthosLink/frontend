import React, { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import style from './Style.module.css';
import Link from 'next/link';
import WalletConnect from './ConnectWallet';
import { useAccount } from 'wagmi';
import { Tooltip } from '@mui/material';
import { Avatar } from '@mui/material';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading, error } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  const { address } = useAccount();

  const [ethAccount, setEthAccount] = useState(null);

  useEffect(() => {
    setEthAccount(address);
  }, [ethAccount, address]);

  console.log(user)

  // useEffect(() => {

  //   if (!isLoading && !error && user) {
  //     var myHeaders = new Headers();
  //     myHeaders.append("Accept", "application/json");
  //     myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlppM085Sy1WRW0wZGVWRWNhYk8tUiJ9.eyJpc3MiOiJodHRwczovL2Rldi0wb2QxcjNwcnVobWY4ZWp4LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJmVW4yOG1LNmx4VW84RUxzcU5vZ292RUdDbUw3UkhidkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtMG9kMXIzcHJ1aG1mOGVqeC51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY5MTI0NjY0OCwiZXhwIjoxNjkxMzMzMDQ4LCJhenAiOiJmVW4yOG1LNmx4VW84RUxzcU5vZ292RUdDbUw3UkhidiIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOmxvZ3NfdXNlcnMgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIHVwZGF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHVwZGF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyBkZWxldGU6YnJhbmRpbmcgcmVhZDpsb2dfc3RyZWFtcyBjcmVhdGU6bG9nX3N0cmVhbXMgZGVsZXRlOmxvZ19zdHJlYW1zIHVwZGF0ZTpsb2dfc3RyZWFtcyBjcmVhdGU6c2lnbmluZ19rZXlzIHJlYWQ6c2lnbmluZ19rZXlzIHVwZGF0ZTpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgdXBkYXRlOmxpbWl0cyBjcmVhdGU6cm9sZV9tZW1iZXJzIHJlYWQ6cm9sZV9tZW1iZXJzIGRlbGV0ZTpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiB1cGRhdGU6YXR0YWNrX3Byb3RlY3Rpb24gcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uc19zdW1tYXJ5IGNyZWF0ZTphY3Rpb25zX2xvZ19zZXNzaW9ucyBjcmVhdGU6YXV0aGVudGljYXRpb25fbWV0aG9kcyByZWFkOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgdXBkYXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgZGVsZXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgcmVhZDpjbGllbnRfY3JlZGVudGlhbHMgY3JlYXRlOmNsaWVudF9jcmVkZW50aWFscyB1cGRhdGU6Y2xpZW50X2NyZWRlbnRpYWxzIGRlbGV0ZTpjbGllbnRfY3JlZGVudGlhbHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.AzFDPqiRx9V-_MZWFBsGnmNlvi1IJoXP6MR_7jLeASsWNwE3E7oIBwt7C7eIrUndQHm93_eUw2JxjdPvaZt9MYM_og3-PY4uJj-U3pRedJs6BW7UVT868-BFWNsfsj5jKqX69BUdQZKUpo9YlXRP4awuotDm23kh3trGNAxtUHU6f7mmxXNw_RGoFIGPUdI3I5_AeCoBZ89dx3efy_OiGrOVYzfQmXd_w1iV2qdKBeWigRZfgD8-UvRIvi9WB3l-94-pj5T8hBiaHs5oYGOwB07J22oO1gfWc5MFnsSChdCT-yDkiEOhXfACzsZwvu2MRSbwrNMX_eDou5KY6FzxMA");

  //     var requestOptions = {
  //       method: 'GET',
  //       headers: myHeaders,
  //       redirect: 'follow'
  //     };

  //     fetch(`https://dev-0od1r3pruhmf8ejx.us.auth0.com/api/v2/users/${user.sub}`, requestOptions)
  //       .then(response => response.text())
  //       .then(result => console.log(result))
  //       .catch(error => console.log('error', error));
  //   }

  // }, [user?.sub])


  return (
    <nav className={` mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-center fixed left-0 top-0 w-full py-7 ${style.navbar}`} data-testid="navbar">
      <ul className='w-full lg:w-3/4 h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between text-white'>
        <li>
          <Link href="/">EthosLink</Link>
        </li>
        <li>
          <ul className='flex gap-3'>
            <li>
              <Link href="/create">Create</Link>
            </li>
            <li>
              <Link href="/be-a-creator/page">Be a Creator</Link>
            </li>
          </ul>
        </li>
        <li>
          <div className=" flex gap-3">
            {user
              ? <Link href="/api/auth/logout" className={`relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 hover:shadow-none px-4 ${style.buttonBorderGradient} ${style.shadowButton}`}>Sign Out</Link>
              : <Link href="/api/auth/login" className={`relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 hover:shadow-none px-4 ${style.buttonBorderGradient} ${style.shadowButton}`}>Sign In</Link>
            }
            {ethAccount != null ? (
              <span>
                <Link href={`/profile/${ethAccount}`}>
                  <Tooltip title={ethAccount}>
                    <Avatar
                      alt="user"
                      src={`https://api.dicebear.com/5.x/bottts/svg?seed=${address}`}
                    />
                  </Tooltip>
                </Link>
              </span>
            ) : (
              <span>
                <WalletConnect />
              </span>
            )}

          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
