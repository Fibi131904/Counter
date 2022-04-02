import { div, mult, sub, sum } from "./tasks"

test('sum of two number',()=>{
    //1.тестовые данные
    const a: number= 10
    const b: number= 20
   //2 выполнение тестируемого кода
  const result= sum(a,b)
  //3 проверка результатов
  expect(result).toBe(30)
})

test ('sub of two number',()=>{
    const a= 50
    const b= 30
    const result = sub(a,b)
    expect(result).toBe(20)
})
test('multiplay of two numbers',()=>{
    const a=100
    const b= 2
    const result= mult(a,b)
    expect(result).toBe(200)
})
test ('div of two numbers',()=>{
    const a=100
    const b= 50
    const result= div(a,b)
    expect(result).toBe(2)
})