// Zod Practice

const zod = require("zod")
// Write a function that validates whether an input is an array of strings with atleast one element; true if yes false otherwise

function validateInput(inputArr) {
    if (typeof inputArr == 'object' && inputArr.length >= 1) {
        return true
    }
    return false
}

function validateInputZod(inputArr) {
    const stringArrSchema = zod.array(zod.number())
    const comparisonRes = stringArrSchema.safeParse(inputArr)

    return comparisonRes.success
}

const objectSchema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(8),
    country: zod.literal("IN").or(zod.literal("US"))

})

function objectSchemaCheck(obj) {
    const result = objectSchema.safeParse(obj)
    return result
}

const obje = {
    email : "Hslnri@jjnn.com",
    password: "323hfhry",
    country: "US"
}

// console.log(validateInputZod(["He", "She"]))
console.log(objectSchemaCheck(obje))