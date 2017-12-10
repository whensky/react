function actDragStart(e){
    var temp = this.cloneNode(true);
    temp.style.display = "none";
    document.body.appendChild(temp);
    e.dataTransfer.setDragImage(temp, 0, 0);
}

function actMousedown(e){
    var translateYSize,divTemp,target = e.target;

    while( !target.classList.contains('row-wayne') ){
        target = target.parentNode;
    }
    
    translateYSize = target.offsetHeight;
    translateXSize = target.offsetWidth;
    divTemp = document.createElement('div');
    divTemp.classList.add('row', 'row-wayne', 'js-temp');
    divTemp.style.height = translateYSize.toString() + 'px';
    target.parentNode.insertBefore(divTemp, target);

    target.classList.add('action-drag');
    target.style.width = translateXSize.toString()+'px';
    target.style.transform = 'translateY( '+(5-translateYSize).toString()+'px )';

    target.setAttribute('eventTranslate', (5-translateYSize));
    target.setAttribute('eventOffset', window.pageYOffset);
    target.setAttribute('eventY', e.screenY);

    window.myDragDOM = target;
};

function translateDrag(e){
    var translateY = 
        parseInt(window.myDragDOM.getAttribute('eventTranslate')) +
        window.pageYOffset + e.screenY -
        parseInt(window.myDragDOM.getAttribute('eventOffset')) -
        parseInt(window.myDragDOM.getAttribute('eventY'))

    window.myDragDOM.style.transform = 'translateY( '+translateY.toString()+'px )';
}

function actDrop(e){
    e.preventDefault();
    var targetTop,gotoTarget = document.querySelector('.js-temp');

    targetTop = window.myDragDOM.getBoundingClientRect().top;
    document.querySelectorAll('.container-wayne .row-wayne').forEach(function(item){
        if( item !== window.myDragDOM && item.getBoundingClientRect().top < targetTop ){
            gotoTarget = item;
        }
    });
    gotoTarget.parentNode.insertBefore(window.myDragDOM, gotoTarget);

    resetDragStatus();
}

function actMouseup(){
    if(window.myDragDOM){
        resetDragStatus();
    }
}

function actDragend(){
    if(window.myDragDOM){
        var gotoTarget = document.querySelector('.js-temp');
        gotoTarget.parentNode.insertBefore(window.myDragDOM, gotoTarget);
        resetDragStatus();
    }
}

function resetDragStatus(){
    window.myDragDOM.classList.remove('action-drag');
    window.myDragDOM.style.transform = null;
    window.myDragDOM.style.width = null;
    window.myDragDOM = null;
    removeTempRow();
}

function removeTempRow(){
    document.querySelectorAll('.js-temp').forEach(function(item){
        item.parentNode.removeChild(item);
    });
}

function hideAssistant(){
    var 
        target = document.getElementById('assistant'),
        timePass = parseInt(target.getAttribute('time'));
    if( window.scrollY > 250 || timePass > 6 ){
        target.style.display = "none";
    }else{
        target.setAttribute( 'time', (timePass + 1) );
        setTimeout(hideAssistant, 1000);
    }
}

document.querySelectorAll('.row-wayne').forEach(function(item){
    item.addEventListener('mousedown', actMousedown);
    item.addEventListener('mouseup', actMouseup);
    item.addEventListener('dragstart', actDragStart);
    item.addEventListener('drag', translateDrag);
    item.addEventListener('dragover', function(e){e.preventDefault();});
    item.addEventListener('drop', actDrop);
    item.addEventListener('dragend', actDragend);
});

window.addEventListener('mouseup', removeTempRow);
window.addEventListener('mouseup', actMouseup);
setTimeout(hideAssistant, 1000);
