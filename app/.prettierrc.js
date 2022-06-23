module.exports = {
  overrides: [
    {
      files: '**/*.js',
      options: {
        semi: true,
        singleQuote: true,
      },
    },
    {
      files: '**/*.yaml',
      options: {
        singleQuote: true,
      },
    },
  ],
};
