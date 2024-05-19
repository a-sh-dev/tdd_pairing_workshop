function displayScore(score: number) {
  if (!score) {
    return `love`;
  }
  return `${score}`;
}

export function tennisScoring01(player1: number, player2: number) {
  const player1Score = displayScore(player1);
  const player2Score = displayScore(player2);

  if (player1Score === player2Score) {
    if (player1Score === '40') {
      return 'deuce';
    } else {
      return `${player1Score} all`;
    }
  }

  return `${player1Score}-${player2Score}`;
}
