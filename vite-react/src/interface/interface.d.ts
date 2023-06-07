interface Board{
  name:string
  title:string
  content:string
  _id?:string
  __v?:any
}

interface MongoUser{
  name:string
  email:string
  password:string
  lastname?:string
  role:number
  image?:string
  token?:string
  tokenExp?:string
  _id?:string
  __v?:any
}