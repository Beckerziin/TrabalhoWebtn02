import React from 'react';
import styled from 'styled-components';

interface Profile {
  avatar_url: string;
  login: string;
  bio: string | null;
  html_url: string;
}

interface ProfileCardStyledProps {
  profile: Profile | null;
}

const Card = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const Username = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 5px;
  color: #333;
`;

const Bio = styled.p`
  color: #666;
  margin-bottom: 10px;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function ProfileCardStyled({ profile }: ProfileCardStyledProps) {
  if (!profile) {
    return <p>Nenhum perfil encontrado.</p>;
  }

  return (
    <Card>
      <Avatar src={profile.avatar_url} alt={profile.login} />
      <Username>{profile.login}</Username>
      {profile.bio && <Bio>{profile.bio}</Bio>}
      <Link href={profile.html_url} target="_blank" rel="noopener noreferrer">
        Ver no GitHub
      </Link>
    </Card>
  );
}

export default ProfileCardStyled;