import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Startup } from "./screens/Startup";


// Connects out Contract instance to the deployed contract
// address using the given wallet.
// ADD contract anywhere we need it
// const contract = CounterContractAbi__factory.connect(CONTRACT_ID, wallet);

const useRegister = () => {
  return { hasRegistered: true }
}

const Layout = () => {
  return <>
    <div style={{
      height: 100,
      borderBottom: "2px solid black",
      display: "flex",
      justifyContent: "flex-end",
      padding: 40
    }}>
      <h4 className='poppins text-2xl'>
        Register / Connect
      </h4>
    </div>
    <Outlet />
  </>
}

function App() {

  const { hasRegistered } = useRegister();
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