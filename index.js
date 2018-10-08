class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    let endDateObj = new Date(endDate)
    return endDateObj.getYear - this.startDate.getYear
  }
}
