const arrowFn = () => {
    console.log('arrow')
}

function onMainClick(){
    console.log('мейн')
}

function onCardClick(){
    console.log('кард')
}

function onMaxBtnClick(){
    console.log('макс');
    arrowFn()
}

function onHseClick(){
    const HSE = document.querySelector('#Hse')
    HSE.style.color="red"
}
