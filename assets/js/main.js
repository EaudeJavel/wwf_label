const brands = document.querySelector('.second_section')

const jesuis = document.getElementById('jesuis')

const search = document.getElementById('jrecherche')

const oui = search.options[1]

const home = document.querySelector('.home_container')

const bg = document.querySelector('.bg')



search.addEventListener('click', () => {
    console.log('oui');

    if (brands.classList.contains('displayed')) {
        brands.classList.remove('displayed')
        TweenLite.to(window, 1.4, {
            scrollTo: "#test"
        })
    } else {
        brands.classList.add('displayed')
        TweenLite.to(window, 1.4, {
            scrollTo: "#test"
        })
    }
})


const popin = document.querySelector('.popin_container')

const blocks = document.querySelectorAll('.bloc')

for (block of blocks) {
    block.addEventListener('click', () => {
        popin.classList.add("displayedF")
        bg.classList.toggle('displayed')

        if (popin.classList.contains = 'displayedF') {

            const cross = document.querySelector('.cross')

            cross.addEventListener('click', () => {
                popin.classList.remove('displayedF')
                bg.classList.remove('displayed')
            })
        }
    })
}