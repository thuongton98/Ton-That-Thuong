interface WalletBalance {
    currency: string;
    amount: number;
    formatted?: string;
    blockchain?: string
  }
  interface Props {
    children: React.ReactElement
  }
  const WalletPage: React.FC<Props> = (props: Props) => {
    const { children, ...rest } = props;
    const balances = useWalletBalances();
    const prices = usePrices();
  
    const getPriority = (blockchain: string): number => {
      switch (blockchain) {
        case 'Osmosis':
          return 100
        case 'Ethereum':
          return 50
        case 'Arbitrum':
          return 30
        case 'Zilliqa':
          return 20
        case 'Neo':
          return 20
        default:
          return -99
      }
    }
  
    const sortedBalances = useMemo(() => {
      return balances?.reduce((acc: WalletBalance[], cur: WalletBalance) => {
        if (getPriority(cur?.blockchain || '') > -99 && cur.amount >0) {
          cur.formatted = cur.amount.toFixed()
          acc.push(cur)
        }
        return acc.sort((lhs, rhs) =>getPriority(rhs?.blockchain || '') - getPriority(lhs?.blockchain || ''))
      }, [])
    }, [balances]);
  
    const rows = sortedBalances.map((balance: WalletBalance, index: number) => {
      return (
        <WalletRow 
          className={classes.row}
          key={index}
          amount={balance.amount}
          usdValue={prices[balance.currency] * balance.amount}
          formattedAmount={balance.formatted}
        />
      )
    })
  
    return (
      <div {...rest}>
        {rows}
      </div>
    )
  }
  
  export default WalletPage
