import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Startup } from "./screens/Startup";


// Connects out Contract instance to the deployed contract
// address using the given wallet.
// ADD contract anywhere we need it
// const contract = CounterContractAbi__factory.connect(CONTRACT_ID, wallet);
/**
 * Buttons are not there until you login or register
 * 
 * IF the user has wallet connected but it is not registered -> FIRST card, the green one becomes the registration form
 * 
 * INVESTOR
 * When you are not connected you are going to see just 
 * Find your next project and connect wallet up there
 * when invest modal send founds
 *    call all the lists
 * investor can send money to a startup or approve it
 * 
 * 
 * 
 * 
 * STARTUP 
 * Withdraw -> active just if I am verified and I have what to withdraw
 * Create Projects -> form with project name description and so on
 * Percentage bar that shows how much we have raised
 * We can not add a new campaign if we have one that has not been finished
 * 
 * 
 * REGISTER PROFILE
 * 
 */

const Layout = () => {
  return <>
    <div style={{
      height: 100,
      borderBottom: "2px solid black"
    }}>

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