// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
    constructor(ages) {
        this.ages = ages
    }

    count() {
        return this.ages.length
    }

    sum() {
        let total = 0
        this.ages.forEach((age) => (total += age))
        return total
    }

    min() {
        let min = 1000000
        for (var i = 0; i < this.ages.length; i++) {
            if (this.ages[i] < min) {
                min = this.ages[i]
            }
        }
        return min
    }

    max() {
        let max = 0
        for (var i = 0; i < this.ages.length; i++) {
            if(this.ages[i] > max) {
                max = this.ages[i]
            }
        }
        return max
    }

    range() {
        return (this.max() - this.min())
    }

    mean() {
        return (this.sum() / this.ages.length)
    }

    median() {
        let medianIndex = 0
        if (this.ages.length % 2 == 0) {
            medianIndex = this.ages.length / 2
        } else {
            medianIndex = (this.ages.length + 1) / 2
        }

        this.ages.sort(function(a, b){return a - b})
        return this.ages[medianIndex]
    }

    mode() {
        var ageObjects = []
        for (var i = 0; i < this.ages.length; i++) {
            var ageVar = this.ages[i]
            let exist = false
            for (var j = 0; j < ageObjects.length; j++) {
                if (ageObjects[j].age == ageVar) {
                    ageObjects[j].count++
                    exist = true
                    break
                }
            }
            if (!exist) {
                ageObjects.push({
                    age: ageVar,
                    count: 1
                })
            }
        }
        var mode = 0
        var modeCount = 0

        ageObjects.forEach((ageObject) => {
            if (ageObject.count > modeCount) {
                mode = ageObject.age
                modeCount = ageObject.count
            }
        })

        return (mode, modeCount)
    }

    var() {
        let mean = this.mean()
        let deviation = this.ages.map((age) => (age-mean))
        let deviationSquare = deviation.map((deviation) => (Math.pow(deviation, 2)))
        let sum = 0
        deviationSquare.forEach((square) => (sum += square))
        let variance = sum / (this.ages.length - 1)

        return variance
    }

    std() {
        return Math.sqrt(this.var())
    }

    freqDist() {
        var ageObjects = []
        for (var i = 0; i < this.ages.length; i++) {
            var ageVar = this.ages[i]
            let exist = false
            for (var j = 0; j < ageObjects.length; j++) {
                if (ageObjects[j].age == ageVar) {
                    ageObjects[j].count++
                    exist = true
                    break
                }
            }
            if (!exist) {
                ageObjects.push({
                    age: ageVar,
                    count: 1
                })
            }
        }

        var freqDist = []

        ageObjects.forEach((ageObject) => {
            let frequency = ageObject.count / this.ages.length * 100
            freqDist.push((frequency, ageObject))
        })

        return freqDist
    }
}

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
