import React from 'react';
import {Text} from'react-native';

class Judul extends React.Component{
	render(){
		return (
			<Text style={styles.judul}>
		{this.props.title}</Text>
	
		);
	}
}

const styles = {
	judul: {
		color:'black',
		fontSize:40,
		backgroundColor:'grey',
		textAlign:'center'
	}
}

export default Judul;