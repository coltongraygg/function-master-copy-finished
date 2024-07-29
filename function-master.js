//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION RECEIVES AN OBJECT
 * O: FUNCTION RETURNS THE OBJECT'S VALUES IN AN ARRAY
 * C: N/A
 * E: N/A
 */

function objectValues(object) {
    let result = [];
    // iterate through object
    for (let key in object) {
        // push object's values
        result.push(object[key]);
    }
    return result;
}

// optimized version below
function objectValues(object) {
    return Object.values(object);
} 

// if we wanted to return object keys instead of values do this
function objectKeys(object) {
    let result = [];
    for (let key in object) {
        result.push(key);
    }
    return result;
}

// optimized version below
function objectKeys(object) {
    return Object.keys(object);
}


//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION RECEIVES AN OBJECT
 * O: FUNCTION RETURNS ALL ITS KEYS IN A STRING SEPERATED WITH A SPACE
 * C: N/A
 * E: N/A
 */

function keysToString(object) {
    return Object.keys(object).join(' ');
}

// alternatively
function keysToString(object) {
    let result = [];
    for (let key in object) {
        result.push(key);
    }
    return result.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION RECEIVES AN OBJECT
 * O: FUNCTION RETURNS ALL VALUES IN A STRING SEPERATED WITH A SPACE
 * C: N/A
 * E: N/A
 */

function valuesToString(object) {
    let result = [];
    for (let key in object) {
        if (typeof object[key] === 'string') {
            result.push(object[key]);
        }
    }
    return result.join(' ');
}

// alternatively

function valuesToString(object) {
    // assign objValues to an array of values from object
    let objValues = Object.values(object);
    // iterate through objValues array
    for (let i = 0; i < objValues.length; i++) {
        // if index is not a string
        if (typeof objValues[i] !== 'string') {
            // remove it from array
            objValues.splice(i, 1);
        }
    }
    // return array as string w/ indexes seperated by a space
    return objValues.join(' ');
}


/**
 * I: FUNCTION RECEIVES AN DATA TYPE REPRESENTING AN ARRAY OR OBJECT
 * O: FUNCTION RETURNS ARRAY OR OBJECT DEPENDING ON DATA TYPE INPUT AS ARGUMENT
 * C: N/A
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // check if collection is an array
    if (Array.isArray(collection)) {
        return 'array';
    }
    // check if collection is typeof object, not null, not an array, and not a Date
    if (typeof collection === 'object' && collection !== null && !Array.isArray(collection) && !(collection instanceof Date)) {
        return 'object';
    }  
}


/**
 * I: FUNCTION RECEIVES A STRING OF ONE WORD
 * O: FUNCTION RETURNS THE WORD WITH ITS FIRST LETTER CAPITALIZED
 * C: N/A
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////




function capitalizeWord(string) {
    // create result string
    let result = '';
    // iterate through string
    for (let i = 0; i < string.length; i++) {
        // uppercase value of i on first iteration
        if (i === 0) {
            result += string[i].toUpperCase();
        } else {
            // lowercase on every iteration after
            result += string[i].toLowerCase();
        }
    }
    // return result
    return result;
}

/**
 * I: FUNCTION RECEIVES A STRING OF WORDS
 * O: FUNCTION RETURNS THE STRING OF WORDS WITH EACH WORD'S FIRST CHAR UPPERCASED
 * C: N/A
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // initialize result as an empty array
    let result = [];
    // split string by spaces into an array
    let array = string.split(' ');
    // iterate through array
    for (let i = 0; i < array.length; i++) {
        // assign word to first character uppercase concatenated with remaining characters
        let word = array[i][0].toUpperCase() + array[i].slice(1);
        // push word value to result
        result.push(word);
    }
    // return result as a string seperated by spaces
    return result.join(' ');
}


/**
 * I: FUNCTION RECEIVES AN OBJECT W/ A NAME PROPERTY
 * O: FUNCTION RETURNS 'Welcome <Name>!
 * C: N/A
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // assign name to value at object.name
    let name = object.name;
    // assign result name to name with the first char capitalized
    let resultName = name[0].toUpperCase() + name.slice(1);
    // return full welcome message
    return 'Welcome ' + resultName + '!';
}

/**
 * I: FUNCTION RECIEVES AN OBJECT WITH A NAME AND SPECIES PROPERTY
 * O: FUNCTION RETURNS '<Name> is a <Species>'
 * C: N/A
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    // assign objName to object's name property value with first char capitalized
    let objName = object['name'][0].toUpperCase() + object['name'].slice(1);
    // assign objSpecies to object's species property value with first char capitalized
    let objSpecies = object['species'][0].toUpperCase() + object['species'].slice(1);
    // return concatenated string
    return objName + ' is a ' + objSpecies;

}

/**
 * I: FUNCTION RECEIVES AN OBJECT
 * O: IF OBJECT HAS A NOISES ARRAY, RETURN THEM AS A STRING SEPERATED BY SPACES, OTHERWISE RETURN 'THERE ARE NO NOISES'
 * C: N/A
 * E: N/A
 */


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // object doesn't have noises property or if noises isn't an array, or if it's an empty array
    if (!object['noises'] || !Array.isArray(object['noises']) || object['noises'].length === 0) {
        return 'there are no noises';
    } else {
        // otherwise return the values at each noises index as a string joined by spaces
        return object['noises'].join(' ');
    }
}

