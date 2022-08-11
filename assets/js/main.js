/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, {delay: 400})
sr.reveal(`.profile__profession`, {delay: 500})
sr.reveal(`.profile__social`, {delay: 600})
sr.reveal(`.profile__info-group`, {interval: 100, delay: 600})
sr.reveal(`.profile__buttons`, {delay: 700})
sr.reveal(`.filters__content`, {delay: 700})
sr.reveal(`.filters`, {delay: 800})


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// const findMyState = () => {
//     const status = document.querySelector('.status');

//     const success = (position) => {
//         console.log(position)
//         const latitude = position.coords.latitude;
//         const longitude = position.coords.longitude;
//         // console.log(latitude + ' ' + longitude)

//         const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
    
//         fetch(geoApiUrl)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//             status.textContent = data.countryName
//             // status.textContent = data.continentCode
//         })
    
//     }

//     const error = () => {
//         status.textContent = 'Unable to retrive your location';
//     }

//     navigator.geolocation.getCurrentPosition(success, error);
// }

// document.querySelector('.find-state').addEventListener('click', findMyState);