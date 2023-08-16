import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Web3Button } from '@web3modal/react'
import { useWeb3ModalTheme } from '@web3modal/react'
import { useContractRead } from 'wagmi'
import TutorialABI from "@/abis/Tutorial.json";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { theme, setTheme } = useWeb3ModalTheme()

  const { data, isError, isLoading } = useContractRead({
    address: "0x......",
    abi: TutorialABI,
    functionName: "getBalance",
  })

  setTheme({
    themeMode: 'dark',
    themeVariables: {
      '--w3m-font-family': 'Roboto, sans-serif',
      '--w3m-accent-color': '#F5841F'
      // ...
    }
  })

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <Image
          src="/crypto.jpeg"
          alt="crypto"
          width={500}
          height={500}
          title="Gateway to the crypto world"
        />
        <h1> Welcome to web3modal</h1>
        <Web3Button />
        <button onClick={() => console.log('clicked')}
        style={{
          height: 40,
          width: 200,
          background: "white",
          borderRadius: 16,
          color: "black",
        }}>
          
          <h1>Mint</h1>
        </button>
      </div>
    </main>
  )
}
