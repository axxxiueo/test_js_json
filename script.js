const item = {
    name: "パソコン",
    price: 100000,
    sale: true,
    parts: ["CPU","メモリ","HDD"],
    a: {
        b: "テスト"
    }
}

document.getElementById("name").textContent = "商品名は" + item["name"];
document.getElementById("price").textContent = "価格は" + item["price"] + "円です。";
if (item["sale"]){
    document.getElementById("sale").textContent = item["name"] + "セール中です。";
}

let texts = '';
for(let i = 0;i < item["parts"].length; i++){
    texts += item["parts"][i];
    if (i !== item["parts"].length -1){
        texts += ".";
    }
}

document.getElementById("parts").textContent = item["name"] + "のパーツは" + texts + "です。"
document.getElementById("test").textContent = item["a"]["b"];