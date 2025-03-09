function toObject(data) {
    let objectData = {};
    for (let d of data) {

        const newObject = JSON.parse(d);
        for (let [key, value] of Object.entries(newObject)) {

        
            objectData[key] = value;
        
        }

    }

    let sortedDict = Object.keys(objectData).sort( (a, b) => a.localeCompare(b));
 
    for (let dict of sortedDict) {
        console.log(`Term: ${dict} => Definition: ${objectData[dict]}`)
    }
}

toObject([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])