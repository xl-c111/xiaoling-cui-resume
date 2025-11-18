import next from 'eslint-config-next'

const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'out/**'],
  },
  ...next,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react-hooks/purity': 'off',
    },
  },
]

export default config
