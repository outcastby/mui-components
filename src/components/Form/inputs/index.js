import JSON from './JSON'
import Text from './Text'
import Select from './Select'
import File from './File'
import Checkbox from './Checkbox'
import DatePicker from './DatePicker'
import SmartJSON from './SmartJSON'

export default {
  select: Select,
  text: Text,
  integer: Text,
  float: Text,
  password: Text,
  json: JSON,
  smartJSON: SmartJSON,
  checkbox: Checkbox,
  datePicker: DatePicker,
  file: File,
}
