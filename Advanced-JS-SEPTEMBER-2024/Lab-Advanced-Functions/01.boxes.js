function externelArea() {
    return Math.abs(this.x * this.y);
}

function externalVol() {
    return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, boxesJson){
    const boxes = JSON.parse(boxesJson);

    const result = boxes.map((box) => ({
        area: area.call(box),
        volumne: vol.call(box)
    }));

    return (result);
    
}

solve(externelArea, externalVol, `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
)
