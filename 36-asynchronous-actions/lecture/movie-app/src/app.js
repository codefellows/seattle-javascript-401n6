import React from 'react';
import ReactDOM from 'react-dom';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';

// const store = createStore(
//   reducers
// )

class App extends React.Component {
  render() {
    return <React.Fragment>
      <div class="add-theater-form">
        <h1>Movie Showtimes</h1>
        <form>
          <input name="theater" type="text" placeholder="theater Name" />
          <input type="submit" placeholder="add theater" />
        </form>
      </div>
      <div class="theater-schedule">
        <h1>AMC</h1>
        <h2>Opens at: 7:30</h2>
        <form>
          <input name="showtime-hour" type="text" placeholder="7" />
          <span>:</span>
          <input name="showtime-minute" type="text" placeholder="30" />
          <input name="movie" type="text" placeholder="The Hobbit" />
          <input type="submit" placeholder="add movie" />
        </form>
        <ul>
          <li>(7:30) The Hobbit</li>
          <li>(9:30) Sound of Music</li>
          <li>(11:30) Westside Story</li>
        </ul>
      </div>
      <div class="theater-schedule">
        <h1>Regal</h1>
        <form>
          <input name="showtime-hour" type="text" placeholder="7" />
          <span>:</span>
          <input name="showtime-minute" type="text" placeholder="30" />
          <input name="movie" type="text" placeholder="The Hobbit" />
          <input type="submit" placeholder="add movie" />
        </form>
        <ul>
          <li>Full Metal Jacket</li>
          <li>Little Shop of Horrors</li>
        </ul>
      </div>
    </React.Fragment>
  }
}

let root = document.getElementById('root');
ReactDOM.render(<App />, root);