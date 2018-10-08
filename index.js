class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    let endDateObj = new Date(endDate)
    let endTime = new Date(endDateObj - this.startDate)
    return new Date(endTime)
  }
}
