const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ] 
}

export default function destruction(special) {
    const result = new Array();
    for(const i of special) {
        const {id, name, icon, description = 'Описание не доступно'} = i;
        result.push({
            id: id,
            name: name,
            icon: icon,
            description: description
        })
    }
    return result
}

console.log(destruction(character.special))