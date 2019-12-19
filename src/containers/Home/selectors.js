const propsSelector = ({ app: { repos, repo, logs } }) => ({
    repos,
    repo,
    logs,
});

export default { propsSelector };
