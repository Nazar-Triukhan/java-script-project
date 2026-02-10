const scientists = [
{
name: "Albert",
surname: "Einstein",
born: 1879,
dead: 1955,
id: 1
},
{
name: "Isaac",
surname: "Newton",
born: 1643,
dead: 1727,
id: 2
},
{
name: "Galileo",
surname: "Galilei",
born: 1564,
dead: 1642,
id: 3
},
{
name: "Marie",
surname: "Curie",
born: 1867,
dead: 1934,
id: 4
},
{
name: "Johannes",
surname: "Kepler",
born: 1571,
dead: 1630,
id: 5
},
{
name: "Nicolaus",
surname: "Copernicus",
born: 1473,
dead: 1543,
id: 6
},
{
name: "Max",
surname: "Planck",
born: 1858,
dead: 1947,
id: 7
},
{
name: "Katherine",
surname: "Blodgett",
born: 1898,
dead: 1979,
id: 8
},
{
name: "Ada",
surname: "Lovelace",
born: 1815,
dead: 1852,
id: 9
},
{
name: "Sarah E.",
surname: "Goode",
born: 1855,
dead: 1905,
id: 10
},
{
name: "Lise",
surname: "Meitner",
born: 1878,
dead: 1968,
id: 11
},
{
name: "Hanna",
surname: "Hammarström",
born: 1829,
dead: 1909,
id: 12
}
];

const emptyListRef = document.querySelector('.scientists__sortedList')
const btnRef = document.querySelectorAll('.scientists__desc')

function createItemsMarcup(array){
    const item = array.map(({name,surname,born,dead,id}) => {
        return `<li class="scientists__box">
        <div class="scientists__wrap">
    <h2 class="scientists__subtitle">${name}</h2>
    <h3 class="scientists__subtitle">${surname}</h3> 
    </div>
    <div class="scientists__wraper">
    <p class="scientists__yers">${born}</p>
    <p class="scientists__yers">- ${dead}</p>
    </div>
</li>`
    }).join('')
    emptyListRef.innerHTML = item
}

btnRef.forEach((btn) => {
    btn.addEventListener('click',(event) => {
        const action = event.currentTarget.dataset.id
        switch(action){
            case 'scientistsBorn19c':
                const findSciantists = scientists.filter(({born})=> {
                    return born >= 1800 && born < 1900
                })
                createItemsMarcup(findSciantists)
                break

            case 'sortByAlphabet':
                const alphabet = scientists.sort((a,b) => {
                    return a.surname.localeCompare(b.surname)
                })
                createItemsMarcup(alphabet)
                break

            case 'sortByYears':
                const yersBig = scientists.sort((a,b) => {
                    return (a.born - a.dead) - (b.born - b.dead)
                })
                createItemsMarcup(yersBig)
                break

            case 'latestBirth':
                let laterOne = scientists[0]
                scientists.forEach((item) => {
                    if(item.born > laterOne){
                        laterOne = item
                    }
                })
                createItemsMarcup([laterOne])
                break;

            case 'findByFirstLetters':
                const findByFirstLetters = scientists.filter((a) => {
                    return a.name.charAt(0) === a.surname.charAt(0)
                })
                createItemsMarcup(findByFirstLetters)
                break

            case 'AlbertEinsteinBirth':
                const AlbertEinsteinBirth = scientists.forEach((item)=> {
                    if(item.name === 'Albert' && item.surname === 'Einstein'){
                        alert(`рік народження: ${item.born}`);
                    }
                })
                break

            case 'surnameByC':
                const surnameByC = scientists.filter((item)=> {
                    return item.surname.charAt(0) === 'C'
                })
                createItemsMarcup(surnameByC)
                break

            case 'deleteByA':
                const deleteByA = scientists.filter((item) => {
                    return item.name.charAt(0) !== 'A'
                })
                createItemsMarcup(deleteByA)
                break

            case 'findLongestAndShortestLife':
                const longest = scientists.reduce((acc,item) => {
                    if((acc.dead - acc.born) < (item.dead - item.born)){
                       return item
                    }else return acc
                })

                const short = scientists.reduce((acc,item) => {
                    if((acc.dead - acc.born) > (item.dead - item.born)){
                       return item
                    }else return acc
                })

                createItemsMarcup([longest,short])
                break
        }
    })
})

createItemsMarcup(scientists)
