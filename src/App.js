import React, { Component } from "react";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from "./components/Wrapper/Wrapper";
import Title from "./components/Title/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
    // Setting this.state.friends to the friends json array
    //state is a property that is an object 
    //properties of a class, do not need a let or var
    state = {
        friends,
        score: 0,
        pickedFriends: []

    };

    shuffleFriends = (id) => {

        //evaluate for points
        console.log('indexOf', this.state.pickedFriends.indexOf(id));

        if (this.state.pickedFriends.indexOf(id) >= 0) {

            //state also needed a frickin' callback!
            this.setState({
                score: 0,
                pickedFriends: []
            }, () => {
                console.log('ID duplicate:', id);
                console.log('reset score', this.state.score);
                console.log('reset picked', this.state.pickedFriends);
            });

        } else {
            //values inside array can be changed, but array still considered immutable
            this.state.pickedFriends.push(id);
            this.setState({
                score: this.state.score + 1
            }, () => {
                console.log('ID PASSED-UNIQUE:', id);
                console.log('score', this.state.score);
                console.log('pickedFriends', this.state.pickedFriends);
            });
        }
    
        //shuffle friends
        const friends = this.state.friends.sort( (a, b) => {
            return 0.5 - Math.random();
        });
        this.setState({ friends });
        console.log('friendsList', this.state.friends);
    };




    // Map over this.state.friends and render a FriendCard component for each friend object
    render() {
        return (
            <Wrapper>
                <Title score={this.state.score}>Click On A uNiQuE Friend!</Title>
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
