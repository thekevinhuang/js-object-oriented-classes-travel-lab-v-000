class Driver {
  constructor (name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endDate){
    let endDateObj = new Date(endDate)
    console.error('stop')
    return endDateObj.year - this.startDate.year
  }
}
