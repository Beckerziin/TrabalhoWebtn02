import React, { useState } from 'react';
import ProfileCardStyled from '../components/ProfileCardStyled';
import styled from 'styled-components';

interface Profile {
  avatar_url: string;
  login: string;
  bio: string | null;
  html_url: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function StyledComponentsPage() {
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState<Profile | null>(null);
  const [error, setError] = useState('');

  const fetchProfile = async () => {
    setError('');
    setProfile(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Profile = await response.json();
      setProfile(data);
    } catch (e: any) {
      setError('Não foi possível encontrar o usuário.');
      console.error("Erro ao buscar perfil:", e.message);
    }
  };

  return (
    <Container>
      <h1>Perfil do GitHub (Styled Components)</h1>
      <Input
        type="text"
        placeholder="Digite o nome do usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button onClick={fetchProfile}>Buscar</Button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {profile && <ProfileCardStyled profile={profile} />}
    </Container>
  );
}

export default StyledComponentsPage;