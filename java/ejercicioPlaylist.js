function managePlaylist (playlist, newSong) {
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const lista = ["bebe - Anuel", "Amor de mi vida - Feid", "Kyoto - Omar Courtz"]
const cancion = "Luces de colores - Omar Courtz"

console.log(lista)
console.log(cancion)
managePlaylist(lista,cancion)
console.log(lista)
