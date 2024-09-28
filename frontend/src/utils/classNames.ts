export default function customClassNames(...args: any) {
  return args
    .reduce((acc: any, val: any) => {
      if (typeof val === 'string') {
        return acc.concat(val.split(' '))
      }
      return acc.concat(Object.values(val))
    }, [])
    .join(' ')
}
