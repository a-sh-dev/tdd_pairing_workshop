import { expect, it } from 'vitest';
import { tennisScoring02 } from './tennisScoring02';

it('should report "love all" at the start', () => {
  expect(tennisScoring02(0, 0)).toEqual('love all');
});

it('should report "love-15" if playerB scores first', () => {
  expect(tennisScoring02(0, 1)).toEqual('love-15');
});

it('should report "15-love" if playerA scores first', () => {
  expect(tennisScoring02(1, 0)).toEqual('15-love');
});

it('should report "15 all" if both players score 1', () => {
  expect(tennisScoring02(1, 1)).toEqual('15 all');
});

it('should report "30-love" if playerA scores 2', () => {
  expect(tennisScoring02(2, 0)).toEqual('30-love');
});

it('should report "40-love" if playerA scores 3', () => {
  expect(tennisScoring02(3, 0)).toEqual('40-love');
});

it('should report "love-40" if playerB scores 3', () => {
  expect(tennisScoring02(0, 3)).toEqual('love-40');
});

it('should report "deuce" if both players scores 3', () => {
  expect(tennisScoring02(3, 3)).toEqual('deuce');
});

it('should report "deuce" if both players scores more than 3', () => {
  expect(tennisScoring02(5, 5)).toEqual('deuce');
});

it('should report "advantage player name" if playerA scores 4 and playerB scores 3', () => {
  expect(tennisScoring02(4, 3, 'playerAName', 'playerBName')).toEqual(
    'advantage playerAName',
  );
});

it('should report "advantage potato man" if playerA scores 4 and playerB scores 3 and playerA is called potato man', () => {
  expect(tennisScoring02(4, 3, 'potato man', 'cherry boy')).toEqual(
    'advantage potato man',
  );
});

it('should report "Game potato man" if playerA scores more than 3 points and has at least 2 more points than playerB', () => {
  expect(tennisScoring02(5, 3, 'potato man', 'cherry boy')).toEqual(
    'Game potato man',
  );
});
