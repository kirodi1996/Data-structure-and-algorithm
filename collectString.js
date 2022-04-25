function collectString(obj) {
    let res = []
    for (let key in obj) {
        if(obj[key] === 'object' && !Array.isArray(obj[key])) {
            res = res.concat(collectString(obj))
        }
        else if(obj[key] === 'string') {
            res.push(obj[key])
        }
    }
    return res
}

obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectString(obj);