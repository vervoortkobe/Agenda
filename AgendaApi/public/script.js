const parent = document.getElementById("posts");
fetch("http://localhost:3000/api/dates")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((item) => {
      const row = document.createElement("tr");
      const tableBody = document.querySelector("tbody");
      row.className =
        "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600";

      const dateCell = document.createElement("th");
      dateCell.scope = "row";
      dateCell.className =
        "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white";
      dateCell.textContent = parseDate(item.date);

      const hourlyDataCell = document.createElement("td");
      hourlyDataCell.className = "px-6 py-4";
      hourlyDataCell.textContent = `Hour: ${item.hourlyData.hour}, Data: ${item.hourlyData.data}`;

      row.appendChild(dateCell);
      row.appendChild(hourlyDataCell);

      tableBody.appendChild(row);
    });
  })
  .catch((err) => {
    console.log(err);
  });

const parseDate = (date) => {
  if (!isNaN(Date.parse(date))) {
    const parsedDate = new Date(date);
    const day = parsedDate.getDate().toString().padStart(2, "0");
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
    const year = parsedDate.getFullYear();
    return `${day}-${month}-${year}`;
  }
  return date;
};
