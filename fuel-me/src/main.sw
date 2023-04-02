contract;

dep errors;
dep data_structures;
dep interface;
dep utils;

use errors::{InputError, RegistrationValidityError, ProfileError, InvestorError, AssetError};
use data_structures::{ProfileType, ProfileInfo};
use interface::Funding;
use utils::{ get_profile_type };

use std::{
    auth::msg_sender,
    block::timestamp,
    call_frames::{ 
        msg_asset_id,
        contract_id
    },
    context::msg_amount,
    constants::{ 
        BASE_ASSET_ID,
        ZERO_B256
    },
    token::{
        transfer
    }
    // logging::log,
};

// TODO: here will be ETH contract id
// const BASIC_ASSET_ID = ContractId::from(ASSET_B256);

storage {
    profiles: StorageMap<Identity, Option<ProfileInfo>> = StorageMap {},
    totalFundsRaisedByStartup: StorageMap<Identity, u64> = StorageMap {},
    fundsByStartupAndInvestor: StorageMap<(Identity, Identity), u64> = StorageMap {},
}

impl Funding for Contract {
    #[storage(read, write)]
    fn register_profile(_name: str[255], _description: str[255], _profileUrl: str[255], _profileType: u64) {
        let profileType = get_profile_type(_profileType);
        require(!(profileType == Option::None), ProfileError::InvalidProfileType);
        require(!storage.profiles.get(msg_sender().unwrap()).unwrap().is_some(), RegistrationValidityError::ExistantProfile);
        storage.profiles.insert(msg_sender().unwrap(), Option::Some(ProfileInfo::new(_name, _description, _profileUrl, profileType.unwrap())));
    }

    #[storage(read)]
    fn get_profile(_startup: Identity) -> ProfileInfo {
        storage.profiles.get(_startup).unwrap().unwrap()
    }

    #[storage(read)]
    fn is_registered(_startup: Identity) -> bool {
        storage.profiles.get(_startup).unwrap().is_some()
    }

    #[payable, storage(read, write)]
    fn send_funds(_startup: Identity) {
        let amount = msg_amount();
        require(amount > 0, InputError::ExpectedNonZeroAmount);
        require(_startup != Identity::Address(Address::from(ZERO_B256)), InputError::ExpectedNonZeroAddress);
        let profile = storage.profiles.get(_startup); 
        require(profile.unwrap().is_some(), ProfileError::NonExistantProfile);
        require(profile.unwrap().unwrap().profileType == ProfileType::Startup, ProfileError::InvalidProfileType);
        
        let sender = msg_sender().unwrap();

        // balance_of ??
        // require(balance_of(sender) >= amount, InvestorError::InsufficientBalance);
        require(msg_asset_id() == BASE_ASSET_ID, AssetError::InvalidAssetId); // this could brake also

        let totalAmountFunded = storage.totalFundsRaisedByStartup.get(_startup).unwrap();
        storage.totalFundsRaisedByStartup.insert(_startup, totalAmountFunded + amount);

        let investor = sender;

        let currentAmountInvestedByInvestor = storage.fundsByStartupAndInvestor.get((_startup, investor)).unwrap();
        storage.fundsByStartupAndInvestor.insert((_startup, investor), currentAmountInvestedByInvestor + amount);
    }


    // #[storage(read, write)]
    // fn withdraw() {

    //     transfer(amount, BASIC_ASSET_ID, sender);
    // }
}
