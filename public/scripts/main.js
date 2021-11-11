function rtlToLtr() {
    const element = document.getElementsByClassName('learn-input')[0];
    element.onkeyup = (event) => {

        innerText = event.target.value;

        if ((innerText.length) == 0) {
            element.classList.remove('english-text')
            // element.style.padding = "2% 1% 2% 5%";
        } else {
            element.classList.add('english-text');
            // element.style.padding = "2% 5% 2% 1%";
        }
    }
}
rtlToLtr();


function minimizedNavButton(event){
    if(Array.from(event.target.classList)[1] == 'minimized-nav-button'){
        const minNav = $('.minimized-nav-container')[0];
        if(minNav.classList[1]){
    
        }
    
        minNav.classList.toggle('maximized');
    }
}