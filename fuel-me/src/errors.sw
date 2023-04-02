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
    InvalidProfileType: ()
}

pub enum InvestorError {
    InsufficientBalance: (),
}

pub enum AssetError {
  InvalidAssetId: ()
}
