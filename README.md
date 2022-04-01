# CODE-LE

### Everyone's favorite word game reimagined


            Can use a 5x5 grid here to keep track of singles.
            Might need a score or something to track repeat characters?

             E  R  R  O  R  i
          A [0, 0, 0, 0, 0] 0  =>  keyStyles[char] = "-incorrect"
          R [0, 1, 1, 0, 1] 1  =>  keyStyles[char] = "-present"
          R [0, 1, 1, 0, 1] 2  =>  keyStyles[char] = "-present"
          A [0, 0, 0, 0, 0] 3  =>  keyStyles[char] = "-incorrect"
          Y [0, 0, 0, 0, 0] 4  =>  keyStyles[char] = "-incorrect"
          j> 0  1  2  3  4  
          
             E  R  R  O  R 
          C [0, 0, 0, 0, 0]    =>  keyStyles[char] = "-incorrect"
          O [0, 0, 0, 1, 0]    =>  keyStyles[char] = "-present"
          N [0, 0, 0, 0, 0]    =>  keyStyles[char] = "-incorrect"
          S [0, 0, 0, 0, 0]    =>  keyStyles[char] = "-incorrect"
          T [0, 0, 0, 0, 0]    =>  keyStyles[char] = "-incorrect"

             E  R  R  O  R 
          A [0, 0, 0, 0, 0]
          R [0, 1, 1, 0, 1]
          R [0, 1, 1, 0, 1]
          0 [0, 0, 0, 1, 0]
          W [0, 0, 0, 0, 0]

            Properties of matrix:
            
            1. Row sum
            The sum of a row is equal to the number of times the attempt character at jth index is present in the answer

            1. Column sum
            Equal to the number of times the ith character of the answer appears in the attempt.

            1. M(i, j) : i = j
            These are the digits at the diagonal of the matrix. Probably the most informative, actually, since this indicates
            both correct presence and position. The diagonal is good to build logic off of.

            For example, if M(i,j) matches condition 3 and the character only appears once then it's correct.            

            *** Needs logic for: if repeat letter guessed at all present indices -> highlight correct ***

            Store repeat characters, indices, and evaluate styles based on global attempts.

            Okay so if I store the matrix evaluations above in state, then I can quickly evaluate for M(i,j) for condition 3 and
            for repeat characters, pull in the exact coordinates in each attempt. So since the answer is in the state, I can store 
            repeat characters and associate those with a score e.g.(3/3 is the condition to meet to switch 'R' to "-correct") and 
            evaluate M(i,j) across the global game state and if M(i, j) matches 3/3 times across all attempts, then the tiles have
            given the player absolute information about where all the "R"s are and this can be considered solved for.