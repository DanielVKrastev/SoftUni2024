function loadRepos() {
	const reposUI = document.getElementById('repos');
	const username = document.getElementById('username').value;

	let url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then(response => response.json())
		.then(repos => {
			reposUI.innerHTML = '';

			repos.forEach(repo => {
				const a = document.createElement('a');
				a.href = repo.html_url;
				a.textContent = repo.full_name;

				const li = document.createElement('li');
				li.appendChild(a);

				reposUI.appendChild(li);
			});
		})
		.catch(err => console.log(err));

}