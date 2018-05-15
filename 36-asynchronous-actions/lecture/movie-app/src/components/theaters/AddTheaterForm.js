import React from 'react';

class AddTheaterForm extends React.Component {
  render() {
      return <div className="add-theater-form">
        <h1>Movie Showtimes</h1>
        <form>
          <input name="theater" type="text" placeholder="theater Name" />
          <input type="submit" placeholder="add theater" />
        </form>
      </div>
  }
}

export default AddTheaterForm;