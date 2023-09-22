class Job {
  private role: string
  private salary: number

  constructor(role: string, salary: number) {
    this.role = role
    this.salary = salary
  }
  // геттер поля salary
  getSalary(): number {
    return this.salary
  }
  //публичный метод work, который принимает в качестве аргумента строку personName
  public work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this.role}`)
  }
}

class Person {
  private job: Job | null
  private name: string

  constructor(name: string) {
    this.name = name
    this.job = null
  }
  // сеттер для поля Job
  setJob(job: Job): void {
    this.job = job
  }
  //метод getSalary, который возвращает текущую зарплату сотрудника
  getSalary(): number {
    if (this.job) {
      return this.job.getSalary()
    } else {
      return 0
    }
  }
  //метод work(), который принуждает выполнить текущую работу по профессии
  work(): void {
    if (this.job) {
      this.job.work(this.name)
    } else {
      console.log(`${this.name} не имеет работы.`)
    }
  }
}
//создаем несколько объектов типа Job
const job1 = new Job("Тянуть", 1000)
const job2 = new Job(" Толкать", 1200)
const job3 = new Job("Убирать", 900)

//создаем несколько экземпляров класса Person и назначаем им имя
const person1 = new Person("Александр")
const person2 = new Person("Мария")
const person3 = new Person("Алексей")

// назначаем им профессии
person1.setJob(job1)
person2.setJob(job2)
person3.setJob(job3)

//сотрудники работают
// person1.work() // Александр работает как Тянуть
// person2.work() // Мария работает как Толкать
// person3.work() //  Алексей работает как Убирать

//переквалификация сотрудников
person1.setJob(job3)
person2.setJob(job1)
person3.setJob(job2)

person1.work() //Александр сейчас работает как Убирать
person2.work() //Мария сейчас работает как Тянуть
person3.work() //Алексей сейчас работает как  Толкать

// проверяем зарплату
// console.log(`${person1.getSalary()} рублей`)
// console.log(`${person2.getSalary()} рублей`)
// console.log(`${person3.getSalary()} рублей`)
