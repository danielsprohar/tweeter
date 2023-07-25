export interface FormControl {
  id: string
  type: string
  value: string | number | boolean | Date | null
  placeholder: string
  name?: string
  ariaLabel?: string
}