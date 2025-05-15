require('dotenv').config()

const express = require('express')

const app=express()

const port = 3000

const githubdata = {
  "login": "Rish6392",
  "id": 157781810,
  "node_id": "U_kgDOCWePMg",
  "avatar_url": "https://avatars.githubusercontent.com/u/157781810?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Rish6392",
  "html_url": "https://github.com/Rish6392",
  "followers_url": "https://api.github.com/users/Rish6392/followers",
  "following_url": "https://api.github.com/users/Rish6392/following{/other_user}",
  "gists_url": "https://api.github.com/users/Rish6392/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Rish6392/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Rish6392/subscriptions",
  "organizations_url": "https://api.github.com/users/Rish6392/orgs",
  "repos_url": "https://api.github.com/users/Rish6392/repos",
  "events_url": "https://api.github.com/users/Rish6392/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Rish6392/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Rishabh Kumar ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "IIIT BH'27(CSE)",
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 3,
  "following": 5,
  "created_at": "2024-01-26T05:50:43Z",
  "updated_at": "2025-05-14T11:51:25Z"
}

app.get('/github',(req,res)=>{
     res.json(githubdata)
})

app.get('/',(req,res)=>{
    res.send('Hello World')
})



app.get('/twitter',(req,res)=>{
    res.send('rishabhtwitter')
})

app.get('/login',(req,res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube',(req,res)=>{
   res.send('<h2> Chai aur code </h2>')
})

app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})