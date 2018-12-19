// const label_brands = document.querySelector('.brand_label')
// const header_container = document.querySelector('.header_container')

// label_brands.addEventListener('mouseup', () => {
//     TweenLite.to(window, 1.4, {scrollTo:"#brand"});
// })

const brands = document.querySelector('.second_section')
console.log(brands);


const jesuis = document.getElementById('jesuis')

const search = document.getElementById('jrecherche')

const oui = search.options[1]
console.log(oui);
    


search.addEventListener('click', () => {
    console.log('oui');
    
    if (brands.classList.contains('displayed')) {
        brands.classList.remove('displayed')      
    } else {
        brands.classList.add('displayed')
    }
})