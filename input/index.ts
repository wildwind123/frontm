import InputText from '#src/frontm/input/InputText.vue'
import InputAutocomplete from '#src/frontm/input/InputAutocomplete.vue'
import InputSelect from '#src/frontm/input/InputSelect.vue'

export const Input = {
  Text: InputText,
  AutoComplete: InputAutocomplete,
  Select: InputSelect,
}

export interface TAutoComplete {
  id: string | number
  name: string
}

export type TSelect = {
  id: number | string
  value: string
  disabled: boolean
}
