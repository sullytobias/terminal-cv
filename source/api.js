import {projectsData} from './constants.js';

const allowedLinks = new Set(projectsData.map(p => p.link));

export const fetchRepos = async usernames => {
	const responses = await Promise.all(
		usernames.map(username =>
			fetch(`https://api.github.com/users/${username}/repos?per_page=100`)
				.then(res => {
					if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
					return res.json();
				})
				.catch(err => {
					console.error(`Error fetching repos for ${username}:`, err.message);
					return [];
				}),
		),
	);

	const matchedRepos = responses
		.flat()
		.filter(repo => allowedLinks.has(repo.html_url));

	const languages = await Promise.all(
		matchedRepos.map(repo =>
			fetch(repo.languages_url)
				.then(res => (res.ok ? res.json() : {}))
				.catch(() => ({})),
		),
	);

	return matchedRepos.map((repo, index) => ({
		name: repo.name,
		description: repo.description || '',
		link: repo.html_url,
		languages: Object.keys(languages[index] || {}),
	}));
};
