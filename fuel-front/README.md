# Create types base on the contract abi
npx fuels typegen -i ../counter-contract/out/debug/*-abi.json -o ./src/contracts
# Run the project
yarn start