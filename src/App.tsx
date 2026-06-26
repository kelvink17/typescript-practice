import {  useState, type ChangeEvent } from "react"
interface Ticket{
  title: string,
  description:string
}
export default function App(){
  const [form, setForm] = useState({
    title:"",
    description:""
  })
  const [tickets, setTicket] = useState<Ticket[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const {value, name} = event.target
    setForm({...form, [name]: value})
  }
  const handleSubmit = (event: any) => {
    event.preventDefault()
    const newTicket :Ticket = {
      title: form.title,
      description: form.description
    }
    setTicket([
      ...tickets,
      newTicket

    ])
    setForm({
      title:"",
      description:""
    })
  }
const handleDelete = (id: number) => {

  setTicket((oldTicket)=>{
    return oldTicket.filter((_, index)=> index !== id)
    

  })
}
  return(
    <div>
      <h1>My Ticket App</h1>
      <form action="submit" onSubmit={handleSubmit}>
      <input name="title" placeholder="name"  value={form.title} onChange={handleChange}/>
      <textarea name="description" value={form.description} onChange={handleChange} />
      <button> click</button> 
      </form>
      {tickets.map ((item, index)=>{
        return(
        <article key={index}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <button>Update</button>
          <button onClick={()=> handleDelete(index)}>Delete</button>
        </article>
        )
      })}
    </div>
  )
}