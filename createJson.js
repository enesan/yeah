let obj = {
    "nodes": [],
    "links": []
};

let max = 20
for (let i = 0; i < max; i++) {
    obj.nodes.push({
        "id": i,
        "health": true
    })
}

for(let i = 0; i < 40; i++) {
    obj.links.push({
        "source": Math.floor(Math.random() * max),
        "target": Math.floor(Math.random() * max)
    })
}

let json = JSON.stringify(obj);
//console.log(json)