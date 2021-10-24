// variaveis: let ou const
const LinksSocialMedia = {
  github: 'Rodrigo-Leite',
  youtube: 'UC4SsI1yUYoqMEUXmf-aQbag',
  facebook: 'RodrigoBalestriLeite01',
  instagram: 'rod._.bl',
  twitter: 'Rodrigo22936629'
}
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      //userName.textContent = data.name
      //userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
