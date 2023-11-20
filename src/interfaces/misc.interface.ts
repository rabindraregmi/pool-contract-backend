export interface IGraphResponse <T> {
    data: T 
}


export interface IBorrow{
    tokenAmount: string,
    blockNumber: string,
    user: string,
    Pool_id: string
}

export interface IBorrowResponse {
    borrows: IBorrow[]
}

export interface IDeposits extends IBorrow{}


export interface IDepositResponse {
    deposits: IDeposits[]
}

export interface ITrendResponse extends IBorrowResponse, IDepositResponse {}