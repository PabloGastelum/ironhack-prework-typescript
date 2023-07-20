type DataResult = { status: string; data: number[] };

function fetchData(url: string): Promise<DataResult> {
  return new Promise<DataResult>((res, rej) => {
    setTimeout(() => {
      if (url === "error") rej("failed to fetch");

      res({ data: [1, 2, 3, 4, 5], status: "success" });
    }, 2000);
  });
}

function processData(data: number[]): Promise<number[]> {
  return new Promise<number[]>((res) => {
    setTimeout(() => {
      res(data.map((num) => num * 2));
    }, 1000);
  });
}

function displayData(data: number[]): Promise<void> {
  return new Promise<void>((res) => {
    setTimeout(() => {
      console.log(data);
      res();
    }, 1000);
  });
}

async function fetchAndProcessData(url: string) {
  try {
    const { data } = await fetchData(url);
    const processedData = await processData(data);
    await displayData(processedData);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchAndProcessData("success");
fetchAndProcessData("error");
