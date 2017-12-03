import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
    // Setting this.state.friends to the friends json array
    //state is a property that is an object 
    state = {
        friends
    };

    //properties of a class, do not need a let or var
    score = 0;
    previousFriendId = 0;

    shuffleFriends = (id) => {
        //evaluate for points
        if (id === this.previousFriendId) {
            this.score--;
        } else {
            this.score++;
        }

        this.previousFriendId = id;
        console.log('score', this.score);

        //shuffle friends
        const friends = this.state.friends.sort(function () {
            return Math.random();
        });
        this.setState({ friends });
    };


    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return (
            <Wrapper>
                <Title>Friends List</Title>
                {this.state.friends.map(friend => (
                    <FriendCard           
                        shuffleFriends={this.shuffleFriends}
                        id={friend.id}
                        key={friend.id}
                        name={friend.name}
                        image={friend.image}
                        occupation={friend.occupation}
                        location={friend.location}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default App;
