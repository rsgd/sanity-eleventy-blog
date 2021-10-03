export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '615a12ddd7d3a86c52dba875',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-v4rmjq1t',
                  apiId: '9e2b30ea-ceb1-44f8-b4aa-937f5144ce85'
                },
                {
                  buildHookId: '615a12ddd7d3a8622adba8a6',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-fsisapxx',
                  apiId: '3b1aa724-31ef-4857-9cb9-80adeb124c6f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rsgd/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-fsisapxx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
