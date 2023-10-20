function changeColor() {
    if (document.firstElementChild.getAttribute("data-bs-theme") === "dark") {

        document.firstElementChild.setAttribute("data-bs-theme", "");
        document.querySelector("#header").firstElementChild.setAttribute("class", "container border-bottom fixed-top bg-light")
        document.querySelector("#header #ChangeCollorButton").firstElementChild.setAttribute("class", "form-check-input bg-light opacity-75")
        document.querySelector("#GitHub-Infos #GitHub-Status").setAttribute("src", "https://github-readme-stats.vercel.app/api?username=douglimaonline&hide=contribs&show_icons=true&theme=transparent&hide_border=true&title_color=000000&hide_rank=true&custom_title=Estatísticas do GitHub&card_width=320&locale=pt-br")
        document.querySelector("#GitHub-Infos #GitHub-Lenguages").setAttribute("src", "https://github-readme-stats.vercel.app/api/top-langs/?username=douglimaonline&layout=donut&theme=transparent&hide_border=true&title_color=000000&include_all_commits=true&langs_count=7&custom_title=Linguagens mais usadas&hide=Rich+Text+Format,html")


    } else {

        document.firstElementChild.setAttribute("data-bs-theme", "dark");
        document.querySelector("#header").firstElementChild.setAttribute("class", "container border-bottom fixed-top bg-dark")
        document.querySelector("#header #ChangeCollorButton").firstElementChild.setAttribute("class", "form-check-input bg-dark opacity-75")
        document.querySelector("#GitHub-Infos #GitHub-Status").setAttribute("src", "https://github-readme-stats.vercel.app/api?username=douglimaonline&hide=contribs&show_icons=true&theme=transparent&hide_border=true&title_color=FFFFFF&hide_rank=true&custom_title=Estatísticas do GitHub&card_width=320&locale=pt-br")
        document.querySelector("#GitHub-Infos #GitHub-Lenguages").setAttribute("src", "https://github-readme-stats.vercel.app/api/top-langs/?username=douglimaonline&layout=donut&theme=transparent&hide_border=true&title_color=FFFFFF&include_all_commits=true&langs_count=7&custom_title=Linguagens mais usadas&hide=Rich+Text+Format,html")
    }

}

if (window.innerWidth >= 992) {
    document.querySelector("#header #ChangeCollorButton").setAttribute("class", "form-switch  align-self-center")
}

document.querySelector("#ChangeCollorButton").onclick = changeColor;
