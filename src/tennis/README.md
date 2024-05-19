# 🎾 Tennis Scoring Kata

Develop a program that takes the result of each point in a tennis game and returns the score in the traditional lingo, until one player wins. 

## Requirements

1. There are two players with distinct names.
2. The score after each point is reported.
3. The scoring system is as follows:
   - Each player can have either of these points in one game: `"love", "15", "30", "40"`. E.g. **Player A: 0 pts, Player B: 1 pt → "love-15".**
   - If scores are tied, report "all", E.g. **"30 all"** instead of "30-30".
   - If you have 40 and are ahead and you win the point you win the game, however there are special rules:
     - If both have 40 the players are **"deuce"**.
     - When in deuce, the winner of a point will have advantage: e.g. **Player A: 4, Player B: 3 → "advantage [player A’s name]"**.
     - If the player with advantage wins the ball they win the game.
     - If the player without advantage wins they are back at deuce.
     - Once a player wins the game report **"Game [player name]"**.
4. Stretch goals - sets, match, and tie-break:
   - Extend scoring to a whole set (first to at least 6 games with a two game lead), and then to a best-of three sets match.
       - Last line of output: **"Game, set, and match [player name]"**
   - Add tie-break scoring for when a set reaches 6 games all.

## Rules

- Hardcore TDD. No Excuses!
- No red tests while refactoring
- Share the driver and navigator roles (frequent swapping)
- Pick the fun way! 😉
