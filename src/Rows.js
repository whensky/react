import React from 'react';
// import WordRow from './WordRow';
// import NumberRow from './NumberRow';
import Detail from './Detail';

class Rows extends React.Component {
    render() {
        var 
            rows = [],
            a;

        for (a in this.props.data){
            rows.push(<Detail key={a} title={a} detail={this.props.data[a]} />);
        }

        return rows;
    }
}

export default Rows;
