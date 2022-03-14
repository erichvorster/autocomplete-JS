const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

//Search state.json and filter it
const searchStates = async searchText => {
    const res = await fetch('..data/states.json');
}