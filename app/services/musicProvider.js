'use strict';

var songs = [
	{
		id: 1,
		title: 'Stand Alone',
		artist: 'LukHash',
		url: 'http://www.lukhash.com/audio/10%20-%20STAND%20ALONE.mp3',
		coverUrl: 'https://imgjam1.jamendo.com/albums/s91/91153/covers/1.600.jpg'
	},
	{
		id: 2,
		title: 'Digital Memories',
		artist: 'LukHash',
		url: 'http://www.lukhash.com/audio/04%20-%20DIGITAL%20MEMORIES.mp3',
		coverUrl: 'https://imgjam1.jamendo.com/albums/s91/91153/covers/1.600.jpg'
	},
	{
		id: 3,
		title: '8bit No Tamashi',
		artist: 'LukHash',
		url: 'http://www.lukhash.com/audio/05%20-%208%20BIT%20NO%20TAMASHI.mp3',
		coverUrl: 'https://imgjam1.jamendo.com/albums/s91/91153/covers/1.600.jpg'
	},
	{
		id: 4,
		title: 'Pixel My Heart',
		artist: 'LukHash',
		url: 'http://www.lukhash.com/audio/09%20-%20PIXEL%20MY%20HEART.mp3',
		coverUrl: 'https://imgjam1.jamendo.com/albums/s91/91153/covers/1.600.jpg'
	},
	{
		id: 5,
		title: 'WTF?',
		artist: 'LukHash',
		url: 'http://www.lukhash.com/audio/06%20-%20WTF.mp3',
		coverUrl: 'https://imgjam1.jamendo.com/albums/s91/91153/covers/1.600.jpg'
	}
];

app.service('musicProvider', function() {
	this.getSongs = function() {
		return songs;
	}
});