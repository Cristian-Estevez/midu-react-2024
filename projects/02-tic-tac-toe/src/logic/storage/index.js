export function saveGameToStorage({ turn, board }) {
  window.localStorage.setItem('turn', turn);
  window.localStorage.setItem('board', JSON.stringify(board));
}

export function resetGameStorage() {
  window.localStorage.removeItem('board');
  window.localStorage.removeItem('turn');
}
