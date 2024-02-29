import { ProfileCardProps } from "./types";

import { MainProfileCard, AvatarControl, ProfileAvatar, HTeg } from "./styles";

function ProfileCard({
  profileData,
  imgSrc,
  children = <h1>User Card</h1>,
}: ProfileCardProps) {
  const normalizeFirstLastName = () => {
    return `${profileData.firstName} ${profileData.lastName}`;
  };

  return (
    <MainProfileCard>
      {children}
      <AvatarControl>
        <ProfileAvatar alt="Profile Avatar" src={imgSrc} />
      </AvatarControl>
      <HTeg>{normalizeFirstLastName()}</HTeg>
      <p>Career: {profileData.career}</p>
      <p>Hair Color: {profileData.hairColor}</p>
      <p>Hobby: {profileData.hobby}</p>
    </MainProfileCard>
  );
}

export default ProfileCard;
