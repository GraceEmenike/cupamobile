const data = {
    summary: [
        {
            name: 'Goods Sold',
            value: '53'
        },
        {
            name: 'Revenue',
            value: '$3500'
        },
        {
            name: 'Customers',
            value: '512'
        },
        {
            name: 'Orders',
            value: '23'
        },
    ]
}

const datatoo = {
    summary: [
        {
            name: 'Goods Sold',
            value: '531'
        },
        {
            name: 'Revenue',
            value: '$3500'
        },
        {
            name: 'Customers',
            value: '512'
        },
        {
            name: 'Orders',
            value: '239'
        },
        {
            name: 'Goods Sold1',
            value: '53'
        },
        {
            name: 'Revenue2',
            value: '$3500'
        },
        {
            name: 'Customers3',
            value: '512'
        },
        {
            name: 'Orders4',
            value: '236'
        },
        {
            name: 'Orders5',
            value: '234'
        },
        {
            name: 'Goods Sold6',
            value: '530'
        },
        {
            name: 'Revenue7',
            value: '$3510'
        },
        {
            name: 'Customers8',
            value: '512'
        },
        {
            name: 'Orders9',
            value: '23'
        },
    ]
}

const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Average Daily Customers"] // optional
  };

export {data, datatoo, chartData }