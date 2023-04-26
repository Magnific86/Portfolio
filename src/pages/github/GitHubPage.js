import { useEffect } from "react"
import { useState } from "react"
import GitHubCalendar from "react-github-calendar"
import RepoCard from "./RepoCard"
import "./githubpage.scss"

function GitHubPage() {
  const [data, setData] = useState(null)
  console.log("data: ", data)

  const getGithubStats = async () => {
    const userRes = await fetch(`https://api.github.com/users/${process.env.REACT_APP_GITHUB_USERNAME}`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
      },
    })
    const user = await userRes.json()

    if (user) {
      setData({ ...data, user: user })
    }

    const repoRes = await fetch(
      `https://api.github.com/users/${process.env.REACT_APP_GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY}`,
        },
      }
    )
    console.log("response from get stats", repoRes)
    let repos = await repoRes.json()
    if (repos && user) {
      setData({ user, repos })
    }
  }

  const isDesktop = document.body.clientWidth > 900

  useEffect(() => {
    getGithubStats()
  }, [])

  return (
    <div className="section__padding">
      <div className="main_gt_container">
        <div className="upper">
          <img
            className="my_gh_logo_image"
            src={data?.user?.avatar_url}
            alt={data?.user?.login}
            width={50}
            height={50}
          />
          <h3>{data?.user?.login}</h3>
          {isDesktop && (
            <>
              <p className="upper_divider">||</p>
              <h3>{data?.user?.public_repos} repos </h3>
              <p className="upper_divider">||</p>
              <h3>{data?.user?.followers} followers</h3>
            </>
          )}
        </div>
        <div className="repos_container">
          {data &&
            data?.repos?.length > 0 &&
            isDesktop &&
            data.repos.map((repo) => <RepoCard key={repo.id} repo={repo} />)}
          {data &&
            data?.repos?.length > 0 &&
            !isDesktop &&
            data.repos.slice(0, 3).map((repo) => <RepoCard key={repo.id} repo={repo} />)}
        </div>
        <div className="githib_calendar">
          <GitHubCalendar username={`Magnific86`} />
        </div>
      </div>
    </div>
  )
}

export default GitHubPage
