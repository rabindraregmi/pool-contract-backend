import { gql } from "@apollo/client/core";
import ApolloService from "./apollo.service";
import { IBorrow, IBorrowResponse, IDepositResponse, IGraphResponse, ITrendResponse } from "@/interfaces/misc.interface";

class PoolService  {

  private client = ApolloService.getInstance().getClient()


  private groupByBlock = (trend: ITrendResponse) => {
    const groupedTrend = {}

    trend.borrows.forEach((trendData, index) => {
      if (!groupedTrend[trendData.blockNumber]) {
        groupedTrend[trendData.blockNumber] = { borrows: [], deposits: [] };
      }
      groupedTrend[trendData.blockNumber].borrows.push(trendData);
    })


    trend.deposits.forEach((trendData, index) => {
      if (!groupedTrend[trendData.blockNumber]) {
        groupedTrend[trendData.blockNumber] = { borrows: [], deposits: [] };
      }
      groupedTrend[trendData.blockNumber].deposits.push(trendData);
    })

    return groupedTrend;


  }
 
  public fetchUserBorrowList = async (walletAddress: string) => {

    const {data} = await this.client.query<IBorrowResponse>({
      query: gql`
        query UserBorrows($walletAddress: String!) {
        borrows(where: {user: $walletAddress}) {
          tokenAmount
          user
          Pool_id
          blockNumber
          chainId
          transactionHash

        }
      }
      `,
      variables: {
        walletAddress
      }
    })
    return data.borrows
  }


  public fetchAllBorrowList = async () => {
    const {data} = await this.client.query<IBorrowResponse>({
      query: gql`
      query AllBorrows {
        borrows {
          tokenAmount,
          blockNumber,
          user
          Pool_id
          chainId
          transactionHash
        }
      }
      `
    })

    return data.borrows
  }


  public fetchUserDeposits = async (walletAddress: string) => {
    const {data} = await this.client.query<IDepositResponse>({
      query: gql`
      query UserDeposits ($walletAddress: String!) {
        deposits (where: {user: $walletAddress}){
          tokenAmount,
          user,
          Pool_id,
          blockNumber
          chainId
          transactionHash
        }
      }`,
      variables: {walletAddress}
    })


    return data.deposits
  }


  public fetchAllDeposits = async () => {
    const {data} = await this.client.query<IDepositResponse> ({
      query: gql`
        query UserDeposits {
          deposits {
            user
            blockNumber
            tokenAmount
            Pool_id
            chainId
            transactionHash
          } 
        }`
    })

    return data.deposits
  }

  public fetchUserTrend = async (walletAddress: string) => {
    const {data} = await this.client.query<ITrendResponse> ({
      query: gql`
        query UserTrend ($walletAddress: String!) {
          deposits (where: {user: $walletAddress}) {
            tokenAmount,
            user,
            Pool_id,
            blockNumber
            chainId
          }
          borrows (where: {user: $walletAddress}) {
            tokenAmount,
            user,
            Pool_id,
            blockNumber
            chainId
          }
        }
      `,
      variables: {walletAddress}
    })

    return this.groupByBlock(data);
  }


  public fetchSystemTrend = async () => {
    const {data} = await this.client.query<ITrendResponse> ({
      query: gql`
        query SystemTrend {
          deposits {
            tokenAmount,
            user,
            Pool_id,
            blockNumber
            chainId
          }
          borrows {
            tokenAmount,
            user,
            Pool_id,
            blockNumber
            chainId
          }
        }
      `
    })

    return this.groupByBlock(data);
  }
}

export default PoolService;
