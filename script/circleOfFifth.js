const rowOfFifthMajor = document.getElementById('tableOfFifthMajor');
const rowOfFifthMinor = document.getElementById('tableOfFifthMinor');
const rowOfFifthDim = document.getElementById('tableOfFifthDim');

const fifthMajor = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'Db', 'Ab', 'Eb', 'Bb', 'F'];
const fifthMinor = ['Am', 'Em', 'Bm', 'F#m', 'C#m', 'G#m', 'D#m', 'Bbm', 'Fm', 'Cm', 'Gm', 'Dm'];
const fifthDim = ['Bdim', 'F#dim', 'C#dim', 'G#dim', 'D#dim', 'A#dim', 'Fdim', 'Cdim', 'Gdim', 'Ddim', 'Adim', 'Edim'];

const fillTable = (row, data, clickable) => {
    console.dir(row)
    for(const element of data) {
        let cell = document.createElement('td');
        if(clickable) {
            cell.addEventListener('click', () => {
                selectedKey(data, element);
            });
        }
        cell.textContent = element;
        row.appendChild(cell);
    }
}

fillTable(rowOfFifthMajor, fifthMajor, true);
fillTable(rowOfFifthMinor, fifthMinor, true);
fillTable(rowOfFifthDim, fifthDim, false);

const selectedKey = (fifthArray, key) => {
    clearTable()
    let index = fifthArray.indexOf(key);
    for(let i = index-1; i <= index+1; i++) {
        rowOfFifthMajor.children[mod(i, fifthArray.length)].style.backgroundColor = 'red';
        rowOfFifthMinor.children[mod(i, fifthArray.length)].style.backgroundColor = 'red';
    }
    rowOfFifthDim.children[index].style.backgroundColor = 'red';
}

const mod = (n, m) => {
    return ((n % m) + m) % m;
}

const clearTable = () => {
    for(let i = 0; i < rowOfFifthMajor.children.length; i++) {
        rowOfFifthMajor.children[i].style.backgroundColor = 'white';
        rowOfFifthMinor.children[i].style.backgroundColor = 'white';
        rowOfFifthDim.children[i].style.backgroundColor = 'white';
    }
}