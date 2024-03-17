function solve(input) {
    const songTypes = {};
    const allSongs = [];
    class Song {
        constructor(name, time) {
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = input.shift();
    let typeSong = input.pop();

    for (let i = 0; i < numberOfSongs; i++) {

        let [type, name, time] = input[i].split('_')

        if (!songTypes[type]) {
            songTypes[type] = []
        }
        let song = new Song(name, time)
        songTypes[type].push(song)
        allSongs.push(song)
    }

    if (typeSong === 'all') {
        // for (const type in songTypes) {
        //     songTypes[type].forEach(song => console.log(song.name))
        for (const song of allSongs) {
            console.log(song.name)
        }
    } else {
        songTypes[typeSong].forEach(song => console.log(song.name))
    }
}

solve([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']
)


solve([4,
'favourite_DownTown_3:14',
'listenLater_Andalouse_3:24',
'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48',
'listenLater'])


solve([2,
'like_Replay_3:15',
'ban_Photoshop_3:48',
'all']
)