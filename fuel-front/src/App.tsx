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
      <h4 className='poppins text-2xl' onClick={() => {
        fuel.connect();
      }}>
        {isConnected ? "Profile" : "Connect"}
      </h4>
    </div>
    <Outlet />
  </>
}

function App() {
  // EXAMPLE HOW TO CALL Functions
  // const [counter, setCounter] = useState(0);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function main() {
  //     // Executes the counter function to query the current contract state
  //     // the `.get()` is read-only, because of this it don't expand coins.
  //     const { value } = await contract.functions.count().get();
  //     setCounter(Number(value));
  //   }
  //   main();
  // }, []);

  // async function increment() {
  //   // a loading state
  //   setLoading(true);
  //   // Creates a transactions to call the increment function
  //   // because it creates a TX and updates the contract state this requires the wallet to have enough coins to cover the costs and also to sign the Transaction
  //   try {
  //     await contract.functions.increment().txParams({ gasPrice: 1 }).call();
  //     const { value } = await contract.functions.count().get();
  //     setCounter(Number(value));
  //   } finally {
  //     setLoading(false);
  //   }
  // }


  // </Router >
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
