import { DIAGONAL_DISTANCE as DD, LINE_DISTANCE as LD } from "Constants";

export const createDependencies = (grid) => {
    const dep = Object.create(null);
    const length_W = grid[0].length - 1;
    const length_H = grid.length - 1;

    let i, j;

    for (i = 0; i <= length_H; i += 1) {
        for (j = 0; j <= length_W; j += 1) {
            const from = grid[i][j];

            // создаем хранилище всех путей из данной точки
            dep[from] = [];

            // первый ряд, не заполняем верхние значения6
            if (i === 0) {
                // крайний левый элемент
                if (j === 0) {
                    dep[from].push({from, to: grid[i][j+1], km: LD});   // справа
                    dep[from].push({from, to: grid[i+1][j], km: LD});   // снизу
                    dep[from].push({from, to: grid[i+1][j+1], km: DD}); // справа-снизу
                    continue;
                }

                // крайний правый элемент
                if (j === length_W) {
                    dep[from].push({from, to: grid[i+1][j], km: LD});   // снизу
                    dep[from].push({from, to: grid[i+1][j-1], km: DD}); // слева-снизу
                    continue;
                }

                dep[from].push({from, to: grid[i][j-1], km: LD});   // слева
                dep[from].push({from, to: grid[i][j+1], km: LD});   // справа

                dep[from].push({from, to: grid[i+1][j-1], km: DD}); // слева-снизу
                dep[from].push({from, to: grid[i+1][j], km: LD});   // снизу
                dep[from].push({from, to: grid[i+1][j+1], km: DD}); // справа-снизу

                continue;
            }

            // последний ряд, не заполняем значения снизу
            if (i === length_H) {
                // крайний левый элемент
                if (j === 0) {
                    dep[from].push({from, to: grid[i-1][j], km: LD});   // сверху
                    dep[from].push({from, to: grid[i-1][j+1], km: DD}); // справа-сверху
                    dep[from].push({from, to: grid[i][j+1], km: LD});   // справа
                    continue;
                }

                // крайний правый элемент
                if (j === length_W) {
                    dep[from].push({from, to: grid[i-1][j-1], km: DD}); // слева-сверху
                    dep[from].push({from, to: grid[i-1][j], km: LD});   // сверху
                    dep[from].push({from, to: grid[i][j-1], km: LD}); // слева
                    continue;
                }

                dep[from].push({from, to: grid[i-1][j-1], km: DD}); // слева-сверху
                dep[from].push({from, to: grid[i-1][j], km: LD});   // сверху
                dep[from].push({from, to: grid[i-1][j+1], km: DD}); // справа-сверху

                dep[from].push({from, to: grid[i][j-1], km: LD});   // слева
                dep[from].push({from, to: grid[i][j+1], km: LD});   // справа
                continue;
            }

            // крайний левый элемент
            if (j === 0) {
                dep[from].push({from, to: grid[i-1][j], km: LD});   // сверху
                dep[from].push({from, to: grid[i-1][j+1], km: DD}); // справа-сверху
                dep[from].push({from, to: grid[i][j+1], km: LD});   // справа
                dep[from].push({from, to: grid[i+1][j], km: LD});   // снизу
                dep[from].push({from, to: grid[i+1][j+1], km: DD}); // справа-снизу
                continue;
            }

            // крайний правый элемент
            if (j === length_W) {
                dep[from].push({from, to: grid[i-1][j-1], km: DD}); // слева-сверху
                dep[from].push({from, to: grid[i-1][j], km: LD});   // сверху
                dep[from].push({from, to: grid[i][j-1], km: LD});   // слева
                dep[from].push({from, to: grid[i+1][j-1], km: DD}); // слева-снизу
                dep[from].push({from, to: grid[i+1][j], km: LD});   // снизу
                continue;
            }

            dep[from].push({from, to: grid[i-1][j-1], km: DD}); // слева-сверху
            dep[from].push({from, to: grid[i-1][j], km: LD}); // сверху
            dep[from].push({from, to: grid[i-1][j+1], km: DD}); // справа-сверху

            dep[from].push({from, to: grid[i][j-1], km: LD});   // слева
            dep[from].push({from, to: grid[i][j+1], km: LD});   // справа

            dep[from].push({from, to: grid[i+1][j-1], km: DD}); // слева-снизу
            dep[from].push({from, to: grid[i+1][j], km: LD});   // снизу
            dep[from].push({from, to: grid[i+1][j+1], km: DD}); // справа-снизу
        }
    }

    return dep;
};
