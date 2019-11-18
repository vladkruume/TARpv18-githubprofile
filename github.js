class GitHub {
    constructor(){
        this.client_id = '211f2e7a0865253d92cd';
        this.client_secret = '41e3e1bb0ea1769735618ae8e513777e49d3e336';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
        this.user = 'vladkruume';
    }

    //get a user info

    async getUserData(){
        //``` - backticks
        let urlProfile = `https://api.github.com/users/${this.user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
        let urlRepos = `https://api.github.com/users/${this.user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;

        const profileResponse = await fetch(urlProfile);
        const reposResponse = await fetch(urlRepos);

        const profile = await profileResponse.json();
        const repo =await reposResponse.json();

        return{
            profile,
            repo
        }

    }

}

