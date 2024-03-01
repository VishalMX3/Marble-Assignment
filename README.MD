# Marble-Assignment-Documentation

<div align="center" style="margin: 30px;">
    <a href="https://refine.dev">
    <img alt="refine logo" src="https://firebasestorage.googleapis.com/v0/b/e-shop-74124.appspot.com/o/dashboard.png?alt=media&token=e0aef0ae-38e0-4b0a-b040-09431c630a1d">
    </a>
</div>
<br/>

This [Refine](https://github.com/refinedev/refine) project was generated with [create refine-app](https://github.com/refinedev/refine/tree/master/packages/create-refine-app).

### Running the development server.

```bash
    npm run dev
```

### Building for production.

```bash
    npm run build
```

### Running the production server.

```bash
    npm run start
```

## My Approach

Refine was new to me, so I started by reading its [guide](https://gomarble-dot-yamm-track.appspot.com/25g97UkIjPoQAT2pes4b8Vu2aDIGT5M26yTSAXi92q85JDGTPjQE3wTtbo_1Rtn_rssmL2XfwQdTsZRMsD7-mn8PuQsnkpEDtq5yGZcTWNzfBsLbpZMSPQwUh-vxMVENBC5mv4b9OaSB7mmffMM6T9vavv6ilhaMb3oCvHU7G2-VQXJNCZm-DFdX736go5rVDIWhTKQ8WmcsDEk2bpBWuAPkoss-ROp8p).✨

I built the React dashboard and admin panel with Refine and daisyUI along with the guide. This helped me understand the working and syntax of Refine.

## Generating Mock Data →

Written a function `generateMockData` in `mockData.ts` file which takes in `minValue`, `maxValue`, `startDate` and `endDate` (in **YYYY-MM-DD** format) - as parameters to generate mock data between the start Date and end date with values ranging between `minValue` and `maxValue`.

```tsx
interface DataObject {
  date: string;
  value: number;
}

// Function to generate random value between min and max (inclusive)
function getRandomValue(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate mock data for conversion rate
export function generateMockData(
  minValue: number,
  maxValue: number,
  startDate: Date,
  endDate: Date
): { data: DataObject[] } {
  const mockData: { data: DataObject[] } = { data: [] };

  // Loop through each day from start to end date
  for (
    let date: Date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    // Generate random value for the day
    const value: number = getRandomValue(minValue, maxValue);

    // Add date and value to the mockData
    mockData.data.push({
      date: new Date(date).toISOString(),
      value: value,
    });
  }

  return mockData;
}
```

We can now use the below code in other components to get the required data:

```tsx
import { generateMockData } from "../../mockData";

const mockData = generateMockData(
  1,
  50,
  new Date("2023-01-01"),
  new Date("2023-12-31")
);
console.log(JSON.stringify(mockData, null, 2));
```

**Later, the hard coded dates could be replaced by user chosen dates, to write the logic for date picker object.**

`
