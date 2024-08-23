---
title: "WordGuess"
---

## Introduction

In this MP you will create a program that plays a word guessing game with a user. The MP is split into two parts, the first part will be a normal version of the game, the second will be an evil version 😈!

## Learning goals

- From simple specifications create a complete, functioning, project.
- Master C++ basics like iteration, selections, and functions.
- Design a readable and reusable solution through functions.
- Verify correctness through writing and using tests.
- Develop code on a personal computer and work with an autograder.

## Topics Covered

Primitive data types, iteration, selection, functions, vectors, maps, and testing.

## Background Information

Word guess is a two player game. Player-1 picks a secret word of a given length. Player-2 must try and guess the word 1 letter at a time. Each time player-2 guesses a letter, player-1 must tell report where in the word that letter appears or if it does not appear at all. Player-2 has a limited number of times they can be wrong on a guess before losing the game to player-1. If player-2 guesses the word before they run out of attempts, they win. In this MP, the user will be player-2 and the code you write will be player-1.

## Getting Started
Download the starter files onto your computer by visiting this link, 
https://github.com/CS-128-Live/student-word-guess/archive/refs/heads/main.zip 

Unzip the folder and open up a new window of VS Code. Click "Open..." and navigate to the folder called "student-word-guess-main". Click "open". 

## Overview

This MP is split into two parts.

The 1st part of the MP is to create a playable version of the word guess game where the program is player-2 and the user is player-1. You will implement player-2 as a fair player, which means they select a random word at the start of the game and do not change it.

The 2nd part of this MP is to create a version of the game where player-2 does not pick a word until they absolutely have to. Instead, player-2 chooses families or groups of words that would be the hardest for player-1 to guess. This is the evil version. Please reuse or change parts of part 1 as appropriate

The final version of this project is a combined part 1 and part 2 where the user can select which mode they want to play, aka normal mode or evil mode.

### Recommended Steps

1.  Read through all of the specifications.
2.  Download the stater code and read through each file.
3.  Work on Part 1 (Due Thursday the XX at 11:59pm)

    1. Implement a function declared in word_guess_functions.hpp in the file word_guess_functions.cc.
    2. Run the tests for that function locally. Debug your code until the tests pass.
    3. Repeat steps 1-2 until all functions are complete.
    4. Submit on the autograder to verify functionality.
    5. Complete driver.cc as specified. Test locally and then submit on the autograder.

4.  Work on Part 2 (Due Thursday the XX at 11:59pm)

    1. Plan out driver_full.cc to work with two modes, normal and evil. As you go, note functions you will need to write.
    2. Implement the functions you noted above in main.cc above the main function.
    3. Write tests for the new functions to verify correctness.
    4. Submit on the autograder.

## Part 1

In Part 1, you will be implementing the fair or normal version of the word guess game.

For this part, you are given all of the functions declarations you will need. These can be found in word_guess_functions.hpp. The exact instructions for each of the functions is found in the RME's above each declaration. Follow these instructions exactly to receive full credit.

Each function has a corresponding test case in tests.cc. To run the test for a function simply run the following in your command line interface.

`make tests
./bin/tests [function_name]`

**replacing function_name with the name of the function you want to test.**

After completing the functions, implement the driver AKA the main function. Please use the functions you just spent time working on! Below are the general steps of the algorithm to implement,

1. Get the length of the word from the user. This needs to be a number between 1 and 10. With 10 being inclusive and 1 exclusive.
2. Select a random word of the given length.
3. While the game has not ended,
   1. Print the state
   2. Check if the game has ended
   3. Get a new guess from the user
   4. Update everything needed based on this new guess and give relevant feedback to the user.

In order to grade your work, each string you print must match the solution exactly. To help with this, we have provided some example output files. To fully run and check the output of the driver do the following,

`make driver
./bin/driver < tests/input/input_part1_ex1.txt > tests/output/output_part1_ex1.txt
diff tests/output/output_part1_ex1.txt tests/output/output_part1_ex1_sol.txt`

The first line compiles your driver and function code into a single executable, called driver.

The second line, runs the executable and pipes the text from the input_part1_ex1.txt file into the code to mimic a user using cin (< symbol). It then pipes the cout output into the file output_part1_ex1.txt (> symbol).

