function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    let clone;

    if (Array.isArray(obj)) {
        clone = [];
        for (let i = 0; i < obj.length; i++) {
            clone[i] = deepCopy(obj[i]);
        }
    } else {
        clone = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                clone[key] = deepCopy(obj[key]);
            }
        }
    }

   

    if (obj instanceof Date) {
        return new Date(obj.getTime());
    } else if (typeof obj === 'object' && obj !== null) {
        let clone;
        if (Array.isArray(obj)) {
            clone = [];
            for (let i = 0; i < obj.length; i++) {
                clone[i] = deepCopyDate(obj[i]);
            }
        } else {
            clone = {};
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    clone[key] = deepCopyDate(obj[key]);
                }
            }
        }
    }
    
    return clone;
}

