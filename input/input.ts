import InputText from '#src/frontm/input/InputText.vue'
import InputAutocomplete from '#src/frontm/input/InputAutocomplete.vue'

export const Input = {
  Text: InputText,
  AutoComplete: InputAutocomplete,
}

export interface TAutoComplete {
  id: string | number
  name: string
}
