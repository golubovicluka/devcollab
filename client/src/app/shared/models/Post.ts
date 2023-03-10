export interface Post {
  id: number,
  title: string,
  createdBy: string,
  message: string,
  createdAt: any,
  likes: number, 
  comments?: any[]
}
