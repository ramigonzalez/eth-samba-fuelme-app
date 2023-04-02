# Create types base on the contract abi
npx fuels typegen -i ../counter-contract/out/debug/*-abi.json -o ./src/contracts
# Run the project
yarn start


# TODO
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
