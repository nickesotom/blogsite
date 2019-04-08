const fetch = require('node-fetch');
const cheerio = require('cheerio');


// const puppeteer = require('puppeteer');
const url = 'http://www.lewisu.edu/experts/wordpress/index.php/blog/'

function fetchPosts() {
  return fetch(url).then(response => response.text());
}

fetchPosts().then(body => {
  const posts = [];
  const $ = cheerio.load(body);
  $('.type-post').each(function (i, element) {
    const $element = $(element);
    const $image = $element.find('div div a img');
    const $title = $element.find('div.eight a')
    const $summary = $element.find('div.entry-summary p')
    const $link = $element.find('div.eight a')
    const $author = $element.find('span.author a.url')
    // console.log($link.attr('href'))
    // console.log($image.attr('src'));
    // console.log($title.text())
    // console.log($summary.text());
    const post = {
      image: $image.attr('src'),
      title: $title.text(),
      summary: $summary.text(),
      link: $link.attr('href'),
      author: $author.text()
    }
    posts.push(post);

  })
  console.log(posts)

})

