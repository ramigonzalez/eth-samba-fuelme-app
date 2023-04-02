library utils;

dep data_structures;
use data_structures::{ProfileType, ProfileInfo};

pub fn get_profile_type(_profileType: u64) -> Option<ProfileType> {
  match _profileType {
    0 => Option::Some(ProfileType::Startup),
    1 => Option::Some(ProfileType::Investor),
    _ => Option::None,
  }
}

impl core::ops::Eq for Option<ProfileType> {
    fn eq(self, other: Self) -> bool {
        match (self, other) {
            (Option::Some(ProfileType::Startup), Option::Some(ProfileType::Startup)) => true,
            (Option::Some(ProfileType::Investor), Option::Some(ProfileType::Investor)) => true,
            (Option::None, Option::None) => true,  
            _ => false,
        }
    }
}

impl core::ops::Eq for Option<ProfileInfo> {
    fn eq(self, other: Self) -> bool {
        match (self, other) {
            (Option::Some(ProfileInfo), Option::Some(ProfileInfo)) => true,
            (Option::None, Option::None) => true,  
            _ => false,
        }
    }
}