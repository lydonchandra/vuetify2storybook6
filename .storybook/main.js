const path = require('path') // used for resolving aliases

module.exports = {
  "stories": [
    // "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
    "addons": [
      "@storybook/addon-links",
      {
        name: "@storybook/addon-essentials",
        options: {
          docs: false
        }
      }
    ],
  // add this function to tweak the webpack config
  webpackFinal: async (config, { configType }) => {
    // so I can import { storyFactory } from '~storybook/util/helpers'
    config.resolve.alias[ '~storybook' ] = path.resolve( __dirname )
    // the @ alias points to the `src/` directory, a common alias
    // used in the Vue community
    config.resolve.alias[ '@' ] = path.resolve( __dirname, '..', 'src' )

    // THIS is the tricky stuff!
    config.module.rules.push( {
      test: /\.sass$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              indentedSyntax: true,
            },
            // prependData: "@import '@/sass/variables.sass'",
          },
        },
      ],
      include: path.resolve( __dirname, '../' ),
    } )

    // return the updated Storybook configuration
    return config
  }
}
