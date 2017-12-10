import React from 'react';

import JsonData from './Resume.json';


class ResumeJson extends React.Component{
    render() {
        const data = JSON.stringify(JsonData);

        return (
                <div className="container">
                    {data}
                </div>
        );
    }
}

export default ResumeJson;
