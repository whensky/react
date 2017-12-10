import React from 'react';

class NumberRow extends React.Component {
    renderP(text, i){
        return <p key={i}>{text}</p>;
    }

    render() {
        const content = this.props.detail.map( (a, i)=>this.renderP(a, i) );

        return (
            <div className="row row-wayne">
                <div className="col-sm-3">
                    <p className="text-primary">{this.props.title}</p>
                </div>
                <div className="col-sm-9">
                    {content}
                </div>
            </div>
        );
    }
}

export default NumberRow;
