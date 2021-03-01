module.exports = function check(str, bracketsConfig) {
    const regStr = bracketsConfig.map(item => item.join('').replace(/[^\w]/g, (letter) => `\\${letter}`)).join('|');
    const reg = new RegExp(regStr, "g");
    let tmpStr = str;

    while(reg.test(tmpStr)){
        tmpStr = tmpStr.replace(reg, "");
    }
    return !tmpStr.length;
}
