const APIURL = "https://api.github.com/users/";

// Task 1: Reference the HTML elements with their respective IDs (main, form and search)
let formRef = document.getElementById("form");
let searchRef = document.getElementById("search");
let mainRef = document.getElementById("main");

initUserCard();
//let the mainRef which is the user interface have the things in carHTML by using .innerHTML//
function initUserCard() {
    let cardHTML = `
        <div class="card">
            <h2>Please type a Github username</h2>
        </div>
    `;
    mainRef.innerHTML = cardHTML;
}

async function getUser(username) {
    try {
        // Task 2: Use fetch API to fetch github user data. The URL format is APIURL + username
        let response = await fetch(APIURL + username);
        let data = await response.json();
        //if  success found user then creatUserCard
        createUserCard(data);
        getRepos(username);
    } catch (err) {
        //if cannot find user then createErrorCard
        if (err.response.status == 404) {
            createErrorCard("No profile with this username");
        }
    }
}

async function getRepos(username) {
    try {
        // Task 3: Use fetch API to fetch github user repo.
        // The URL format is APIURL + username + '/repos?sort=created'
        let response = await fetch(APIURL + username + "/repos?sort=created");
        let data = await response.json();

        addReposToCard(data);
    } catch (err) {
        createErrorCard("Problem fetching repos");
    }
}

function createUserCard(user) {
    // || = OR operator
    let userID = user.name || user.login;
    // tenary operator
    let userBio = user.bio ? `<p>${user.bio}</p>` : "";

    /*
      Task 4: Inject user avatar_url, user name, user ID, user bio, 
      user followers, user following, user public repos to the template literals below
    */
    //can inject the content in HTML dynamically for cardHTML
    let cardHTML = `
    <div class="card">
    <div>       
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar"> 
    </div>
    <div class="user-info">
      <h2>${userID}</h2>
      ${userBio}
      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.follownig} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `;
    mainRef.innerHTML = cardHTML;
}
// can use let cardHTML instead of const, but just for the code readibility where the cardHTML will not change after that so is better to put const
function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

    mainRef.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    let reposRef = document.getElementById("repos");

    repos.slice(0, 5).forEach((repo) => {
        let repoEl = document.createElement("a");
        repoEl.classList.add("repo");
        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerText = repo.name;

        reposRef.appendChild(repoEl);
    });
}
//submit is an event type there are more like click, dbclick
//.preventDefault to prevent the form from refreshing since when submit the page will refresh
formRef.addEventListener("submit", (e) => {
    e.preventDefault();

    let user = searchRef.value;

    if (user) {
        getUser(user);

        searchRef.value = "";
    }
});
