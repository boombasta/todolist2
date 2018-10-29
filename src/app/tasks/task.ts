export class Task {
  constructor(
    public title: string,
    public createdate: string = Date.now().toString(),
    public deadlinedate: string,
    public status: string,
  )
  {}
}
