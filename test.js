import test from 'ava'
import bear from './'

test('main', t => {
  const bears = bear()
  t.true(Array.isArray(bears))
})

test('count', t => {
  const bears = bear({count: 3})
  t.is(bears.length, 3)
})
