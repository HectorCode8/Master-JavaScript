
const hasDriverLicense = true;
const hasGoodVision = true
console.log(hasDriverLicense && hasGoodVision)
console.log(hasDriverLicense || hasGoodVision)
console.log(!hasDriverLicense)

const shuldDrive = hasDriverLicense && hasGoodVision

// if(shuldDrive){
//     console.log('You can drive')
// } else {
//     console.log('You can not drive')
// }

const isTired = false
console.log(hasDriverLicense || hasGoodVision || isTired)

if(hasDriverLicense && hasGoodVision && !isTired){
    console.log('You can drive')
} else {
    console.log('You can not drive')
}

