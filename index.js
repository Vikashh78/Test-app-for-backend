// Importing the Express library
const express = require('express')
require('dotenv').config()

// Creating an Express application
const app = express()

// Defining the port number on which the server will run (free port)
const port = 4000

const gitHubData = {
  "login": "Vikashh78",
  "id": 149145866,
  "node_id": "U_kgDOCOPJCg",
  "avatar_url": "https://avatars.githubusercontent.com/u/149145866?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Vikashh78",
  "html_url": "https://github.com/Vikashh78",
  "followers_url": "https://api.github.com/users/Vikashh78/followers",
  "following_url": "https://api.github.com/users/Vikashh78/following{/other_user}",
  "gists_url": "https://api.github.com/users/Vikashh78/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Vikashh78/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Vikashh78/subscriptions",
  "organizations_url": "https://api.github.com/users/Vikashh78/orgs",
  "repos_url": "https://api.github.com/users/Vikashh78/repos",
  "events_url": "https://api.github.com/users/Vikashh78/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Vikashh78/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Vikash Sharma",
  "company": null,
  "blog": "",
  "location": "Delhi-NCR, Greater Noida 201310",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2023-10-27T07:23:09Z",
  "updated_at": "2025-11-23T10:00:54Z"
}


// Defining the first route → GET request on '/'
// When someone visits http://localhost:4000/
// this callback function runs
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/insta', (req, res) => {
    res.send('srma.vikash')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/githubData', (req, res) => {
    res.json(gitHubData)
})

// Starting the server on the given port
// When server starts, this function runs
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
