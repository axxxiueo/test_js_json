const item = {
    name: "パソコン",
    price: 100000,
    sale: true,
    parts: ["CPU","メモリ","HDD"],
    a: {
        b: "テスト"
    }
}

item["c"] = "テスト2";

document.getElementById("name").textContent = "商品名は" + item.name;
document.getElementById("price").textContent = "値段は" + item["price"] + "円です。";
if (item["sale"]){
    document.getElementById("sale").textContent = item["name"] + "はセール中です。"
}

let texts = '';
for (let i = 0; i < item["parts"].length; i++){
    texts += item["parts"][i];
    if(texts !== item["parts"].length-1){
        texts += "・";
    }
}
document.getElementById("parts").textContent = item["name"] + "のパーツは" + texts + "です。";

document.getElementById("test").textContent = item["a"]["b"];

console.log(item);
console.table(item);