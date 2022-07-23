let artyomsPhone = {
    color: "red",
    memory: 128,
    model: "iphone",
    company: "Apple",
    ozu: 8,
    camera: "round",
    info: {
        id: 6543168312464,
        year: 2020,
    },
    prices: [1000, 700, 600],
    fullName: () => {
        console.log("hello");
    },
};

const user = {
    name: "Artyom",
    email: "sldkjhaslkdha",
    phone: 36546813,
};



let types = {
    number: [],
    string: [],
    object: [],
    boolean: [],
};

let a = Object.assign(artyomsPhone, user)
let b = Object.keys(a)
let c = Object.values(a)
let d = Object.assign(b, c)
d.filter(item => {
    if (typeof (item) === "number") {
        types.number.push(item)
    } else if (typeof (item) === "string") {
        types.string.push(item)
    } else if (typeof (item) === "object") {
        types.object.push(item)
    } else if (typeof (item) === "boolean") {
        types.boolean.push(item)
    }
})
console.log(types)



// ТЗ
  // Седенить два объекта в один новый
  // достать все значения в один массив и все ключи тоже в один но отдельный массив
  // соеденить два массива в один целый
  // отфильтровать данные по их типам данных в соответствующие переменные