import React from 'react';

import 'bootstrap-css-only';
import './Wayne.css';
import JsonData from './Resume.json';

import Rows from './Rows';

class Resume extends React.Component{
    componentDidMount() {
        const jsSource = [
            'function actDragStart(a){var b=this.cloneNode(!0);b.style.display="none";document.body.appendChild(b);a.dataTransfer.setDragImage(b,0,0)}',
            'function actMousedown(a){for(var b,d,c=a.target;!c.classList.contains("row-wayne");)c=c.parentNode;b=c.offsetHeight;translateXSize=c.offsetWidth;d=document.createElement("div");d.classList.add("row","row-wayne","js-temp");d.style.height=b.toString()+"px";c.parentNode.insertBefore(d,c);c.classList.add("action-drag");c.style.width=translateXSize.toString()+"px";c.style.transform="translateY( "+(5-b).toString()+"px )";c.setAttribute("eventTranslate",5-b);c.setAttribute("eventOffset",window.pageYOffset);',
            'c.setAttribute("eventY",a.screenY);window.myDragDOM=c}function translateDrag(a){a=parseInt(window.myDragDOM.getAttribute("eventTranslate"))+window.pageYOffset+a.screenY-parseInt(window.myDragDOM.getAttribute("eventOffset"))-parseInt(window.myDragDOM.getAttribute("eventY"));window.myDragDOM.style.transform="translateY( "+a.toString()+"px )"}',
            'function actDrop(a){a.preventDefault();var b=document.querySelector(".js-temp");var d=window.myDragDOM.getBoundingClientRect().top;document.querySelectorAll(".container-wayne .row-wayne").forEach(function(a){a!==window.myDragDOM&&a.getBoundingClientRect().top<d&&(b=a)});b.parentNode.insertBefore(window.myDragDOM,b);resetDragStatus()}function actMouseup(){window.myDragDOM&&resetDragStatus()}',
            'function actDragend(){if(window.myDragDOM){var a=document.querySelector(".js-temp");a.parentNode.insertBefore(window.myDragDOM,a);resetDragStatus()}}function resetDragStatus(){window.myDragDOM.classList.remove("action-drag");window.myDragDOM.style.transform=null;window.myDragDOM.style.width=null;window.myDragDOM=null;removeTempRow()}function removeTempRow(){document.querySelectorAll(".js-temp").forEach(function(a){a.parentNode.removeChild(a)})}',
            'function hideAssistant(){var a=document.getElementById("assistant"),b=parseInt(a.getAttribute("time"));250<window.scrollY||6<b?a.style.display="none":(a.setAttribute("time",b+1),setTimeout(hideAssistant,1E3))}',
            'document.querySelectorAll(".row-wayne").forEach(function(a){a.addEventListener("mousedown",actMousedown);a.addEventListener("mouseup",actMouseup);a.addEventListener("dragstart",actDragStart);a.addEventListener("drag",translateDrag);a.addEventListener("dragover",function(a){a.preventDefault()});a.addEventListener("drop",actDrop);a.addEventListener("dragend",actDragend)});window.addEventListener("mouseup",removeTempRow);window.addEventListener("mouseup",actMouseup);setTimeout(hideAssistant,1E3);'
        ];
        const s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = jsSource.join("\n");

        document.body.appendChild(s);
    }

    render() {
        const data = JsonData;
        const arrow = '-->';


        return (
                <div className="container">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-10 container-wayne">
                        <div className="col-lg-1">
                        </div>
                        <div className="col-lg-10">
                            <div className="row page-header">
                                <h1>zi-kuan yang</h1>
                                <p className="text-primary">WEB DEVELOPER</p>
                                <div className="blog-description">yang19930315@gmail.com</div>
                                <div className="blog-description">(097) 284-9637</div>
                            </div>
                            <Rows key={"rows"} data={data} />
                        </div>
                    </div>
                    <div id="assistant" className="assistant" time="0">
                        {arrow}<br/>
                        drag<br/>
                        rows<br/>
                        <span>(desktop only)</span>
                    </div>
                </div>
        );
    }
}

export default Resume;
