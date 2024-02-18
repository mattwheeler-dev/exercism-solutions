// TASK 1
// REMOVE DUPLICATES
function removeDuplicates(playlist) {
  const set = new Set();
  playlist.forEach((song) => set.add(song));
  return [... set];
}

// TASK 2
// CHECK IF TRACK ALREADY EXISTS
function hasTrack(playlist, track) {
  return playlist.includes(track);
}

// TASK 3
// ADD TRACK
function addTrack(playlist, track) {
  const set = new Set();
  playlist.forEach((song) => set.add(song));
  set.add(track);
  return [... set];
}

// TASK 4
// DELETE TRACK
function deleteTrack(playlist, track) {
  const set = new Set();
  playlist.forEach((song) => set.add(song));
  set.delete(track);
  return [... set];
}

// TASK 5
// LIST UNIQUE ARTISTS
function listArtists(playlist) {
  const set = new Set();
  playlist.forEach((song) => set.add(song.split(' - ').pop()));
  return [... set];
}
