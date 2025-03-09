function hero(data) {
    let allHeroes = [];

    for (let d of data) {
        let [heroName, heroLevel, heroItems] = d.split(' / ');
        
        let newHero = {
            Hero: heroName,
            level: Number(heroLevel),
            items: heroItems,
        }

        allHeroes.push(newHero);
    }

    let sortedHeroes = allHeroes.sort( (a, b) => a.level - b.level);

    for (let h of sortedHeroes) {
        console.log(`Hero: ${h.Hero}`);
        console.log(`level => ${h.level}`);
        console.log(`items => ${h.items}`);
    }
}

hero([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])