import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import './AdminDashboard.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const products = [
  { id: 1, name: 'Product 1', price: 99.99, stock: 10 },
  { id: 2, name: 'Product 2', price: 149.99, stock: 15 },
  { id: 3, name: 'Product 3', price: 199.99, stock: 5 },
];

const salesData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
  datasets: [
    {
      label: 'Sales',
      data: [300, 500, 200, 400, 600, 700, 300], // Y-axis data
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1, // For smooth lines
    },
  ],
};

const AdminDashboard = () => {
  const statistics = {
    userDistribution: 150,
    todaysSales: 350.0,
    totalCustomers: 200,
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>

      <div className="cards-container">
        <div className="card">
          <h3>User Distribution</h3>
          <p>{statistics.userDistribution} Users</p>
        </div>
        <div className="card">
          <h3>Today's Sales</h3>
          <p>${statistics.todaysSales.toFixed(2)}</p>
        </div>
        <div className="card">
          <h3>Total Customers</h3>
          <p>{statistics.totalCustomers} Customers</p>
        </div>
      </div>

      <div className="chart-container">
        <h2>Sales Chart</h2>
        <Line data={salesData} />
      </div>

      <div className="dashboard-section">
        <h2>Product Data</h2>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price.toFixed(2)}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
