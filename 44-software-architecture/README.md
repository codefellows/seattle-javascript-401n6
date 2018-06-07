# ![CF](http://i.imgur.com/7v5ASc8.png) Software Architecture 

## Resources

## Designing Complex Applications
Consider what it takes to build the following applications:

* Rock Paper Scissors
* Tic-Tac-Toe
* Chess
* Where's Waldo

Generally what we're talking about here is finding out how to make the design,
implementation and architecture of our application easier to create and reason
about. The best way to do this is to break large complex ideas into smaller
isolated ideas.

Here's several layers we're already familiar with:

* Database
* Models (represent data and data-transformations in the database)
* Modules (abstract away complex, common, or intensive operations)
* Server (handle requests)
* Front End (visual output)
* Front End (mouse and keyboard input)

# Stories, APIs, Work Estimates and Parallelization
An added benefit of compartmentalizing your application is it makes it easier
for developers to assign their work, make estimations and actually allow people
to work from different ends of a problem at once.

If you can agree on the input and output of different pieces of your software
then you can create mock data to use for your own part until someone actually
finished their other piece.

# Separate UI Presentation from Business Logic
One strategy that makes applications much easier to deal with is specifically
separating the UI layer from anything that deals with business logic.

Imagine building Tic-Tac-Toe, Chess or Where's Waldo as listed in the examples
above.

It's best to build one core "engine" that deals with all the business logic
of the app, and then the UI part of the application can send and receive
messages to that engine.

For example a Tic-Tac-Toe engine would looke like a class with these methods:

```js
class TicTacToeGame {
  currentPlayer()
  isGameOver()

  setBox(row, col)

  getState()
  getSymbolAt(row, col)
}
```

The game has methods that deliver us information like the current player, if
the game is over, and getting the whole state of the board.

Methods like `setBox(row, col)` don't require a parameter telling the engine
which player is placing the X or O because the engine tracks the current player
internally. Making more things happen internally makes it easier for us to
program the internal game "business logic" and makes it impossible for an
external program to force our application into a buggy state.

Furthermore, `setBox(row, col)` could have additional sanity checks inside
itself so it only ever really sets a box if someone hasn't played there
already. The end of `setBox` could trigger a check for victory conditions, all
automatically from the perspective of whoever is using the engine in their UI.

We could create a React component that imports this engine, renders the UI
based off `getBoard()` and wires up click handlers for methods like `setBox()`.

```js
import TicTacToeGame from './tic-tac-toe/engine.js';

class TicTacToe extends Component {
  constructor() {
    this.game = new TicTacToeGame();
    this.state = this.game.getState();
  }

  makeMove(row, col) {
    this.game.setBox(row, col);
    this.setState(this.game.getState);
  }

  render() {

    return (
      <div>
        {this.state.isGameOver && <h1>{this.state.winner} Wins!</h1>}

        <div>Current Player: {this.state.currentPlayer}</div>

        {this.state.board.map((row, rowi) => {
          return <div>
            {row.map((col, coli) => {
              return <span onClick={() => this.makeMove(rowi, coli)}>
                {col}
              </span>
            })}
          </div>;
        })}
      </div>
    );
  }
}
```

