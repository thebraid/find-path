const prepareMatrix = (countPoints) => {
    const matrix = [];
    // создаем матрицу NxN где N - кол-во городов.
    const N = countPoints;

    for (let i = 0; i < N; i += 1) {
        matrix[i] = [];

        for (let j = 0; j < N; j += 1) {
            if (i === j) {
                matrix[i].push(0);
                continue;
            }

            matrix[i].push('-')
        }
    }

    return matrix;
};

export const createMatrix = (dependencies, countPoints) => {
    const matrix = prepareMatrix(countPoints);

    for (let key in dependencies) {
        dependencies[key].forEach(({to, km}) => {
            matrix[key][to] = {from: Number(key), to, km};
        })
    }

    return matrix;
};