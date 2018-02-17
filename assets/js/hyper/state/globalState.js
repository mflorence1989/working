var companyInfo = {
  title: 'LeftOvers',
  phone: '267-642-9542',
  location:'Philadelphia,PA',
}

var specialMenuData = [
  {
  title:'Super BBQ Grill NO FUMA ',
  description:'Fried eggs, steak, papafritas or baked potatoes, side of vegetables',
  price: '$25'
},
{
title:'Fried Lamb Chops',
description:'Fried eggs, steak, papafritas or baked potatoes, side of vegetables',
price: '$25'
},
{
title:'Baked Chicken',
description:'Fried eggs, steak, papafritas or baked potatoes, side of vegetables',
price: '$25'
},
]

var reviewsData = [
  {
    company:'The Food Network',
    author:'Chef Mario',
    authorInfo:' Winner Of The Chef Masters',
    highlights:'Best Restaurant in Philadelphia area',
  review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexil,lologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
},
{
  company:'NBC',
  author:'Chef Mario',
  authorInfo:' Winner Of The Chef Masters',
  highlights:'Best Restaurant in Philadelphia area',
review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
},
{
  company:'Bet',
  author:'Chef Mario',
  authorInfo:' Winner Of The Chef Masters',
  highlights:'Best Restaurant in Philadelphia area',
review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
},
{
  company:'ABC',
  author:'Chef Mario',
  authorInfo:' Winner Of The Chef Masters',
  highlights:'Best Restaurant in Philadelphia area',
review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
},
{
  company:'CBS',
  author:'Chef Mario',
  authorInfo:' Winner Of The Chef Masters',
  highlights:'Best Restaurant in Philadelphia area',
review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
},
]

var randomQuoteData = [
  {
    author: 'Chef Mario',
    quote: 'Sometimes The Best Chef Aint The Fattest Bitch In The Room'
},
{
  author: 'Chef Mario',
  quote: 'Sometimes The Best Chef Aint The Fattest Bitch In The Room'
},
{
  author: 'Chef Tailas',
  quote: 'Good Grub'
},
{
  author: 'Raider',
  quote: 'Wheres my kaboddles'
},
]


export const globalState = {
  count: 0,
  companyInfo,
  specialMenuData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 4,
  }
}
