// window.onload = (event) => {
//     console.log("page is fully loaded");
// };

// document.addEventListener('click', function(e) {
//     e = e || window.event;
//     var target = e.target || e.srcElement,
//         text = target.textContent || target.innerText;
//     if(target.classList.contains('nav-link')){
//         const navLink = document.querySelectorAll('.nav-link');
//         const contentTab = document.querySelectorAll('.content-tab');
//         navLink.forEach( nav => {
//             nav.classList.remove('active');
//         })
//         target.classList.add('active');

//         contentTab.forEach( tab => {
//             tab.classList.remove('active');
//         })
//     }
//     console.log(target.getAttribute('data-tab'))
    
// }, false);