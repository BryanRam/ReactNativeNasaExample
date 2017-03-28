import React, { Component } from 'react';
import { AppRegistry, 
         Navigator, 
         Text, 
         TouchableHighlight,
         Stylesheet,
         View } from 'react-native';

import api from './utilities/api'; //location of file where API connection is made

class APIExample extends Component {
constructor(props){
  super(props);
  this.state = {
    rovers: [],
    roverID: '',
    roverName: ''
  }
}

 componentWillMount(){
   
   api.getRovers().then((res) => { 
     this.setState({
       //store result data in rovers and roverName states
       rovers:res.rovers, 
       roverName: res.rovers[0].name
     })
   });
 } 

 WholeList() {
  return this.state.rovers.map(function(rovers,i){
    return(
      <View key={i}>
        <Text>{rovers.name}</Text>
        <View>
          <Text>{rovers.id}</Text>
        </View>
      </View>
    );
  });
}

      render() {
        console.log("Rovers: ", this.state.rovers);

        return (
          <View /*style={styles.container}*/>
            <Text /*style={styles.welcome}*/>
              Rovers!
            </Text>
            <Text /*style={styles.instructions}*/>
            Name of a Rover in the NASA API: {this.state.roverName}
            </Text>
            {this.WholeList()}
          </View>
        );
      }
}



// App registration and rendering
AppRegistry.registerComponent('NasaProject', () => APIExample);