import React, { useState } from 'react';
import ProfileCardTailwind from '../components/ProfileCardTailwind';

interface Profile {
  avatar_url: string;
  login: string;
  bio: string | null;
  html_url: string;
}

function TailwindCSSPage() {
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
    <div className="flex flex-col items-center p-5">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        Perfil do GitHub (Tailwind CSS)
      </h1>
      <input
        type="text"
        placeholder="Digite o nome do usuário"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={fetchProfile}
      >
        Buscar
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {profile && <ProfileCardTailwind profile={profile} />}
    </div>
  );
}

export default TailwindCSSPage;