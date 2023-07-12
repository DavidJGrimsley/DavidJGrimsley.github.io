const sections = document.querySelectorAll('.container');
const sectBtns = document.querySelectorAll('.controls');
const aboutBtn = document.querySelectorAll('.about-btn');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
PageTransitions();

// BioTransitions();

// function BioTransitions(){
//     //Button click active class
//     for(let i = 0; i < aboutBtn.length; i++){
//         aboutBtn[i].addEventListener('click', function(){
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//             this.className += ' active-btn';
//         })
//     }

//     //Sctions Active
//    allSections.addEventListener('click', (e) =>{
//     const id = e.target.dataset.id;
//     if(id){
//         //remove selected from the former button
//         sectBtns.forEach((btn) => {
//             btn.classList.remove('active')
//         })
//         e.target.classList.add('active')

//         //hide other sections
//         sections.forEach((section) =>{
//             section.classList.remove('active')
//         })

//         const element = document.getElementById(id);
//         element.classList.add('active');
//     }
// })
// }

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            console.log(sectBtn);
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

   //Sctions Active
   allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the former button
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) =>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
    let element = document.body;
    element.classList.toggle('light-mode')
    })
}

