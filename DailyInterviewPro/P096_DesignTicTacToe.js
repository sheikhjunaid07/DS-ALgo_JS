/**
 * Google
 * 
 * Design a Tic-Tac-Toe game played between two players on an n x n grid. A move is guaranteed to be valid, and a valid move is one placed on an empty block in the grid. 
 * A player who succeeds in placing n of their marks in a horizontal, diagonal, or vertical row wins the game. 
 * Once a winning condition is reached, the game ends and no more moves are allowed. 
 * Below is an example game which ends in a winning condition: 

Given n = 3, assume that player 1 is "X" and player 2 is "O" 
board = TicTacToe(3);

board.move(0, 0, 1); -> Returns 0 (no one wins)
|X| | |
| | | |    // Player 1 makes a move at (0, 0).
| | | |

board.move(0, 2, 2); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 2 makes a move at (0, 2).
| | | |

board.move(2, 2, 1); -> Returns 0 (no one wins)
|X| |O|
| | | |    // Player 1 makes a move at (2, 2).
| | |X|

board.move(1, 1, 2); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 2 makes a move at (1, 1).
| | |X|

board.move(2, 0, 1); -> Returns 0 (no one wins)
|X| |O|
| |O| |    // Player 1 makes a move at (2, 0).
|X| |X|

board.move(1, 0, 2); -> Returns 0 (no one wins)
|X| |O|
|O|O| |    // Player 2 makes a move at (1, 0).
|X| |X|

board.move(2, 1, 1); -> Returns 1 (player 1 wins)
|X| |O|
|O|O| |    // Player 1 makes a move at (2, 1).
|X|X|X|
 */

class TicTacToe {

    constructor(N) {
        this.N = N;
        this.grid = [];
        while (N--) {
            this.grid.push([]);
        }
        this.players = {
            1: 'X',
            2: 'O'
        };
        this.playerMoves = {
            1: [],
            2: []
        }
        this.moveCount = 0;
    }

    move(x, y, player) {
        if (this.isAllowed(x, y)) {
            this.moveCount++;
            this.grid[x][y] = this.players[player];
            this.playerMoves[player].push([x, y]);
            if (this.playerMoves[player].length >= 3) {
                if (this.checkIfPlayerWin(player)) {
                    console.log(`Player ${player} wins!!!`);
                } else if (this.moveCount == (Math.pow(this.N, 2) - 1)) {
                    console.log('Draw');
                }
            }
        }
    }

    isAllowed(x, y) {
        return !this.grid[x][y];
    }

    checkIfPlayerWin(player) {
        let moves = this.playerMoves[player];
        console.log(player, moves);

    }
}

const board = new TicTacToe(3);
board.move(0, 0, 1);
board.move(0, 2, 2);
board.move(2, 2, 1);
board.move(1, 1, 2);
board.move(2, 0, 1);
board.move(1, 0, 2);
board.move(2, 1, 1);
console.log(board);

/**
public class TripleT {

    enum State{Blank, X, O};

    int n = 3;
    State[][] board = new State[n][n];
    int moveCount;

    void Move(int x, int y, State s){
        if(board[x][y] == State.Blank){
            board[x][y] = s;
        }
        moveCount++;

        //check end conditions

        //check col
        for(int i = 0; i < n; i++){
            if(board[x][i] != s)
                break;
            if(i == n-1){
                //report win for s
            }
        }

        //check row
        for(int i = 0; i < n; i++){
            if(board[i][y] != s)
                break;
            if(i == n-1){
                //report win for s
            }
        }

        //check diag
        if(x == y){
            //we're on a diagonal
            for(int i = 0; i < n; i++){
                if(board[i][i] != s)
                    break;
                if(i == n-1){
                    //report win for s
                }
            }
        }

        //check anti diag (thanks rampion)
        if(x + y == n - 1){
            for(int i = 0; i < n; i++){
                if(board[i][(n-1)-i] != s)
                    break;
                if(i == n-1){
                    //report win for s
                }
            }
        }

        //check draw
        if(moveCount == (Math.pow(n, 2) - 1)){
            //report draw
        }
    }
}
 */