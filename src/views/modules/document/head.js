export default function Head (props = {}) {
  let { category, description, title } = props
  let fullTitle = category && title
    ? `${category} > ${title} - Begin blog`
    : 'Begin blog'
  let descriptionContent = description || 'The official Begin blog.'

  return `
<head>
<!-- Primary Meta Tags -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
<meta name="description" content="${descriptionContent}">
<title>${fullTitle}</title>

<!-- Search Engine -->
<meta name="description" content="The official Begin blog.">
<meta name="image" content="https://blog.begin.com/blog.png">

<!-- Schema.org for Google -->
<meta itemprop="name" content="Begin blog">
<meta itemprop="description" content="The official Begin blog.">
<meta itemprop="image" content="https://blog.begin.com/blog.png">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Begin blog">
<meta name="twitter:description" content="The official Begin blog.">
<meta name="twitter:site" content="@begin">
<meta name="twitter:creator" content="@begin">
<meta name="twitter:image:src" content="https://blog.begin.com/blog.png">

<!-- Open Graph general (Facebook, Pinterest & Google+) -->
<meta name="og:title" content="Begin blog">
<meta name="og:description" content="The official Begin blog.">
<meta name="og:image" content="https://blog.begin.com/blog.png">
<meta name="og:url" content="https://begin.com/">
<meta name="og:site_name" content="Begin blog">
<meta name="og:type" content="website">

<!-- Styles/Favicons -->
<link rel="icon" type="image/png" sizes="32x32" href="https://s3-us-west-2.amazonaws.com/arc.codes/architect-favicon-32.png">
<link rel="icon" type="image/png" sizes="16x16" href="https://s3-us-west-2.amazonaws.com/arc.codes/architect-favicon-16.png">
<link rel="icon" type="image/png" sizes="64x64" href="https://s3-us-west-2.amazonaws.com/arc.codes/architect-favicon-64.png">
<link rel="stylesheet" type="text/css" href="/css/styles.css">
<link rel="stylesheet" type="text/css" href="/css/index.css">
<link rel="stylesheet" type="text/css" href="/css/syntax.css">
</head>
`
}
