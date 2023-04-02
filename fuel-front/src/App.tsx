import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Startup } from "./screens/Startup";
import { useState, useEffect } from "react";
import { useFuel } from "./hooks/useFuel";
import { CONTRACT_ID } from "./constants";
import { Wallet, WalletLocked } from "fuels";
import { FuelMeAbi, FuelMeAbi__factory } from "./contracts";


// Connects out Contract instance to the deployed contract
// address using the given wallet.
// ADD contract anywhere we need it
const useIsConnected = () => {
  const [fuel] = useFuel();
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    async function handleConnection() {
      const isConnected = await fuel.isConnected();
      setIsConnected(isConnected);
    }

    if (fuel) {
      handleConnection();
    }

    fuel?.on(fuel.events.connection, handleConnection);
    return () => {
      fuel?.off(fuel.events.connection, handleConnection);
    };
  }, [fuel]);

  return isConnected;
}

const Layout = () => {
  const isConnected = useIsConnected();
  const [fuel] = useFuel();
  const [contract, setContract] = useState<FuelMeAbi>();
  const [wallet, setWallet] = useState<WalletLocked>();
  const [isRegistered, setIsRegistered] = useState(false);
  useEffect(() => {
    if (!isConnected) return
    const getAccount = async () => {
      const accounts = await fuel.accounts();
      if (!accounts.length) return null
      const provider = await fuel.getProvider();
      console.log("provider", provider)

      const walletLocked = Wallet.fromAddress(accounts[0], provider);
      setWallet(walletLocked);
      return walletLocked;
    }

    getAccount().then(e => {
      if (!e) return
      const ct = FuelMeAbi__factory.connect(CONTRACT_ID, e);
      setContract(ct)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected])

  useEffect(() => {
    const checkRegistered = async () => {
      console.log("here", !!wallet && !!contract)

      if (!!wallet && !!contract) {
        const balance = await wallet.getBalance();
        console.log("hh", balance)
        console.log("inside the if", wallet.address.toB256())
        const { value } = await contract.functions.is_registered({ Address: { value: wallet.address.toB256() } }).call();
        console.log(value)
        return value
      }
    }
    console.log("here")
    checkRegistered().then(isRegistered => console.log(isRegistered))
  }, [contract, wallet])

  return <>
    <div style={{
      height: 100,
      borderBottom: "2px solid black",
      display: "flex",
      justifyContent: "flex-end",
      padding: 40
    }}>
      <h4 className='poppins text-2xl' onClick={async () => {
        if (!isConnected)
          await fuel.connect();
        else if (contract)
          await contract.functions.register_profile("name", "description", "https://aromatic-acai-5c1.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F326fecf7-df68-47d6-b0d1-f7114c251bb7%2F6eae44b041b041a682b5121116c1bde0.png?id=5a2cdf27-c5d7-4570-816a-f47e063d505b&table=block&spaceId=b786dbf2-7ea6-4527-a9c6-0c3126f3c670&width=2000&userId=&cache=v2", 1).call();

      }}>
        {isConnected ? "Profile " : "Connect"}
      </h4>
      <h4 className='poppins text-2xl' onClick={() => {
        fuel.disconnect();
      }}>
        {isConnected && "Disconnect"}
      </h4>
    </div>
    <Outlet />
  </>
}

function App() {

  let router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          {/* We use this one as landing and we have both types of uses in the same page */}
          {/* Profile will be just a popup */}
          <Route index path="/" element={<Startup />} />
        </Route>
      </>
    )
  );
  return <>
    <RouterProvider router={router} />;
  </>;
}

export default App;
