

document.addEventListener("DOMContentLoaded", function () {
    // Actualizar el balance actual
    const balanceElement = document.querySelector("main h3 + p");
    balanceElement.textContent = `$${balance.toFixed(2)}`;

    // Actualizar la tabla de ingresos
    const ingresosTable = document.querySelector("main table:first-of-type tbody");
    actualizarTabla(ingresosTable, fuenteDeIngresos, "Fuente de Ingresos");

    // Actualizar la tabla de gastos
    const gastosTable = document.querySelector("main table:last-of-type tbody");
    actualizarTabla(gastosTable, objCategoriasGastos, "Gastos Mensuales");
});

// Actualizar las tablas
function actualizarTabla(tableElement, data, header) {
    // Limpiar contenido actual de la tabla
    tableElement.innerHTML = "";

    // Agregar fila de encabezado
    const headerRow = document.createElement("tr");
    const headerCell1 = document.createElement("th");
    headerCell1.textContent = header;
    const headerCell2 = document.createElement("th");
    headerCell2.textContent = "Cantidad";
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    tableElement.appendChild(headerRow);

    // Agregar filas de datos
    for (const [key, value] of Object.entries(data)) {
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        cell1.textContent = key;
        const cell2 = document.createElement("td");
        cell2.textContent = `$${value.toFixed(2)}`;
        row.appendChild(cell1);
        row.appendChild(cell2);
        tableElement.appendChild(row);
    }

    // Agregar fila de total
    const totalRow = document.createElement("tr");
    totalRow.classList.add("total");
    const totalCell1 = document.createElement("td");
    totalCell1.textContent = "TOTAL:";
    const totalCell2 = document.createElement("td");
    totalCell2.textContent = `$${calcularTotal(data).toFixed(2)}`;
    totalRow.appendChild(totalCell1);
    totalRow.appendChild(totalCell2);
    tableElement.appendChild(totalRow);
}

// Calcular el total de ingresos o gastos
function calcularTotal(data) {
    let total = 0;
    for (const value of Object.values(data)) {
        total += value;
    }
    return total;
}