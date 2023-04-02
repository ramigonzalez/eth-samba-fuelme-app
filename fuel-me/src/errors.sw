library errors;

pub enum InputError {
    ExpectedNonZeroAddress: (),
    ExpectedNonZeroAmount: (),
}

pub enum RegistrationValidityError {
    ExistantProfile: ()
}

pub enum ProfileError {
    NonExistantProfile: (),
    InvalidProfileType: (),
    ExpectApprovalStartup: (),
    ExpectNonActiveCampain: (),
}

pub enum AssetError {
  InvalidAssetId: ()
}
