

export const findPath = (dependencies, start) => {
    const history = Object.create(null);

    const recurciveSearch = (nodes) => {
        if (nodes.every(value => value.done)) return;

        const { dependencies, history } = this;

        let nextNodes = [];

        // обходим все узлы к которым ведет путь из искомого узла
        // [ {start: 0 , nodes: [...]}, {}, {}]
        nodes.forEach(node => {
            const { start, nodes: childNodes } = node;

            history[start] = {
                ...history[start],
                done: true
            };

            childNodes.forEach(child => {
                if (history[child.to] && history[child.to].done) return;

                if (!history[child.to]) {

                    let newPath = [];
                    const pathFromChild = history[child.from].path;

                    if (!pathFromChild) {
                        newPath = [child]
                    } else {
                        newPath = pathFromChild.concat(child);
                    }

                    history[child.to] = {
                        done: false,
                        path: newPath
                    };

                } else {
                    // уже есть путь, нужно проверить
                    const oldPath = history[child.to].path;
                    const oldDistance = this.getDistance(oldPath);

                    // расстояние - бесконечность в случае, если мы 1й раз обращаемся у узлу.
                    if(!isFinite(oldDistance)) {

                        history[child.to] = {
                            ...history[child.to],
                            path: [child]
                        };

                    } else {
                        // необходимо проверить со старыми данными, и записать наименьшее значение

                        // расстояние от предыдущего узла до текущего
                        const distanceFrom = this.getDistance(history[child.from].path);

                        // расстояние от текущего до заданного
                        const distanceTo = this.getDistance(child);

                        // расстояние от точки начала до следующего узла
                        const total = this.getDistance(history[child.to].path);

                        // если до заданного узла найден меньший путь, то оставляем его
                        if (total < (distanceFrom + distanceTo)) return;

                        history[child.to] = {
                            ...history[child.to],
                            path: history[child.from].path.concat(child)
                        }
                    }

                }

                let nextNodesFilter = dependencies[child.to];
                nextNodesFilter = nextNodesFilter.filter(node => node.to !== start);

                nextNodes = nextNodes.concat({start: child.to, nodes: nextNodesFilter});
            });
        });

        recurciveSearch(nextNodes)
    };

    const nodes = dependencies[start];
    recurciveSearch([{start, nodes}]);
};




