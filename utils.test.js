const {sum, createuser, findInArray, approximateDivision, parseJSON} = require('./utils')

beforeAll(() => {
    jest.useFakeTimers().setSystemTime(new Date('2026-07-02'))
});

afterAll(() => {
    jest.useRealTimers()
});

test('toBe passing interview', () => {
    expect(sum(1, 2)).toBe(3)
});

test('toBe failing interview', () => {
    expect(sum(1, 2)).toBe(3)
});

test('toEqual passing interview', () => {
    const expected = { name: 'Sheila', age: 25, createdAt: new Date('2026-07-02') }
    expect(createuser('Sheila', 25)).toEqual(expected)
});

test('toEqual failing interview', () => {
    const expected = { name: 'Sheila', age: 25, createdAt: new Date('2026-07-02') }
    expect(createuser('Sheila', 25)).toEqual(expected)
});

test('toStrictEqual passing interview', () => {
    expect({ id: 1 }).toStrictEqual({ id: 1 })
});

test('toStrictEqual failing interview', () => {
    expect({ id: 1 }).toStrictEqual({ id: 1 })
});

test('.not negation passing interview', () => {
    expect(sum(1, 2)).not.toBe(4)
});

test('.not negation failing interview', () => {
    expect(sum(1, 2)).not.toBe(4)
});

test('not toBeNull passing interview', () => {
    expect(sum(1, 2)).not.toBeNull()
});

test('not toMatch failing interview', () => {
    const user = createuser('Sheila', 25)
    expect(user.name).not.toMatch(/Shelly/)
});

test('not toContain passing interview', () => {
    expect([1, 2, 3]).not.toContain(4)
});

test('not toBeNull failing interview', () => {
    expect(5).not.toBeNull()
});

test('toBeNull passing interview', () => {
    expect(null).toBeNull()
});

test('toBeNull failing interview', () => {
    expect(null).toBeNull()
});

test('toBeUndefined passing interview', () => {
    expect(undefined).toBeUndefined()
});

test('toBeUndefined failing interview', () => {
    expect(undefined).toBeUndefined()
});

test('toBeDefined passing interview', () => {
    expect(sum(1, 2)).toBeDefined()
});

test('toBeDefined failing interview', () => {
    expect(sum(1, 2)).toBeDefined()
});

test('toBeTruthy passing interview', () => {
    expect(findInArray([1, 2, 3], 2)).toBeTruthy()
});

test('toBeTruthy failing interview', () => {
    expect(findInArray([1, 2, 3], 2)).toBeTruthy()
});

test('toBeFalsy passing interview', () => {
    expect(findInArray([1, 2, 3], 5)).toBeFalsy()
});

test('toBeFalsy failing interview', () => {
    expect(findInArray([1, 2, 3], 5)).toBeFalsy()
});

test('toBeGreaterThan passing interview', () => {
    expect(sum(5, 5)).toBeGreaterThan(8)
});

test('toBeGreaterThan failing interview', () => {
    expect(sum(5, 5)).toBeGreaterThan(8)
});

test('toBeGreaterThanOrEqual passing interview', () => {
    expect(sum(5, 5)).toBeGreaterThanOrEqual(10)
});

test('toBeGreaterThanOrEqual failing interview', () => {
    expect(sum(5, 5)).toBeGreaterThanOrEqual(10)
});

test('toBeLessThan passing interview', () => {
    expect(sum(5, 5)).toBeLessThan(12)
});

test('toBeLessThan failing interview', () => {
    expect(sum(5, 5)).toBeLessThan(12)
});

test('toBeLessThanOrEqual passing interview', () => {
    expect(sum(5, 5)).toBeLessThanOrEqual(10)
});

test('toBeLessThanOrEqual failing interview', () => {
    expect(sum(5, 5)).toBeLessThanOrEqual(10)
});

test('toBeCloseTo passing interview', () => {
    expect(approximateDivision(11, 2)).toBeCloseTo(5.5)
});

test('toBeCloseTo failing interview', () => {
    expect(approximateDivision(11, 2)).toBeCloseTo(5.5)
});

test('toBeCloseTo passing floating point interview',() => {
    expect(approximateDivision(0.3, 0.1)).toBeCloseTo(3)
});

test('toBeCloseTo failing floating error interview',() => {
    expect(approximateDivision(0.3, 0.1)).toBeCloseTo(3)
});

test('toMatch passing regex interview', () => {
    const user = createuser('Sheila', 25)
    expect(user.name).toMatch(/She/)
});

test('toMatch passing json substring interview', () => {
    const user = createuser('Sheila', 25)
    const jsonstring = JSON.stringify(user)
    expect(jsonstring).toMatch('"name":"Sheila"')
});

test(' not toMatch failing regex interview', () => {
    const user = createuser('Sheila', 25)
    expect(user.name).not.toMatch(/Shelly/)
});

test('tocontain passing array interview', () => {
    const scores = [85, 90, 78, 92]
    expect(scores).toContain(90)
});

test('tocontain passing set interview', () => {
    const uniqueRoles = new Set(['admin', 'user', 'moderator'])
    expect(uniqueRoles).toContain('admin')
});

test('not tocontain failing interview', () => {
    const items = ['apple', 'banana', 'orange']
    expect(items).not.toContain('berries')
});

test('toThrow passing interview', () => {
    expect(() => parseJSON("")).toThrow()
});

test('toThrow failing interview', () => {
    expect(() => parseJSON('{status: "ok"}')).toThrow()
});