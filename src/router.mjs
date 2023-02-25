import { AboutPage } from './app/about-page.mjs'
import { HomePage } from './app/home-page.mjs'
import { ContactPage } from './app/contact-page.mjs'

import { define } from './define.mjs'

define(
    AboutPage, 
    ContactPage, 
    HomePage
)

  function loadRoute() {
    const path = window.location.pathname
    console.log(path.slice(1))
    const page = `app-${path === '/' ? 'home' : path.slice(1)}`
    const main = document.querySelector('main')
    main.innerHTML = `<${page}></${page}>`
  }

  window.addEventListener('popstate', loadRoute)

  const navLinks = document.querySelectorAll('header nav a')
  navLinks.forEach(a => {
    a.addEventListener('click', event => {
      event.preventDefault()
      history.pushState(null, null, a.href)
      loadRoute()
    })
  })

  loadRoute()