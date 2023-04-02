import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Startup } from "./screens/Startup";
import { useState, useEffect } from "react";
import { useFuel } from "./hooks/useFuel";


// Connects out Contract instance to the deployed contract
// address using the given wallet.
// ADD contract anywhere we need it
// const contract = CounterContractAbi__factory.connect(CONTRACT_ID, wallet);
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

  return [isConnected];
}

const Layout = () => {
  const globalWindow = typeof window !== "undefined" ? window : ({} as Window);
  const isConnected = useIsConnected();
  return <>
    <div style={{
      height: 100,
      borderBottom: "2px solid black",
      display: "flex",
      justifyContent: "flex-end",
      padding: 40
    }}>
      <h4 className='poppins text-2xl' onClick={() => {
        (globalWindow as any).fuel.connect();
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
