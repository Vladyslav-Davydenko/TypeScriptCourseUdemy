export { }

type Employee = {
    name: string,
    position: string
    age: number,
    salary: {
        amount: any,
        bonus: number
    }
}

type MirrorMapType<T> = {
    [key in keyof T]: T[key]
}


type MyPick<T, K extends keyof T> = {
    [key in K]: T[key]
}

const nameAndAge: MyPick<Employee, 'name' | 'age'> = {
    name: 'SomeName',
    age: 30
}

type MyReadOnly<T> = {
   readonly [key in keyof T]: T[key]
}




type DeepReadonly<T> = keyof T extends never ? T :

{
    readonly [key in keyof T]: DeepReadonly<T[key]>
 }

 type ReadOnlyEmpl = DeepReadonly<Employee>


 type TupleToObject<T extends readonly string[]> = {
    [key in T[number]]: key
  }

  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

  type result = TupleToObject<typeof tuple>

  type First<T extends any[]> = T extends [] ? never : T[0]

  type arr1 = ['a', 'b', 'c']
  type arr2 = [() => 123, { a: string }]

  type head1 = First<arr1> // expected to be 'a'
  type head2 = First<arr2> // expected to be 3













