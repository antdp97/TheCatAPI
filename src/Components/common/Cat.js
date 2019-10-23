import React from "react";
import axios from "axios";
import BounceIn from "../animations/BounceIn";
export default class Cat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAdded: false
    };
    this.addToFavorite = this.addToFavorite.bind(this);
  }

  componentWillUpdate() {
    if (this.state.isAdded === true) {
      this.setState({
        isAdded: false
      });
    }
  }

  addToFavorite() {
    const apikey = "d3b46a82-a072-4b3a-8871-cef4ba075e36";
    const options = {
      headers: { "x-api-key": apikey }
      // Content-Type: 'application/json'
    };

    axios
      .post(
        `https://api.thecatapi.com/v1/favourites`,
        {
          image_id: this.props.animal.id,
          sub_id: apikey
        },
        options
      )
      .then(res => {
        this.setState({
          isAdded: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { url } = this.props.animal;

    return (
      <div className="text-center" style={{ paddingBottom: 30 }}>
        <BounceIn>
          <div style={{ padding: "10px 15px 10px 15px" }}>
            <img
              src={url}
              style={{ width: 225, height: 225 }}
              alt="cute cat"
              className="rounded-circle img-thumbnail"
            />
          </div>
        </BounceIn>
        {this.state.isAdded === false ? (
          <button className="btn btn-info" onClick={this.addToFavorite}>
            Add to Favourites
          </button>
        ) : (
          <button className="btn btn-info" disabled>
            Added
          </button>
        )}
      </div>
    );
  }
}
