library interface;

dep data_structures;
use data_structures::{ProfileType, ProfileInfo, Campain};


abi Funding {
    /// Register a profile in the protocol
    ///
    /// # Arguments
    ///
    /// * `_name` - The profile name
    /// * `_description` - The profile desc
    /// * `_profileUrl` - The profile picture url. Must be less than 255 chars
    /// 
    #[storage(read, write)]
    fn register_profile(_name: str[255], _description: str[255], _profileUrl: str[255], _profileType: u64);

    /// Checks if a profile is already registered
    ///
    /// # Arguments
    ///
    /// * `_startup` - The startup address
    ///
    #[storage(read)]
    fn get_profile(_startup: Identity) -> ProfileInfo;

    /// Checks if a profile is already registered
    ///
    /// # Arguments
    ///
    /// * `_startup` - The startup address
    ///
    #[storage(read)]
    fn is_registered(_startup: Identity) -> bool;

    ///////////////////////////////////////////////
    ////  INVESTORS
    ///////////////////////////////////////////////

    /// Send funds to an startup
    ///
    /// # Arguments
    ///
    /// * `_startup` - The startup what will be funded
    /// * `_amount` - The amount of tokens sent
    ///
    /// # Reverts
    ///
    /// * If the amount is less or equals zero
    /// * If the startup is the address of zero
    /// * If the signer is not an investor
    /// * If the startup exists and it is an startup
    /// * If the investor balance is less than the desired amount to invest
    ///
    #[payable, storage(read, write)]
    fn send_funds(_startup: Identity);

    /// Send funds to an startup
    ///
    /// # Arguments
    ///
    /// * `_startup` - The startup what will be funded
    /// * `_amount` - The amount of tokens sent
    ///
    /// # Reverts
    ///
    /// * If the amount is less or equals zero
    /// * If the startup is the address of zero
    /// * If the signer is not an investor
    /// * If the investor balance is less than the desired amount to invest
    ///
    #[storage(write)]
    fn approve(_startup: Identity);

    /// Used for showing tags approved or not approved
    #[storage(read)]
    fn is_approved(_startup: Identity) -> bool;

    ///////////////////////////////////////////////
    ////  STARTUPS
    ///////////////////////////////////////////////

    /// Sends the allocated funds an approved startup has on their funding balance
    ///
    /// # Reverts
    ///
    /// * If the signer is not registered
    /// * If the signer is not an startup
    /// * If the startup is not approved
    /// * If the startup is blacklisted  ==> (NOT FOR MVP)
    ///
    #[storage(read)]
    fn withdraw();

    /// Creates an startup campain
    ///
    /// # Reverts
    ///
    /// * If the signer is not registered
    /// * If the signer is not an startup
    /// * If the startup already have an active campain
    /// * If the startup is blacklisted  ==> (NOT FOR MVP)
    ///
    #[storage(read, write)]
    fn create_campain(_name: str[255], _description: str[255], _amount: u64);

}