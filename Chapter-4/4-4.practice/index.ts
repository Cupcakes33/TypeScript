{
  const obj = {
    name:'soo',
    age:20
  }

  console.log(getValue(obj,'name')) // soo

  function getValue<T>(obj:T, key:keyof T):T[keyof T]{
    return obj[key]
  }

  function getValue2<T, K extends keyof T>(obj:T, key:K):T[K]{
    return obj[key]
  }
}