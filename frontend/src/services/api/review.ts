import api from '../api';

export const createReview = (review: number, gameId: number) =>
  api.post('review', {
    gameId,
    review,
  });
