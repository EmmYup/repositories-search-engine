const propsSelector = ({ app: { repos, repo, isLoading } }) => ({
    repos,
    repo,
    isLoading,
});

export default { propsSelector };
