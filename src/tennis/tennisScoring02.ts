export function tennisScoring02(
  pointsA: number,
  pointsB: number,
  nameA: string = '',
  nameB: string = '',
) {
  const scoreMap = ['love', '15', '30', '40'];
  const scoreA = scoreMap[pointsA];
  const scoreB = scoreMap[pointsB];

  if (pointsA === pointsB) {
    if (pointsA >= 3) {
      return 'deuce';
    } else {
      return scoreA + ' all';
    }
  }

  const difference = pointsA - pointsB;

  if (pointsA >= 4 && difference > 1) {
    return 'Game ' + nameA;
  }

  if (pointsA === 4 && pointsB === 3) {
    return 'advantage ' + nameA;
  } else if (pointsA === 3 && pointsB === 4) {
    return 'advantage ' + nameB;
  }
  return scoreA + '-' + scoreB;
}
