export const githubFetchOptionsOverride = (options) => {
  options.url = 'https://api.github.com/graphql';
  options.headers.Authorization = `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`;
};

export const countriesFetchOptionsOverride = (options) => {
  options.url = 'https://countries.trevorblades.com';
};

export const blogFetchOptionsOverride = (options) => {
  options.url = 'http://localhost:4000/graphql';
};