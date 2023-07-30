export function debounce(
  fn: (...args: any) => void,
  ms: number
): (...args: any) => void {
  let timer: ReturnType<typeof setTimeout>

  return function (...args: any) {
    function exec() {
      clearTimeout(timer)
      fn(args)
    }

    clearTimeout(timer)
    timer = setTimeout(exec, ms)
  }
}
