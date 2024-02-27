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
