class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    let endYear = new Date(endDate)
    return endYear.getFullYear()-this.startDate.getFullYear()
  }
}
