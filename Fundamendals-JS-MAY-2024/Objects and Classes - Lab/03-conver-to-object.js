function solve(jsonStr){
    let person = JSON.parse(jsonStr);
  
    const keys = Object.entries(person);
    for (const key of keys) {
        console.log(`${key[0]}: ${key[1]}`);
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')

//XML
/**
 <personXML>
    <name>Pesho</name>
    <age>21</age>
 </personXML>
 */