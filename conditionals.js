let date = new Date()
let day = date.getDay()
let time = date.getHours()

function finishHomework(day, time) {
    let rewards = ["latte", "hot chocolate", "ice cream", "sleep"]
    let reward = rewards[0]

    if (time > 22) {
        reward = rewards[3]
    } else if (time >= 15) {
        let flavor = "vanilla"
        if (day == 3) {
            flavor = "strawberry"
        }
        let iceCream = flavor + " " + rewards[2]
        if (time <= 18) {
            let selector = Math.floor(Math.random()*3)
            let rewardsOdd = [rewards[1], "tea", "cake"]
            reward = rewardsOdd[selector]
            if (time%2 === 0) {
                let rewardsEven = [iceCream, "cookies", "candy"]
                reward = rewardsEven[selector]
            }
        }
        reward = iceCream
    } else if (time >= 10) {
        reward = rewards[1]
    }
    return reward
}

console.log("I get", finishHomework(day, time))