module.exports = function check(str, bracketsConfig) {

const bracketsConfigObj = bracketsConfig.reduce((key, value) => {
  key[value[1]] = value[0];
  return key
}, {});
const result = [ ];

for(let i = 0; i < str.length; i++){
  if(bracketsConfigObj[str[i]] === str[i] && !result.includes(str[i])){
    result.push(str[i]);
  } else if(Object.values(bracketsConfigObj).includes(str[i]) && bracketsConfigObj[str[i]] !== str[i]) {
    result.push(str[i]);
} else if(result[result.length - 1] === bracketsConfigObj[str[i]]){
    result.pop();
} else{
  return false;
}

}
return result.length === 0;
}