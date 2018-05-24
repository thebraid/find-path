const getTotalDistance = (elem) => {
    if (Array.isArray(elem)) {
        return elem.reduce( (sum, elem) => {
            return sum + elem.km;
        }, 0)
    } else {
        return elem.km;
    }
};

export const fillMatrix = (matrix, countPoints) => {


    const recursiveFill = (count = 0) => {
        // console.log(count);
        const N = countPoints;

        // console.log(count === N);
        if (count === N) return;

        for (let i = 0; i < N; i += 1) {
            // исключаем по очереди каждый ряд
            if (i === count) continue;

            for (let j = 0; j < N; j += 1) {
                // исключаем все ряды
                // т.е. для 1 раз исключаем из выборки 1ю строку и 1 столбец (затем 2й строку и 2й столбец)
                if (j === count) continue;

                // i === j когда это один и тот же узел, с расстоянием 0
                if (matrix[i][j] === 0) continue;

                // нас интересуют только те позиции (в исключенных ряду и стобце) значение в которых не равны '-' одновременно
                // console.log(matrix);
                if (matrix[count][j] === '-') continue;
                if (matrix[i][count] === '-') continue;

                const nextData = [].concat(matrix[i][count], matrix[count][j]);
                // если в ячейке уже есть данные, проверяем их на минимальное расстояние
                if (matrix[i][j] !== '-') {
                    const currentDistance = getTotalDistance(matrix[i][j]);
                    const nextDistance = getTotalDistance(nextData);

                    // если записанное расстояние меньше нового, оставляем старое значение
                    if (currentDistance < nextDistance) continue;
                }

                matrix[i][j] = [].concat(matrix[i][count], matrix[count][j]);
            }
        }

        count++;
        recursiveFill(count)
    };

    recursiveFill();

    return matrix;
};

