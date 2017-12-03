import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
    // Setting this.state.friends to the friends json array
    state = {
        friends
    };

    shuffleFriends = id => {

        const friends = this.state.friends.sort(function () {
            return .5 - Math.random();
        });
        this.setState({ friends });
    };


    matchFriend = id => {
        //let firstFriendId;
        //let nextFriendId = this.pro.id;
        //let score = 0;

        //if (nextFriendId === firstFriendId) {
        //    score--
        //} else {
        //    score++
        //}

        //nextFriendId = firstFriendId;
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
