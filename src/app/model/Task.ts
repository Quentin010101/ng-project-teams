import { Note } from "./Note"
import { Person } from "./Person"
import { State } from "./State"
import { Tag } from "./Tag"

export class Task{
  task_id!: number
  date_creation!: number
  date_modification!: number
  date_echeance!: number
  title!: string
  description!: string
  notes!: Note[]
  state!: State
  person!: Person
  persons!: Person[]
  tags!: Tag[]
}