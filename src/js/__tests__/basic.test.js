import destruction from '../app';

describe('destruction function', () => {
    const data = [
        ['С полным описание', 
            [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                }, 
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...',
                    description: 'K.O.'
                }
            ], 
            [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                }, 
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...',
                    description: 'K.O.'
                }
            ]
        ],
        ['С скрытым описанием', 
            [
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
                }
            ],
            [
                {
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                }, 
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...',
                    description: 'Описание не доступно'
                }
            ]
        ],
        ['Отсутствие способностей', [], []]
    ]

  data.forEach(([desc, value, result]) => {
    test(`should return the expected result for ${desc}`, () => {
      const func = destruction(value);
      expect(func).toEqual(result);
    });
  });
});