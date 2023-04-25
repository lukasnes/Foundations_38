 const {
    formatTitle, 
    shortenBio, 
    convertLength
} = require('./public/utils')

let testData = {
    id: 1,
    firstName: "Patten",
    lastName: "Goforth",
    bio: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    datetime: "2022-03-14 8:00:00",
    title: "nulla ac",
    length: 65,
    floor: 5,
    roomNumber: 3
  }

describe('Tests for Format Title function', () => {
  let testCase = formatTitle(testData.title)

  test('Check if function returns a string', () => {
    expect(typeof testCase).toEqual('string')
  })

  test('Check if function returns capitalized values', () => {
    expect(testCase).toEqual('Nulla Ac')
  })
})

describe('Tests for shorten bio function', () => {
  let testCase = shortenBio(testData.bio)

  test('New bio contains "About the Speaker" tagline', () => {
    let testArr = testCase.split(':')
    expect(testArr[0]).toBe('About the Speaker')
  })
})

describe('Tests for Convert Length function', () => {
  let testCase = convertLength(345) // 0x001
  let copyTestCase = testCase // 0x001
  let actualCopy = testCase.slice(0)

  test('copyTestCase is a reference', () => {
    expect(copyTestCase).toBe(testCase)
  })
  test('actualCopy is a copy, not a reference', () => {
    expect(actualCopy).toBe(testCase)
  })
 
  test('Check if function returns an array', () => {
    expect(typeof testCase).toBe('object')
  })

  test('Check if function returns correct values', () => {
    expect(testCase).toEqual([5,45])
  })
})