import { expect, it } from 'vitest';
import { tennisScoring01 } from './tennisScoring01';

it('should report "love-all" at the start', () => {
  expect(tennisScoring01(0, 0)).toEqual('love all');
});

it('should report "love-15" given player2 scores first', () => {
  expect(tennisScoring01(0, 15)).toEqual('love-15');
});

it('should report "15-love" given player1 scores first', () => {
  expect(tennisScoring01(15, 0)).toEqual('15-love');
});

it('should report "love-30" given player2 scores 30 while player1 scores 0', () => {
  expect(tennisScoring01(0, 30)).toEqual('love-30');
});

it('should report "15-30" given player2 scores 30 while player1 scores 15', () => {
  expect(tennisScoring01(15, 30)).toEqual('15-30');
});

it('should report "15-all" given player2 scores 15 while player1 scores 15', () => {
  expect(tennisScoring01(15, 15)).toEqual('15 all');
});

it('should report "30-all" given player2 scores 30 while player1 scores 30', () => {
  expect(tennisScoring01(30, 30)).toEqual('30 all');
});

it('should report "deuce" given player1 and player2 scores 40', () => {
  expect(tennisScoring01(40, 40)).toEqual('deuce');
});
