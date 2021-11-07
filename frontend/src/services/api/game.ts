import api from '../api';

interface gamesProps {
  id: number;
  name: string;
  description: string;
  file_url: string;
}

interface gameProp extends gamesProps {
  company: {
    id: number;
    name: string;
    description: string;
    file_url: string;
  };
  reviewMed: number;
}

export const findAllGames = () => api.get<Array<gamesProps>>('game');

export const findGame = (id: number) => api.get<gameProp>(`game/${id}`);
