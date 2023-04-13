import { AboutPage } from './app/about-page.mjs'
import { HomePage } from './app/home-page.mjs'
import { ContactPage } from './app/contact-page.mjs'
import { ErrorPage } from './app/error-page.mjs'
import { ExpenseTracker } from './app/components/expenses-tracker.js' 

import { define } from './define.mjs'

define(
	/* PAGES */
	AboutPage,
	ContactPage,
	HomePage,
	ErrorPage,
	/* COMPONENTS */
	ExpenseTracker	
)

const root = '/expenses'

const routes = [
	{
		paths: ['', '/', '/home'],
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

export function loadRoute() {
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

export function loadRouteFromLink(event, link) {
		event.preventDefault()
        if (root) link = root + link
        history.pushState(null, null, link)
		loadRoute()
}

export class Router {

    constructor() {
        window.addEventListener('popstate', loadRoute)

        const navLinks = document.querySelectorAll('[data-link]')
        navLinks.forEach(a => { 
            a.addEventListener('click', () => {
                loadRouteFromLink(event, a.getAttribute('data-link')) 
            }) 
        })

        loadRoute()       
    }
}

// EXPORT CLASS ROUTER
new Router()




////////////////////////////////////


// resources in description
const mainTabs = document.querySelector(".main-tabs");
const mainSliderCircle = document.querySelector(".main-slider-circle");
const roundButtons = document.querySelectorAll(".round-button");

function colors(){
return ({
  blue: {
    50: {
      value: "#e3f2fd"
    },
    100: {
      value: "#bbdefb"
    }
  },
  green: {
    50: {
      value: "#e8f5e9"
    },
    100: {
      value: "#c8e6c9"
    }
  },
  purple: {
    50: {
      value: "#f3e5f5"
    },
    100: {
      value: "#e1bee7"
    }
  },
  orange: {
    50: {
      value: "#ffe0b2"
    },
    100: {
      value: "#ffe0b2"
    }
  },
  red: {
    50: {
      value: "#ffebee"
    },
    100: {
      value: "#ffcdd2"
    }
  }
});
}

function getColor(color, variant) {
  return colors()[color][variant].value;
};

function handleActiveTab(tabs, element, className) {
  tabs.forEach((tab) => {
    tab.classList.remove(className);
  });

  if (!element.classList.contains(className)) {
    element.classList.add(className);
  }
};

mainTabs.addEventListener("click", (event) => {
    console.log(event.target)
    selectTab(event.target)
});

export function selectTab(element) {
// resources in description
const mainTabs = document.querySelector(".main-tabs");
const mainSliderCircle = document.querySelector(".main-slider-circle");
const roundButtons = document.querySelectorAll(".round-button");

  if (typeof element === 'string') element = document.querySelector(`[data-link="${element}"]`)
  const root = document.documentElement;
  const targetColor = element.dataset.color;
  const targetTranslateValue = element.dataset.translateValue;

  if (element.classList.contains("round-button")) {
    mainSliderCircle.classList.remove("animate-jello");
    void mainSliderCircle.offsetWidth;
    mainSliderCircle.classList.add("animate-jello");

    root.style.setProperty("--translate-main-slider", targetTranslateValue);
    root.style.setProperty("--main-slider-color", getColor(targetColor, 50));
    root.style.setProperty("--background-color", getColor(targetColor, 100));

    handleActiveTab(roundButtons, element, "active");

    if (!element.classList.contains("gallery")) {
      root.style.setProperty("--filters-container-height", "0");
      root.style.setProperty("--filters-wrapper-opacity", "0");
    } else {
      root.style.setProperty("--filters-container-height", "3.8rem");
      root.style.setProperty("--filters-wrapper-opacity", "1");
    }
  }
}

const filterTabs = document.querySelector(".filter-tabs");
const filterButtons = document.querySelectorAll(".filter-button");

filterTabs.addEventListener("click", (event) => {
  const root = document.documentElement;
  const targetTranslateValue = event.target.dataset.translateValue;

  if (event.target.classList.contains("filter-button")) {
    root.style.setProperty("--translate-filters-slider", targetTranslateValue);
    handleActiveTab(filterButtons, event, "filter-active");
  }
});


