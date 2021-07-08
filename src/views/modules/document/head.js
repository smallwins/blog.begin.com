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
<link rel="shortcut icon" href="https://static.begin.com/web/favicon/favicon-56e6452eeb.ico">
  <link rel="icon" sizes="16x16 32x32 64x64" href="https://static.begin.com/web/favicon/favicon-56e6452eeb.ico">
  <link rel="icon" type="image/png" sizes="196x196" href="https://static.begin.com/web/favicon/favicon-192-bc060311d1.png">
  <link rel="icon" type="image/png" sizes="160x160" href="https://static.begin.com/web/favicon/favicon-160-6e9d3c9bbf.png">
  <link rel="icon" type="image/png" sizes="96x96" href="https://static.begin.com/web/favicon/favicon-96-acf16ca0c9.png">
  <link rel="icon" type="image/png" sizes="70x70" href="https://static.begin.com/web/favicon/favicon-70-14c1770032.png">
  <link rel="icon" type="image/png" sizes="64x64" href="https://static.begin.com/web/favicon/favicon-64-4e4fccb66f.png">
  <link rel="icon" type="image/png" sizes="32x32" href="https://static.begin.com/web/favicon/favicon-32-f37ee3b53a.png">
  <link rel="icon" type="image/png" sizes="16x16" href="https://static.begin.com/web/favicon/favicon-16-5360d8ce95.png">
  <link rel="apple-touch-icon" href="https://static.begin.com/web/favicon/favicon-180-850d64b843.png">
  <link rel="apple-touch-icon" sizes="180x180" href="https://static.begin.com/web/favicon/favicon-180-850d64b843.png">
  <link rel="apple-touch-icon" sizes="167x167" href="https://static.begin.com/web/favicon/favicon-167-63e0656ffa.png">
  <link rel="apple-touch-icon" sizes="152x152" href="https://static.begin.com/web/favicon/favicon-152-f15654f2f6.png">
  <link rel="apple-touch-icon" sizes="144x144" href="https://static.begin.com/web/favicon/favicon-144-3cc7686595.png">
  <link rel="apple-touch-icon" sizes="120x120" href="https://static.begin.com/web/favicon/favicon-120-05e93b438f.png">
  <link rel="apple-touch-icon" sizes="114x114" href="https://static.begin.com/web/favicon/favicon-114-9d5f535b1f.png">
  <link rel="apple-touch-icon" sizes="76x76" href="https://static.begin.com/web/favicon/favicon-76-306d37f9c5.png">
  <link rel="apple-touch-icon" sizes="72x72" href="https://static.begin.com/web/favicon/favicon-72-38e0a12778.png">
  <link rel="apple-touch-icon" sizes="60x60" href="https://static.begin.com/web/favicon/favicon-60-7a2cc0a167.png">
  <link rel="apple-touch-icon" sizes="57x57" href="https://static.begin.com/web/favicon/favicon-57-2bc6f07542.png">
  <meta name="theme-color" content="#7f00c8">
  <meta name="msapplication-TileColor" content="#FFFFFF">
  <meta name="msapplication-TileImage" content="https://static.begin.com/web/favicon/favicon-144-3cc7686595.png">
  <meta name="msapplication-config" content="https://static.begin.com/web/favicon/browserconfig-09f65ae49c.xml">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

<link rel="stylesheet" type="text/css" href="/css/styles.css">
<link rel="stylesheet" type="text/css" href="/css/index.css">
<link rel="stylesheet" type="text/css" href="/css/syntax.css">
<link rel="stylesheet" href="https://fonts.begin.com/fonts.css">
</head>
`
}
