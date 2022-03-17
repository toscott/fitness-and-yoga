function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function dynamicallyBuildNavigation(activePage) {

    var links = ["about"]
    let navigationHTML = ""
    let homeListClass = ""
    if (activePage === "home") {
        homeListClass = "active"
    }
    navigationHTML += `
        <li id="home-link" class="${homeListClass}">
            <a href="./" class="nav-link px-2 ">Home</a>
        </li>
    `
    for (let i=0; i < links.length; i++) {
        let linkName = links[i]
        let linkDisplay = capitalizeFirstLetter(linkName)
        let liClass = ""
        if (activePage === linkName) {
            liClass = "active"
        }
        navigationHTML += `
            <li id="${linkName}-link" class=${liClass}>
                <a href="${linkName}.html" class="nav-link px-2">${linkDisplay}</a>
            </li>
        `
    }
    return navigationHTML
}

class FitnessHeader extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    var activePage = this.attributes.activePage.value
    let navigationHTML = dynamicallyBuildNavigation(activePage)
    this.innerHTML = `
    <header class="p-3 header">
        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-6 text-center site-title">
                    <h4 class="align-middle">Fitness Stuffs</h4>
                </div>
                <div class="col-xs-12 col-md-6 text-center navigation">
                    <ul class="nav mb-2 mb-md-0 text-center">
                        ${navigationHTML}
                    </ul>
                </div>
            </div>
        </div>
    </header>
    `
  }
}

customElements.define('fitness-header-component', FitnessHeader);