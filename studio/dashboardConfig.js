export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615a60aa121800d45c70ebdd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-brqbthkg',
                  apiId: '8839d85f-ed33-4784-b952-c22b27dfc89f'
                },
                {
                  buildHookId: '615a60aa19ab3e0c02fde67a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-16xcpohm',
                  apiId: 'f7d5def0-a74c-46ca-a8cc-15d68f55775c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/momoklick/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-16xcpohm.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
