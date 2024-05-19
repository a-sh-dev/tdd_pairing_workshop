export function tennisScoring03(
  playerA: number,
  playerB: number,
  playerAName: string = '',
  playerBName: string = '',
) {
  const scoreDifference = Math.abs(playerA - playerB);

  if ((playerB >= 3 || playerA >= 3) && scoreDifference >= 2)
    return `Game ${playerA > playerB ? playerAName : playerBName}`;

  if (playerB >= 3 && playerA >= 3) {
    if (playerA === playerB) return 'deuce';
    return `Advantage ${playerA > playerB ? playerAName : playerBName}`;
  }

  if (playerA === playerB) {
    return `${pointToScore(playerA)} all`;
  }

  return `${pointToScore(playerA)}-${pointToScore(playerB)}`;
}

function pointToScore(point: number) {
  const score = ['love', '15', '30', '40'];
  return score[point];
}
