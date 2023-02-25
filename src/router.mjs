import { AboutPage } from './app/about-page.mjs'
import { HomePage } from './app/home-page.mjs'
import { ContactPage } from './app/contact-page.mjs'
import { ErrorPage } from './app/error-page.mjs'

import { define } from './define.mjs'

define(
  AboutPage,
  ContactPage,
  HomePage
)

const root = '/app'

const routes = [
  {
    paths: ['/', '/home'],
    load: HomePage
  },
  {
    paths: ['/about', '/sobre'],
    load: AboutPage
  },
  {
    path: '/contact',
    load: ContactPage
  }
]

function loadRoute() {
  let path = window.location.pathname
  if (root) path = path.replace(root, '')

  const Page = routes.find(
      r =>
        (r.paths && r.paths.includes(path)) ||
        r.path === path
    )?.load || ErrorPage

  const main = document.querySelector('main')
  if (main.firstChild) main.firstChild.replaceWith(new Page())
  else main.appendChild(new Page())
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