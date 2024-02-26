export const dummyTotalOrders: { data: { data: { date: string; value: number }[] } } = {
    data: {
      data: [
        { date: "2022-10-01", value: 100 },
        { date: "2022-11-01", value: 150 },
        { date: "2022-12-01", value: 200 },
        { date: "2023-01-01", value: 180 },
        { date: "2023-02-01", value: 250 },
        { date: "2023-03-01", value: 120 },
        { date: "2023-04-01", value: 280 },
        { date: "2023-05-01", value: 90 },
        { date: "2023-06-01", value: 220 },
        { date: "2023-07-01", value: 170 },
        { date: "2023-08-01", value: 200 },
        { date: "2023-09-01", value: 160 },
        { date: "2023-10-01", value: 130 },
        { date: "2023-11-01", value: 190 },
        { date: "2023-12-01", value: 210 }
      ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }
  };
  
  export const dummyTotalOrdersPrev: { data: { data: { date: string; value: number }[] } } = {
    data: {
      data: [
        { date: "2021-10-01", value: 110 },
        { date: "2021-11-01", value: 180 },
        { date: "2021-12-01", value: 220 },
        { date: "2022-01-01", value: 140 },
        { date: "2022-02-01", value: 260 },
        { date: "2022-03-01", value: 170 },
        { date: "2022-04-01", value: 250 },
        { date: "2022-05-01", value: 120 },
        { date: "2022-06-01", value: 200 },
        { date: "2022-07-01", value: 190 },
        { date: "2022-08-01", value: 150 },
        { date: "2022-09-01", value: 230 },
        { date: "2022-10-01", value: 130 },
        { date: "2022-11-01", value: 240 },
        { date: "2022-12-01", value: 180 }
      ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }
  };
  