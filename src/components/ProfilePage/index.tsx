import React from 'react';

import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Saruman</h1>
        <h2>@saruman.the.white</h2>

        <p>The White Wizard | Lord of Isengard | Head of the White Council</p>

        <ul>
          <li>
            <LocationIcon />
            Middle-earth
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>2</strong>
          </span>
          <span>
            <strong>94887 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