/**
 * I: FUNCTION RECEIVES A STRING OF WORDS AND A WORD
 * O: FUNCTION RETURNS TRUE IF WORD IS FOUND IN WORDS, OTHERWISE FALSE
 * C: N/A
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // create boolean check variable
    let found = false;
    // split string into array
    let stringArr = string.split(' ');
    // iterate through stringArr
    for (let i = 0; i < stringArr.length; i++) {
        // check for a match
        if (stringArr[i] === word) {
            // if match is found, set found to true
            found = true;
        }
    }
    // return value of found
    return found;
}

/**
 * I: FUNCTION RECEIVES A NAME AND AN OBJECT
 * O: FUNCTION ADDS NAME TO OBJECT'S FRIEND ARRAY AND THEN RETURNS THE OBJECT
 * C: N/A
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // add name to object's friends array
    object['friends'].push(name);
    // return object
    return object;
}

/**
 * I: FUNCTION RECEIVES A NAME AND AN OBJECT
 * O: FUNCTION RETURNS TRUE IF NAME IS FOUND IN OBJECT'S FRIENDS ARRAY, FALSE OTHERWISE
 * C: N/A
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // initialize isFriend boolean check with false value
    let isFriend = false;
    // if object.friends exists as an array that isn't empty
    if (Array.isArray(object.friends) && object.friends.length > 0) {
        // iterate through array
        let searchArray = object['friends'];
        for (let i = 0; i < searchArray.length; i++) {
            // search for a match
            if (searchArray[i] === name) {
                // set isFriend to true
                isFriend = true;
            }
        }
    }
    // return value of isFriend
    return isFriend;
}


/**
 * I: FUNCTION RECEIVES A NAME AND AN ARRAY OF PEOPLE
 * O: FUNCTION RETURNS AN ARRAY OF ALL NAMES THAT NAME IS NOT FRIENDS WITH
 * C: N/A
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let result = [];
    // iterate through objects
    for (let i = 0; i < array.length; i++) {
        // dont check name's own object in array
        if (array[i].name === name) {
            // do nothing
        } else {
            // initialize isFriend to false
            let isFriend = false;
            // iterate through friends array
            for (let j = 0; j < array[i].friends.length; j++) {
                // search for a match
                if (array[i].friends[j] === name) {
                    isFriend = true;
                }
            }
            // add array[i]'s name to result array if isFriend is false
            if (!isFriend) {
                result.push(array[i].name);
            }
        }
    }
    return result;
}



/**
 * I: FUNCTION RECEIVES AN OBJECT, A KEY, AND A VALUE. 
 * O: FUNCTION UPDATES THE PROPERTY KEY ON OBJECT WITH NEW VALUE, IF KEY DOES NOT EXIST ON OBJECT - FUNCTION CREATES KEY ON OBJECT
 * C: N/A
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // initialize object[key] with value
    object[key] = value;
    // return object
    return object;
}




/**
 * I: FUNCTION RECEIVES AN OBJECT AN AN ARRAY OF STRINGS
 * O: FUNCTION REMOVES ANY PROPERTIES ON OBJECT THAT ARE LISTED IN ARRAY
 * C: N/A
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // iterate through object
    for (let key in object) {
        // iterate through array
        for (let i = 0; i < array.length; i++) {
            // search for a match
            if (array[i] === key) {
                // delete object's property
                delete object[key];
            }
        }
    }
    // return object
    return object;
}





/**
 * I: FUNCTION RECEIVES AN ARRAY 
 * O: FUNCTION RETURNS AN ARRAY WITH ALL DUPLICATES REMOVED
 * C: N/A
 * E: N/A
 */

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let result = [];
    // iterate through input array
    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;
        // iterate through result array
        for (let j = 0; j < result.length; j++) {
            // search to see if array[i] is already in result array
            if (array[i] === result[j]) {
                // if so, set isDuplicate to true
                isDuplicate = true;
            }
        }
        // if array[i] isn't found in result array
        if (!isDuplicate) {
            // add value to result array
            result.push(array[i]);
        }
    }
    return result;
}
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}