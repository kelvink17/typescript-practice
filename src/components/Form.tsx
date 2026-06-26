import {  type ChangeEvent } from "react"
import { type FormEvent } from "react"
import type Tickets from "../type"
  type FormProps = {
    form: {
      title: string
      description: string
    }
    handleChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
    handleSubmit: (event: FormEvent<HTMLFormElement> ) => void
    
  }

export default function Form({form, handleChange, handleSubmit}: FormProps  ){
    return  (
    <div>
      <h1>My Ticket App</h1>
      <form action="submit" onSubmit={handleSubmit}>
      <input name="title" placeholder="name"  value={form.title} onChange={handleChange}/>
      <textarea name="description" value={form.description} onChange={handleChange} />
      <button> click</button> 
      </form>
      </div>
      )
}