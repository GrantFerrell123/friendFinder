var friends = [ {
    "name" : "Jim",
    "photo" : "https://ga-core.s3.amazonaws.com/production/uploads/instructor/image/4740/thumb_Jim_McCoy.jpg",
    "scores" : [5,4,2,5,1,1,2,1,3,5]
}, {
    "name" : "Smarf",
    "photo" : "https://ih0.redbubble.net/image.188848000.2784/mp,220x200,matte,ffffff,t-pad,220x200,ffffff.3.jpg",
    "scores" : [3,4,2,4,4,1,1,2,3,4]
}, {
    "name" : "Jurrasic Park Kid",
    "photo" : "https://static.comicvine.com/uploads/original/11130/111306779/5669335-9768253930-0TGsT.png",
    "scores" : [5,5,5,5,5,5,5,5,5,5]
}, {
    "name" : "pepper",
    "photo" : "https://vignette.wikia.nocookie.net/americanhorrorstory/images/e/ef/Pepperzz.jpg/revision/latest?cb=20141015185441",
    "scores" : [5,2,4,3,3,2,1,3,3,4]
}, {
    "name" : "Gavin",
    "photo" : "https://www.google.com/search?rlz=1C1CHBD_enUS774US774&biw=1536&bih=759&tbm=isch&sa=1&ei=hvyVWsnJCpCGtQWm66i4Dw&q=rock&oq=rock&gs_l=psy-ab.3..0i67k1j0j0i67k1j0j0i67k1l2j0l4.77764.79834.0.79918.6.5.1.0.0.0.88.352.5.5.0....0...1c.1.64.psy-ab..0.6.357....0.tbfA-S4EDQw#imgrc=mwnyd0bONTQbhM:",
    "scores" : [4,1,5,3,4,5,2,3,4,5]
}, {
    "name" : "Kayla",
    "photo" : "http://cdn3.thr.com/sites/default/files/2013/02/emma_roberts.jpg",
    "scores" : [4,1,5,3,4,5,2,3,4,5]
}, {
    "name" : "Pat",
    "photo" : "http://en.metal-tracker.com/torrents/images/1999790.jpg",
    "scores" : [3,4,2,4,4,1,1,2,3,4]
}, {
    "name" : "Poppy",
    "photo" : "https://yt3.ggpht.com/a-/AJLlDp3z7QSu9bmpUJ8bL6a6pIc-R1ry-Py9m3EVUQ=s900-mo-c-c0xffffffff-rj-k-no",
    "scores" : [5,4,2,5,1,1,2,1,3,5]
}, {
    "name" : "Puffinstuff",
    "photo" : "https://cdn-images-1.medium.com/max/512/1*N-QofsDkahti7lekUeKj3g.png",
    "scores" : [1,5,1,3,5,1,4,3,2,1]
}, {
    "name" : "Dimebag",
    "photo" : "https://cdn-images-1.medium.com/max/512/1*N-QofsDkahti7lekUeKj3g.png",
    "scores" : [1,3,3,1,2,4,4,1,3,1]
}, {
    "name" : "This dude",
    "photo" : "data:image/jpeg;base64,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",
    "scores" : [5,2,4,3,3,2,1,3,3,4]
}, {
    "name" : "Rob",
    "photo" : "http://www.comedyworks.com/attachments/carousel_photos/0001/5219/robschneider_car_carousel.jpg",
    "scores" : [1,1,1,1,1,1,1,1,1,1]
}, {
    "name" : "Toxie",
    "photo" : "http://moviesmedia.ign.com/movies/image/article/108/1082275/toxie_1270652537.jpg",
    "scores" : [2,3,5,5,3,5,2,1,3,2]
}, {
    "name" : "Omar",
    "photo" : "https://s3-media2.fl.yelpcdn.com/buphoto/lS2iNAIK-9gjk2J1yKaQ3Q/o.jpg",
    "scores" : [2,3,5,5,3,5,2,1,3,2]
}];

module.exports = friends;