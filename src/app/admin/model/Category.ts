
export interface ICategoryTable {
  pageNumber: number,
  pageSize: number,
  totalNumberOfRecords: number,
  totalNumberOfPages: number,
  data: ICategory[]
}

export interface ICategory {
  id: number,
  name: string,
  creationDate: string,
  modificationDate: string,
}

