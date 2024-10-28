import React, { useState } from 'react';
import './Users.css';
import { Line } from 'react-chartjs-2';
// Register the necessary components
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
    LineController
  } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [300, 500, 200, 400, 600, 700, 300], 
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1, 
      },
    ],
  };

const invoices = [
  { id: 1, invoiceNo: 'INV001', status: 'Paid', amount: 150.0 },
  { id: 2, invoiceNo: 'INV002', status: 'Due', amount: 200.0 },
  { id: 3, invoiceNo: 'INV003', status: 'Paid', amount: 300.0 },
  { id: 4, invoiceNo: 'INV004', status: 'Due', amount: 100.0 },
];

const UsersComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [invoiceSearchTerm, setInvoiceSearchTerm] = useState('');

  const filteredInvoices = invoices.filter((invoice) =>
    invoice.invoiceNo.toLowerCase().includes(invoiceSearchTerm.toLowerCase())
  );

  return (
    <div className="users-component">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="sales-notifications-container">
      <div className="chart-container">
        <h2>Sales Chart</h2>
        <Line data={salesData} />
      </div>
        <div className="notification-card">
          <h3>Notifications</h3>
          <p>You have 5 new messages.</p>
        </div>
      </div>

      <div className="paid-invoices-container">
        <h3>Percentage of Paid Invoices</h3>
        <table>
          <thead>
            <tr>
              <th>Invoice No</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.invoiceNo}</td>
                <td>{invoice.status}</td>
                <td>${invoice.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="invoices-section">
        <h2>Invoices Section</h2>

        <div className="invoice-search-bar">
          <input
            type="text"
            placeholder="Search invoices..."
            value={invoiceSearchTerm}
            onChange={(e) => setInvoiceSearchTerm(e.target.value)}
          />
        </div>

        <div className="total-invoices-cards">
          <div className="card">
            <h3>Total Invoices</h3>
            <p>{invoices.length} Invoices</p>
          </div>
          <div className="card">
            <h3>Paid Invoices</h3>
            <p>{invoices.filter(inv => inv.status === 'Paid').length} Paid</p>
          </div>
          <div className="card">
            <h3>Due Invoices</h3>
            <p>{invoices.filter(inv => inv.status === 'Due').length} Due</p>
          </div>
        </div>

        <div className="invoices-table">
          <h3>Invoices Table</h3>
          <table>
            <thead>
              <tr>
                <th>Invoice No</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id}>
                  <td>{invoice.invoiceNo}</td>
                  <td>{invoice.status}</td>
                  <td>${invoice.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersComponent;
