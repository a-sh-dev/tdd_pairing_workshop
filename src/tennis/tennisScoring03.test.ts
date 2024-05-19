import { expect, it } from 'vitest';
import { tennisScoring03 } from './tennisScoring03';

it('should report "love all" at the start', () => {
  expect(tennisScoring03(0, 0)).toEqual('love all');
});

it('should report "love-15" when playerB scores first', () => {
  expect(tennisScoring03(0, 1)).toEqual('love-15');
});

it('should report "15 all" when both player at 1point', () => {
  expect(tennisScoring03(1, 1)).toEqual('15 all');
});

it('should report "30 all" when both player at 2 points', () => {
  expect(tennisScoring03(2, 2)).toEqual('30 all');
});

it('should report "deuce" when both player at 3 points', () => {
  expect(tennisScoring03(3, 3)).toEqual('deuce');
});

it('should report "15-love" when playerA scores first', () => {
  expect(tennisScoring03(1, 0)).toEqual('15-love');
});

it('should report "Advantage A" when playerA scores 1 more points than playerB that is more than 3 points', () => {
  expect(tennisScoring03(4, 3, 'A', 'B')).toEqual('Advantage A');
});

it('should report "Advantage B" when playerB scores 1 more points than playerA that is more than 3 points', () => {
  expect(tennisScoring03(5, 6, 'A', 'B')).toEqual('Advantage B');
});

it('should report "Game A" when playerA scores 2 points more than playerB', () => {
  expect(tennisScoring03(7, 5, 'A', 'B')).toEqual('Game A');
});
