const propsSelector = ({ app: { repos, repo, isLoading, logs } }) => ({
    repos,
    repo,
    isLoading,
    logs,
});

export default { propsSelector };
