/* 
Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] coordinates corresponding to the 
locations of his customers. He also uses an array of [x,y] as coordinates corresponding to the location where he parks his 
truck. Customers walk from their location to his truck, but Joe wants to minimize the total distance from his truck to his 
customers, so he's looking for a better place to park. Feature request: given a customer coordinate array, return an optimal 
taco truck location.
*/ 

// Random no generator function
let maxCust = 10 
let minCoordX = -50
let minCoordY = -50
let maxSizeX = 100
let maxSizeY = 100
function randNo(max) {
    return(Math.floor(Math.random() * (max + 1)))
}

// Generate random customer coordinates
let noCust = randNo(maxCust)
let allCust = []
let custX
let custY
for (i=0; i<noCust; i++) {
    custX = minCoordX + randNo(maxSizeX)
    custY = minCoordY + randNo(maxSizeY)
    allCust.push([custX, custY])
}
console.log('There are', noCust, 'customers. They are at:', allCust)

// Calculate optimal truck location 
function optimalLoc (allCust) {
    let xDist = 0
    let yDist = 0
    let xJoe
    let yJoe
    for (i=0; i<allCust.length; i++) {
        xDist = xDist + allCust[i][0]
        yDist = yDist + allCust[i][1]
    }
    xJoe = Math.floor(xDist/allCust.length)
    yJoe = Math.floor(yDist/allCust.length)
    return ([xJoe, yJoe])
}

console.log('The optimal taco truck location is', optimalLoc(allCust))