function task_1(){
    let arrRouters = [],
        Char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        lenChar = Char.length;
        arrFreq = ["2,4 ГГц", "5 ГГц"],
        arrManuf = ["Zyxel","Xiaomi","Ubiquiti","Thomas","Tenda","TP-Link","TOTOLINK","Strong","Phicomm","Netis","Netgear","MikroTik","Mercusys","Linksys","Keenetic","Huawei","Google","Eero","Edimax","D-Link","Cisco SB","Asus","Apple"],
        lenArrManuf = arrManuf.length;
        minPrice = 279,
        maxPrice = 48279,
        arrStore = ["Rozetka","Comfy","Citrus","Eldorado","Technopolis"],
        lenArrStore = arrStore.length,
        Sym = "0123456789ABCDEF",
        arrMac = [];
    const   IPv4 = "192.168.0.1",
            IPv6 = "2001:0db8:11a3:09d7:1f34:8a2e:07a0:765d";
    
    for (let i = 1; i < 101; i++){
        let router = {};
        router.num = i;
        router.id = "";
        for(let j = 0; j < 16; j++){
            router.id += Char[getRandom(0, lenChar - 1)];
        }
        router.freq = arrFreq[getRandom(0, 1)];
        router.manuf = arrManuf[getRandom(0, lenArrManuf - 1)];
        router.price = getRandom(minPrice, maxPrice);
        router.store = arrStore[getRandom(0, lenArrStore - 1)];
        router.ipv4 = IPv4;
        router.ipv6 = IPv6;
        router.mac = getRandomMac();
        arrRouters.push(router);
    }
    
    console.log(arrRouters);

}

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomMac(){
    let mac_address = "",
        noExit;

    do{
        mac_address = `${Sym[getRandom(0, 15)]}${Sym[getRandom(0, 15)]}:${Sym[getRandom(0, 15)]}${Sym[getRandom(0, 15)]}:${Sym[getRandom(0, 15)]}${Sym[getRandom(0, 15)]}:${Sym[getRandom(0, 15)]}${Sym[getRandom(0, 15)]}:${Sym[getRandom(0, 15)]}${Sym[getRandom(0, 15)]}:${Sym[getRandom(0, 15)]}${Sym[getRandom(0, 15)]}`;
        noExit = arrMac.includes(mac_address);
    }while(noExit)
    arrMac.push(mac_address);
    return mac_address;
}


function task_2(){
    let arrPlanets = [],
        planetsName = ["Меркурий","Венера","Марс","Земля","Юпитер","Сатурн","Уран","Нептун"];

    for(let i = 0; i < 8; i++){
        let planet = {};
        planet.name = planetsName[i];
        planet.age = getRandom(3, 10);
        planet.life = getRandom(3, 10);
        arrPlanets.push(planet);
    }

    arrPlanets.forEach((planet)=>{
        console.log(`Имя планеты: ${planet.name} | Время жизни: ${planet.age} млрд лет | Остаток жизни: ${planet.life} млрд лет`);
    })

    
}