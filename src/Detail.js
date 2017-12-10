import React from 'react';

class Detail extends React.Component {
    renderNormal(text, i){
        return <p key={i}>{text}</p>;
    }

    renderPercent(data, i){
        const percent = data.data * 20;

        return (
            <div className="row" key={i}>
                <p className="col-lg-2">{data.title}</p>
                <div className="col-lg-7">
                    <div className="progress">
                        <div className="progress">
                            <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100" style={{width: percent + '%'}}>
                                <span className="sr-only">{percent}%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderObj(text, i){
        if( i === 0 ){
            return <div className="org-wayne" key={i}>{text}</div>;
        }else if( i === 1 ){
            return <div className="department-wayne" key={i}>{text}</div>;
        }else if( i === 2 ){
            return <div key={i}>{text}</div>;
        }else if( i === 3 ){
            return <p className="period-wayne" key={i}>{text}</p>;
        }else{
            return <p className="period-wayne" key={i}>{text}</p>;
        }
    }

    getFunctionName(){
        if(this.props.detail.type === 'obj'){
            return 'renderObj';
        }else if(this.props.detail.type === 'percent'){
            return 'renderPercent';
        }else{
            return 'renderNormal';
        }
    }

    render() {
        const functionName = this.getFunctionName();
        const content = this.props.detail.data.map( (a, i)=>this[functionName](a, i) );

        return (
            <div className="row row-wayne" id={'detail-'+this.props.title} draggable="true">
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

export default Detail;