The third line, runs a difference checker against the output your code produced and the expected output we provide, output_part1_ex1_sol.txt. If nothing prints out, the two files are identical.

You are provided with three examples to check against. Once they all match your output exactly, submit to the autograder for the final completion check.

## Part 2

This part is meant to challenge you! There is less structure given than in the previous part and the algorithm you need to implement is more complicated. If you get stuck please come to office hours!

Your task is to update the code you wrote in part 1 to include an option of multiple modes, normal (part 1), and now evil.

The evil mode varies from the normal mode in that the program does not pick a word at the start of the game. Instead, based on the guess the user makes, the program will choose a subset of possible words. It tries to keep that subset as big as possible to trick the user into losing.

### The Evil Algorithm

1. Get the length of the word from the user. This needs to be a number between 1 and 10. With 10 being inclusive and 1 exclusive.
2. While the game has not ended,
   1. Print the state
   2. Get a new guess from the user
   3. Select the largest group of words possible given the guess and use that to determine the feedback to the user
   4. Check if the game has ended

Let us walkthrough step 2.3 in more detail. To start, the subset of possible words is all words in the dictionary of the length the user specified. When the user guesses a new letter that subset can be divided into potential groups. For example a group where the guessed letter doesn't exist in the word, one where it only exists as the 1st character, one where it exists as the 2nd and 4th, and so on. The algorithm will figure out what subset of the current possible words fit into each of these groups and then choose the group with the most words. Based on the group it chose it will provide feedback to user if the guessed letter is in the word or not. Let us walk through an example,

Let us say the dictionary has the following words:
penny, smile, cat, climb, lemon, dog, algorithm, piano, stone, drive, defer

The user picks the length of 5. Now the subset of possible words are:
penny, smile, climb, lemon, piano, stone, drive, defer

Then the user guesses the letter 'e',

The algorithm creates the following groups:
"_ e _ \_ \_ _" : penny, lemon
"_ \_ \_ \_ _ e" : smile, drive, stone
" _ e _ e _" : defer
" \_ \_ \_ \_ \_" : climb, piano

It then picks the "\_ \_ \_ \_ \_ e" group because it has the most potential words, aka 3. The algorithm tells the user their guess was correct and updates the state to show the 'e' in the last position.

The subset of possible words are now:
smile, drive, stone

The next round, the user guesses the letter "n"
The algorithm creates the following groups:
"\_ \_ \_ \_ \_ _" : smile, drive
"_ \_ \_ _ n _" : stone

It then picks the "\_ \_ \_ \_ \_ _" group because it has the most potential words. The algorithm tells the user their guess was incorrect and still shows the user "_ \_ \_ \_ \_ e" as the state.

This continues until the user is out of attempts and loses or if the user finds a way to reduce the group size to 1 and then guesses all the relevant letters. The evil algorithm is hard to beat!

#### Algorithm Tips

- Do not generate all possible groups. For example, if no word in the subset has the pattern, "e_eee_e" there is no need to create a group to represent this. Think about how you can figure out when a word needs to be in a new group you haven't seen yet or when it can fit into an exisiting group.

#### Recommended Approach

One goal of this project and the course is to help you develop the skills needed to write code given general instructions. However, we realize this is a challenge and we are here to help! Below are some recommended steps as to how to approach this.

1.  Don't be afraid to delete or change code you already have. Coding is iterative in nature! Rarely does anyone write the perfect solution on the first go.
2.  Plan out what data structures you will use to represent the information you will need to keep track of.
3.  Write out in english (or whichever language you prefer) the high level steps you need your algorithm to do. Then break down each of those further and further until they are small enough to code.
4.  Come to office hours if you get stuck.
5.  Start early! If you start late and you get stuck there may not be enough time to help.

For information on how to exactly prompt the user please see the sample examples provided. Note there are no test cases for this part because we let you decide what functions to write. However, to check your code is working as expected, 
do the following with different part2 examples:

`make driver-full
./bin/driver-full < tests/input/input_part2_ex1.txt > tests/output/output_part2_ex1.txt
diff tests/output/output_part2_ex1.txt tests/output/output_part2_ex1_sol.txt`


**see above for a description of what each of these lines do.**
