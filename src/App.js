import React, { Component } from "react";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
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
    pickedFriends = [];


    shuffleFriends = (id) => {
        //evaluate for points
        if (this.pickedFriends.indexOf(id) >= 0) {
            this.score = 0;
            this.pickedFriends = [];
        } else {
            this.pickedFriends.push(id);
            this.score++;
        }

        console.log('score', this.score);
        console.log('pickedFriends', this.pickedFriends);

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
                <Title score={this.score}>Click On A uNiQuE Friend!</Title>
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
