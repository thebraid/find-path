export const createMap = (W, H) => {
    const grid = [];
    const coords = Object.create(null);

    let i, j, k = 0;

    for (i = 0; i < H; i += 1) {
        grid[i] = [];

        for(j = 0; j < W; j += 1) {
            grid[i].push(k);
            coords[k] = {x: j, y: i};
            k++;
        }
    }

    return { grid, coords };
};
