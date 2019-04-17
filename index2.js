var cheerio = require("cheerio");

/**
 *  returns an array of 2 size, all int counts
 * 
 *  [0] = likes
 *  [1] = comments
 * 
 *  example:
 *  object [
 *      240, 178
 *  ]
 */
function getLikesCommentsCount(html) {
    const $ = cheerio.load(html)
    var obj = [];
    $('span.sidebarHeader__actualTitle').each(function(i, elem) {
        switch(i){
            case 1:
                var myString = $(this).text().replace(/\D/g,'');
                obj.push(myString);
                break;
            case 3:
                var myString = $(this).text().replace(/\D/g,'');
                obj.push(myString);
                break;
        }
    })
    return obj;
}

/**
 *  returns an array of 3 size, all int counts
 * 
 *  [0] = followers
 *  [1] = following
 *  [2] = tracks
 * 
 *  example: 
 *  object [
 *      240, 178, 12
 *  ]
 */
function getFollowersFollowingTrackCount(html) {
    const $ = cheerio.load(html)
    var obj = [];
    $('a.infoStats__statLink').each(function(i, elem) {
        switch(i){
            case 0:
                var myString = $(this).attr('title').replace(/\D/g,'');
                obj.push(myString);
                break;
            case 1:
                var myString = $(this).attr('title').replace(/\D/g,'');
                obj.push(myString);
                break;
            case 2:
                var myString = $(this).attr('title').replace(/\D/g,'');
                obj.push(myString);
                break;
        }
    })
    return obj;

}

/**
 * returns a title String
 */
function getTitle(html){
    const $ = cheerio.load(html);
    return $('title').text();
}

function getInnerBody(html){
    const $ = cheerio.load(html);
    return $('body').text();
}

module.exports = { getInnerBody, getTitle, getFollowersFollowingTrackCount, getLikesCommentsCount };