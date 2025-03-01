export default {
  semi: true, // Add semicolons at the end of statements
  singleQuote: true, // Use single quotes instead of double quotes
  trailingComma: 'all', // Add trailing commas where valid in ES5 (objects, arrays, etc.)
  printWidth: 100, // Wrap lines at 100 characters
  tabWidth: 2, // Use 2 spaces per indentation level
  useTabs: false, // Use spaces instead of tabs
  arrowParens: 'always', // Always include parentheses in arrow functions
  bracketSpacing: true, // Print spaces between brackets in object literals
  jsxBracketSameLine: false, // Put the closing bracket of JSX tags on a new line
  endOfLine: 'lf', // Use LF for newlines (Unix-style)
  overrides: [
    {
      files: ['*.tsx', '*.ts'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.jsx', '*.js'],
      options: {
        parser: 'babel',
      },
    },
  ],
};
