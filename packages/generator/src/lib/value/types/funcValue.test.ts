import { funcValue } from './funcValue'
import { numberValue } from './numberValue'
import { objectValue } from './objectValue'
import { stringValue } from './stringValue'

describe('funcValue', () => {
  test('with one argument', () => {
    const name = 'myFunction'
    const arg = numberValue(1)

    const expected = 'myFunction(1)'
    const result = funcValue(name, [arg]).render()
    expect(result).toBe(expected)
  })

  test('with many arguments', () => {
    const name = 'myFunction'
    const args = [
      numberValue(1),
      objectValue([['key', stringValue('value')]]),
      stringValue('str'),
    ]

    const expected = "myFunction(1, { key: 'value' }, 'str')"
    const result = funcValue(name, args).render()
    expect(result).toBe(expected)
  })

  test('without arguments', () => {
    const name = 'myFunction'

    const expected = 'myFunction()'
    const result = funcValue(name).render()
    expect(result).toBe(expected)
  })
})