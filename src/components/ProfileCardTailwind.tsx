import React from 'react';

interface Profile {
  avatar_url: string;
  login: string;
  bio: string | null;
  html_url: string;
}

interface ProfileCardTailwindProps {
  profile: Profile | null;
}

function ProfileCardTailwind({ profile }: ProfileCardTailwindProps) {
  if (!profile) {
    return <p className="text-gray-600">Nenhum perfil encontrado.</p>;
  }

  return (
    <div className="bg-gray-100 rounded-md p-5 shadow-md text-center">
      <img
        src={profile.avatar_url}
        alt={profile.login}
        className="w-24 h-24 rounded-full mx-auto mb-2"
      />
      <h2 className="text-xl font-semibold text-gray-800 mb-1">{profile.login}</h2>
      {profile.bio && <p className="text-gray-700 mb-2">{profile.bio}</p>}
      <a
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Ver no GitHub
      </a>
    </div>
  );
}

export default ProfileCardTailwind;