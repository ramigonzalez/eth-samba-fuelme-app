library data_structures;

// Declare the enum
pub enum ProfileType {
    Startup: (),
    Investor: ()
}

impl core::ops::Eq for ProfileType {
    fn eq(self, other: Self) -> bool {
        match (self, other) {
            (ProfileType::Startup, ProfileType::Startup) => true,
            (ProfileType::Investor, ProfileType::Investor) => true,
            _ => false,
        }
    }

    // fn neq(self, other: Self) -> bool {
    //     !self.eq(other)
    // }
}

pub struct ProfileInfo {
    name: str[255],
    description: str[255],
    url: str[255], // only short links available,
    profileType: ProfileType, 
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

impl core::ops::Eq for ProfileInfo {
    fn eq(self, other: Self) -> bool {
        match (self, other) {
            (ProfileInfo, ProfileInfo) => true,
            _ => false,
        }
    }
}

impl ProfileInfo {
    pub fn new(name: str[255], description: str[255], url: str[255], profileType: ProfileType) -> Self {
        Self { name, description, url, profileType }
    }
}

pub struct Campain {
    name: str[255],
    description: str[255],
    amount: u64,
    /// The timestamp at which the campain ends
    end_date: u64
}